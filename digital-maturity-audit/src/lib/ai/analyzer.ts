import type { InterviewResponse } from '@/types/interview'
import type { MaturityDimensionKey } from './framework'
import { MATURITY_FRAMEWORK } from './framework'

export type AnalysisInsight = {
  dimension: MaturityDimensionKey
  sentiment: 'positive' | 'neutral' | 'negative'
  summary: string
  blockers: string[]
  accelerators: string[]
}

export function analyzeResponses(
  responses: InterviewResponse[]
): AnalysisInsight[] {
  const grouped = responses.reduce<Record<MaturityDimensionKey, InterviewResponse[]>>(
    (acc, response) => {
      acc[response.dimension] = [...(acc[response.dimension] ?? []), response]
      return acc
    },
    {} as Record<MaturityDimensionKey, InterviewResponse[]>
  )

  return Object.entries(grouped).map(([dimension, dimensionResponses]) => {
    const blockerCandidates = dimensionResponses
      .filter((r) => r.sentiment === 'negative')
      .slice(0, 2)
      .map((r) => r.answer)

    const acceleratorCandidates = dimensionResponses
      .filter((r) => r.sentiment !== 'negative')
      .slice(0, 2)
      .map((r) => r.answer)

    return {
      dimension: dimension as MaturityDimensionKey,
      sentiment: blockerCandidates.length > acceleratorCandidates.length ? 'negative' : 'positive',
      summary: summarizeAnswers(dimensionResponses.map((r) => r.answer)),
      blockers: blockerCandidates,
      accelerators: acceleratorCandidates,
    }
  })
}

function summarizeAnswers(answers: string[]) {
  if (!answers.length) return 'No data collected yet.'
  const combined = answers.join(' ')
  return combined.slice(0, 220) + (combined.length > 220 ? '…' : '')
}

export function deriveDimensionScore(
  dimension: MaturityDimensionKey,
  insight: AnalysisInsight
) {
  const baseWeight = MATURITY_FRAMEWORK[dimension].weight
  const sentimentAdjustment = insight.sentiment === 'positive' ? 0.2 : -0.2
  const qualitativeSignal =
    (insight.accelerators.length - insight.blockers.length) * 0.05

  return Math.max(
    0,
    Math.min(100, Math.round((baseWeight * 100 + sentimentAdjustment * 100 + qualitativeSignal * 100)))
  )
}

