
import React, { useEffect, useState } from "react";
import "./portfolio.css";
import profileImage from "./assets/Manal.jpeg";

const projects = [
  {
    title: "Medical Reference Assistant",
    category: "AI • Healthcare • RAG",
    description:
      "A retrieval-augmented medical reference assistant designed to provide evidence-based answers from trusted medical literature and clinical guidelines, with source citations and conflict detection.",
    technologies: ["RAG", "FastAPI", "React", "ChromaDB", "Python"],
    featured: true,
  },
  {
    title: "HAFE",
    category: "Computer Vision • ML",
    description:
      "A Hybrid Adaptive Food Estimation system combining object detection, segmentation and monocular depth estimation to estimate food volume and calories.",
    technologies: ["YOLOv8", "Mask R-CNN", "PyTorch", "Computer Vision"],
    featured: true,
  },
  {
    title: "PneumoScan",
    category: "Healthcare AI",
    description:
      "A chest X-ray screening prototype designed to classify images into normal, bacterial, viral and COVID-19 categories with separate patient and doctor interfaces.",
    technologies: ["Python", "CNN", "Computer Vision", "Classification"],
  },
  {
    title: "SkillSwap",
    category: "Full-Stack • MERN",
    description:
      "A peer-to-peer skill exchange platform where users can discover skills, create listings, connect with others and exchange knowledge.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
  {
    title: "AI Resume Coach",
    category: "AI • Full-Stack",
    description:
      "An AI-powered platform designed to analyze resumes, identify improvement areas and provide practical feedback to help candidates strengthen their applications.",
    technologies: ["Node.js", "MongoDB", "AI", "React"],
  },
  {
    title: "Research Paper Summarizer",
    category: "NLP",
    description:
      "A natural language processing tool that transforms lengthy academic papers into structured and easier-to-understand summaries.",
    technologies: ["Python", "NLP", "Machine Learning"],
  },
];

const skills = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"],
  },
  {
    title: "AI / Machine Learning",
    items: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP",
      "RAG",
    ],
  },
  {
    title: "Development",
    items: [
      "React",
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Jupyter",
      "Postman",
      "Figma",
    ],
  },
];

function AppIcon({ type }) {
  const icons = {
    github: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18A11.1 11.1 0 0 1 12 8.08c.98 0 1.97.13 2.89.38 2.21-1.49 3.18-1.18 3.18-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.71 5.39-5.28 5.68.42.36.78 1.07.78 2.16v3.19c0 .31.21.67.8.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
        />
      </svg>
    ),
    linkedin: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.48v6.27ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.57V8.99H3.56v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0Z"
        />
      </svg>
    ),
    mail: (
      <svg viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z"
        />
      </svg>
    ),
    arrow: (
      <svg viewBox="0 0 24 24">
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 12h14m-6-6 6 6-6 6"
        />
      </svg>
    ),
  };

  return icons[type];
}

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={darkMode ? "portfolio dark" : "portfolio"}>
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <button
            className="logo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <span>M</span>
            <strong>Manal Atif</strong>
          </button>

          <nav className={menuOpen ? "nav-links mobile-open" : "nav-links"}>
            <button onClick={() => scrollTo("about")}>About</button>
            <button onClick={() => scrollTo("skills")}>Skills</button>
            <button onClick={() => scrollTo("projects")}>Projects</button>
            <button onClick={() => scrollTo("experience")}>
              Experience
            </button>
            <button onClick={() => scrollTo("contact")}>Contact</button>
          </nav>

          <div className="nav-actions">
            <button
              className="theme-button"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
            >
              {darkMode ? "☀" : "☾"}
            </button>

            <button
              className="menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              Open to opportunities
            </div>

            <p className="eyebrow">SOFTWARE ENGINEERING • AI • ML</p>

            <h1>
              Building software with a focus on{" "}
              <span>intelligent systems.</span>
            </h1>

            <p className="hero-description">
              I'm Manal Atif, a Software Engineering student at UET Taxila
              focused on artificial intelligence, computer vision, healthcare
              systems and full-stack development.
            </p>

            <div className="hero-buttons">
              <button
                className="primary-button"
                onClick={() => scrollTo("projects")}
              >
                Explore my work
                <AppIcon type="arrow" />
              </button>

              <button
                className="secondary-button"
                onClick={() => scrollTo("contact")}
              >
                Let's connect
              </button>
            </div>

            <div className="quick-links">
              <a href="https://github.com/ManalAtif

