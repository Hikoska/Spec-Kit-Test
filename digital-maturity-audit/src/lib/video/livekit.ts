import { AccessToken } from 'livekit-server-sdk'

export type LiveKitOptions = {
  room: string
  identity: string
  metadata?: Record<string, any>
}

export function createLiveKitToken({
  room,
  identity,
  metadata,
}: LiveKitOptions) {
  const apiKey = process.env.LIVEKIT_API_KEY
  const apiSecret = process.env.LIVEKIT_API_SECRET

  if (!apiKey || !apiSecret) {
    throw new Error('LiveKit credentials missing')
  }

  const token = new AccessToken(apiKey, apiSecret, {
    identity,
    ttl: '1h',
    metadata: metadata ? JSON.stringify(metadata) : undefined,
  })

  token.addGrant({
    room,
    roomJoin: true,
    canPublish: true,
    canSubscribe: true,
    canPublishData: true,
  })

  return token.toJwt()
}

