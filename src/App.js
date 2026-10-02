import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
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

        <section id="skills" className="section">
          <h2>Skills</h2>
          <p>
            I have strong expertise in UI development, React, JavaScript,
            TypeScript, HTML, CSS, and responsive design.
          </p>

          <div className="skills-list">
            <span>React</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>HTML</span>
            <span>CSS</span>
            <span>Git</span>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p>Some of my recent work and personal projects.</p>
        </section>

        <section id="contact" className="section contact">
          <h2>Let's Connect</h2>
          <p>Have a project in mind? Send me a message.</p>
          <a href="mailto:jimiakideni@gmail.com">jimiakideni@gmail.com</a>
        </section>
      </main>
    </div>
  );
}

export default App;