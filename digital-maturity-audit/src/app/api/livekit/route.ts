import { NextResponse } from 'next/server'
import { createLiveKitToken } from '@/lib/video/livekit'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const body = (await request.json()) as { room: string; identity: string }

  try {
    const token = createLiveKitToken({
      room: body.room,
      identity: body.identity,
      metadata: { role: 'interviewer' },
    })

    return NextResponse.json({ token })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Token failed' },
      { status: 500 }
    )
  }
}

