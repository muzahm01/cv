import cvData from '@/cv-data.json'

export default function Education() {
  const education = cvData.education

  return (
    <section className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Education</h2>
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="border-l-2 border-primary/30 pl-6 relative">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
            <h3 className="text-lg font-semibold text-text-primary">{edu.institution}</h3>
            <p className="text-text-secondary">{edu.degree}</p>
            <p className="text-sm text-primary">{edu.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
