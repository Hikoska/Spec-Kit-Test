import ClientManagement from '@/components/admin/ClientManagement'
import CreditSystem from '@/components/admin/CreditSystem'
import AuditMonitor from '@/components/admin/AuditMonitor'

export const dynamic = 'force-dynamic'

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-12">
      <div>
        <p className="text-sm uppercase tracking-wider text-slate-500">Admin</p>
        <h1 className="text-3xl font-semibold text-slate-900">Control Tower</h1>
        <p className="text-slate-500">
          Manage organizations, credits, and audit progress from a single workspace.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ClientManagement />
        <CreditSystem />
      </div>
      <AuditMonitor />
    </div>
  )
}

