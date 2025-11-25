export default function Footer() {
  return (
    <footer className="section-card text-center">
      <h2 className="text-2xl font-bold mb-4 gradient-text">References</h2>
      <p className="text-text-secondary">Available upon request.</p>
      <div className="mt-8 pt-6 border-t border-primary/20 no-print">
        <p className="text-sm text-text-secondary">
          © {new Date().getFullYear()} Muzamil Ahmed. All rights reserved.
        </p>
        <p className="text-xs text-text-secondary mt-2">
          Built with Next.js and Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
