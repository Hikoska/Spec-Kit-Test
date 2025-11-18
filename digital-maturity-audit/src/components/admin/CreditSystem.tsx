"use client"

import { useState } from 'react'
import { ArrowDownCircle, ArrowUpCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const ledger = [
  { id: 'txn-1', organization: 'Acme Holdings', delta: -3, reason: 'Interview credit' },
  { id: 'txn-2', organization: 'Northwind Energy', delta: +10, reason: 'Top-up' },
]

export default function CreditSystem() {
  const [amount, setAmount] = useState(5)
  const [organization, setOrganization] = useState('Acme Holdings')

  return (
    <Card>
      <CardHeader>
        <CardTitle>Credit Management</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2">
            <Label>Organization</Label>
            <Input value={organization} onChange={(event) => setOrganization(event.target.value)} />
          </div>
          <div>
            <Label>Credits</Label>
            <Input
              type="number"
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
            />
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary">
            <ArrowUpCircle className="mr-2 h-4 w-4" />
            Add credits
          </Button>
          <Button variant="outline">
            <ArrowDownCircle className="mr-2 h-4 w-4" />
            Deduct credits
          </Button>
        </div>
        <div className="space-y-4">
          {ledger.map((entry) => (
            <div
              key={entry.id}
              className="flex items-center justify-between rounded-lg border border-slate-100 p-3 text-sm"
            >
              <div>
                <p className="font-medium text-slate-900">{entry.organization}</p>
                <p className="text-slate-500">{entry.reason}</p>
              </div>
              <p className={entry.delta > 0 ? 'text-emerald-600' : 'text-rose-600'}>
                {entry.delta > 0 ? '+' : ''}
                {entry.delta}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

