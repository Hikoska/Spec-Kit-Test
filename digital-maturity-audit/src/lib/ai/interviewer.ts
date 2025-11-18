import { MATURITY_FRAMEWORK, type MaturityDimensionKey } from './framework'
import type { InterviewQuestion } from '@/types/interview'

export const INTERVIEW_CONFIG = {
  minQuestions: 8,
  maxQuestions: 15,
  targetDurationMinutes: 25,
  enableScreenShare: true,
  autoTranscribe: true,
}

export function buildInterviewGuide(seed?: string): InterviewQuestion[] {
  const entries = Object.entries(MATURITY_FRAMEWORK)
  const questions: InterviewQuestion[] = []

  entries.forEach(([dimension, data]) => {
    const sample =
      seed && seed.includes(dimension)
        ? data.questions
        : shuffleArray(data.questions).slice(0, 1)

    sample.forEach((question) => {
      questions.push({
        id: question.id,
        dimension: dimension as MaturityDimensionKey,
        prompt: question.prompt,
        followUps: [
          'Can you walk me through the supporting process?',
          'What blockers typically slow this down?',
        ],
      })
    })
  })

  return questions.slice(0, INTERVIEW_CONFIG.maxQuestions)
}

function shuffleArray<T>(array: T[]) {
  const copy = [...array]
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
  }
  return copy
}

