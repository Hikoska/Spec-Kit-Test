import { NextResponse } from 'next/server'
import { generateAuditReport } from '@/lib/pdf/generator'
import { calculateMaturityScore } from '@/lib/ai/scorer'
import { analyzeResponses } from '@/lib/ai/analyzer'
import type { InterviewResponse } from '@/types/interview'
import { getRecommendations } from '@/lib/ai/researcher'
import type { MaturityDimensionKey } from '@/lib/ai/framework'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      organization: string
      auditName: string
      responses: InterviewResponse[]
    }

    const insights = analyzeResponses(body.responses)
    const scorecard = calculateMaturityScore(insights)
    const recommendations = getRecommendations(
      Object.keys(scorecard.dimensions) as MaturityDimensionKey[]
    )
    const buffer = await generateAuditReport({
      organization: body.organization,
      auditName: body.auditName,
      scorecard,
      recommendations,
    })

    return new NextResponse(buffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${body.auditName}.pdf"`,
      },
    })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Report generation failed' },
      { status: 500 }
    )
  }
}

