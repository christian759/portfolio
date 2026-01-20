import { useEffect } from 'react';
import Section from './components/Section';
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
      description: "A state-of-the-art Retrieval-Augmented Generation (RAG) system with integrated Gemini AI. Features precise document analysis with full citation support and real-time intelligent responses.",
      tags: ["AI", "RAG", "Python", "Gemini API"],
      link: "https://github.com/christian759/QueryIQ",
      demoLink: "https://query-iq.streamlit.app/",
      image: "/query-iq.png"
    },
    {
      title: "Statify | Analytics Dashboard",
      description: "An enterprise-grade financial analytics dashboard engineered for performance. Leveraging React and TypeScript with custom virtualization logic and D3-powered visualizations, Statify provides real-time insights with zero-lag interactions.",
      tags: ["Frontend", "TypeScript", "Performance", "React"],
      link: "https://github.com/christian759/statify",
      demoLink: "https://statifydata.vercel.app/",
      images: ["/statify-1.png", "/statify-2.png"]
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
          <li><a href="#skills" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Expertise</a></li>
          <li><a href="#certifications" style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'inherit', textDecoration: 'none' }}>Certifications</a></li>
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
          <span className="subheading">Career Journey</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px', maxWidth: '800px' }}>Professional <span className="gradient-text">Trajectory</span> @ Campulse.</h2>
        </div>

        <div className="glass reveal" style={{ padding: '80px', transitionDelay: '0.1s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px', marginBottom: '40px' }}>
            <div>
              <h3 style={{ fontSize: '32px', marginBottom: '8px' }}>Full Stack & Mobile Developer</h3>
              <p style={{ color: 'white', fontWeight: 700, fontSize: '1.2rem' }}>Campulse</p>
            </div>
            <span style={{ fontSize: '14px', fontWeight: 600, opacity: 0.6, letterSpacing: '0.05em' }}>JUL 2025 — PRESENT</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.3rem', marginBottom: '48px', maxWidth: '900px', lineHeight: '1.8' }}>
            As a core Engineer at Campulse, I lead the end-to-end development of critical platform features and mobile applications. My focus is on architecting high-availability systems using React, TypeScript, and robust mobile frameworks. I ensure every pixel contributes to a premium and intuitive digital experience across the entire ecosystem, bridging human intuition with complex data structures.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            {["React", "TypeScript", "Mobile Native", "Node.js", "System Architecture"].map(tag => (
              <span key={tag} className="glass" style={{ fontSize: '12px', fontWeight: 700, padding: '10px 24px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)' }}>{tag}</span>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section - Storytelling Layout */}
      <Section id="projects">
        <div className="reveal">
          <span className="subheading">Crafted Works</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px' }}>Project <span className="gradient-text">Stories</span></h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '200px' }}>
          {projects.map((project, index) => (
            <div key={index} className="reveal" style={{ transitionDelay: `${index * 0.1}s` }}>
              <div style={{
                display: 'flex',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
                gap: '80px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1', minWidth: '320px' }}>
                  <div className="glass" style={{ borderRadius: '40px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', aspectRatio: '16/10' }}>
                    {project.images ? (
                      <div className="image-gallery" style={{ height: '100%', position: 'relative' }}>
                        <img src={project.images[0]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                        <img src={project.images[1]} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', top: 0, left: 0, opacity: 0, transition: 'opacity 0.8s ease' }} className="hover-image" />
                      </div>
                    ) : project.image ? (
                      <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                    ) : (
                      <div style={{ aspectRatio: '16/9', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <span style={{ fontSize: '80px', opacity: 0.05 }}>❖</span>
                      </div>
                    )}
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '320px' }}>
                  <span style={{ fontSize: '14px', fontWeight: 800, opacity: 0.3, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '24px' }}>Project {index + 1}</span>
                  <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', marginBottom: '32px', lineHeight: 1.1 }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.7, marginBottom: '40px' }}>
                    {project.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '48px' }}>
                    {project.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '11px', fontWeight: 700, padding: '8px 20px', borderRadius: '100px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}>{tag}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '32px' }}>
                    <a href={project.link} target="_blank" style={{ color: 'white', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid white', paddingBottom: '4px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Repository</a>
                    {project.demoLink && (
                      <a href={project.demoLink} target="_blank" style={{ color: 'white', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid rgba(255,255,255,0.3)', paddingBottom: '4px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Demo</a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Other Projects Section */}
      <Section id="other-projects">
        <div className="reveal">
          <span className="subheading">Technical Explorations</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '100px' }}>Additional <span className="gradient-text">Developments</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px' }}>
          {[
            {
              title: "SmartChain",
              link: "https://github.com/christian759/smartchain",
              desc: "This sample code demonstrates the use of the LangChain Java framework with OCI Gen AI Service. The sample supports Large Language Model, HTTP Request Chain and SQL Chain for Oracle Database."
            },
            {
              title: "SmartLens",
              link: "https://github.com/christian759/SmartLens",
              desc: "AI Mobile app for text detection using Google ML KIT. Focuses on high-accuracy real-time text extraction and processing."
            }
          ].map((project, i) => (
            <div key={i} className="glass reveal" style={{ padding: '48px', borderRadius: '32px', transitionDelay: `${i * 0.1}s` }}>
              <h3 style={{ fontSize: '28px', marginBottom: '20px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                {project.desc}
              </p>
              <a href={project.link} target="_blank" style={{ color: 'white', fontWeight: 700, textDecoration: 'none', borderBottom: '2px solid white', paddingBottom: '4px', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-block' }}>
                View Source
              </a>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills & Expertise Section */}
      <Section id="skills">
        <div className="reveal">
          <span className="subheading">Domain Mastery</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '80px' }}>Areas of <span className="gradient-text">Expertise</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '32px', marginBottom: '120px' }}>
          {[
            {
              title: "Generative AI & RAG",
              desc: "Architecting intelligent systems that leverage Large Language Models with precise retrieval mechanisms. Expert in LangChain, vector embeddings, and citation-accurate AI responses.",
              tags: ["LLMs", "LangChain", "Vector DBs", "Prompt Eng"]
            },
            {
              title: "Cloud Architecture",
              desc: "Designing resilient, scalable cloud-native applications on OCI. Specialized in serverless computing, automated DevOps pipelines, and high-availability systems.",
              tags: ["OCI Cloud", "Docker", "DevOps", "Microservices"]
            },
            {
              title: "Full Stack Engineering",
              desc: "Building high-performance web and mobile platforms with a focus on type-safety, performance optimization, and premium user experiences.",
              tags: ["React", "TypeScript", "Node.js", "App Design"]
            },
            {
              title: "Graph Data Science",
              desc: "Analyzing complex relationship-based data using Neo4j. Implementing graph algorithms and high-speed predictive modeling for interconnected datasets.",
              tags: ["Neo4j", "Cypher", "GDS", "Network Analysis"]
            }
          ].map((exp, i) => (
            <div key={i} className="glass reveal" style={{ padding: '48px', transitionDelay: `${i * 0.1}s` }}>
              <h3 style={{ fontSize: '24px', marginBottom: '20px', color: 'white' }}>{exp.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '32px' }}>
                {exp.desc}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {exp.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '10px', fontWeight: 700, padding: '6px 14px', borderRadius: '100px', background: 'rgba(255,255,255,0.05)', color: 'white', letterSpacing: '0.05em' }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <span className="subheading">The Toolbelt</span>
          <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '60px' }}>Technical <span className="gradient-text">Stack</span></h2>
        </div>

        <div className="reveal" style={{ position: 'relative' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '30px',
            alignItems: 'baseline',
            justifyContent: 'center',
            maxWidth: '1200px',
            margin: '0 auto'
          }}>
            <span style={{ fontSize: 'clamp(2rem, 8vw, 6rem)', fontWeight: 800, color: 'white' }}>React</span>
            <span style={{ fontSize: 'clamp(1.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-secondary)' }}>TypeScript</span>
            <span style={{ fontSize: 'clamp(2rem, 6vw, 5rem)', fontWeight: 700, color: 'white', border: '1px solid rgba(255,255,255,0.2)', padding: '0 30px', borderRadius: '100px' }}>Neo4j</span>
            <span style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 300, fontStyle: 'italic', color: 'var(--text-secondary)' }}>Node.js</span>
            <span style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>Python</span>
            <span style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)', fontWeight: 800, color: 'white', textDecoration: 'underline', textUnderlineOffset: '14px' }}>Go</span>
            <span style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)', fontWeight: 600, color: 'white' }}>Three.js</span>
            <span style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--text-secondary)' }}>PostgreSQL</span>
            <span style={{ fontSize: 'clamp(1.2rem, 3vw, 2.5rem)', fontWeight: 300, color: 'var(--text-secondary)' }}>LangChain</span>
            <span style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', fontWeight: 700, color: 'white' }}>Oracle Cloud</span>
          </div>

          <div className="glass" style={{
            marginTop: '100px',
            padding: '60px',
            textAlign: 'center',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.02), transparent)',
            border: '1px solid rgba(255,255,255,0.05)'
          }}>
            <p style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
              "I don't just write code. I architect <span style={{ color: 'white', fontWeight: 700 }}>Intelligent Ecosystems</span> where data flows seamlessly between AI, Mobile, and Web."
            </p>
          </div>
        </div>
      </Section>

      {/* Certifications Section - Mature Moment Layout */}
      <Section id="certifications">
        <div className="reveal">
          <span className="subheading">Proof of Expertise</span>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '50px' }}>Professional <span className="gradient-text">Credentials</span></h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '80px', maxWidth: '700px' }}>
            Rigorous certifications validating advanced architectural and engineering capabilities in Cloud, AI, and Graph technologies.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '180px', marginBottom: '150px' }}>
          {[
            { img: "/oracle-cert.png", title: "OCI 2025 Developer Professional", provider: "ORACLE", desc: "Expertise in cloud-native app development, OCI DevOps, and serverless architectures." },
            { img: "/oracle-ai-cert.png", title: "OCI 2025 Generative AI Professional", provider: "ORACLE", desc: "Advanced LLM orchestration, RAG systems, and AI-driven cloud solutions." },
            { img: "/oracle-ds-cert.png", title: "OCI 2025 Data Science Professional", provider: "ORACLE", desc: "Machine learning lifecycle mastery: exploration, training, and model deployment." },
            { img: "/oracle-found-cert.png", title: "OCI 2025 Foundations Associate", provider: "ORACLE", desc: "Comprehensive understanding of OCI core services, security, and cloud economics." },
            { img: "/neo4j-cert.png", title: "Neo4j Graph Data Science", provider: "NEO4J", desc: "Certified in graph algorithms and high-performance predictive graph modeling." },
          ].map((cert, i) => (
            <div key={i} className="reveal" style={{ transitionDelay: `${i * 0.1}s`, scrollSnapAlign: 'center' }}>
              <div style={{
                display: 'flex',
                flexDirection: i % 2 !== 0 ? 'row' : 'row-reverse',
                gap: '80px',
                alignItems: 'center',
                flexWrap: 'wrap'
              }}>
                <div style={{ flex: '1', minWidth: '300px' }}>
                  <div className="glass card-hover" style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <img src={cert.img} alt={cert.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
                  </div>
                </div>
                <div style={{ flex: '1', minWidth: '320px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 800, opacity: 0.4, letterSpacing: '0.4em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>{cert.provider}</span>
                  <h3 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: '24px', lineHeight: 1.2 }}>{cert.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', lineHeight: 1.8, maxWidth: '500px' }}>
                    {cert.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '80px' }}>Academic <span className="gradient-text">Completions</span></h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {[
            { img: "/great-learning-cert.png", title: "Front End Dev - HTML", provider: "GREAT LEARNING", desc: "Fundamental mastery of semantic structure, accessibility, and modern responsive design." },
            { img: "/simplilearn-cert.png", title: "Data Science w/ Python & Django", provider: "SIMPLILEARN", desc: "Python-driven data workflows and integration of predictive models into web ecosystems." }
          ].map((cert, i) => (
            <div key={i} className="glass reveal" style={{ padding: '40px', borderRadius: '32px', transitionDelay: `${i * 0.1}s` }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '32px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <img src={cert.img} alt={cert.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <span style={{ fontSize: '11px', fontWeight: 800, opacity: 0.4, letterSpacing: '0.3em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>{cert.provider}</span>
              <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>{cert.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6 }}>{cert.desc}</p>
            </div>
          ))}
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
