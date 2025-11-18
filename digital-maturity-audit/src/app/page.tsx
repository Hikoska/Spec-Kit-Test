import Link from 'next/link'
import { ArrowRight, CheckCircle, Video, FileText, Users } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const featureHighlights = [
  {
    icon: Video,
    title: 'AI-led Interviews',
    description: 'Adaptive questioning with LiveKit video rooms and screen share.',
  },
  {
    icon: Users,
    title: 'Client Workspaces',
    description: 'Multi-tenant portal with credits, roles, and granular RLS.',
  },
  {
    icon: FileText,
    title: 'Instant Reporting',
    description: 'Auto-generated PDF reports, benchmarks, and recommendations.',
  },
]

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="grid-pattern absolute inset-0 opacity-70" aria-hidden />
      <div className="relative mx-auto w-full max-w-6xl px-6 py-24 lg:py-32">
        <Badge variant="outline" className="mb-6">
          Built with Supabase • LiveKit • OpenAI • Claude
        </Badge>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Modernize digital maturity audits with AI copilots.
            </h1>
            <p className="text-lg text-slate-600">
              Run structured interviews, transcribe in real-time, and generate
              decision-ready reports in minutes. Perfect for consultancies,
              enterprise audit teams, and boutique advisories.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/auth/signup">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/client/dashboard">View Demo Workspace</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                Enterprise-grade security
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                GDPR-ready architecture
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                90-day recording retention
              </div>
            </div>
          </div>
          <Card className="flex-1 border-slate-200 shadow-2xl">
            <CardHeader>
              <CardTitle className="text-slate-800">
                Live Audit Snapshot
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: 'Active Interviews', value: '6', trend: '+2 today' },
                { label: 'Average Score', value: '73 / 100', trend: '↑ 4 pts' },
                { label: 'Credits Remaining', value: '48', trend: '3 orgs' },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-lg border border-slate-100 bg-white p-4"
                >
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-2xl font-semibold text-slate-900">
                    {item.value}
                  </p>
                  <p className="text-xs text-emerald-500">{item.trend}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <section className="mt-24 grid gap-8 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <Card key={feature.title} className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3">
                <feature.icon className="h-10 w-10 rounded-lg bg-indigo-50 p-2 text-indigo-600" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </section>
      </div>
    </main>
  )
}

