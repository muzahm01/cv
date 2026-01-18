'use client'

import { useState } from 'react'
import { Github, Linkedin, Mail, Bug, Terminal, Heart } from 'lucide-react'

export default function Footer() {
  const [bugReportOpen, setBugReportOpen] = useState(false)
  const [bugSubmitted, setBugSubmitted] = useState(false)

  const handleBugReport = () => {
    if (!bugReportOpen) {
      setBugReportOpen(true)
    } else if (!bugSubmitted) {
      setBugSubmitted(true)
      setTimeout(() => {
        setBugSubmitted(false)
        setBugReportOpen(false)
      }, 3000)
    }
  }

  return (
    <footer className="py-12 px-4 border-t border-grid-line">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="font-mono text-sm text-text-primary">
              <span className="text-cyber-green">{'<'}</span>
              Muzamil Ahmed
              <span className="text-cyber-green">{' />'}</span>
            </div>
            <p className="text-text-secondary text-sm">
              Senior Software Test Engineer building robust automation frameworks and CI/CD pipelines.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2">
              <a href="#skills" className="text-text-secondary hover:text-cyber-green transition-colors text-sm">
                Technical Stack
              </a>
              <a href="#projects" className="text-text-secondary hover:text-cyber-green transition-colors text-sm">
                Projects
              </a>
              <a href="#experience" className="text-text-secondary hover:text-cyber-green transition-colors text-sm">
                Experience
              </a>
              <a href="/resume" className="text-text-secondary hover:text-cyber-green transition-colors text-sm">
                Resume
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-text-muted uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/muzahm01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-grid-line hover:border-cyber-green hover:text-cyber-green text-text-secondary transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/muzamilahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-grid-line hover:border-cyber-green hover:text-cyber-green text-text-secondary transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:muzkpr@gmail.com"
                className="p-2 border border-grid-line hover:border-cyber-green hover:text-cyber-green text-text-secondary transition-all"
                aria-label="Send Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-grid-line pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-text-muted text-xs font-mono">
              © {new Date().getFullYear()} Muzamil Ahmed. Built with{' '}
              <Heart className="w-3 h-3 inline text-cyber-green" /> and tested thoroughly.
            </p>

            {/* Bug Report Easter Egg */}
            <div className="relative">
              <button
                onClick={handleBugReport}
                className="group inline-flex items-center gap-2 px-3 py-1.5 border border-grid-line hover:border-cyber-green text-text-muted hover:text-cyber-green transition-all font-mono text-xs"
                aria-label="Report a bug"
              >
                <Bug className="w-3 h-3 group-hover:animate-pulse" />
                <span>{bugReportOpen ? (bugSubmitted ? 'Bug Squashed!' : 'Click to Submit') : 'Found a Bug?'}</span>
              </button>

              {/* Bug Report Modal */}
              {bugReportOpen && !bugSubmitted && (
                <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-obsidian-light border border-grid-line shadow-lg">
                  <div className="font-mono text-xs space-y-2">
                    <div className="flex items-center gap-2 text-cyber-green">
                      <Terminal className="w-3 h-3" />
                      <span>Bug Report Terminal</span>
                    </div>
                    <div className="text-text-muted">
                      <span className="text-cyber-green">$</span> describe_bug --severity
                    </div>
                    <p className="text-text-secondary text-xs">
                      As a QA engineer, I appreciate your attention to quality! Click the button again to "submit" your bug report.
                    </p>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {bugSubmitted && (
                <div className="absolute bottom-full right-0 mb-2 w-64 p-4 bg-cyber-green/10 border border-cyber-green/30 shadow-lg">
                  <div className="font-mono text-xs text-cyber-green space-y-1">
                    <div>TEST PASSED</div>
                    <div className="text-text-secondary">
                      Bug report received! QA approved.
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Terminal-style status */}
        <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-text-muted">
            <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" />
            <span>All systems operational</span>
            <span className="text-text-muted">•</span>
            <span>v1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
