import AuditMonitor from '@/components/admin/AuditMonitor'

export default function AdminAuditsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Audits</h1>
      <p className="text-slate-500">Track interviews, transcripts, and AI-ready report states.</p>
      <div className="mt-8">
        <AuditMonitor />
      </div>
    </div>
  )
}

