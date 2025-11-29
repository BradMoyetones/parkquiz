import * as React from 'react';
import { cn } from '@/lib/utils';
import { MotionEffect } from './animate-ui/motion-effect';

// Wrapper general de cada sección
export function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
    return <section className={cn('py-10 scroll-mt-16 z-0', className)} {...props} />;
}

export function SectionContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('max-w-7xl mx-auto px-4 sm:px-6 lg:px-8', className)} {...props}>
            {children}
        </div>
    );
}

// Contenedor del header
export function SectionHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
    return <div className={cn('text-center mb-16', className)} {...props} />;
}

// Título
export function SectionTitle({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <MotionEffect
            slide={{
                direction: 'down',
            }}
            fade
            zoom
            inView
        >
            <h2 className={cn('text-3xl md:text-4xl font-black mb-4', className)} {...props}>
                <span className="text-primary">/</span> {children}
            </h2>
        </MotionEffect>
    );
}

// Descripción
export function SectionDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <MotionEffect
            slide={{
                direction: 'down',
            }}
            fade
            zoom
            inView
            delay={0.05}
        >
            <p className={cn('text-muted-foreground max-w-2xl mx-auto', className)} {...props} />
        </MotionEffect>
    );
}
