import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

type DimensionScore = {
  dimension: string
  score: number
}

serve(async (request) => {
  const { insights } = (await request.json()) as {
    insights: DimensionScore[]
  }

  const overall =
    insights.reduce((total, item) => total + item.score, 0) /
    Math.max(insights.length, 1)

  return new Response(
    JSON.stringify({
      overall: Math.round(overall),
      dimensions: insights,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})

