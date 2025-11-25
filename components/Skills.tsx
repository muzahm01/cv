export default function Skills() {
  const skills = [
    { category: 'Programming', items: ['Python'] },
    { category: 'Test Automation', items: ['Pytest', 'Appium'] },
    { category: 'Mobile Testing', items: ['Android', 'iOS'] },
    { category: 'CI/CD', items: ['GitHub Actions', 'CI infrastructure'] },
    {
      category: 'Testing Types',
      items: ['Integration', 'Smoke', 'Acceptance', 'E2E', 'Regression', 'Exploratory']
    },
    {
      category: 'Test Planning',
      items: ['Test plans', 'Test cases', 'Test scripts', 'Frameworks']
    },
    {
      category: 'Collaboration',
      items: ['Cross-functional teams', 'Design discussions', 'Pair programming']
    },
    {
      category: 'Issue Tracking',
      items: ['Defect reporting', 'Tracking', 'Regression automation']
    },
  ]

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
