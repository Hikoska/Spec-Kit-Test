import type { MaturityDimensionKey } from '@/lib/ai/framework'

export type InterviewQuestion = {
  id: string
  prompt: string
  dimension: MaturityDimensionKey
  followUps: string[]
}

export type InterviewResponse = {
  id: string
  question: string
  answer: string
  dimension: MaturityDimensionKey
  sentiment: 'positive' | 'neutral' | 'negative'
  followUps: string[]
}

