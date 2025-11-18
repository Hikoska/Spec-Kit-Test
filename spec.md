# AI-Powered Digital Maturity Audit Platform (MVP)

## Core Goal
Build a web app that completely automates digital maturity audits for small-to-medium businesses or internal departments: from scheduling & conducting AI-led interviews → automated analysis & research → final report with maturity score (0–100) + prioritized recommendations.

## Target Users & Roles
1. **Our team (admin side)**
   - Create/manage client accounts
   - Add/remove interview credits
   - Monitor all ongoing audits
   - Manually intervene or edit reports if needed

2. **Client Admin** (the person who buys the audit)
   - Invite colleagues to be interviewed
   - See progress and final report
   - Download PDF report

3. **Interviewees** (employees/colleagues)
   - Receive a simple link → join a video call with an AI interviewer
   - Share screen when asked
   - Answer questions verbally

4. **Client Management** (C-level who read the final report)

## Core Features (MVP – keep it shippable in <2 weeks with AI)

### 1. AI Interviewer (the magic part)
- Beautiful video call interface (like Zoom, but simpler)
- AI avatar asks smart, adaptive questions based on a proven digital maturity framework (we’ll use the one from McKinsey/BCG/Deloitte – open source versions exist)
- Automatically detects department/role and branches questions (marketing vs IT vs operations)
- Can ask for screen sharing (“Please show me your CRM/dashboard/analytics”)
- Records audio + screen (with consent)
- Transcribes + summarizes everything in real time

### 2. Automatic Scoring & Analysis
- After 3–10 interviews, the system auto-calculates a Digital Maturity Score (0–100) across 6–8 dimensions (Strategy, Culture, Organization, Processes, Technology, Data, Customer Experience, Innovation)
- Compares against industry benchmarks

### 3. Research & Recommendations Engine
- For every weak area detected, the AI automatically researches:
  - Quick wins (tools/actions <3 months, <€10k)
  - Medium-term improvements
  - Long-term strategic moves
- Pulls real case studies, pricing, vendors, ROI estimates where possible

### 4. Final Deliverables
- Beautiful PDF + web dashboard with:
  - Overall score + spider chart
  - Dimension-by-dimension breakdown
  - Top 5 quick wins
  - 18–24 month roadmap
  - Estimated ROI/impact

### 5. Multi-tenant & Credit System
- Each client has their own isolated space
- We sell “interview credits” (1 credit = 1 interview)
- Simple admin dashboard to top-up clients

## Non-functional Requirements
- Works on mobile & desktop
- No install needed for interviewees (just a browser link)
- GDPR-compliant (data stays in EU if possible)
- Beautiful, professional design (not startup-y)

## Tech Constraints (important for AI to not go crazy)
- Use Next.js 15 + TypeScript
- Supabase or Firebase for auth + database (easiest & cheapest)
- Daily.co or LiveKit + Deepgram/Voiceflow for the AI video interviewer
- OpenAI o1-preview / Claude 3.5 Sonnet for analysis & research
- Vercel for deployment
- shadcn/ui + Tailwind for beautiful UI fast
- Generate PDF with @react-pdf/renderer or Puppeteer

## Out of Scope for MVP (we’ll add later)
- Custom branding per client
- Payment integration (we’ll add manually at first)
- On-premise version
- Multi-language (English first)

This must feel like a premium consulting deliverable, but 100% automated.
