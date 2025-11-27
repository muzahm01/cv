'use client'

import { FaEnvelope, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

export default function Header() {
  return (
    <header className="section-card text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-2">
        <span className="gradient-text">Muzamil Ahmed</span>
      </h1>
      <p className="text-xl md:text-2xl text-text-secondary mb-4">
        Senior Software Test Engineer at ŌURA
      </p>
      <p className="text-lg text-text-secondary mb-6">
        Oulu, Finland
      </p>

      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <a
          href="mailto:muzkpr@gmail.com"
          className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <FaEnvelope />
          <span>muzkpr@gmail.com</span>
        </a>
        <a
          href="https://linkedin.com/in/muzamilahmed"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <FaLinkedin />
          <span>linkedin.com/in/muzamilahmed</span>
        </a>
        <a
          href="https://github.com/muzahm01"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors"
        >
          <FaGithub />
          <span>github.com/muzahm01</span>
        </a>
      </div>

      <a
        href="/cv.pdf"
        download="Muzamil_Ahmed_CV.pdf"
        className="no-print inline-flex items-center gap-2 px-6 py-3 bg-primary text-bg-dark font-semibold rounded-lg hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/30"
      >
        <FaDownload />
        Download PDF
      </a>
    </header>
  )
}
