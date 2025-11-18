"use client"

import { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Client = {
  id: string
  name: string
  credits: number
  industry: string
}

const initialClients: Client[] = [
  { id: '1', name: 'Acme Holdings', credits: 24, industry: 'Retail' },
  { id: '2', name: 'Northwind Energy', credits: 12, industry: 'Energy' },
]

export default function ClientManagement() {
  const [clients, setClients] = useState(initialClients)
  const [form, setForm] = useState<Omit<Client, 'id'>>({
    name: '',
    credits: 10,
    industry: '',
  })

  function createClient() {
    setClients((prev) => [...prev, { ...form, id: crypto.randomUUID() }])
    setForm({ name: '', credits: 10, industry: '' })
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Client Management</CardTitle>
        <Button onClick={createClient}>
          <PlusCircle className="mr-2 h-4 w-4" />
          Add client
        </Button>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid gap-4 md:grid-cols-3">
          <div>
            <Label htmlFor="name">Client name</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="industry">Industry</Label>
            <Input
              id="industry"
              value={form.industry}
              onChange={(event) => setForm((prev) => ({ ...prev, industry: event.target.value }))}
            />
          </div>
          <div>
            <Label htmlFor="credits">Credits</Label>
            <Input
              id="credits"
              type="number"
              value={form.credits}
              onChange={(event) =>
                setForm((prev) => ({ ...prev, credits: Number(event.target.value) }))
              }
            />
          </div>
        </div>

        <div className="grid gap-3">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex flex-col gap-2 rounded-lg border border-slate-100 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="font-medium text-slate-900">{client.name}</p>
                <p className="text-sm text-slate-500">{client.industry}</p>
              </div>
              <p className="text-sm text-slate-600">
                Credits <span className="font-semibold">{client.credits}</span>
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

