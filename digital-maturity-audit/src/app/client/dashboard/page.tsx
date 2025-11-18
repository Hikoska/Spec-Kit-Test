import MaturityScore from '@/components/dashboard/MaturityScore'
import SpiderChart from '@/components/dashboard/SpiderChart'
import RecommendationsList from '@/components/dashboard/RecommendationsList'
import type { InterviewResponse } from '@/types/interview'

const demoResponses: InterviewResponse[] = [
  {
    id: 'q1',
    question: 'How do you prioritize digital initiatives?',
    answer: 'We run quarterly portfolio reviews led by product and finance.',
    dimension: 'strategy',
    sentiment: 'positive',
    followUps: [],
  },
  {
    id: 'q2',
    question: 'Describe your data governance model.',
    answer: 'Still decentralized; no formal data contracts or domain owners.',
    dimension: 'data',
    sentiment: 'negative',
    followUps: [],
  },
]

export default function ClientDashboardPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">
      <div>
        <p className="text-sm uppercase tracking-wider text-slate-500">
          Client workspace
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Digital maturity overview
        </h1>
        <p className="text-slate-500">
          Track interview progress, scores, and AI-recommended investments.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <MaturityScore responses={demoResponses} />
        </div>
        <div className="lg:col-span-2">
          <SpiderChart responses={demoResponses} />
        </div>
      </div>
      <RecommendationsList focusDimensions={['data', 'automation', 'experience']} />
    </div>
  )
}

