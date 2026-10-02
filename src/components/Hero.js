function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <span className="hero-label">Welcome to my Portfolio</span>

        <h1>
          Hi! I'm Jimia, a <br />
          <br />
          Full-Stack Developer
        </h1>

        <p>
          I'm a front-end developer with 3 years of experience in React,
          HTML, CSS, JavaScript, and TypeScript. I focus on building
          modern, responsive web apps with clean design and great user
          experience.
        </p>

        <a href="#contact" className="hero-link">
          Let's Connect <span>→</span>
        </a>
      </div>

      <div className="hero-art" aria-hidden="true">
        <div className="planet">
          <div className="astronaut">◉</div>
        </div>
      </div>
    </section>
  );
}

export default Hero;