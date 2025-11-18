"use client"

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'

const sampleLines = [
  'Interviewer: Walk me through your quarterly planning workflow.',
  'Participant: We run OKR workshops, but tooling is fragmented.',
  'Interviewer: Which systems create friction today?',
]

export default function TranscriptionPanel() {
  const [transcript, setTranscript] = useState(sampleLines)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Live Transcription</CardTitle>
        <Button
          variant="outline"
          size="sm"
          onClick={() => setTranscript((prev) => [...prev, 'Participant: Adding more detail on governance.'])}
        >
          Append
        </Button>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-48 space-y-2 text-sm text-slate-600">
          {transcript.map((line, index) => (
            <p key={`${line}-${index}`}>{line}</p>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  )
}

