import Section from './components/Section';
import ProjectCard from './components/ProjectCard';
import './App.css';

function App() {
  const projects = [
    {
      title: "QueryIQ",
      description: "Advanced RAG application integrated with Gemini API for intelligent data retrieval and contextual generation.",
      tags: ["AI", "RAG", "Python", "Gemini"],
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
      tags: ["Mobile", "AI", "Kotlin", "ML Kit"],
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
      {/* Navigation */}
      <nav className="glass" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: 'auto', padding: '12px 32px', zIndex: 1000 }}>
        <ul style={{ listStyle: 'none', display: 'flex', gap: '32px', margin: 0, padding: 0 }}>
          <li><a href="#home" style={{ fontWeight: 600 }}>Home</a></li>
          <li><a href="#projects" style={{ fontWeight: 600 }}>Projects</a></li>
          <li><a href="#skills" style={{ fontWeight: 600 }}>Skills</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <Section id="home" className="hero">
        <div style={{ textAlign: 'center', marginTop: '60px' }}>
          <span className="subheading">Christian759</span>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', lineHeight: 1 }}>
            AI & <br />
            <span className="gradient-text">Frontend Engineer</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '24px auto', fontSize: '1.25rem' }}>
            Building intelligent systems and premium digital experiences with a focus on RAG, LLMs, and high-performance frontend architecture.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" onClick={() => window.location.href = '#projects'}>View My Work</button>
            <a href="https://github.com/christian759" target="_blank" className="glass" style={{ padding: '12px 28px', borderRadius: '999px', fontWeight: 600 }}>GitHub</a>
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects">
        <span className="subheading">Portfolio</span>
        <h2 style={{ fontSize: '3rem', marginBottom: '48px' }}>Featured <span className="gradient-text">Projects</span></h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills">
        <div className="glass" style={{ padding: '60px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '60px' }}>
            <div>
              <h3 style={{ marginBottom: '24px', color: 'var(--accent-primary)' }}>AI & ML</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>RAG Architectures</li>
                <li>LLM Integration (Gemini)</li>
                <li>Google ML Kit</li>
                <li>Python (Streamlit)</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '24px', color: 'var(--accent-secondary)' }}>Frontend</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>TypeScript / React</li>
                <li>Design Systems / CSS</li>
                <li>Performance Optimization</li>
                <li>Responsive UI/UX</li>
              </ul>
            </div>
            <div>
              <h3 style={{ marginBottom: '24px', color: 'white' }}>Other</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <li>Kotlin (Mobile)</li>
                <li>Java / LangChain</li>
                <li>Git / CI/CD</li>
                <li>Decentralized Logic</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer style={{ padding: '60px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', marginTop: '60px' }}>
        <div className="container">
          <p style={{ color: 'var(--text-secondary)' }}>© 2026 christian759. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