" target="_blank" rel="noreferrer">
                <AppIcon type="github" />
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/manal-atif-b359b42a3"
                target="_blank"
                rel="noreferrer"
              >
                <AppIcon type="linkedin" />
                LinkedIn
              </a>

              <a href="mailto:your.email@example.com">
                <AppIcon type="mail" />
                Email
              </a>
            </div>
          </div>

          <div className="hero-visual">
  <div className="profile-card">

    <div className="profile-label">
      
      <span>SOFTWARE ENGINEER</span>
    </div>

    <div className="profile-image-wrapper">
      <img
        src={profileImage}
        alt="Manal"
        className="profile-image"
      />

      <div className="image-accent"></div>
    </div>

    <div className="profile-footer">
      <div>
        <small>FOCUS</small>
        <strong>AI / ML / SOFTWARE</strong>
      </div>

      <div>
        <small>BASED IN </small>
        <strong>PAKISTAN</strong>
      </div>
    </div>

  </div>
</div>
        </section>

        {/* ABOUT */}
        <section className="section about-section" id="about">
          <div className="section-heading">
            <span>01</span>
            <h2>About me</h2>
          </div>

          <div className="about-grid">
            <div className="about-main">
              <p className="large-text">
                I enjoy working where <strong>software engineering meets
                real-world problems.</strong>
              </p>

              <p>
                My interests sit at the intersection of artificial
                intelligence, healthcare technology and full-stack product
                development. I like taking an idea from a problem statement
                through architecture, implementation and a usable interface.
              </p>

              <p>
                As a Software Engineering student at UET Taxila, I have worked
                across machine learning, computer vision, NLP, backend systems
                and modern web technologies. I'm particularly interested in
                building practical AI systems that work within real-world
                constraints.
              </p>
            </div>

            <div className="about-stats">
              <div className="stat">
                <strong>2027</strong>
                <span>Expected graduation</span>
              </div>

              <div className="stat">
                <strong>AI + SWE</strong>
                <span>Primary focus</span>
              </div>

              <div className="stat">
                <strong>MERN</strong>
                <span>Full-stack ecosystem</span>
              </div>

              <div className="stat">
                <strong>RAG</strong>
                <span>Current AI focus</span>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section" id="skills">
          <div className="section-heading">
            <span>02</span>
            <h2>Technical toolkit</h2>
          </div>

          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>

                <div className="skill-list">
                  {group.items.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-heading">
            <span>03</span>
            <h2>Selected projects</h2>
          </div>

          <p className="section-intro">
            A selection of projects across artificial intelligence, healthcare
            and full-stack engineering.
          </p>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article
                className={
                  project.featured
                    ? "project-card featured"
                    : "project-card"
                }
                key={project.title}
                onClick={() =>
                  setActiveProject(
                    activeProject === index ? null : index
                  )
                }
              >
                <div className="project-number">
                  0{index + 1}
                </div>

                <div className="project-content">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="project-arrow">
                  <AppIcon type="arrow" />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="section" id="experience">
          <div className="section-heading">
            <span>04</span>
            <h2>Experience & education</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2026</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <p className="timeline-type">INTERNSHIP</p>
                <h3>Zeppelin Labs</h3>
                <h4>Software / ML Intern</h4>
                <p>
                  Contributed to software engineering and applied machine
                  learning work, gaining practical experience in developing
                  technology-focused solutions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2026</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <p className="timeline-type">COMMUNITY</p>
                <h3>Alkhidmat Foundation Pakistan</h3>
                <h4>Community Service Program</h4>
                <p>
                  Participated in organized community initiatives including
                  plantation drives, blood donation activities, cleanliness
                  campaigns and volunteer events.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2023—27</div>

              <div className="timeline-line">
                <span></span>
              </div>

              <div className="timeline-content">
                <p className="timeline-type">EDUCATION</p>
                <h3>UET Taxila</h3>
                <h4>BS Software Engineering</h4>
                <p>
                  Building a foundation across software engineering,
                  databases, algorithms, artificial intelligence, web
                  development and software architecture.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="contact-section" id="contact">
          <div className="contact-inner">
            <p className="eyebrow">05 / CONTACT</p>

            <h2>
              Have an idea,
              <br />
              opportunity or problem?
            </h2>

            <p>
              I'm open to internships, software engineering opportunities,
              research collaborations and meaningful projects.
            </p>

            <a
              className="contact-button"
              href="mailto:mnlatif03@gmail.com"
            >
              Start a conversation
              <AppIcon type="arrow" />
            </a>

            <div className="contact-links">
              <a href="mailto:mnlatif03@gmail.com">
                mnlatif03@gmail.com
              </a>

              <a
                href="https://github.com/ManalAtif"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com/in/manal-atif-b359b42a3"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>Manal Atif</strong>
          <span>Software Engineering • AI • ML</span>
        </div>

        <p>© 2026 Manal Atif. Built with React.</p>
      </footer>
    </div>
  );
}


