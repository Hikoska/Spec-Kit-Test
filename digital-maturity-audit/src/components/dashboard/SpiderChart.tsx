"use client"

import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts'
import type { InterviewResponse } from '@/types/interview'
import { useMaturityScore } from '@/hooks/useMaturityScore'

type Props = {
  responses: InterviewResponse[]
}

export default function SpiderChart({ responses }: Props) {
  const { scorecard } = useMaturityScore(responses)

  const data = Object.entries(scorecard.dimensions).map(([dimension, { score }]) => ({
    dimension,
    score,
  }))

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <p className="text-sm font-medium text-slate-800">Dimension distribution</p>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#CBD5F5" />
            <PolarAngleAxis dataKey="dimension" stroke="#475467" />
            <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#94A3B8" />
            <Radar
              name="Score"
              dataKey="score"
              stroke="#6366f1"
              fill="#6366f1"
              fillOpacity={0.4}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

