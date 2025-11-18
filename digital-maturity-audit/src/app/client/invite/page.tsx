import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

export default function ClientInvitePage() {
  return (
    <div className="mx-auto max-w-3xl space-y-8 px-6 py-12">
      <div>
        <p className="text-sm uppercase tracking-wider text-slate-500">
          Interviews
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Invite participants
        </h1>
        <p className="text-slate-500">
          Send personalized interview links with clear expectations and prep
          guidance.
        </p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Invitation composer</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="emails">Email addresses</Label>
            <Textarea
              id="emails"
              placeholder="one@example.com, two@example.com"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <Label htmlFor="role">Role focus</Label>
              <Input id="role" placeholder="e.g. VP Operations" />
            </div>
            <div>
              <Label htmlFor="deadline">Deadline</Label>
              <Input id="deadline" type="date" />
            </div>
          </div>
          <div>
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Highlight tooling to showcase, outcomes expected, etc."
            />
          </div>
          <Button size="lg">Send invitations</Button>
        </CardContent>
      </Card>
    </div>
  )
}

