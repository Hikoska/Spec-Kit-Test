"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'

const audits = [
  { id: 'a-1', name: 'Ecommerce Revamp', organization: 'Acme', progress: 62, interviews: 4, total: 7 },
  { id: 'a-2', name: 'Operational Excellence', organization: 'Northwind', progress: 85, interviews: 9, total: 10 },
  { id: 'a-3', name: 'Data Platform Lift', organization: 'Stark Logistics', progress: 38, interviews: 2, total: 6 },
]

export default function AuditMonitor() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Audit Monitor</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {audits.map((audit) => (
          <div key={audit.id} className="rounded-lg border border-slate-100 p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-slate-900">{audit.name}</p>
                <p className="text-sm text-slate-500">{audit.organization}</p>
              </div>
              <Badge variant={audit.progress > 70 ? 'default' : 'secondary'}>
                {audit.interviews}/{audit.total} interviews
              </Badge>
            </div>
            <Progress value={audit.progress} className="mt-3" />
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

