import cvData from '@/cv-data.json'

export default function Introduction() {
  return (
    <section className="section-card">
      <h2 className="text-3xl font-bold mb-4 gradient-text">Introduction</h2>
      <p className="text-text-secondary leading-relaxed">
        {cvData.introduction}
      </p>
    </section>
  )
}
