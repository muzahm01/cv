# Professional CV/Resume

A modern, responsive CV/resume website built with Next.js, React, TypeScript, and Tailwind CSS. Features automated PDF generation from LaTeX source and deployment to Cloudflare Pages.

## Features

- ⚡ **Next.js 14**: Modern React framework with static site generation
- 🎨 **Tailwind CSS**: Utility-first CSS with custom design system
- 📘 **TypeScript**: Type-safe component development
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- 🔄 **Dual-Source Architecture**: Single LaTeX source generates both PDF and web content
- 📄 **PDF Generation**: Automated PDF creation from cv.tex using Pandoc
- 🎯 **Component-Based**: Modular React components for easy maintenance
- 🚀 **Cloudflare Pages**: Fast global CDN deployment with branch previews
- ♿ **Accessible**: Semantic HTML with ARIA support
- 🎨 **Custom Theme**: Glassmorphism design with cyan/blue gradient accents
- 🔍 **SEO Optimized**: Meta tags and Open Graph support

## 🎯 Live Demo

Visit the live site: [www.muzamil.fi](https://www.muzamil.fi)

## 📋 Table of Contents

- [Architecture](#architecture)
- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Build Process](#build-process)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## 🏗️ Architecture

### Dual-Source System

This project uses a unique dual-source architecture:

1. **Source of Truth**: `cv.tex` (LaTeX file)
   - Single source for all CV content
   - Professional LaTeX formatting
   - Used for PDF generation

2. **Web Parser**: `parse-cv.js`
   - Parses `cv.tex` and extracts structured data
   - Generates `cv-data.json` for React components
   - Runs automatically before build

3. **Web Application**: Next.js/React/TypeScript
   - Reads `cv-data.json`
   - Renders modern, responsive UI
   - Static export for optimal performance

### Technology Stack

- **Framework**: Next.js 14 (static export mode)
- **UI Library**: React 18
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3
- **Icons**: react-icons
- **Font**: Inter (Google Fonts)
- **PDF Generation**: Pandoc + XeLaTeX
- **Deployment**: Cloudflare Pages
- **CI/CD**: GitHub Actions

## Prerequisites

### Required

- **Node.js** (version 20 or later)
  ```bash
  # macOS
  brew install node

  # Ubuntu/Debian
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs

  # Windows
  # Download from https://nodejs.org/
  ```

### Optional (for PDF generation)

- **LaTeX Distribution** (TeX Live recommended)
  ```bash
  # macOS
  brew install --cask mactex

  # Ubuntu/Debian
  sudo apt-get install texlive-latex-base texlive-latex-recommended texlive-fonts-recommended texlive-xetex

  # Windows
  # Download and install MiKTeX from https://miktex.org/
  ```

- **Pandoc** (document converter)
  ```bash
  # macOS
  brew install pandoc

  # Ubuntu/Debian
  sudo apt-get install pandoc

  # Windows
  # Download from https://pandoc.org/installing.html
  ```

## 🚀 Local Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/muzahm01/cv.git
   cd cv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

```bash
# Parse cv.tex and extract data to cv-data.json
npm run parse

# Start development server (parses CV first, then starts Next.js dev server)
npm run dev

# Build for production (parses CV first, then builds static site)
npm run build

# Start production server (after build)
npm start

# Run linter
npm run lint

# Build and export static site
npm run export
```

### Development Workflow

1. **Edit Content**: Update `cv.tex` with your information
2. **Parse**: Run `npm run parse` to extract data (or just run `npm run dev`)
3. **Develop**: The dev server will hot-reload on component changes
4. **Build**: Run `npm run build` to create production build

## 📁 Project Structure

```
cv/
├── app/
│   ├── layout.tsx              # Root layout with metadata
│   ├── page.tsx                # Main page component
│   └── globals.css             # Global styles and Tailwind imports
├── components/
│   ├── Header.tsx              # Name, title, contact info
│   ├── Introduction.tsx        # Professional summary
│   ├── Skills.tsx              # Technical skills
│   ├── Experience.tsx          # Work experience
│   ├── Education.tsx           # Education history
│   ├── Certifications.tsx      # Professional certifications
│   ├── Publications.tsx        # Research publications
│   └── Footer.tsx              # Social links and footer
├── .github/
│   └── workflows/
│       └── Deploy_Cloudflare_Pages.yml  # CI/CD pipeline
├── cv.tex                      # LaTeX source (EDIT THIS!)
├── parse-cv.js                 # CV parser script
├── cv-data.json                # Generated JSON data (auto-generated)
├── cv.pdf                      # Generated PDF (auto-generated)
├── next.config.js              # Next.js configuration
├── tailwind.config.js          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.js           # PostCSS configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

## 🎨 Customization

### Updating Content

**Option 1: Edit cv.tex (Recommended)**

1. Edit `cv.tex` with your information
2. Run `npm run parse` to regenerate `cv-data.json`
3. Run `npm run dev` to preview changes

**Option 2: Edit Components Directly**

Modify individual component files in `components/` for custom layouts or additional sections.

### Changing Colors/Theme

Edit `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#00ffff',           // Cyan - main accent
      'primary-dark': '#0099ff',    // Blue - secondary accent
      'bg-dark': '#0a0e27',         // Dark blue background
      'bg-mid': '#1a1f3a',          // Mid blue background
      'text-primary': '#e4e6eb',    // Light gray text
      'text-secondary': '#a8b2d1',  // Medium gray text
    },
  },
}
```

### Adding New Sections

1. **Update cv.tex**: Add new LaTeX section
2. **Update parse-cv.js**: Add parsing logic for the new section
3. **Create Component**: Add new React component in `components/`
4. **Update page.tsx**: Import and render the new component

### Modifying Layout

- **Global Layout**: Edit `app/layout.tsx` for HTML structure and metadata
- **Page Layout**: Edit `app/page.tsx` for component order and spacing
- **Component Styles**: Use Tailwind classes in component files

## 🚀 Deployment

### Cloudflare Pages (Automatic)

The project uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch or any `claude/**` branch
2. GitHub Actions:
   - Installs dependencies
   - Parses cv.tex to generate cv-data.json
   - Generates PDF from cv.tex using Pandoc
   - Builds Next.js static site
   - Copies PDF to output directory
   - Deploys to Cloudflare Pages
3. Site deploys to production or preview URL

### Branch Previews

Every push to a `claude/**` branch creates a preview deployment:
- **Main branch**: Deploys to production (`www.muzamil.fi`)
- **Feature branches**: Deploy to preview URLs (visible in GitHub Actions summary)

### Manual Deployment

1. Build locally:
   ```bash
   npm run build
   ```

2. Generate PDF (optional):
   ```bash
   pandoc cv.tex -s -o cv.pdf --pdf-engine=xelatex --variable geometry:margin=1in
   cp cv.pdf out/cv.pdf
   ```

3. Deploy the `out/` directory to your hosting provider

## 🔧 Build Process

### Complete Build Pipeline

```mermaid
cv.tex
  ├─> parse-cv.js ─> cv-data.json ─> React Components ─> Next.js Build ─> Static Site (out/)
  └─> Pandoc + XeLaTeX ──────────────────────────────> cv.pdf ────────────> out/cv.pdf
```

### Detailed Steps

1. **Parse LaTeX Source**
   ```bash
   node parse-cv.js
   # Reads cv.tex
   # Extracts: name, title, skills, experience, education, etc.
   # Outputs: cv-data.json
   ```

2. **Build Next.js Application**
   ```bash
   next build
   # Reads cv-data.json
   # Renders React components
   # Generates static HTML/CSS/JS
   # Outputs: out/ directory
   ```

3. **Generate PDF**
   ```bash
   pandoc cv.tex -s -o cv.pdf --pdf-engine=xelatex
   # Converts LaTeX to PDF
   # Outputs: cv.pdf
   ```

4. **Deploy**
   ```bash
   # GitHub Actions copies cv.pdf to out/
   # Deploys out/ to Cloudflare Pages
   ```

## 🌐 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer: Not supported

### Progressive Enhancement

- CSS Grid and Flexbox for layouts
- CSS Custom Properties (via Tailwind)
- Modern JavaScript (ES6+)
- Graceful degradation for older browsers

## 🔧 Troubleshooting

### Development Issues

**Issue**: `Module not found` errors
- **Solution**: Run `npm install` to install dependencies

**Issue**: CV data not updating
- **Solution**: Run `npm run parse` to regenerate `cv-data.json`

**Issue**: Port 3000 already in use
- **Solution**: Kill the process on port 3000 or set a different port:
  ```bash
  PORT=3001 npm run dev
  ```

### Build Issues

**Issue**: `pandoc: command not found` during CI
- **Solution**: Pandoc is installed automatically in GitHub Actions

**Issue**: TypeScript errors
- **Solution**: Run `npm run lint` to check for errors

**Issue**: Build fails with memory error
- **Solution**: Increase Node.js memory:
  ```bash
  NODE_OPTIONS=--max-old-space-size=4096 npm run build
  ```

### PDF Generation Issues

**Issue**: PDF not generated
- **Solution**: Ensure LaTeX and Pandoc are installed (see [Prerequisites](#prerequisites))

**Issue**: LaTeX errors
- **Solution**: Check cv.tex syntax, ensure all packages are installed

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Use TypeScript for all new components
- Follow existing code style
- Use Tailwind CSS for styling (avoid custom CSS)
- Test in multiple browsers
- Ensure accessibility is maintained
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muzamil Ahmed**

- Website: [www.muzamil.fi](https://www.muzamil.fi)
- GitHub: [@muzahm01](https://github.com/muzahm01)
- LinkedIn: [muzamilahmed](https://linkedin.com/in/muzamilahmed)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Pandoc](https://pandoc.org/) - Document conversion
- [Cloudflare Pages](https://pages.cloudflare.com/) - Hosting and CDN
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library
- [Google Fonts](https://fonts.google.com/) - Inter font

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Pandoc User's Guide](https://pandoc.org/MANUAL.html)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

---

**Note**: Update your information in `cv.tex` and metadata in `app/layout.tsx` before deploying.

For questions or issues, please [open an issue](https://github.com/muzahm01/cv/issues) on GitHub.
