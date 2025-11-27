# Professional CV/Resume Generator

A modern, accessible CV/resume website with automated multi-format generation (HTML, PDF, DOCX) using LaTeX, Pandoc, and GitHub Actions.

## Features

- ✨ **Modern Design**: Glassmorphism aesthetic with gradient effects
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ♿ **Accessible**: WCAG compliant with ARIA labels, keyboard navigation, and screen reader support
- 🎨 **Themeable**: CSS variables for easy customization
- 📄 **Multi-format**: Generates HTML, PDF, and DOCX versions
- 🔍 **SEO Optimized**: Comprehensive meta tags, Open Graph, and JSON-LD structured data
- ⚡ **Performance**: Optimized JavaScript with efficient DOM manipulation
- 🔐 **Secure**: External link protection and modern security practices
- 🖨️ **Print-friendly**: Dedicated print styles for clean hard copies
- 🚀 **Automated Deployment**: GitHub Actions CI/CD pipeline

## 🎯 Live Demo

Visit the live site: [https://muzahm01.github.io/cv/](https://muzahm01.github.io/cv/)
OR 
www.muzamil.fi

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Local Development](#local-development)
- [Build Process](#build-process)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Deployment](#deployment)
- [Accessibility](#accessibility)
- [Browser Support](#browser-support)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

To build this project locally, you need:

### Required

- **LaTeX Distribution** (TeX Live recommended)
  ```bash
  # macOS
  brew install --cask mactex

  # Ubuntu/Debian
  sudo apt-get install texlive-latex-recommended texlive-latex-extra texlive-fonts-recommended texlive-xetex

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

### Optional (for development)

- **Make** (build automation)
- **Git** (version control)
- **Node.js** (if adding build tools)

## 🚀 Local Development

### Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/muzahm01/cv.git
   cd cv
   ```

2. **Build all formats**
   ```bash
   make all
   ```

3. **Open the HTML version**
   ```bash
   open index.html  # macOS
   xdg-open index.html  # Linux
   start index.html  # Windows
   ```

### Individual Build Commands

```bash
# Build HTML only
make html

# Build PDF only
make pdf

# Build DOCX only
make docx

# Clean build artifacts
make clean

# Validate HTML
make validate

# Run accessibility tests
make a11y-test
```

## 🏗️ Build Process

### How It Works

1. **Source**: Edit `cv.tex` with your resume content
2. **Template**: `template.html` provides the HTML structure
3. **Styling**: `styles.css` contains all visual styles
4. **Interactivity**: `script.js` handles navigation and accessibility
5. **Conversion**: Pandoc converts LaTeX → HTML/PDF/DOCX
6. **Deployment**: GitHub Actions automatically builds and deploys

### Pandoc Conversion

```bash
# HTML generation with custom template
pandoc cv.tex \
  -o index.html \
  --standalone \
  --self-contained \
  --template=template.html \
  --metadata title="Muzamil Ahmed - CV"

# PDF generation
pandoc cv.tex \
  -o cv.pdf \
  --pdf-engine=xelatex

# DOCX generation
pandoc cv.tex \
  -o cv.docx
```

## 📁 Project Structure

```
cv/
├── cv.tex                          # LaTeX source (edit this!)
├── template.html                   # HTML template
├── styles.css                      # Stylesheet with CSS variables
├── script.js                       # Navigation and accessibility
├── Makefile                        # Build automation
├── .github/
│   └── workflows/
│       └── Build_Publish_CV.yml   # CI/CD pipeline
├── .gitignore                      # Git ignore rules
├── .editorconfig                   # Editor configuration
├── README.md                       # This file
├── LICENSE                         # Project license
├── index.html                      # Generated HTML (output)
├── cv.pdf                          # Generated PDF (output)
└── cv.docx                         # Generated DOCX (output)
```

## 🎨 Customization

### Updating Content

1. Edit `cv.tex` with your information
2. Run `make all` to regenerate all formats
3. Preview `index.html` in your browser

### Changing Colors/Theme

Edit CSS variables in `styles.css`:

```css
:root {
    /* Primary colors */
    --color-primary: #00ffff;        /* Cyan - main accent */
    --color-primary-dark: #0099ff;   /* Blue - secondary accent */

    /* Text colors */
    --color-text-primary: #e4e6eb;   /* Light gray */
    --color-text-secondary: #a8b2d1; /* Medium gray */

    /* Background colors */
    --color-bg-dark: #0a0e27;        /* Dark blue */
    --color-bg-mid: #1a1f3a;         /* Mid blue */
}
```

### Modifying Layout

- **Spacing**: Adjust spacing variables in `styles.css`
- **Typography**: Modify font-size variables
- **Breakpoints**: Update media queries for different responsive behavior

### Adding Sections

1. Add content to `cv.tex` using LaTeX sections
2. Sections are automatically added to navigation
3. Pandoc converts LaTeX sections to HTML `<section>` elements

## 🚀 Deployment

### GitHub Pages (Automatic)

The project uses GitHub Actions for automatic deployment:

1. Push changes to the `main` branch
2. GitHub Actions builds HTML/PDF/DOCX
3. Site deploys to `https://[username].github.io/cv/`

### Manual Deployment

1. Build locally: `make all`
2. Copy `index.html`, `cv.pdf`, `cv.docx`, `styles.css`, `script.js` to your web server
3. Ensure proper MIME types are set

## ♿ Accessibility

This project follows WCAG 2.1 Level AA standards:

- ✅ **Keyboard Navigation**: Full keyboard support with arrow keys
- ✅ **Screen Readers**: ARIA labels and live regions
- ✅ **Focus Management**: Visible focus indicators
- ✅ **Reduced Motion**: Respects `prefers-reduced-motion`
- ✅ **Color Contrast**: Meets WCAG contrast ratios
- ✅ **Semantic HTML**: Proper heading hierarchy and landmarks
- ✅ **Skip Links**: Skip-to-content for keyboard users

### Testing Accessibility

```bash
# Run accessibility tests (requires npm packages)
make a11y-test

# Manual testing checklist:
# - Tab through all navigation
# - Test with screen reader (VoiceOver, NVDA, JAWS)
# - Verify color contrast
# - Test print styles
```

## 🌐 Browser Support

- ✅ Chrome/Edge (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ Internet Explorer: Not supported

### Graceful Degradation

- Fallback colors for unsupported gradient text
- Alternative background for browsers without `backdrop-filter`
- `<noscript>` fallback for disabled JavaScript

## 🔧 Troubleshooting

### Build Errors

**Error**: `pandoc: command not found`
- **Solution**: Install Pandoc (see [Prerequisites](#prerequisites))

**Error**: `! LaTeX Error: File 'geometry.sty' not found`
- **Solution**: Install full TeX distribution with all packages

**Error**: Navigation not working
- **Solution**: Ensure `script.js` is loaded and check browser console

### Styling Issues

**Issue**: Gradient text showing as black
- **Cause**: Browser doesn't support `-webkit-background-clip`
- **Solution**: Fallback color is automatically applied

**Issue**: Glassmorphism effect not showing
- **Cause**: Browser doesn't support `backdrop-filter`
- **Solution**: Solid background fallback is provided

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Guidelines

- Follow existing code style
- Test in multiple browsers
- Ensure accessibility is maintained
- Update documentation as needed
- Add tests for new features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Muzamil Ahmed**

- GitHub: [@muzahm01](https://github.com/muzahm01)
- LinkedIn: [muzamilahmed](https://linkedin.com/in/muzamilahmed)

## 🙏 Acknowledgments

- [Pandoc](https://pandoc.org/) for document conversion
- [TeX Live](https://www.tug.org/texlive/) for LaTeX processing
- [GitHub Pages](https://pages.github.com/) for hosting
- [WCAG](https://www.w3.org/WAI/WCAG21/quickref/) for accessibility guidelines

## 📚 Resources

- [Pandoc User's Guide](https://pandoc.org/MANUAL.html)
- [LaTeX Documentation](https://www.latex-project.org/help/documentation/)
- [Web Accessibility](https://www.w3.org/WAI/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

**Note**: Remember to update personal information in `cv.tex`, meta tags in `template.html`, and this README before deploying.

For questions or issues, please [open an issue](https://github.com/muzahm01/cv/issues) on GitHub.
