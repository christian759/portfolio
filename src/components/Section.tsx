import { ReactNode } from 'react';

interface SectionProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

export default function Section({ id, children, className = "" }: SectionProps) {
    return (
        <section id={id} className={`section-padding ${className}`}>
            <div className="container">
                {children}
            </div>
        </section>
    );
}
