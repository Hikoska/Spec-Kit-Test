# 🎯 Digital Maturity Audit Platform

**AI-powered platform for automating digital maturity audits** through AI-led video interviews, real-time analysis, and comprehensive reporting.

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp .env.local.example .env.local
# Edit .env.local with your API keys

# 3. Run Supabase migrations (see Setup section)

# 4. Start development
npm run dev
```

Visit http://localhost:3000

## 🎨 Features

- ✅ **AI Video Interviewer** - Adaptive questions with real-time conversation
- ✅ **Screen Sharing** - Capture tools and systems
- ✅ **Real-time Transcription** - Deepgram-powered
- ✅ **Maturity Scoring** - 0-100 across 8 dimensions
- ✅ **Auto Research** - AI finds recommendations & vendors
- ✅ **PDF Reports** - Beautiful professional reports
- ✅ **Multi-tenant** - Isolated client workspaces
- ✅ **Credit System** - Simple interview credit management
- ✅ **Premium UI** - shadcn/ui + Tailwind CSS

## 🏗️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Next.js 15, React 19, TypeScript |
| **Backend** | Supabase (PostgreSQL, Auth, Storage) |
| **Video** | LiveKit (WebRTC, recording) |
| **AI** | OpenAI o1 + Claude 3.5 Sonnet |
| **Transcription** | Deepgram |
| **PDF** | @react-pdf/renderer |
| **UI** | Tailwind CSS + shadcn/ui |
| **Deployment** | Vercel |

## 📋 Prerequisites

Before starting, create accounts and get API keys:

1. **Supabase** - https://supabase.com (Free tier OK)
2. **LiveKit** - https://livekit.io (Free tier OK)
3. **OpenAI** - https://platform.openai.com/api-keys
4. **Anthropic** - https://console.anthropic.com
5. **Deepgram** - https://console.deepgram.com
6. **Vercel** - https://vercel.com (for deployment)

## 🚀 Complete Setup Guide

### Step 1: Supabase Setup

1. Create project at https://supabase.com
2. Go to **SQL Editor**, create new query
3. Copy and run `supabase/migrations/00001_initial_schema.sql`
4. Copy and run `supabase/migrations/00002_rls_policies.sql`
5. Go to **Authentication > Providers**, enable Email
6. Go to **Storage**, create buckets:
   - `interview-recordings` (public)
   - `reports` (private)
7. Go to **Settings > API**:
   - Copy Project URL
   - Copy anon/public key
   - Copy service_role key

### Step 2: LiveKit Setup

1. Create account at https://livekit.io
2. Create new project
3. Go to **Settings**:
   - Copy API Key
   - Copy API Secret
   - Copy WebSocket URL (wss://...)
4. Go to **Recording Settings**:
   - Enable recording
   - Use LiveKit Cloud storage or configure S3

### Step 3: Environment Variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbG...
SUPABASE_SERVICE_ROLE_KEY=eyJhbG...

LIVEKIT_API_KEY=APIxxxxxxxx
LIVEKIT_API_SECRET=secret...
NEXT_PUBLIC_LIVEKIT_URL=wss://your-project.livekit.cloud

OPENAI_API_KEY=sk-...
ANTHROPIC_API_KEY=sk-ant-...
DEEPGRAM_API_KEY=your_key

NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Step 4: Install & Run

```bash
npm install
npm run dev
```

### Step 5: Create Admin User

1. Visit http://localhost:3000/auth/signup
2. Sign up with your email
3. Verify email (check Supabase Auth dashboard if needed)
4. In Supabase SQL Editor, run:

```sql
UPDATE users 
SET role = 'admin' 
WHERE email = 'your-email@example.com';
```

5. Log in at `/auth/login`
6. Access admin dashboard at `/admin`

## 📁 Project Structure

```
src/
├── app/                          # Next.js 15 App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Landing page
│   ├── globals.css              # Global styles
│   ├── admin/                   # Admin dashboard
│   │   ├── page.tsx
│   │   ├── clients/            # Client management
│   │   └── audits/             # Audit monitoring
│   ├── client/                  # Client portal
│   │   ├── dashboard/          # Overview & progress
│   │   ├── invite/             # Invite interviewees
│   │   └── reports/            # View/download reports
│   ├── interview/[id]/          # Video interview room
│   │   └── page.tsx
│   ├── auth/                    # Authentication
│   │   ├── login/
│   │   └── signup/
│   └── api/                     # API routes
│       ├── interviews/         # Interview management
│       ├── reports/            # Report generation
│       ├── analysis/           # AI analysis
│       ├── livekit/            # LiveKit webhooks
│       └── credits/            # Credit management
├── components/
│   ├── ui/                      # shadcn/ui components
│   ├── interview/               # Interview components
│   │   ├── VideoInterface.tsx
│   │   ├── AIInterviewer.tsx
│   │   ├── ScreenShare.tsx
│   │   └── TranscriptionPanel.tsx
│   ├── dashboard/               # Dashboard components
│   │   ├── MaturityScore.tsx
│   │   ├── SpiderChart.tsx
│   │   └── RecommendationsList.tsx
│   └── admin/                   # Admin components
│       ├── ClientManagement.tsx
│       ├── CreditSystem.tsx
│       └── AuditMonitor.tsx
├── lib/
│   ├── supabase/                # Supabase clients
│   │   ├── client.ts           # Browser client
│   │   ├── server.ts           # Server client
│   │   └── middleware.ts       # Auth middleware
│   ├── ai/                      # AI logic
│   │   ├── framework.ts        # Maturity framework
│   │   ├── interviewer.ts      # Question generation
│   │   ├── analyzer.ts         # Response analysis
│   │   ├── researcher.ts       # Recommendation research
│   │   └── scorer.ts           # Score calculation
│   ├── video/                   # Video infrastructure
│   │   ├── livekit.ts          # LiveKit integration
│   │   └── transcription.ts    # Deepgram integration
│   ├── pdf/                     # PDF generation
│   │   ├── generator.tsx
│   │   └── templates/
│   └── utils.ts                 # Utilities
├── types/                       # TypeScript definitions
│   ├── database.ts             # Supabase types
│   ├── interview.ts            # Interview types
│   └── maturity.ts             # Maturity types
└── hooks/                       # React hooks
    ├── useAuth.ts
    ├── useInterview.ts
    └── useMaturityScore.ts

