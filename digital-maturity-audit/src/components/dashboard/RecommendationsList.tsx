"use client"

import { getRecommendations } from '@/lib/ai/researcher'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import type { MaturityDimensionKey } from '@/lib/ai/framework'

type Props = {
  focusDimensions: MaturityDimensionKey[]
}

export default function RecommendationsList({ focusDimensions }: Props) {
  const recommendations = getRecommendations(focusDimensions)

  return (
    <Card>
      <CardHeader>
        <CardTitle>AI Recommendations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {recommendations.map((recommendation) => (
          <div key={recommendation.id} className="rounded-lg border border-slate-100 p-4">
            <p className="text-sm font-semibold text-slate-900">{recommendation.title}</p>
            <p className="text-xs text-slate-500">{recommendation.category}</p>
            <p className="mt-2 text-sm text-slate-600">{recommendation.summary}</p>
            <p className="mt-3 text-xs uppercase text-slate-500">
              Impact: {recommendation.impact} • Effort: {recommendation.effort}
            </p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

