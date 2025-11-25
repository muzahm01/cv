# Next.js CV - Setup and Development Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- Tailwind CSS
- TypeScript
- React Icons

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your CV.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## Project Structure

```
cv/
├── app/                      # Next.js app directory
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Main CV page
│   └── globals.css          # Global styles with Tailwind
├── components/              # React components
│   ├── Header.tsx           # Name, contact, download button
│   ├── Introduction.tsx     # Introduction section
│   ├── Skills.tsx           # Skills with badges
│   ├── Experience.tsx       # Work experience timeline
│   ├── Education.tsx        # Education history
│   ├── Certifications.tsx   # Certifications grid
│   ├── Publications.tsx     # Publications list
│   └── Footer.tsx           # References and footer
├── .github/workflows/       # GitHub Actions
│   └── Deploy_Cloudflare_Pages.yml  # Cloudflare deployment
├── public/                  # Static assets (add images here)
├── package.json             # Dependencies and scripts
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## Available Scripts

### Development
```bash
npm run dev        # Start dev server at localhost:3000
```

### Production
```bash
npm run build      # Build static export
npm run start      # Preview production build locally
```

### Code Quality
```bash
npm run lint       # Run ESLint
```

## Customization

### Update Content

Edit the components in the `components/` directory:

**Personal Info:**
- `components/Header.tsx` - Name, title, contact info

**Sections:**
- `components/Introduction.tsx` - Introduction text
- `components/Skills.tsx` - Add/remove skills
- `components/Experience.tsx` - Update work history
- `components/Education.tsx` - Update education
- `components/Certifications.tsx` - Update certifications
- `components/Publications.tsx` - Update publications

### Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#00ffff',        // Main accent color
  'primary-dark': '#0099ff', // Secondary accent
  'bg-dark': '#0a0e27',      // Dark background
  'bg-mid': '#1a1f3a',       // Mid background
  'text-primary': '#e4e6eb', // Primary text
  'text-secondary': '#a8b2d1', // Secondary text
},
```

### Change Fonts

Update `app/layout.tsx`:

```typescript
import { Inter, Roboto, Open_Sans } from 'next/font/google'

const font = Roboto({
  subsets: ['latin'],
  weight: ['400', '700']
})
```

### Add Your Photo

1. Add image to `public/photo.jpg`
2. Update `components/Header.tsx`:

```typescript
import Image from 'next/image'

// Add in Header component:
<Image
  src="/photo.jpg"
  alt="Muzamil Ahmed"
  width={200}
  height={200}
  className="rounded-full mb-4"
/>
```

## Features

### ✨ Modern Design
- Glassmorphism effects
- Gradient text
- Smooth animations
- Professional color scheme

### 📱 Fully Responsive
- Mobile-first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation

### ♿ Accessible
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Screen reader friendly

### 🎨 Customizable
- CSS variables via Tailwind
- Component-based architecture
- Easy to modify and extend

### 🖨️ Print-Friendly
- Optimized print styles
- "Download as PDF" button (uses browser's print dialog)
- Hides unnecessary elements when printing

### 🚀 Performance
- Static site generation
- Optimized images
- Minimal JavaScript
- Fast page loads

## PDF Generation

### Method 1: Browser Print (Built-in)

Click the "Download as PDF" button or use browser print:
- Chrome: `Ctrl+P` (Windows) or `Cmd+P` (Mac)
- Select "Save as PDF"
- Adjust margins if needed

### Method 2: Automated PDF (Optional)

Add a PDF generation service like:

```bash
npm install puppeteer
```

Create `scripts/generate-pdf.js`:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
  await page.pdf({
    path: 'cv.pdf',
    format: 'A4',
    printBackground: true
  });
  await browser.close();
})();
```

Add to `package.json`:
```json
"scripts": {
  "pdf": "node scripts/generate-pdf.js"
}
```

## Deployment

### Cloudflare Pages (Recommended)

See `CLOUDFLARE_DEPLOYMENT.md` for complete setup instructions.

**Quick overview:**
1. Create Cloudflare Pages project
2. Get API token and Account ID
3. Add secrets to GitHub:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Push to trigger deployment

### Other Platforms

#### Vercel
```bash
npm install -g vercel
vercel
```

#### Netlify
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=out
```

#### GitHub Pages
Update `next.config.js`:
```javascript
const nextConfig = {
  output: 'export',
  basePath: '/cv',
  images: { unoptimized: true },
}
```

## Troubleshooting

### Build Errors

**"Cannot find module"**
```bash
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors**
```bash
npm run lint
# Fix the errors shown
```

**Port already in use**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use a different port
npm run dev -- -p 3001
```

### Styling Issues

**Tailwind classes not working**
- Make sure file is listed in `tailwind.config.js` content array
- Restart dev server

**Fonts not loading**
- Check Next.js font import
- Verify internet connection (Google Fonts)

### Performance

**Slow build times**
```bash
# Clear Next.js cache
rm -rf .next
npm run build
```

**Large bundle size**
- Check `npm run build` output
- Use dynamic imports for large components
- Optimize images

## Migration from LaTeX

Your original LaTeX workflow (`cv.tex` → Pandoc → HTML/PDF) is still available if needed.

**Keep both versions:**
- LaTeX for traditional PDF
- Next.js for modern web version

**Or remove LaTeX:**
```bash
# Remove LaTeX files (optional)
rm cv.tex template.html Makefile
rm .github/workflows/Build_Publish_CV.yml
```

## Support

Need help?
- Check [Next.js documentation](https://nextjs.org/docs)
- Check [Tailwind CSS documentation](https://tailwindcss.com/docs)
- Review `CLOUDFLARE_DEPLOYMENT.md` for deployment issues
- Ask me for assistance!

---

**Happy coding! 🚀**
