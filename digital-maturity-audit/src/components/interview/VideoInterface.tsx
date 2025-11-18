"use client"

import { useState } from 'react'
import { Video, Mic, MicOff, Monitor, MonitorOff } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function VideoInterface() {
  const [isMicOn, setIsMicOn] = useState(true)
  const [isScreenSharing, setIsScreenSharing] = useState(false)

  return (
    <Card className="relative aspect-video w-full bg-slate-900 text-white">
      <div className="absolute inset-0 flex items-center justify-center">
        <Video className="h-16 w-16 text-slate-500" />
      </div>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-3">
        <Button
          variant={isMicOn ? 'secondary' : 'destructive'}
          onClick={() => setIsMicOn((prev) => !prev)}
        >
          {isMicOn ? <Mic className="mr-2 h-4 w-4" /> : <MicOff className="mr-2 h-4 w-4" />}
          {isMicOn ? 'Mute' : 'Unmute'}
        </Button>
        <Button
          variant={isScreenSharing ? 'secondary' : 'outline'}
          onClick={() => setIsScreenSharing((prev) => !prev)}
        >
          {isScreenSharing ? (
            <MonitorOff className="mr-2 h-4 w-4" />
          ) : (
            <Monitor className="mr-2 h-4 w-4" />
          )}
          {isScreenSharing ? 'Stop Share' : 'Share Screen'}
        </Button>
      </div>
    </Card>
  )
}

