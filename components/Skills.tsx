'use client'

import { motion } from 'framer-motion'
import { Code2, TestTube2, Server, Smartphone, GitBranch, Users, FileCheck, Bug } from 'lucide-react'

// Skills data organized by category
const skillCategories = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    description: 'Primary programming languages',
    skills: ['Python'],
    gridClass: 'md:col-span-1 md:row-span-1',
    accent: true,
  },
  {
    id: 'automation',
    title: 'Test Automation',
    icon: TestTube2,
    description: 'Frameworks & tools',
    skills: ['Pytest', 'Appium'],
    gridClass: 'md:col-span-1 md:row-span-1',
    accent: true,
  },
  {
    id: 'mobile',
    title: 'Mobile Testing',
    icon: Smartphone,
    description: 'Platform expertise',
    skills: ['Android', 'iOS'],
    gridClass: 'md:col-span-1 md:row-span-1',
    accent: true,
  },
  {
    id: 'infrastructure',
    title: 'CI/CD & Infrastructure',
    icon: Server,
    description: 'Build & deploy systems',
    skills: ['GitHub Actions', 'CI Infrastructure', 'Pipeline Optimization'],
    gridClass: 'md:col-span-2 md:row-span-1',
    accent: true,
  },
  {
    id: 'planning',
    title: 'Test Planning',
    icon: GitBranch,
    description: 'Documentation & strategy',
    skills: ['Test Plans', 'Test Cases', 'Test Scripts', 'Framework Design'],
    gridClass: 'md:col-span-1 md:row-span-1',
    accent: true,
  },
  {
    id: 'testing-types',
    title: 'Testing Types',
    icon: FileCheck,
    description: 'Methodologies & approaches',
    skills: ['Integration', 'Smoke', 'Acceptance', 'E2E', 'Regression', 'Exploratory'],
    gridClass: 'md:col-span-2 md:row-span-1',
    accent: true,
  },
  {
    id: 'collaboration',
    title: 'Collaboration',
    icon: Users,
    description: 'Team practices',
    skills: ['Cross-functional Teams', 'Design Discussions', 'Pair Programming'],
    gridClass: 'md:col-span-1 md:row-span-1',
    accent: true,
  },
  {
    id: 'issue-tracking',
    title: 'Issue Tracking',
    icon: Bug,
    description: 'Quality management',
    skills: ['Defect Reporting', 'Bug Tracking', 'Regression Automation'],
    gridClass: 'md:col-span-3 md:row-span-1',
    accent: true,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-header">Technical Stack</h2>
          <p className="text-text-secondary max-w-2xl">
            A decade of experience building test automation frameworks and quality assurance systems.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                className={`stack-category group ${category.gridClass} ${category.accent ? 'border-cyber-green/20' : ''
                  }`}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 ${category.accent ? 'bg-cyber-green/10' : 'bg-obsidian'} border border-grid-line`}>
                    <Icon className={`w-4 h-4 ${category.accent ? 'text-cyber-green' : 'text-text-muted'} group-hover:text-cyber-green transition-colors`} />
                  </div>
                  <div>
                    <h3 className="font-mono text-sm font-medium text-text-primary">
                      {category.title}
                    </h3>
                    <p className="font-mono text-xs text-text-muted">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${category.accent
                          ? 'border-cyber-green/30 text-cyber-green bg-cyber-green/5'
                          : ''
                        }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-8 py-6 border-t border-grid-line"
        >
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-cyber-green">8+</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Skill Categories</div>
          </div>
          <div className="w-px h-8 bg-grid-line hidden md:block" />
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-text-primary">Python</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Primary Language</div>
          </div>
          <div className="w-px h-8 bg-grid-line hidden md:block" />
          <div className="text-center">
            <div className="font-mono text-2xl font-bold text-text-primary">Pytest</div>
            <div className="font-mono text-xs text-text-muted uppercase tracking-wider">Test Framework</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
