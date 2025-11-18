import { NextResponse } from 'next/server'
import { getSupabaseServerClient } from '@/lib/supabase/server'

export async function POST(request: Request) {
  try {
    const { organizationId, delta } = await request.json()
    const supabase = getSupabaseServerClient()

    const { data, error } = await supabase.rpc('adjust_credits', {
      org_id: organizationId,
      credit_delta: delta,
    })

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true, balance: data })
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Credit adjustment failed' },
      { status: 500 }
    )
  }
}

