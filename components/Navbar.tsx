'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { clsx } from 'clsx'

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Resume', path: '/resume' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-obsidian/80 backdrop-blur-md border border-grid-line px-6 py-3 flex items-center justify-between">
          <ul className="flex items-center justify-between w-full gap-2 sm:gap-6">
            {navItems.map((item) => {
              const isActive = pathname === item.path
              return (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={clsx(
                      'relative px-3 py-1.5 font-mono text-sm transition-colors duration-200',
                      isActive
                        ? 'text-cyber-green'
                        : 'text-text-secondary hover:text-text-primary'
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-cyber-green/10 border border-cyber-green/30 -z-10"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                    {item.name}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}
