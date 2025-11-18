import VideoInterface from '@/components/interview/VideoInterface'
import AIInterviewer from '@/components/interview/AIInterviewer'
import ScreenShare from '@/components/interview/ScreenShare'
import TranscriptionPanel from '@/components/interview/TranscriptionPanel'

type Props = {
  params: { id: string }
}

export default function InterviewRoom({ params }: Props) {
  return (
    <div className="mx-auto max-w-6xl space-y-8 px-6 py-10">
      <div className="flex flex-col gap-2">
        <p className="text-sm uppercase tracking-wider text-slate-500">
          Interview session
        </p>
        <h1 className="text-3xl font-semibold text-slate-900">
          Room {params.id}
        </h1>
        <p className="text-slate-500">
          Stay on camera, follow the AI interviewer, and share relevant
          workflows.
        </p>
      </div>
      <VideoInterface />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-6">
          <AIInterviewer />
          <TranscriptionPanel />
        </div>
        <ScreenShare />
      </div>
    </div>
  )
}

