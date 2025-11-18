import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { FileText } from 'lucide-react'

const reports = [
  { id: 'r-1', name: 'FY25 Strategy Audit', status: 'Ready', size: '2.3 MB' },
  { id: 'r-2', name: 'Data Platform Deep Dive', status: 'In progress', size: '—' },
]

export default function ClientReportsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-8 px-6 py-12">
      <div>
        <p className="text-sm uppercase tracking-wider text-slate-500">Outputs</p>
        <h1 className="text-3xl font-semibold text-slate-900">Reports & transcripts</h1>
        <p className="text-slate-500">Download deliverables or trigger regenerations.</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Available reports</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {reports.map((report) => (
            <div
              key={report.id}
              className="flex flex-col gap-3 rounded-lg border border-slate-100 p-4 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex items-center gap-3">
                <FileText className="h-5 w-5 text-indigo-500" />
                <div>
                  <p className="font-medium text-slate-900">{report.name}</p>
                  <p className="text-sm text-slate-500">
                    Status: {report.status} • Size: {report.size}
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="outline">Preview</Button>
                <Button disabled={report.status !== 'Ready'}>Download</Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  )
}

