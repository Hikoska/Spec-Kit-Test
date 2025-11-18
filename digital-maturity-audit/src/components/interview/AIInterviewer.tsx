"use client"

import { useInterview } from '@/hooks/useInterview'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function AIInterviewer() {
  const { activeQuestion, recordResponse, activeQuestionIndex, questions } = useInterview()

  if (!activeQuestion) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Interview Complete</CardTitle>
        </CardHeader>
        <CardContent>Thanks for sharing your insights!</CardContent>
      </Card>
    )
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Question {activeQuestionIndex + 1}</p>
          <CardTitle>{activeQuestion.prompt}</CardTitle>
        </div>
        <Badge variant="secondary">{activeQuestion.dimension}</Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
          <p className="font-medium text-slate-900">AI Guidance</p>
          <p>Focus on systems, workflows, and measurable business outcomes.</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => recordResponse('Positive signal captured', 'positive')}
          >
            Capture Positive
          </Button>
          <Button
            variant="outline"
            onClick={() => recordResponse('Neutral insight logged', 'neutral')}
          >
            Capture Neutral
          </Button>
          <Button onClick={() => recordResponse('Blocker documented', 'negative')}>
            Capture Blocker
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          {questions.length - activeQuestionIndex - 1} remaining prompts in this interview.
        </p>
      </CardContent>
    </Card>
  )
}

