function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: ['React', 'JavaScript', 'HTML & CSS', 'TypeScript']
    },
    {
      category: 'Backend & Databases',
      skills: ['Python', 'Java', 'SQL']
    },
    {
      category: 'Tools & Workflow',
      skills: ['Git', 'Responsive Design', 'UI/UX']
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life.
        </p>

        <div className="skills-categories-grid">
          {skillCategories.map((group, index) => (
            <div className="skill-category-card" key={index}>
              <h3>{group.category}</h3>
              <div className="skills-list">
                {group.skills.map((skill, skillIndex) => (
                  <span className="skill-badge" key={skillIndex}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;