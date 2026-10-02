function Skills() {
  const skills = [
    'HTML & CSS',
    'JavaScript',
    'Python',
    'Java',
    'SQL',
    'React'
  ];

  return (
    <section id="skills" className="section skills-section">

      <div className="section-container">

        <h2 className="section-title">
          My Skills
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <h3>{skill}</h3>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;