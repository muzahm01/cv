'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

// Project interface
interface Project {
  title: string
  description: string
  technologies: string[]
  testingInsight: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

// Project data based on professional experience and research
const projects: Project[] = [
  {
    title: 'ŌURA Mobile Test Framework',
    description: 'Developed and maintained comprehensive test automation frameworks using Python, Pytest, and Appium for Android and iOS applications. Enhanced architecture for improved modularity and scalability.',
    technologies: ['Python', 'Pytest', 'Appium', 'Android', 'iOS'],
    testingInsight: 'E2E Mobile Testing',
    featured: true,
  },
  {
    title: 'CI/CD Pipeline Optimization',
    description: 'Implemented robust CI/CD pipelines using GitHub Actions, improving deployment efficiency and reducing iOS build times by 20%.',
    technologies: ['GitHub Actions', 'CI/CD', 'Docker', 'Shell'],
    testingInsight: 'Pipeline Automation',
    featured: true,
  },
  {
    title: 'IoT Device Testing Platform',
    description: 'Developed comprehensive test plans for IoT-connected device services at Pelion. Built Pytest function library for system test automation.',
    technologies: ['Python', 'Pytest', 'IoT', 'REST API'],
    testingInsight: 'Integration Testing',
  },
  {
    title: 'TDD Research Publication',
    description: 'Co-authored research on the effectiveness of unit tests in test-driven development, published in International Conference on Software and System Process.',
    technologies: ['Research', 'TDD', 'Unit Testing', 'Metrics'],
    testingInsight: 'Built with TDD',
    liveUrl: 'https://dl.acm.org/doi/10.1145/3202710.3203153',
  },
  {
    title: 'Regression Test Automation',
    description: 'Managed and automated regression tests at ARM, reducing defect leakage by 25% through systematic test coverage improvements.',
    technologies: ['Python', 'Pytest', 'Regression', 'CI'],
    testingInsight: 'Regression Automation',
  },
  {
    title: 'Smartphone Battery Assessment',
    description: 'Research contribution to monetary assessment of battery life on smartphones, published at CHI Conference on Human Factors.',
    technologies: ['Mobile', 'Research', 'Data Analysis'],
    testingInsight: 'User Research',
    liveUrl: 'https://dl.acm.org/doi/10.1145/2858036.2858432',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4 bg-obsidian-light/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-header">Projects & Research</h2>
          <p className="text-text-secondary max-w-2xl">
            Key projects and research contributions demonstrating expertise in test automation, CI/CD, and quality engineering.
          </p>
        </motion.div>

        {/* Projects Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              testingInsight={project.testingInsight}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/muzahm01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}
