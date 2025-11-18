import type { AnalysisInsight } from './analyzer'
import type { MaturityDimensionKey } from './framework'
import { MATURITY_FRAMEWORK } from './framework'

export type MaturityScorecard = {
  overall: number
  dimensions: Record<
    MaturityDimensionKey,
    {
      score: number
      weight: number
    }
  >
}

export function calculateMaturityScore(
  insights: AnalysisInsight[]
): MaturityScorecard {
  const dimensionScores = insights.reduce<
    MaturityScorecard['dimensions']
  >((acc, insight) => {
    const weight = MATURITY_FRAMEWORK[insight.dimension].weight
    const sentimentValue =
      insight.sentiment === 'positive'
        ? 0.85
        : insight.sentiment === 'neutral'
          ? 0.65
          : 0.45

    acc[insight.dimension] = {
      score: Math.round(sentimentValue * 100),
      weight,
    }
    return acc
  }, {} as MaturityScorecard['dimensions'])

  const weightedScore = Object.entries(dimensionScores).reduce(
    (total, [, { score, weight }]) => total + score * weight,
    0
  )

  return {
    overall: Math.round(weightedScore),
    dimensions: dimensionScores,
  }
}

