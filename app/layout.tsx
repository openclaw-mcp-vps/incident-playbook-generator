import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Playbook Generator',
  description: 'Generate incident response playbooks from past outages. AI-powered step-by-step playbooks with team assignments and escalation paths for DevOps and SRE teams.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="b06ad506-79e2-494d-9ca7-41864be19d11"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
