import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

type Payload = {
  transcript: string
}

serve(async (request) => {
  const { transcript } = (await request.json()) as Payload

  const sentiment = transcript.includes('blocker') ? 'negative' : 'positive'

  return new Response(
    JSON.stringify({
      sentiment,
      summary: transcript.slice(0, 140),
    }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})

