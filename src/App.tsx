import { useEffect, useState } from 'react';
import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
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
      title: "QueryIQ | Advanced RAG Intelligence",
      description: "A state-of-the-art Retrieval-Augmented Generation (RAG) system designed to bridge the gap between static data and dynamic AI responses. Built with Python and integrated with the Gemini API, QueryIQ processes massive datasets to provide context-aware, hyper-accurate answers. It features an advanced semantic search engine, sophisticated prompt engineering architectures, and a custom data-chunking pipeline that ensures maximum retrieval relevance while minimizing token overhead.",
      tags: ["AI", "RAG", "Python", "Gemini API", "Semantic Search"],
      link: "https://github.com/christian759/QueryIQ"
    },
    {
      title: "Statify | High-Performance Analytics",
      description: "An enterprise-grade financial analytics dashboard engineered for extreme data density and performance. Leveraging React and TypeScript, Statify handles thousands of concurrent transactions with zero lag through custom virtualization logic and memoized computation layers. The system features interactive D3-powered visualizations, a robust global state management architecture, and a modular filter engine that allows users to slice through complex data with sub-second latency.",
      tags: ["Frontend", "TypeScript", "Performance", "Data Viz", "React"],
      link: "https://github.com/christian759/statify"
    },
    {
      title: "SmartLens | AI-Powered Vision",
      description: "A cutting-edge Android application that brings real-time machine learning to the edge. Developed in Kotlin, SmartLens utilizes the Google ML Kit to perform high-speed Optical Character Recognition (OCR) and object detection directly on-device. The project overcomes mobile hardware constraints through efficient thread management and custom camera processing pipelines, delivering a fluid user experience that identifies and extracts data from the physical world in milliseconds.",
      tags: ["Mobile", "AI", "Kotlin", "ML Kit", "Computer Vision"],
      link: "https://github.com/christian759/SmartLens"
    },
    {
      title: "DocuFlow | Premium Design System",
      description: "A comprehensive design system and documentation framework built with a 'design-first' philosophy. DocuFlow provides a suite of high-fidelity, accessible UI components specifically optimized for technical workflows. It features a custom CSS architecture that prioritizes modularity and developer experience (DX), alongside deep glassmorphism themes and advanced layout engines that ensure document flows remain consistent and visually stunning across all platforms.",
      tags: ["Frontend", "CSS", "UI/UX", "Design Systems", "Architecture"],
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
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '32px', maxWidth: '800px', lineHeight: '1.6' }}>
              As a core Full Stack Developer at Campulse, I lead the end-to-end engineering of critical platform features that serve thousands of users. My work involves architecting high-availability frontend systems using React and TypeScript, while simultaneously building robust backend services that power real-time interactions. I've pioneered the integration of AI-driven automation tools across the ecosystem, significantly improving user engagement through intelligent data processing and predictive analytics. I am responsible for maintaining a world-class design standard, ensuring every pixel contributes to a premium and intuitive digital experience.
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
