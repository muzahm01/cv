'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail, Terminal, Activity, CheckCircle2, Zap } from 'lucide-react'

// Metrics data representing key achievements
const metrics = [
  {
    value: '10+',
    label: 'Years Experience',
    icon: Activity,
    status: 'operational',
  },
  {
    value: '25%',
    label: 'Defect Reduction',
    icon: CheckCircle2,
    status: 'operational',
  },
  {
    value: '20%',
    label: 'Faster CI Builds',
    icon: Zap,
    status: 'operational',
  },
  {
    value: '3',
    label: 'Publications',
    icon: Terminal,
    status: 'operational',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' as const },
  },
}

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-16">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-obsidian to-obsidian-light opacity-50 pointer-events-none" />

      {/* Blueprint grid accent lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-green/10 to-transparent" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-green/5 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyber-green/5 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* System Status Header */}
          <motion.div variants={itemVariants} className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-grid-line bg-obsidian-light/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyber-green animate-pulse" />
              <span className="font-mono text-xs text-cyber-green uppercase tracking-wider">
                System Online — All Services Operational
              </span>
            </div>
          </motion.div>

          {/* Main Title Block */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="font-mono text-text-muted text-sm tracking-widest uppercase">
              {'<'} Muzamil Ahmed {'/>'}
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight">
              <span className="text-text-primary">Senior Software</span>
              <br />
              <span className="text-cyber-green">Test Engineer</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-sans leading-relaxed">
              Building robust test automation frameworks and CI/CD pipelines at{' '}
              <span className="text-cyber-green font-medium">ŌURA</span>.
              Specializing in Python, Pytest, and mobile testing.
            </p>
          </motion.div>

          {/* Metrics Dashboard Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                className="metric-card group"
              >
                <div className="flex items-start justify-between mb-3">
                  <metric.icon className="w-4 h-4 text-text-muted group-hover:text-cyber-green transition-colors" />
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyber-green" />
                  </div>
                </div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/resume" className="btn-primary group">
              <span>View Full Resume</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="#skills" className="btn-secondary">
              <span>Explore Tech Stack</span>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/muzahm01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyber-green transition-colors p-2"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/muzamilahmed"
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-muted hover:text-cyber-green transition-colors p-2"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:muzkpr@gmail.com"
              className="text-text-muted hover:text-cyber-green transition-colors p-2"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Terminal-style footer */}
          <motion.div
            variants={itemVariants}
            className="text-center pt-8"
          >
            <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted">
              <span className="text-cyber-green">$</span>
              <span>scroll down to explore</span>
              <span className="animate-blink">_</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
