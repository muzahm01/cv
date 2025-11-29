'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
            </div>

            <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-xl md:text-2xl text-primary font-medium mb-4">
                        Hello, I'm Muzamil Ahmed
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
                        Senior Software <br />
                        <span className="gradient-text">Test Engineer</span>
                    </h1>
                    <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
                        Specializing in test automation, CI/CD optimization, and quality assurance.
                        Building robust frameworks for high-quality software delivery.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="/projects"
                            className="px-8 py-3 bg-primary hover:bg-primary-dark text-bg-dark font-bold rounded-full transition-all flex items-center gap-2 group"
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            href="/resume"
                            className="px-8 py-3 glass-panel hover:bg-white/5 text-white font-medium rounded-full transition-all"
                        >
                            View Resume
                        </Link>
                    </div>

                    <div className="mt-12 flex items-center justify-center gap-6 text-text-secondary">
                        <a
                            href="https://github.com/muzahm01"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Github className="w-6 h-6" />
                        </a>
                        <a
                            href="https://linkedin.com/in/muzamilahmed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a
                            href="mailto:muzkpr@gmail.com"
                            className="hover:text-primary transition-colors"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
