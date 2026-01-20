interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
    image?: string;
    demoLink?: string;
}

export default function ProjectCard({ title, description, tags, link, image, demoLink }: ProjectCardProps) {
    return (
        <div className="glass" style={{ padding: '0', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease' }}>
            {image ? (
                <div style={{ width: '100%', height: '200px', overflow: 'hidden', borderBottom: '1px solid var(--border-color)' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            ) : (
                <div style={{ width: '100%', height: '200px', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid var(--border-color)' }}>
                    <span style={{ fontSize: '40px', opacity: 0.2 }}>🚀</span>
                </div>
            )}
            <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-secondary)', background: 'rgba(6, 182, 212, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 style={{ fontSize: '24px', margin: 0 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, flexGrow: 1, fontSize: '1rem', lineHeight: '1.5' }}>{description}</p>
                <div style={{ display: 'flex', gap: '20px', marginTop: '12px' }}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'var(--text-primary)', fontWeight: 600, borderBottom: '1px solid var(--accent-primary)', width: 'fit-content', paddingBottom: '2px', fontSize: '14px' }}
                    >
                        Source Code →
                    </a>
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent-secondary)', fontWeight: 600, borderBottom: '1px solid var(--accent-secondary)', width: 'fit-content', paddingBottom: '2px', fontSize: '14px' }}
                        >
                            Live Demo 🌐
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}
