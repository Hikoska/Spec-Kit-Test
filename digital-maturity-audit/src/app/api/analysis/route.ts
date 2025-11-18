import { NextResponse } from 'next/server'
import { analyzeResponses } from '@/lib/ai/analyzer'
import { calculateMaturityScore } from '@/lib/ai/scorer'
import type { InterviewResponse } from '@/types/interview'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { responses: InterviewResponse[] }
    const insights = analyzeResponses(body.responses ?? [])
    const scorecard = calculateMaturityScore(insights)

    return NextResponse.json({ insights, scorecard })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Analysis failed' },
      { status: 500 }
    )
  }
}

