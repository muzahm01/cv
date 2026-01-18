import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Muzamil Ahmed | Senior Software Test Engineer',
  description: 'Senior Software Test Engineer at ŌURA with 10+ years of experience in test automation, CI/CD pipelines, and quality assurance. Specializing in Python, Pytest, and mobile testing.',
  keywords: 'Software Test Engineer, SDET, QA Engineer, Python, Pytest, Appium, Test Automation, CI/CD, Mobile Testing, Quality Assurance',
  authors: [{ name: 'Muzamil Ahmed' }],
  creator: 'Muzamil Ahmed',
  openGraph: {
    title: 'Muzamil Ahmed | Senior Software Test Engineer',
    description: 'Senior Software Test Engineer at ŌURA. Building robust test automation frameworks and CI/CD pipelines.',
    url: 'https://muzamil.fi',
    siteName: 'Muzamil Ahmed - Engineering Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muzamil Ahmed | Senior Software Test Engineer',
    description: 'Senior Software Test Engineer at ŌURA. Building robust test automation frameworks and CI/CD pipelines.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="min-h-screen bg-obsidian blueprint-grid">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
