import { pdf } from '@react-pdf/renderer'
import ReportTemplate from './templates/report'
import type { MaturityScorecard } from '../ai/scorer'
import type { Recommendation } from '@/types/maturity'

type GenerateReportOptions = {
  organization: string
  auditName: string
  scorecard: MaturityScorecard
  recommendations: Recommendation[]
}

export async function generateAuditReport(options: GenerateReportOptions) {
  const document = ReportTemplate(options)
  const blob = await pdf(document).toBuffer()
  return blob
}

