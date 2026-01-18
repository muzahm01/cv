import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/ExperienceTimeline'

export default function Home() {
  return (
    <>
      {/* Hero Section - Quality Dashboard */}
      <Hero />

      {/* Technical Stack - Bento Grid */}
      <Skills />

      {/* Projects Section */}
      <Projects />

      {/* Experience Timeline */}
      <Experience />
    </>
  )
}
