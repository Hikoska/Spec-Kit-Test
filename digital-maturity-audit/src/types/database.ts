export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      organizations: {
        Row: {
          id: string
          name: string
          industry: string | null
          credits: number
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          industry?: string | null
          credits?: number
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['organizations']['Insert']>
      }
      audits: {
        Row: {
          id: string
          organization_id: string
          name: string
          status: 'draft' | 'active' | 'completed'
          created_at: string
        }
        Insert: {
          id?: string
          organization_id: string
          name: string
          status?: 'draft' | 'active' | 'completed'
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['audits']['Insert']>
      }
      interviews: {
        Row: {
          id: string
          audit_id: string
          participant_name: string
          role: string
          status: 'scheduled' | 'live' | 'complete'
          recording_url: string | null
          transcript: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          audit_id: string
          participant_name: string
          role: string
          status?: 'scheduled' | 'live' | 'complete'
          recording_url?: string | null
          transcript?: Json | null
          created_at?: string
        }
        Update: Partial<Database['public']['Tables']['interviews']['Insert']>
      }
    }
    Functions: {
      _: never
    }
    Enums: {
      user_role: 'admin' | 'client' | 'interviewer'
    }
  }
}

