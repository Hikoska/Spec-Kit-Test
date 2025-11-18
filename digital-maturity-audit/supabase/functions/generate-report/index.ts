import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'

serve(async (request) => {
  const payload = await request.json()
  const pdfUrl = `https://storage.supabase.co/reports/${crypto.randomUUID()}.pdf`

  return new Response(
    JSON.stringify({
      status: 'queued',
      pdfUrl,
      payload,
    }),
    { headers: { 'Content-Type': 'application/json' } }
  )
})

