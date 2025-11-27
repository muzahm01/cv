import cvData from '@/cv-data.json'

export default function Skills() {
  const skills = cvData.skills

  return (
    <section className="section-card">
      <h2 className="text-3xl font-bold mb-6 gradient-text">Skills</h2>
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.category}>
            <h3 className="text-lg font-semibold text-primary mb-2">{skill.category}</h3>
            <div className="flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <span key={item} className="skill-badge">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
