import { useEffect } from 'react';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      const lightX = 20 + (scrolled * 0.6);
      const lightY = 10 + (scrolled * 0.7);

      document.documentElement.style.setProperty('--light-x', `${lightX}%`);
      document.documentElement.style.setProperty('--light-y', `${lightY}%`);
      document.documentElement.style.setProperty('--scroll-pct', scrolled.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Chronosphere | 3D Interactive World",
      description: "A visually stunning 3D globe visualization project that maps worldwide connections and data points in real-time. Built with Three.js and React, Chronosphere features high-performance 3D rendering and interactive markers.",
      tags: ["3D", "Three.js", "React", "Data Viz"],
      link: "https://github.com/christian759/chronosphere",
      demoLink: "https://chronosphere-alpha.vercel.app/",
      image: "/chronosphere.png"
    },
    {
      title: "QueryIQ | Advanced RAG Intelligence",
      description: "A state-of-the-art Retrieval-Augmented Generation (RAG) system designed to bridge the gap between static data and dynamic AI responses. Built with Python and integrated with the Gemini API.",
      tags: ["AI", "RAG", "Python", "Gemini API"],
      link: "https://github.com/christian759/QueryIQ",
      demoLink: "https://query-iq.streamlit.app/"
    },
    {
      title: "Statify | Analytics Dashboard",
      description: "An enterprise-grade financial analytics dashboard engineered for performance. Leveraging React and TypeScript with custom virtualization logic and D3-powered visualizations.",
      tags: ["Frontend", "TypeScript", "Performance", "React"],
      link: "https://github.com/christian759/statify"
    },
    {
      title: "Object Detection | Real-time Vision",
      description: "A high-performance object detection system leveraging computer vision to identify and track objects in real-time with high precision.",
      tags: ["AI", "Python", "Computer Vision", "Streamlit"],
      link: "https://github.com/christian759/object-detection",
      demoLink: "https://object-detection-p.streamlit.app/",
      image: "/object-detection.png"
    },
    {
      title: "Clinix | Modern Healthcare Platform",
      description: "A comprehensive healthcare management system built with TypeScript. Clinix streamlines patient management and clinic operations with a focus on UX.",
      tags: ["Frontend", "TypeScript", "Healthcare", "UX"],
      link: "https://github.com/christian759/clinix",
      demoLink: "https://clinix-rose.vercel.app/",
      image: "/clinix-preview.png"
    },
    {
      title: "DocuFlow | Server-Rendered Platform",
      description: "A lightweight, server-rendered documentation platform designed for teams that want clarity, speed, and control over technical knowledge. Features live preview, autosave, and version control.",
      tags: ["Go", "SQLite", "HTMX", "Backend"],
      link: "https://github.com/christian759/docuflow"
    }
  ];

  return (
    <div className="portfolio">
      <div className="directional-light" />
      <div className="mesh-grid" />

      {/* Modern Fixed Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: '32px', left: '50%', transform: 'translateX(-50%)', width: 'auto', padding: '10px 32px', zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '32px', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Home</a></li>
          <li><a href="#experience" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Career</a></li>
          <li><a href="#projects" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Projects</a></li>
          <li><a href="#skills" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Stack</a></li>
          <li><a href="#certifications" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Awards</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Section id="home">
        <div style={{ padding: '120px 0', textAlign: 'center' }}>
          <div className="float-anim reveal">
            <span className="subheading">Full Stack & Mobile Engineer @ Campulse</span>
            <h1 style={{ fontSize: 'clamp(4rem, 15vw, 10rem)', lineHeight: 0.8, marginBottom: '60px' }}>
              Building <br />
              <span className="gradient-text">Intelligent</span> <br />
              Digital Value
            </h1>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 60px', fontSize: '1.25rem', fontWeight: 400, lineHeight: 1.6 }}>
              Architecting high-performance systems and immersive mobile experiences. Specializing in the intersection of Full-Stack, Mobile, and AI-driven solutions.
            </p>
            <div style={{ display: 'flex', gap: '24px', justifyContent: 'center' }}>
              <button className="btn-premium" onClick={() => document.getElementById('experience')?.scrollIntoView()}>
                The Journey
              </button>
              <a href="https://github.com/christian759" target="_blank" className="glass" style={{ padding: '18px 48px', borderRadius: '16px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', textDecoration: 'none', color: 'white', textTransform: 'uppercase', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <div className="reveal">
          <span className="subheading">Career Milestones</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px', maxWidth: '800px' }}>Professional <span className="gradient-text">Impact</span> at scale.</h2>
        </div>

        <div className="glass reveal" style={{ padding: '80px', transitionDelay: '0.1s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Full Stack & Mobile Developer</h3>
              <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.2rem' }}>Campulse</p>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em' }}>JAN 2024 — PRESENT</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '48px', maxWidth: '900px', lineHeight: '1.8' }}>
            As a core Engineer at Campulse, I lead the end-to-end development of critical platform features and mobile applications that serve thousands of users. My focus is on architecting high-availability systems using React, TypeScript, and robust mobile frameworks. I ensure every pixel contributes to a premium and intuitive digital experience across the entire ecosystem.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {["React", "TypeScript", "Mobile Native", "Node.js", "System Architecture"].map(tag => (
              <span key={tag} className="glass" style={{ fontSize: '12px', fontWeight: 700, padding: '10px 24px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section - More Spacious Grid */}
      <Section id="projects">
        <div className="reveal">
          <span className="subheading">Project Gallery</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px' }}>Featured <span className="gradient-text">Creations</span></h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '60px' }}>
          {projects.map((project, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div className="glass card-hover" style={{ height: '100%' }}>
                <ProjectCard {...project} />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section - Cleaner Layout */}
      <Section id="skills">
        <div className="reveal">
          <span className="subheading">Technical Stack</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px' }}>The <span className="gradient-text">Core</span> Arsenal</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '80px' }}>
          <div className="reveal">
            <h3 style={{ marginBottom: '32px', color: 'var(--accent-primary)', fontSize: '24px' }}>AI & Intelligence</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              <li><b>RAG Architectures</b> & LLM Orchestration</li>
              <li>Generative AI (Gemini, OpenAI API)</li>
              <li><b>Certified Neo4j Graph Data Scientist</b></li>
              <li>Computer Vision & ML Kit</li>
              <li>Python, Streamlit, LangChain</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <h3 style={{ marginBottom: '32px', color: 'var(--accent-secondary)', fontSize: '24px' }}>Engineering</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              <li><b>Full Stack React / TypeScript</b></li>
              <li>Native Mobile Development</li>
              <li>Node.js, Express, Go</li>
              <li>PostgreSQL, Neo4j, Redis</li>
              <li>System Architecture & Security</li>
            </ul>
          </div>
          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <h3 style={{ marginBottom: '32px', color: 'white', fontSize: '24px' }}>Visual Excellence</h3>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
              <li><b>Premium UI/UX Design</b> Systems</li>
              <li>Advanced 3D (Three.js, WebGL)</li>
              <li>Motion Design & Interactions</li>
              <li>Frontend Performance Tuning</li>
              <li>Scalable CSS Architectures</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Certifications Section - Redesigned Grid */}
      <Section id="certifications">
        <div className="reveal">
          <span className="subheading">Achievements</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px' }}>Global <span className="gradient-text">Certifications</span></h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
          {/* Professional Section */}
          <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-primary)', borderLeft: '4px solid var(--accent-primary)', paddingLeft: '24px', margin: 0 }}>Professional Credentials</h3>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--accent-primary), transparent)', opacity: 0.15 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
              {[
                { img: "/oracle-cert.png", title: "OCI 2025 Developer Professional", desc: "Expertise in cloud-native app development, OCI DevOps, and serverless architectures." },
                { img: "/oracle-ai-cert.png", title: "OCI 2025 Generative AI Professional", desc: "Advanced LLM orchestration, RAG systems, and AI-driven cloud solutions." },
                { img: "/oracle-ds-cert.png", title: "OCI 2025 Data Science Professional", desc: "Machine learning lifecycle mastery: exploration, training, and model deployment." },
                { img: "/oracle-foundation-cert.png", title: "OCI 2025 Foundations Associate", desc: "Foundational cloud services, core infrastructure, and enterprise security models." },
                { img: "/neo4j-cert.png", title: "Neo4j Graph Data Science", desc: "Certified in graph algorithms and high-performance predictive graph modeling." }
              ].map((cert, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="glass card-hover" style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <img src={cert.img} alt={cert.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '32px', border: '1px solid var(--border-color)' }} />
                    <h4 style={{ fontSize: '20px', marginBottom: '12px', color: 'white' }}>{cert.title}</h4>
                    <p style={{ color: 'var(--accent-primary)', fontSize: '13px', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.05em' }}>ORACLE / NEO4J</p>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Completion Section */}
          <div>
            <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '60px' }}>
              <h3 style={{ fontSize: '2rem', color: 'var(--accent-secondary)', borderLeft: '4px solid var(--accent-secondary)', paddingLeft: '24px', margin: 0 }}>Specializations</h3>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(90deg, var(--accent-secondary), transparent)', opacity: 0.15 }} />
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '40px' }}>
              {[
                { img: "/great-learning-cert.png", title: "Front End Dev - HTML", provider: "GREAT LEARNING", desc: "Fundamental mastery of semantic structure, accessibility, and modern responsive design." },
                { img: "/simplilearn-cert.png", title: "Data Science w/ Python & Django", provider: "SIMPLILEARN", desc: "Python-driven data workflows and integration of predictive models into web ecosystems." }
              ].map((cert, i) => (
                <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="glass card-hover" style={{ padding: '40px', display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <img src={cert.img} alt={cert.title} style={{ width: '100%', borderRadius: '16px', marginBottom: '32px', border: '1px solid var(--border-color)' }} />
                    <h4 style={{ fontSize: '20px', marginBottom: '12px', color: 'white' }}>{cert.title}</h4>
                    <p style={{ color: 'var(--accent-secondary)', fontSize: '13px', fontWeight: 800, marginBottom: '20px', letterSpacing: '0.05em' }}>{cert.provider}</p>
                    <p style={{ fontSize: '15px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '120px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '100px' }}>
        <p className="reveal" style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '0.05em' }}>
          ENGINEERED WITH PURPOSE BY <span className="gradient-text" style={{ fontWeight: 800 }}>christian759</span>
          <br />
          <span style={{ fontSize: '0.75rem', opacity: 0.4, marginTop: '12px', display: 'block' }}>© 2026. BUILT WITH REACT, THREE.JS & PASSION.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
