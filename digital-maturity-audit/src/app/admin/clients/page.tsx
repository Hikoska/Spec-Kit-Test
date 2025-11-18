import ClientManagement from '@/components/admin/ClientManagement'

export default function AdminClientsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold text-slate-900">Clients</h1>
      <p className="text-slate-500">
        Configure organizations, assign credits, and track onboarding readiness.
      </p>
      <div className="mt-8">
        <ClientManagement />
      </div>
    </div>
  )
}

