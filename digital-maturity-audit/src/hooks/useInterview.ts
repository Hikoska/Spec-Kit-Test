'use client'

import { useMemo, useState } from 'react'
import { buildInterviewGuide } from '@/lib/ai/interviewer'
import type { InterviewQuestion, InterviewResponse } from '@/types/interview'

export function useInterview(seed?: string) {
  const [responses, setResponses] = useState<InterviewResponse[]>([])
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0)

  const questions: InterviewQuestion[] = useMemo(
    () => buildInterviewGuide(seed),
    [seed]
  )

  const activeQuestion = questions[activeQuestionIndex]

  function recordResponse(answer: string, sentiment: InterviewResponse['sentiment']) {
    if (!activeQuestion) return
    setResponses((prev) => [
      ...prev.filter((item) => item.id !== activeQuestion.id),
      {
        id: activeQuestion.id,
        dimension: activeQuestion.dimension,
        question: activeQuestion.prompt,
        answer,
        sentiment,
        followUps: activeQuestion.followUps,
      },
    ])
    setActiveQuestionIndex((index) => Math.min(index + 1, questions.length - 1))
  }

  return {
    questions,
    activeQuestion,
    responses,
    activeQuestionIndex,
    recordResponse,
    restart: () => {
      setResponses([])
      setActiveQuestionIndex(0)
    },
  }
}

