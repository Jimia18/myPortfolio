function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-small-text">
          Hello, I'm
        </p>

        <h1>
          My First Name
        </h1>

        <h2>
          Software Developer
        </h2>

        <p className="hero-description">
          I build modern, responsive and user-friendly
          applications using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">
            View My Work
          </a>

          <a href="#contact" className="btn secondary-btn">
            Contact Me
          </a>
        </div>

      </div>

    </section>
  );
}

export default Hero;