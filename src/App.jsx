import { useEffect, useState } from "react";
import "./style.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <div className="app">

      {/* BACKGROUND */}
      <div className="ambient ambient-one"></div>
      <div className="ambient ambient-two"></div>
      <div className="noise"></div>

      {/* NAVIGATION */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div
          className="logo"
          onClick={() => scrollToSection("home")}
        >
          <span className="logo-mark">E</span>
          <span className="logo-name">ERNURVYNX</span>
        </div>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <button onClick={() => scrollToSection("home")}>
            Home
          </button>

          <button onClick={() => scrollToSection("work")}>
            Work
          </button>

          <button onClick={() => scrollToSection("about")}>
            About
          </button>

          <button onClick={() => scrollToSection("contact")}>
            Contact
          </button>
        </nav>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <span></span>
          <span></span>
        </button>
      </header>

      {/* HERO */}
      <main>

        <section id="home" className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              <span className="status-dot"></span>
              DIGITAL CREATIVE STUDIO
            </div>

            <h1>
              Ideas become
              <br />
              <span>digital reality.</span>
            </h1>

            <p className="hero-description">
              We create websites, digital experiences and
              experimental technologies designed to feel
              different from everything around them.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button"
                onClick={() => scrollToSection("work")}
              >
                Explore work
                <span>↗</span>
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollToSection("about")}
              >
                Discover ERNURVYNX
              </button>
            </div>

          </div>

          {/* HERO VISUAL */}
          <div className="hero-visual">

            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="core">

              <div className="core-inner">
                <span>EV</span>
              </div>

              <div className="core-line line-one"></div>
              <div className="core-line line-two"></div>

            </div>

            <div className="floating-label label-one">
              <span>01</span>
              DIGITAL
            </div>

            <div className="floating-label label-two">
              <span>02</span>
              CREATIVE
            </div>

            <div className="floating-label label-three">
              <span>03</span>
              FUTURE
            </div>

          </div>

          <div className="hero-scroll">
            <span>SCROLL TO EXPLORE</span>
            <div className="scroll-line"></div>
          </div>

        </section>


        {/* WORK */}
        <section id="work" className="section work-section">

          <div className="section-heading">

            <div>
              <span className="section-number">01 / WORK</span>

              <h2>
                Selected
                <br />
                <em>experiments.</em>
              </h2>
            </div>

            <p>
              A collection of digital concepts,
              interfaces and experiences built
              around curiosity.
            </p>

          </div>


          <div className="project-grid">

            <article className="project project-large">

              <div className="project-visual visual-one">
                <div className="project-glow"></div>

                <div className="mini-interface">
                  <div className="mini-top"></div>
                  <div className="mini-title">
                    PAYFLOW
                  </div>
                  <div className="mini-number">
                    08
                  </div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span>01</span>
                  <h3>PayFlow</h3>
                </div>

                <p>
                  Fintech interface / Web experience
                </p>
              </div>

            </article>


            <article className="project">

              <div className="project-visual visual-two">
                <div className="circle-system">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span>02</span>
                  <h3>Neural</h3>
                </div>

                <p>
                  AI concept / Interactive system
                </p>
              </div>

            </article>


            <article className="project">

              <div className="project-visual visual-three">
                <div className="typography-art">
                  <span>CREATE</span>
                  <span>WITHOUT</span>
                  <span>LIMITS</span>
                </div>
              </div>

              <div className="project-info">
                <div>
                  <span>03</span>
                  <h3>VX Studio</h3>
                </div>

                <p>
                  Visual identity / Digital design
                </p>
              </div>

            </article>

          </div>

        </section>


        {/* ABOUT */}
        <section id="about" className="section about-section">

          <div className="about-left">

            <span className="section-number">
              02 / ABOUT
            </span>

            <h2>
              Not another
              <br />
              <em>template.</em>
            </h2>

          </div>

          <div className="about-right">

            <p className="about-lead">
              ERNURVYNX is an independent digital
              creative project focused on building
              things that are useful, expressive
              and slightly unexpected.
            </p>

            <div className="about-grid">

              <div>
                <strong>01</strong>
                <span>Web experiences</span>
              </div>

              <div>
                <strong>02</strong>
                <span>AI & technology</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Creative systems</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Digital experiments</span>
              </div>

            </div>

          </div>

        </section>


        {/* STATEMENT */}
        <section className="statement-section">

          <div className="statement-line"></div>

          <p>
            WE BUILD
          </p>

          <h2>
            DIGITAL
            <br />
            <span>THINGS.</span>
          </h2>

          <div className="statement-bottom">
            <span>ERNURVYNX — 2026</span>
            <span>KEEP EXPLORING ↗</span>
          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <span className="section-number">
            03 / CONTACT
          </span>

          <h2>
            Have an idea?
            <br />
            <em>Let's build it.</em>
          </h2>

          <button className="contact-button">
            Start a conversation
            <span>↗</span>
          </button>

        </section>

      </main>


      {/* FOOTER */}
      <footer>

        <div className="footer-brand">
          <span className="footer-logo">E</span>

          <div>
            <strong>ERNURVYNX</strong>
            <span>Digital creative studio</span>
          </div>
        </div>

        <div className="footer-right">
          <span>© 2026</span>
          <span>Built with curiosity.</span>
        </div>

      </footer>

    </div>
  );
}

export default App;
