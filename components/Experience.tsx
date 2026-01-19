import cvData from '@/cv-data.json'

export default function Experience() {
  const experiences = cvData.experience

  return (
    <section id="experience" className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Professional Experience</h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-6 border-l-2 border-primary/30">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full" />
            <div className="mb-4">
              <h3 className="text-xl font-bold text-text-primary">{exp.company}</h3>
              <p className="text-lg text-primary">{exp.role}</p>
              <p className="text-sm text-text-secondary">{exp.period}</p>
            </div>
            <ul className="space-y-2 text-text-secondary">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="flex gap-2">
                  <span className="text-primary mt-1.5">•</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
