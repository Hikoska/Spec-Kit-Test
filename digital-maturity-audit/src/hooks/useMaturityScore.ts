'use client'

import { useMemo } from 'react'
import type { InterviewResponse } from '@/types/interview'
import { analyzeResponses } from '@/lib/ai/analyzer'
import { calculateMaturityScore } from '@/lib/ai/scorer'

export function useMaturityScore(responses: InterviewResponse[]) {
  return useMemo(() => {
    const insights = analyzeResponses(responses)
    const scorecard = calculateMaturityScore(insights)
    return { insights, scorecard }
  }, [responses])
}

