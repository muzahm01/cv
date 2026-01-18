'use client'

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin } from 'lucide-react'

// Experience data from CV
const experiences = [
  {
    company: 'ŌURA',
    role: 'Senior Software Test Engineer',
    period: 'July 2021 – Present',
    location: 'Oulu, Finland',
    current: true,
    highlights: [
      'Developed and maintained test automation frameworks using Python, Pytest, and Appium for Android and iOS applications',
      'Enhanced automation library architecture for improved modularity and scalability',
      'Implemented CI/CD pipelines using GitHub Actions, improving deployment efficiency',
      'Improved CI infrastructure for iOS devices and simulators, reducing build times by 20%',
      'Collaborated with infrastructure teams to refine CI workflows, enhancing pipeline robustness',
    ],
  },
  {
    company: 'Pelion',
    role: 'Senior Test Development Engineer',
    period: 'April 2021 – July 2021',
    location: 'Oulu, Finland',
    current: false,
    highlights: [
      'Optimized test automation scripts using Python and Pytest, increasing execution efficiency by 15%',
      'Collaborated with cross-functional teams to review system requirements and test plans',
    ],
  },
  {
    company: 'Pelion',
    role: 'Senior Test Development Engineer',
    period: 'November 2020 – April 2021',
    location: 'Oulu, Finland',
    current: false,
    highlights: [
      'Developed comprehensive test plans for IoT-connected device services',
      'Designed Pytest function library for system test automation',
      'Participated in design discussions, pair programming, and exploratory testing sessions',
    ],
  },
  {
    company: 'ARM',
    role: 'Test Development Engineer',
    period: 'April 2017 – November 2020',
    location: 'Oulu, Finland',
    current: false,
    highlights: [
      'Performed integration, smoke, acceptance, and end-to-end testing for IoT platforms',
      'Developed and managed test plans and automation scripts using Python and Pytest',
      'Managed regression tests and issue tracking, reducing defect leakage by 25%',
    ],
  },
  {
    company: 'ARM',
    role: 'Graduate Engineer',
    period: 'March 2016 – April 2017',
    location: 'Oulu, Finland',
    current: false,
    highlights: [
      'Conducted integration, smoke, and end-to-end system testing',
      'Created test plans and automation scripts using Python and in-house tools',
      'Automated regression tests and managed issue reporting',
    ],
  },
  {
    company: 'i2c Inc',
    role: 'Senior Software QA Engineer',
    period: 'April 2009 – August 2012',
    location: 'Lahore, Pakistan',
    current: false,
    highlights: [
      'Created, executed, and maintained test documents and scripts',
      'Performed detailed feature and regression testing',
      'Participated in analysis meetings and reviewed test strategies',
    ],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' as const },
  },
}

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="section-header">Experience</h2>
          <p className="text-text-secondary max-w-2xl">
            A decade of progressive experience in software testing and quality assurance.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-green via-grid-line to-transparent" />

          {/* Experience Items */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                variants={itemVariants}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-0 md:left-8 top-2 w-3 h-3 -translate-x-1/2 border-2 ${
                    exp.current
                      ? 'bg-cyber-green border-cyber-green shadow-glow-green-sm'
                      : 'bg-obsidian border-text-muted'
                  }`}
                />

                {/* Experience Card */}
                <div className={`bento-card p-6 ${exp.current ? 'border-cyber-green/20' : ''}`}>
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        {exp.current && (
                          <span className="status-online font-mono text-xs text-cyber-green">
                            Current
                          </span>
                        )}
                      </div>
                      <h3 className="font-mono text-lg font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                        <Briefcase className="w-4 h-4" />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-1 text-text-muted font-mono text-xs">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="flex items-start gap-2 text-text-secondary text-sm"
                      >
                        <span className="text-cyber-green mt-1.5 text-xs">{'>'}</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Career Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 pt-8 border-t border-grid-line"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="font-mono text-2xl font-bold text-cyber-green">10+</div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Years Experience
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">4</div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Companies
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">6</div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Roles
              </div>
            </div>
            <div>
              <div className="font-mono text-2xl font-bold text-text-primary">3</div>
              <div className="font-mono text-xs text-text-muted uppercase tracking-wider">
                Countries
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
