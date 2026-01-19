import cvData from '@/cv-data.json'

export default function Publications() {
  const publications = cvData.publications

  return (
    <section id="publications" className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
            <p className="text-text-secondary">
              {pub.authors.replace(/\\&/g, '&')} ({pub.year}). <span className="italic">{pub.title}</span>{' '}
              <span className="text-text-primary">{pub.venue}</span>, {pub.pages}.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
