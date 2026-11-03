import './App.css'
import alna from "./assets/alna.png"
import Aura from"./assets/Aura.png"

function App() {
  const projects = [
  {
    title: "Portfolio Website",
    category: "WEB DESIGN & DEVELOPMENT",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=700",
  },
  {
    title: "Aura Gift Shop",
    category: "REACT JS DEVELOPMENT",
    year: "2026",
    image:Aura,
  },
  {
    title: "Creative Landing Page",
    category: "UI DESIGN & DEVELOPMENT",
    year: "2026",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700",
  },
];

const skills = [
  ["01", "HTML & CSS", "Building structured and responsive layouts."],
  ["02", "JavaScript", "Creating interactive web experiences."],
  ["03", "React JS", "Developing reusable UI components."],
  ["04", "Responsive Design", "Designing for desktop, tablet, and mobile."],
];

  return (
    <>
    <section>
        <div className='navbar'>
          <div className='navbar-menu'>
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="#Projects">Projects</a>
            {/* <a href="#Skills">Skills</a> */}
          </div>
          <div className='navbar-btn'>
            <button>Let's Talk</button>
          </div>
        </div>
      </section>
    <section className="portfolio-section" id="Home">
      <div className="portfolio-top">
        <span>ALNA · FRONTEND DEVELOPER</span>
        <div className="top-line"></div>
        <span>2026</span>
      </div>
      <h1 className="portfolio-title">PORTFOLIO</h1>

      <div className="portfolio-content">
        <div className="portfolio-text">
          <span className="small-heading">HELLO, I'M</span>

          <h2>Alna.</h2>

          <h3>Front-End Developer</h3>

          <p>
            I create beautiful, responsive and user-friendly
            websites using React and modern web technologies.
            I turn creative ideas into meaningful digital
            experiences.
          </p>

          <a  href="/Alna.pdf"
          download="Alna.pdf"className="portfolio-btn">
            Download CV <span>↗</span>
          </a>
     
        </div>
        <div className="portfolio-image">
          <img src={alna} alt="" />
          
        </div>
      </div>
      <div className="portfolio-footer">
        
      </div>

      {/* ABOUT AND SKILLS */}
      <section className="about-section" id="About">
        <div className="about-column">
          <h2 className="section-heading">ABOUT ME</h2>

          <p className="about-text">
            I am a passionate Frontend Developer with an interest
            in creating beautiful, accessible, and user-friendly
            websites. I enjoy turning ideas into interactive
            digital experiences using React JS.
          </p>

          <p className="about-text">
            I am continuously learning new technologies and
            improving my development skills to build better
            web experiences.
          </p>

          <p className="about-note">
            CREATIVITY · CODE · CONTINUOUS LEARNING
          </p>
        </div>

        <div className="skills-column" id="skills">
          <h2 className="section-heading">WHAT I DO</h2>

          {skills.map(([number, title, description]) => (
            <div className="skill-item" key={number}>
              <span className="skill-number">{number}</span>

              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
       <section className="tech-section">
        <h2 className="section-heading">
          TECHNOLOGIES I WORK WITH
        </h2>

        <div className="tech-list">
          <span>HTML5</span>
          <span>CSS3</span>
          <span>JAVASCRIPT</span>
          <span>REACT JS</span>
          <span>GIT & GITHUB</span>
        </div>
      </section>
      
    </section>
     <main className="portfolio">
      {/* FEATURED PROJECTS */}
      <section className="projects" id="Projects">
        <h2 className="section-heading light-heading">
          ✦ FEATURED PROJECTS ✦
        </h2>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <h3>{project.title}</h3>
              <p>{project.category}</p>
              <span>{project.year}</span>
            </article>
          ))}
        </div>
      </section>

      {/* TECHNOLOGIES */}
     

      {/* CONTACT */}
      <footer className="contact-section" id="contact">
        <div className="contact-left">
          <p className="eyebrow">HAVE A PROJECT IN MIND?</p>
          <h2>LET'S BUILD SOMETHING GREAT.</h2>
          <p>
            I am excited to learn, collaborate, and create
            meaningful digital experiences.
          </p>
        </div>

        <div className="contact-right">
        

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            ↗ GITHUB
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            ↗ LINKEDIN
          </a>
        </div>

        <div className="footer-bottom">
          <span>FRONTEND DEVELOPER</span>
          <span>DESIGNED WITH CREATIVITY © 2026</span>
        </div>
      </footer>
    </main>
    </>
  )
}
export default App
