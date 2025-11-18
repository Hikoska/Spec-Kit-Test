"use client"

import { useState } from 'react'
import { MonitorUp } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ScreenShare() {
  const [isSharing, setIsSharing] = useState(false)

  return (
    <Card>
      <CardHeader className="flex items-center justify-between">
        <CardTitle className="text-base">Screen Share</CardTitle>
        <MonitorUp className="h-4 w-4 text-slate-500" />
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          Showcase current tooling, dashboards, or workflows. Redact sensitive data before sharing.
        </p>
        <Button variant={isSharing ? 'destructive' : 'secondary'} onClick={() => setIsSharing((prev) => !prev)}>
          {isSharing ? 'Stop sharing' : 'Start sharing'}
        </Button>
      </CardContent>
    </Card>
  )
}

