import { Deepgram } from '@deepgram/sdk'

const deepgramApiKey = process.env.DEEPGRAM_API_KEY

const deepgram = deepgramApiKey ? new Deepgram(deepgramApiKey) : null

export async function transcribeAudioFromUrl(url: string) {
  if (!deepgram) {
    throw new Error('Deepgram API key missing')
  }

  const response = await deepgram.listen.prerecorded.transcribeUrl(
    {
      url,
    },
    {
      model: 'nova-2',
      smart_format: true,
      punctuate: true,
    }
  )

  return response?.results?.channels?.[0]?.alternatives?.[0]?.transcript ?? ''
}

