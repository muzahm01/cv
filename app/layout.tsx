import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muzamil Ahmed - Senior Software Test Engineer',
  description: 'Senior Software Test Engineer at ŌURA with over a decade of experience in software testing and quality assurance.',
  keywords: 'Software Test Engineer, QA Engineer, Python, Pytest, Test Automation, CI/CD',
  authors: [{ name: 'Muzamil Ahmed' }],
  openGraph: {
    title: 'Muzamil Ahmed - Senior Software Test Engineer',
    description: 'Senior Software Test Engineer at ŌURA',
    url: 'https://muzamil.fi',
    siteName: 'Muzamil Ahmed CV',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
