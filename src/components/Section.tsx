import { type ReactNode, useEffect, useRef } from 'react';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
    noReveal?: boolean;
}

export default function Section({ id, children, className = "", noReveal = false }: SectionProps) {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (noReveal) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                    }
                });
            },
            { threshold: 0.15 }
        );

        const childrenToReveal = sectionRef.current?.querySelectorAll('.reveal');
        childrenToReveal?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, [noReveal]);

    return (
        <section id={id} ref={sectionRef} className={`section-padding ${className}`} style={{ scrollSnapAlign: 'start' }}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
