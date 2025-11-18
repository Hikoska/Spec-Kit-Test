import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from '@react-pdf/renderer'
import type { MaturityScorecard } from '../../ai/scorer'
import type { Recommendation } from '@/types/maturity'

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Helvetica',
    color: '#111827',
  },
  heading: {
    fontSize: 24,
    marginBottom: 4,
  },
  subheading: {
    fontSize: 12,
    marginBottom: 16,
    color: '#6B7280',
  },
  section: {
    marginBottom: 24,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  recommendation: {
    marginBottom: 8,
    padding: 8,
    borderRadius: 4,
    backgroundColor: '#EEF2FF',
  },
})

type Props = {
  organization: string
  auditName: string
  scorecard: MaturityScorecard
  recommendations: Recommendation[]
}

export default function ReportTemplate({
  organization,
  auditName,
  scorecard,
  recommendations,
}: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text style={styles.heading}>{organization}</Text>
          <Text style={styles.subheading}>
            Digital Maturity Audit • {auditName}
          </Text>
          <Text>Overall Score: {scorecard.overall}/100</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Dimension Scores</Text>
          {Object.entries(scorecard.dimensions).map(
            ([dimension, { score, weight }]) => (
              <View key={dimension} style={styles.tableRow}>
                <Text>{dimension.toUpperCase()}</Text>
                <Text>
                  {score}/100 • Weight {(weight * 100).toFixed(0)}%
                </Text>
              </View>
            )
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.heading}>Recommendations</Text>
          {recommendations.map((recommendation) => (
            <View key={recommendation.id} style={styles.recommendation}>
              <Text>
                {recommendation.title} ({recommendation.impact} impact ·{' '}
                {recommendation.effort} effort)
              </Text>
              <Text>{recommendation.summary}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.subheading}>
          Generated automatically by the Digital Maturity Audit Platform
        </Text>
      </Page>
    </Document>
  )
}

