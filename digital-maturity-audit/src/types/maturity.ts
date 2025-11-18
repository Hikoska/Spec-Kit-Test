export type Recommendation = {
  id: string
  title: string
  summary: string
  category: string
  effort: 'low' | 'medium' | 'high'
  impact: 'low' | 'medium' | 'high'
}

