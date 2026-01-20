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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {image ? (
                <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                    <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }} />
                </div>
            ) : (
                <div style={{ width: '100%', height: '240px', background: 'rgba(255,255,255,0.02)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '48px', opacity: 0.1 }}>❖</span>
                </div>
            )}
            <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px', flexGrow: 1 }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '10px', fontWeight: 800, color: 'var(--accent-primary)', background: 'rgba(129, 140, 248, 0.05)', padding: '6px 14px', borderRadius: '100px', border: '1px solid rgba(129, 140, 248, 0.1)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <h3 style={{ fontSize: '26px', margin: 0, fontWeight: 700 }}>{title}</h3>
                <p style={{ color: 'var(--text-secondary)', margin: 0, flexGrow: 1, fontSize: '1.05rem', lineHeight: '1.7' }}>{description}</p>
                <div style={{ display: 'flex', gap: '24px', marginTop: '16px' }}>
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: 'white', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid var(--border-color)', paddingBottom: '4px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                    >
                        Source Code
                    </a>
                    {demoLink && (
                        <a
                            href={demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: 'var(--accent-secondary)', fontWeight: 700, textDecoration: 'none', borderBottom: '1px solid var(--accent-secondary)', paddingBottom: '4px', fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em' }}
                        >
                            Live View
                        </a>
                    )}
                </div>
            </div>
        </div >
    );
}
