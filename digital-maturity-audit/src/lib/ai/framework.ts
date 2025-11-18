export type MaturityDimensionKey =
  | 'strategy'
  | 'data'
  | 'automation'
  | 'experience'
  | 'people'
  | 'security'
  | 'delivery'
  | 'infrastructure'

export type Question = {
  id: string
  prompt: string
  dimension: MaturityDimensionKey
}

export const MATURITY_FRAMEWORK: Record<
  MaturityDimensionKey,
  {
    name: string
    weight: number
    description: string
    questions: Question[]
  }
> = {
  strategy: {
    name: 'Digital Strategy',
    weight: 0.15,
    description: 'Vision, alignment, and leadership sponsorship.',
    questions: [
      {
        id: 'strategy-1',
        prompt:
          'How do you prioritize digital initiatives across business units?',
        dimension: 'strategy',
      },
      {
        id: 'strategy-2',
        prompt:
          'What KPIs define success for your current digital roadmap?',
        dimension: 'strategy',
      },
    ],
  },
  data: {
    name: 'Data & Insights',
    weight: 0.15,
    description: 'Data governance, access, and decision intelligence.',
    questions: [
      {
        id: 'data-1',
        prompt: 'Describe your source-of-truth data architecture.',
        dimension: 'data',
      },
      {
        id: 'data-2',
        prompt: 'How quickly can teams self-serve insights?',
        dimension: 'data',
      },
    ],
  },
  automation: {
    name: 'Automation',
    weight: 0.12,
    description: 'Workflow automation, RPA, AI co-pilots.',
    questions: [
      {
        id: 'automation-1',
        prompt: 'Which repetitive workflows are automated today?',
        dimension: 'automation',
      },
      {
        id: 'automation-2',
        prompt: 'How do you prioritize automation backlog items?',
        dimension: 'automation',
      },
    ],
  },
  experience: {
    name: 'Customer Experience',
    weight: 0.13,
    description: 'Journey orchestration, personalization, feedback loops.',
    questions: [
      {
        id: 'experience-1',
        prompt: 'How is customer insight folded back into product planning?',
        dimension: 'experience',
      },
      {
        id: 'experience-2',
        prompt: 'Describe your experimentation cadence (A/B, multivariate).',
        dimension: 'experience',
      },
    ],
  },
  people: {
    name: 'People & Culture',
    weight: 0.1,
    description: 'Upskilling, agile operating model, incentives.',
    questions: [
      {
        id: 'people-1',
        prompt: 'What skills are scarce for delivering digital initiatives?',
        dimension: 'people',
      },
      {
        id: 'people-2',
        prompt: 'How do you embed change management into projects?',
        dimension: 'people',
      },
    ],
  },
  security: {
    name: 'Security & Compliance',
    weight: 0.1,
    description: 'Identity, privacy, threat readiness, certifications.',
    questions: [
      {
        id: 'security-1',
        prompt: 'Describe your incident response and tabletop testing cadence.',
        dimension: 'security',
      },
      {
        id: 'security-2',
        prompt: 'What compliance frameworks govern your workloads?',
        dimension: 'security',
      },
    ],
  },
  delivery: {
    name: 'Delivery & Tooling',
    weight: 0.12,
    description: 'DevOps, release orchestration, platform engineering.',
    questions: [
      {
        id: 'delivery-1',
        prompt: 'How automated is your release train (CI/CD, IaC)?',
        dimension: 'delivery',
      },
      {
        id: 'delivery-2',
        prompt: 'What metrics define success for engineering enablement?',
        dimension: 'delivery',
      },
    ],
  },
  infrastructure: {
    name: 'Infrastructure & Platforms',
    weight: 0.13,
    description: 'Cloud maturity, modular platforms, API ecosystem.',
    questions: [
      {
        id: 'infrastructure-1',
        prompt: 'Describe your hybrid or multi-cloud operating model.',
        dimension: 'infrastructure',
      },
      {
        id: 'infrastructure-2',
        prompt: 'How reusable are your platform capabilities for new teams?',
        dimension: 'infrastructure',
      },
    ],
  },
}

