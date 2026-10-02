
const Navbar = () => {
  return (
    <header className="navbar">
      {/* Logo */}
      <a href="#home" className="navbar-logo">
        <span className="logo-text">Jk</span>
      </a>

      {/* Navigation Links */}
      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Social Links and Connect Button */}
      <div className="navbar-actions">
        <a
          href="https://linkedin.com"
          className="social-link"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          in
        </a>

        <a
          href="mailto:jimiakideni@gmail.com"
          className="social-link"
          aria-label="Email"
        >
          @
        </a>

        <a href="#contact" className="connect-button">
          Let's Connect
        </a>
      </div>
    </header>
  );
};

export default Navbar;
