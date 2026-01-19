import { useEffect, useState } from 'react';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  const [scrollPct, setScrollPct] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;

      setScrollPct(scrolled);

      // Map scroll percentage to a "arc" path for the directional light
      // The light starts at top-left (10, 10) and moves towards bottom-right (90, 90)
      const lightX = 10 + (scrolled * 0.8);
      const lightY = 10 + (scrolled * 0.8);

      document.documentElement.style.setProperty('--light-x', `${lightX}%`);
      document.documentElement.style.setProperty('--light-y', `${lightY}%`);
      document.documentElement.style.setProperty('--scroll-pct', scrolled.toString());
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "QueryIQ",
      description: "Advanced RAG application integrated with Gemini API for intelligent data retrieval and contextual generation.",
      tags: ["AI", "RAG", "Python"],
      link: "https://github.com/christian759/QueryIQ"
    },
    {
      title: "Statify",
      description: "High-performance analytics dashboard featuring virtualized tables and real-time data visualization.",
      tags: ["Frontend", "TypeScript", "Performance"],
      link: "https://github.com/christian759/statify"
    },
    {
      title: "SmartLens",
      description: "AI mobile application for real-time text detection using Google ML KIT on Android.",
      tags: ["Mobile", "AI", "Kotlin"],
      link: "https://github.com/christian759/SmartLens"
    },
    {
      title: "DocuFlow",
      description: "Clean architecture design system focused on documentation flows and premium user experience.",
      tags: ["Frontend", "CSS", "UI/UX"],
      link: "https://github.com/christian759/docuflow"
    }
  ];

  return (
    <div className="portfolio">
      <div className="directional-light" />
      <div className="mesh-grid" />

      {/* Modern Fixed Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: '24px', left: '50%', transform: 'translateX(-50%)', width: 'auto', padding: '12px 32px', zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '40px', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Home</a></li>
          <li><a href="#experience" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Experience</a></li>
          <li><a href="#projects" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Projects</a></li>
          <li><a href="#skills" style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Skills</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Section id="home">
        <div style={{ padding: '100px 0 40px', textAlign: 'center' }}>
          <div className="float-anim">
            <span className="subheading">Full Stack Engineer @ Campulse</span>
            <h1 style={{ fontSize: 'clamp(3.5rem, 12vw, 7.5rem)', lineHeight: 0.85, marginBottom: '40px' }}>
              Building <br />
              <span className="gradient-text">Intelligent</span> <br />
              Systems
            </h1>
          </div>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 48px', fontSize: '1.4rem', fontWeight: 300, lineHeight: 1.4 }}>
            Specializing in AI-driven applications and high-performance frontend architecture. Creating digital value through code and design.
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <button className="btn-premium" onClick={() => document.getElementById('experience')?.scrollIntoView()}>
              Explore My Journey
            </button>
            <a href="https://github.com/christian759" target="_blank" className="glass" style={{ padding: '16px 40px', borderRadius: '14px', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
              GitHub
            </a>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience">
        <span className="subheading">Career Milestones</span>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '80px' }}>Professional <span className="gradient-text">Impact</span></h2>

        <div className="glass" style={{ padding: '60px' }}>
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '24px' }}>
              <div>
                <h3 style={{ fontSize: '28px', marginBottom: '4px' }}>Full Stack Developer</h3>
                <p style={{ color: 'var(--accent-secondary)', fontWeight: 700, fontSize: '1.1rem' }}>Campulse</p>
              </div>
              <span className="glass" style={{ padding: '8px 20px', fontSize: '14px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)' }}>Jan 2024 — Present</span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '32px', maxWidth: '800px' }}>
              Spearheading the core development of the Campulse ecosystem. My role involves architecting scalable frontend components and integrating advanced AI features to enhance student engagement and administrative efficiency. I focus on bridging the gap between complex backend logic and premium, fluid user interfaces.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {["React", "TypeScript", "Node.js", "AI Integration", "Performance Arch"].map(tag => (
                <span key={tag} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', background: 'rgba(255,255,255,0.05)', padding: '6px 16px', borderRadius: '8px', border: '1px solid var(--border-color)' }}>{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <span className="subheading">Project Gallery</span>
        <h2 style={{ fontSize: '3.5rem', marginBottom: '80px' }}>Featured <span className="gradient-text">Creations</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '40px' }}>
          {projects.map((project, index) => (
            <div key={index} className="card-3d">
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="glass" style={{ padding: '100px 60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '100px' }}>
            <div>
              <h3 style={{ marginBottom: '40px', color: 'var(--accent-primary)', fontSize: '24px' }}>Full Stack & AI</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>RAG Architectures</li>
                <li>LLM Integration (Gemini)</li>
                <li>Node.js / Express</li>
                <li>Python (Streamlit)</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '40px', color: 'var(--accent-secondary)', fontSize: '24px' }}>Frontend Expertise</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>React / TypeScript</li>
                <li>Performance Tuning</li>
                <li>Creative CSS / 3D Layouts</li>
                <li>Design System Arch</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '40px', color: 'white', fontSize: '24px' }}>Technical Breadth</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                <li>Kotlin (Android)</li>
                <li>Google ML Kit</li>
                <li>Java / LangChain</li>
                <li>DevOps / Git / CI/CD</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '100px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '100px' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', letterSpacing: '0.02em' }}>
          Designed with Purpose & Engineered by <span className="gradient-text" style={{ fontWeight: 700 }}>christian759</span>
          <br />
          <span style={{ fontSize: '0.8rem', opacity: 0.6 }}>© 2026. Powered by React, Vite & Innovation.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
