interface ProjectCardProps {
    title: string;
    description: string;
    tags: string[];
    link: string;
}

export default function ProjectCard({ title, description, tags, link }: ProjectCardProps) {
    return (
        <div className="glass" style={{ padding: '32px', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%', transition: 'transform 0.3s ease' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {tags.map(tag => (
                    <span key={tag} style={{ fontSize: '12px', fontWeight: 600, color: 'var(--accent-secondary)', background: 'rgba(6, 182, 212, 0.1)', padding: '4px 10px', borderRadius: '4px' }}>
                        {tag}
                    </span>
                ))}
            </div>
            <h3 style={{ fontSize: '24px', margin: 0 }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: 0, flexGrow: 1 }}>{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-primary)', fontWeight: 600, borderBottom: '1px solid var(--accent-primary)', width: 'fit-content', paddingBottom: '2px', marginTop: '12px' }}
            >
                View Project →
            </a>
        </div>
    );
}
