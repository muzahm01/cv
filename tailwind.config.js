/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Engineering Blueprint Palette
        obsidian: '#0A0A0B',
        'obsidian-light': '#121214',
        'obsidian-lighter': '#1a1a1d',

        // Cyber Green - "System Healthy" status
        'cyber-green': '#00FF41',
        'cyber-green-dim': '#00CC34',
        'cyber-green-glow': 'rgba(0, 255, 65, 0.15)',

        // Electric Blue - Secondary accent
        'electric-blue': '#0099FF',
        'electric-blue-dim': '#0077CC',

        // Grid/Border colors (low opacity)
        'grid-line': 'rgba(255, 255, 255, 0.06)',
        'grid-line-active': 'rgba(0, 255, 65, 0.2)',

        // Text hierarchy
        'text-primary': '#E5E5E5',
        'text-secondary': '#888888',
        'text-muted': '#555555',

        // Legacy support
        primary: '#00FF41',
        'primary-dark': '#0099FF',
        'bg-dark': '#0A0A0B',
        'bg-mid': '#121214',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'grid-pattern-dense': 'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '40px 40px',
        'grid-dense': '20px 20px',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'blink': 'blink 1s step-end infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 255, 65, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 255, 65, 0.4)' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 20px rgba(0, 255, 65, 0.3)',
        'glow-green-sm': '0 0 10px rgba(0, 255, 65, 0.2)',
        'glow-blue': '0 0 20px rgba(0, 153, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
