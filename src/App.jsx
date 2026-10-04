import { useEffect } from "react";
function App() {
    useEffect(() => {
    const sections = document.querySelectorAll(".section, .register");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  return (
    <main className="site">

      {/* NAVIGATION */}
      <header className="nav">
        <div className="nav-left">CHERRY NETWORK</div>
        <div className="nav-center">THE LAST COMMIT</div>
        <button className="nav-menu">MENU ↗</button>
      </header>


      {/* HERO */}
      <section className="hero">

        <div className="hero-meta hero-meta-left">
          <span>01 / 05</span>
          <span>WEB HACKATHON</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">SRMIST × CHERRY NETWORK</p>

          <h1>
            THE LAST
            <br />
            <span>COMMIT.</span>
          </h1>

          <p className="hero-description">
            Build what remains.
          </p>
        </div>

        <div className="commit-orbit">
          <div className="orbit orbit-one"></div>
          <div className="orbit orbit-two"></div>

          <div className="commit-core">
            <span>◉</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-arrow">↓</span>
        </div>

      </section>


      {/* IDEA */}
      <section className="section idea">

        <div className="section-number">02 / 05</div>

        <div className="section-label">THE IDEA</div>

        <h2>
          What if this
          <br />
          was your <span>last</span>
          <br />
          commit?
        </h2>

        <p className="section-text">
          Every project starts with an idea.
          Every idea eventually becomes something real.
          The Last Commit is a challenge to build something
          worth leaving behind.
        </p>

      </section>


      {/* CHALLENGE */}
      <section className="section challenge">

        <div className="section-number">03 / 05</div>

        <div className="section-label">THE CHALLENGE</div>

        <div className="challenge-grid">

          <div className="challenge-item">
            <span>01</span>
            <h3>BUILD</h3>
            <p>
              Take an idea and turn it into an experience.
            </p>
          </div>

          <div className="challenge-item">
            <span>02</span>
            <h3>BREAK</h3>
            <p>
              Experiment. Question. Push beyond the obvious.
            </p>
          </div>

          <div className="challenge-item">
            <span>03</span>
            <h3>COMMIT</h3>
            <p>
              Ship something you're proud to put your name on.
            </p>
          </div>

        </div>

      </section>


      {/* TIMELINE */}
      <section className="section timeline">

        <div className="section-number">04 / 05</div>

        <div className="section-label">THE TIMELINE</div>

        <div className="timeline-list">

          <div className="timeline-item">
            <span>01</span>
            <div>
              <small>REGISTER</small>
              <h3>Join the challenge</h3>
            </div>
          </div>

          <div className="timeline-item">
            <span>02</span>
            <div>
              <small>BUILD</small>
              <h3>Turn your idea into reality</h3>
            </div>
          </div>

          <div className="timeline-item">
            <span>03</span>
            <div>
              <small>SUBMIT</small>
              <h3>Make your last commit</h3>
            </div>
          </div>

          <div className="timeline-item">
            <span>04</span>
            <div>
              <small>WIN</small>
              <h3>Let your work speak</h3>
            </div>
          </div>

        </div>

      </section>


      {/* REGISTER */}
      <section className="register">

        <p className="section-label">05 / 05 — FINAL COMMIT</p>

        <h2>
          MAKE YOUR
          <br />
          <span>LAST COMMIT.</span>
        </h2>

        <button className="register-button">
          REGISTER NOW ↗
        </button>

      </section>


      {/* FOOTER */}
      <footer className="footer">
        <span>THE LAST COMMIT</span>
        <span>CHERRY NETWORK × SRMIST</span>
        <span>© 2026</span>
      </footer>

    </main>
  );  
}

export default App;