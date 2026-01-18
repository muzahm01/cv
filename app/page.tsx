import Hero from '@/components/Hero'
import Skills from '@/components/Skills'

import Experience from '@/components/ExperienceTimeline'

export default function Home() {
  return (
    <>
      {/* Hero Section - Quality Dashboard */}
      <Hero />

      {/* Technical Stack - Bento Grid */}
      <Skills />



      {/* Experience Timeline */}
      <Experience />
    </>
  )
}
