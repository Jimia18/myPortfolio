function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built with React.',
      technology: 'React',
      image: '/images/portfolioInspo.png',
    },
    {
      title: 'Book Management System',
      description: 'A system for managing book information and records.',
      technology: 'Java / SQL',
      image: '/images/bookSystemImage.png',
    },
    {
      title: 'Web Application',
      description: 'A modern web application designed to solve a real-world problem.',
      technology: 'HTML / CSS / JavaScript',
      image: '/images/KayzonaleWebproject.png',
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="section-container">
        <h2 className="section-title">
          My Projects
        </h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span>{project.technology}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;