supabase/
├── migrations/                  # Database migrations
│   ├── 00001_initial_schema.sql
│   └── 00002_rls_policies.sql
└── functions/                   # Edge functions (optional)
    ├── analyze-interview/
    ├── generate-report/
    └── calculate-score/
```

## 🎮 Usage Guide

### Admin Workflow

1. **Log in** at `/admin`
2. **Create Organization**
   - Click "New Client"
   - Enter company details
   - Assign initial credits
3. **Create Audit**
   - Select organization
   - Name the audit project
   - Set parameters
4. **Monitor Progress**
   - View ongoing interviews
   - Check completion status
   - Review transcripts
5. **Generate Report**
   - System auto-generates after interviews
   - Review and approve
   - Download PDF

### Client Admin Workflow

1. **Access Dashboard** at `/client/dashboard`
2. **View Audit Progress**
   - See interview completion status
   - Monitor overall progress
3. **Invite Colleagues**
   - Click "Invite Interviewees"
   - Enter emails & roles
   - System sends links automatically
4. **Download Report**
   - Available when audit completes
   - PDF format with all recommendations

### Interviewee Workflow

1. **Receive Email** with unique interview link
2. **Click Link** (no installation needed)
3. **Enter Details**
   - Name
   - Department
   - Role title
4. **Join Video Call**
   - AI interviewer introduces itself
   - Answer questions naturally
5. **Share Screen** when requested
   - Show relevant tools/systems
   - Walk through workflows
6. **Complete Interview** (15-30 min)
   - System auto-saves
   - Thank you message

## 🔧 Configuration

### Customize Maturity Framework

Edit `src/lib/ai/framework.ts`:

```typescript
export const MATURITY_FRAMEWORK = {
  your_dimension: {
    name: 'Your Dimension',
    weight: 0.125,
    questions: [...],
    scoringCriteria: {...}
  }
}
```

### Adjust Interview Settings

Edit `src/lib/ai/interviewer.ts`:

```typescript
export const INTERVIEW_CONFIG = {
  minQuestions: 8,
  maxQuestions: 15,
  targetDuration: 20, // minutes
  enableScreenShare: true,
  autoTranscribe: true
}
```

### Modify Report Template

Edit `src/lib/pdf/templates/report.tsx` to customize:
- Layout and branding
- Sections and content
- Charts and visualizations

## 🔐 Security & Compliance

- **Authentication**: Supabase Auth with JWT tokens
- **Row Level Security**: All database tables protected
- **Data Isolation**: Organization-level separation
- **Encryption**: At-rest and in-transit
- **GDPR**: Choose EU Supabase region for compliance
- **Recording Retention**: Auto-delete after 90 days
- **API Security**: Rate limiting on all endpoints

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Or connect GitHub repo in Vercel dashboard
```

