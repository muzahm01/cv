const certifications = [
  {
    name: 'AI For Everyone',
    issuer: 'Coursera',
    date: 'August 2022',
    credentialId: '5JW7QZLUCSPM',
  },
  {
    name: 'Build Local Development Environments Using Docker Containers',
    issuer: 'Coursera',
    date: 'January 2022',
    credentialId: 'WNRNTBLZWXEF',
  },
  {
    name: 'Docker for Absolute Beginners',
    issuer: 'Coursera',
    date: 'December 2021',
    credentialId: 'JX5M2CR8BTRV',
  },
]

export default function Certifications() {
  return (
    <section className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Certifications</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="bg-bg-dark/50 border border-primary/20 rounded-lg p-4 hover:border-primary/40 transition-colors"
          >
            <h3 className="text-lg font-semibold text-text-primary mb-2">{cert.name}</h3>
            <p className="text-sm text-text-secondary">{cert.issuer}</p>
            <p className="text-sm text-primary">Issued: {cert.date}</p>
            <p className="text-xs text-text-secondary mt-2">
              Credential ID: <span className="font-mono">{cert.credentialId}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
