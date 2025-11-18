import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Toaster } from 'sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Digital Maturity Audit Platform',
  description:
    'AI-powered audits with adaptive interviews, instant scoring, and enterprise-ready reporting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-b from-background via-white to-slate-50">
          {children}
        </div>
        <Toaster richColors position="top-right" />
      </body>
    </html>
  )
}