### Environment Variables

Add all variables from `.env.local` to Vercel:
- Project Settings > Environment Variables
- Add for Production, Preview, Development

### Post-Deployment

1. **Update LiveKit Webhook**:
   - LiveKit Dashboard > Settings > Webhooks
   - Add: `https://your-domain.com/api/livekit/webhook`

2. **Update Supabase Auth**:
   - Supabase > Authentication > URL Configuration
   - Site URL: `https://your-domain.com`
   - Redirect: `https://your-domain.com/auth/callback`

3. **Test Production**:
   - Run complete interview flow
   - Verify recordings saved
   - Check report generation

## 🧪 Testing

### Manual Testing Checklist

- [ ] User signup/login
- [ ] Admin: Create organization
- [ ] Admin: Add credits
- [ ] Admin: Create audit
- [ ] Client: Invite interviewees
- [ ] Interview: Video connection
- [ ] Interview: Screen sharing
- [ ] Interview: Transcription
- [ ] Interview: AI questions
- [ ] Analysis: Score calculation
- [ ] Report: PDF generation
- [ ] Credits: Usage tracking

### Test Interview

```bash
# Start dev server
npm run dev

# In browser:
# 1. Sign up as admin
# 2. Create test org with 10 credits
# 3. Create audit
# 4. Generate interview link
# 5. Open link in incognito
# 6. Complete interview
# 7. Verify analysis & report
```

## 📊 Database Schema

**Core Tables:**
- `organizations` - Client companies
- `users` - All system users
- `audits` - Audit projects
- `interviews` - Interview sessions
- `interview_responses` - Q&A data
- `maturity_dimensions` - Dimension scores
- `recommendations` - AI suggestions
- `reports` - Generated PDFs
- `credit_transactions` - Usage tracking

See migrations for complete schema.

## 🐛 Troubleshooting

### "Cannot connect to Supabase"
- Verify URL and keys in `.env.local`
- Check project not paused in Supabase dashboard
- Ensure migrations ran successfully

### "LiveKit connection failed"
- Verify API credentials
- Check WebSocket URL format: `wss://...`
- Ensure project active in LiveKit dashboard

### "AI responses slow/failing"
- Check API keys valid
- Verify quota/billing on AI platforms
- Review API route logs

### "Interview credits not deducting"
- Check RLS policies applied
- Verify user has correct role
- Check `credit_transactions` table

### "PDF generation fails"
- Ensure all dependencies installed
- Check browser console for errors
- Verify data completeness

## 📚 Additional Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Supabase Docs**: https://supabase.com/docs
- **LiveKit Docs**: https://docs.livekit.io
- **shadcn/ui**: https://ui.shadcn.com

## 📄 License

Proprietary - All Rights Reserved

## 🙋 Support

- Email: support@yourcompany.com
- Documentation: /docs
- Issues: GitHub Issues

---

Built with ❤️ using Next.js 15, Supabase, LiveKit, and AI
