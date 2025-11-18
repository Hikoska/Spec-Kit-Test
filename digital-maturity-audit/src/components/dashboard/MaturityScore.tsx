"use client"

import { Progress } from '@/components/ui/progress'
import type { InterviewResponse } from '@/types/interview'
import { useMaturityScore } from '@/hooks/useMaturityScore'

type Props = {
  responses: InterviewResponse[]
}

export default function MaturityScore({ responses }: Props) {
  const { scorecard } = useMaturityScore(responses)

  return (
    <div className="space-y-6 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <div>
        <p className="text-sm text-slate-500">Overall score</p>
        <p className="text-4xl font-semibold text-slate-900">{scorecard.overall}</p>
      </div>
      <Progress value={scorecard.overall} />
      <div className="grid gap-4 md:grid-cols-2">
        {Object.entries(scorecard.dimensions).map(([dimension, { score, weight }]) => (
          <div key={dimension} className="rounded-lg border border-slate-100 p-3">
            <div className="flex items-center justify-between text-sm text-slate-500">
              <p className="font-medium text-slate-800">{dimension.toUpperCase()}</p>
              <span>{(weight * 100).toFixed(0)}%</span>
            </div>
            <Progress value={score} className="mt-2" />
          </div>
        ))}
      </div>
    </div>
  )
}

