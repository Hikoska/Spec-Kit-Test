import type { MaturityDimensionKey } from './framework'
import type { Recommendation } from '@/types/maturity'

const vendorCatalog: Record<
  MaturityDimensionKey,
  Recommendation[]
> = {
  strategy: [
    {
      id: 'strat-vision',
      title: 'Digital North Star Rapid Sprint',
      summary: 'Two-week facilitated workshop to align executives on outcomes.',
      category: 'strategy',
      effort: 'medium',
      impact: 'high',
    },
  ],
  data: [
    {
      id: 'data-gov',
      title: 'Modern Data Governance Kit',
      summary: 'Policy templates and playbooks for federated data ownership.',
      category: 'data',
      effort: 'low',
      impact: 'medium',
    },
  ],
  automation: [
    {
      id: 'automation-rpa',
      title: 'RPA Lighthouse Build',
      summary: 'Deploy 3 high-value automations with citizen-developer enablement.',
      category: 'automation',
      effort: 'medium',
      impact: 'high',
    },
  ],
  experience: [
    {
      id: 'cx-lab',
      title: 'Experimentation Lab Starter',
      summary: 'Launch experimentation rituals with template libraries.',
      category: 'experience',
      effort: 'medium',
      impact: 'medium',
    },
  ],
  people: [
    {
      id: 'people-enablement',
      title: 'Digital Talent Accelerator',
      summary: 'Upskill squads on product, agile, and AI safety in 6 weeks.',
      category: 'people',
      effort: 'high',
      impact: 'high',
    },
  ],
  security: [
    {
      id: 'security-zero-trust',
      title: 'Zero Trust FastTrack',
      summary: 'Identity-driven zoning for SaaS and hybrid workloads.',
      category: 'security',
      effort: 'medium',
      impact: 'high',
    },
  ],
  delivery: [
    {
      id: 'delivery-platform',
      title: 'Platform Engineering Starter Kit',
      summary: 'Golden paths, IDP portal, and scorecards for developer experience.',
      category: 'delivery',
      effort: 'high',
      impact: 'high',
    },
  ],
  infrastructure: [
    {
      id: 'infra-finops',
      title: 'FinOps Optimization Run',
      summary: 'Cost allocation, guardrails, and anomaly detection for cloud spend.',
      category: 'infrastructure',
      effort: 'medium',
      impact: 'medium',
    },
  ],
}

export function getRecommendations(dimensions: MaturityDimensionKey[]) {
  return dimensions.flatMap((dimension) => vendorCatalog[dimension] ?? [])
}

