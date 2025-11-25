const experiences = [
  {
    company: 'ŌURA',
    role: 'Senior Software Test Engineer',
    period: 'July 2021 – Present',
    responsibilities: [
      'Developed and maintained test automation frameworks using Python, Pytest, and Appium for Android and iOS applications.',
      'Enhanced automation library architecture for improved modularity and scalability.',
      'Implemented CI/CD pipelines using GitHub Actions, improving deployment efficiency.',
      'Improved CI infrastructure for iOS devices and simulators, reducing build times by 20%.',
      'Collaborated with infrastructure teams to refine CI workflows, enhancing pipeline robustness.',
    ],
  },
  {
    company: 'Pelion',
    role: 'Senior Test Development Engineer',
    period: 'April 2021 – July 2021',
    responsibilities: [
      'Optimized test automation scripts using Python and Pytest, increasing execution efficiency by 15%.',
      'Collaborated with cross-functional teams to review system requirements and test plans, ensuring high-quality product delivery.',
    ],
  },
  {
    company: 'Pelion',
    role: 'Senior Test Development Engineer',
    period: 'November 2020 – April 2021',
    responsibilities: [
      'Developed comprehensive test plans to enhance coverage for IoT-connected device services.',
      'Assisted in designing a Pytest function library for system test automation.',
      'Participated in design discussions, pair programming, and exploratory testing sessions.',
    ],
  },
  {
    company: 'ARM',
    role: 'Test Development Engineer',
    period: 'April 2017 – November 2020',
    responsibilities: [
      'Performed integration, smoke, acceptance, and end-to-end testing for IoT management platforms and device connectivity.',
      'Reviewed system requirements, feature requests, test plans, and test code.',
      'Contributed to design meetings, pair programming, and exploratory testing.',
      'Developed and managed test plans and automation scripts using Python and Pytest.',
      'Managed regression tests and issue tracking, reducing defect leakage by 25%.',
    ],
  },
  {
    company: 'ARM',
    role: 'Graduate Engineer',
    period: 'March 2016 – April 2017',
    responsibilities: [
      'Conducted integration, smoke, and end-to-end system testing.',
      'Reviewed system requirements, change requests, test plans, and test code.',
      'Created test plans and automation scripts using Python and in-house tools.',
      'Automated regression tests and managed issue reporting.',
    ],
  },
  {
    company: 'i2c Inc',
    role: 'Senior Software QA Engineer',
    period: 'April 2009 – August 2012',
    responsibilities: [
      'Created, executed, and maintained test documents and scripts.',
      'Performed detailed feature and regression testing.',
      'Reported, recorded, and re-verified defects.',
      'Participated in analysis meetings and reviewed test strategies.',
    ],
  },
]

export default function Experience() {
  return (
    <section className="section-card">
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
