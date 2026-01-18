'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, TestTube2 } from 'lucide-react'

export interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  testingInsight: string
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

export default function ProjectCard({
  title,
  description,
  technologies,
  testingInsight,
  githubUrl,
  liveUrl,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`project-card group ${featured ? 'md:col-span-2 border-cyber-green/20' : ''}`}
    >
      {/* Testing Insight Badge */}
      <div className="flex items-center gap-2 mb-4">
        <span className="project-card-badge">
          <TestTube2 className="w-3 h-3" />
          <span>{testingInsight}</span>
        </span>
        {featured && (
          <span className="px-2 py-1 font-mono text-xs bg-electric-blue/10 text-electric-blue border border-electric-blue/20">
            Featured
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3 className="font-mono text-lg font-semibold text-text-primary mb-2 group-hover:text-cyber-green transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-text-secondary text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span key={tech} className="skill-badge text-xs py-1 px-2">
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-grid-line">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-cyber-green transition-colors font-mono text-xs"
            aria-label={`View ${title} source code on GitHub`}
          >
            <Github className="w-4 h-4" />
            <span>Source</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-text-muted hover:text-cyber-green transition-colors font-mono text-xs"
            aria-label={`View ${title} live demo`}
          >
            <ExternalLink className="w-4 h-4" />
            <span>Live</span>
          </a>
        )}
      </div>
    </motion.article>
  )
}
