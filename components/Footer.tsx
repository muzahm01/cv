import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="py-8 text-center text-text-secondary">
            <div className="flex justify-center gap-6 mb-4">
                <a
                    href="https://github.com/muzahm01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                >
                    <Github className="w-5 h-5" />
                </a>
                <a
                    href="https://linkedin.com/in/muzamilahmed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                >
                    <Linkedin className="w-5 h-5" />
                </a>
                <a
                    href="mailto:muzkpr@gmail.com"
                    className="hover:text-primary transition-colors"
                >
                    <Mail className="w-5 h-5" />
                </a>
            </div>
            <p className="text-sm">
                © {new Date().getFullYear()} Muzamil Ahmed. All rights reserved.
            </p>
        </footer>
    )
}
