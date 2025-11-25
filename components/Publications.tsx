const publications = [
  {
    authors: 'Tosun, A., Ahmed, M., Turhan, B., & Juristo, N.',
    year: '2018',
    title: 'On the effectiveness of unit tests in test-driven development.',
    venue: 'Proceedings of the International Conference on Software and System Process',
    pages: '113-122',
  },
  {
    authors: 'Hosio, S., Ferreira, D., Goncalves, J., Van Berkel, N., Luo, C., Ahmed, M., et al.',
    year: '2016',
    title: 'Monetary assessment of battery life on smartphones.',
    venue: 'Proceedings of the CHI Conference on Human Factors in Computing Systems',
    pages: '1869-1880',
  },
  {
    authors: 'Anagnostopoulos, T., Ferreira, D., Samodelkin, A., Ahmed, M., & Kostakos, V.',
    year: '2016',
    title: 'Cyclist-aware traffic lights through distributed smartphone sensing.',
    venue: 'Pervasive and Mobile Computing',
    pages: '31, 22-36',
  },
]

export default function Publications() {
  return (
    <section className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Publications</h2>
      <div className="space-y-4">
        {publications.map((pub, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-4 py-2">
            <p className="text-text-secondary">
              {pub.authors} ({pub.year}). <span className="italic">{pub.title}</span>{' '}
              <span className="text-text-primary">{pub.venue}</span>, {pub.pages}.
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
