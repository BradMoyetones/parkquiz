'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

interface GameHeroProps {
    icon: React.ReactNode;
    title: string;
    tagline: string;
    accentColor?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'destructive';
    className?: string;
}

export function GameHero({ icon, title, tagline, accentColor = 'primary', className }: GameHeroProps) {
    const colorMap = {
        primary: 'from-primary/20 to-primary/5',
        secondary: 'from-secondary/20 to-secondary/5',
        accent: 'from-accent/20 to-accent/5',
        success: 'from-success/20 to-success/5',
        warning: 'from-warning/20 to-warning/5',
        destructive: 'from-destructive/20 to-destructive/5',
    };

    return (
        <div className={cn('relative overflow-hidden rounded-2xl', className)}>
            {/* Background gradient */}
            <div className={cn('absolute inset-0 bg-gradient-to-br', colorMap[accentColor])} />
            <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-transparent to-background/20" />

            {/* Animated background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            {/* Content */}
            <div className="relative p-8 md:p-12 flex flex-col items-center justify-center text-center space-y-4 min-h-[300px] md:min-h-[280px]">
                {/* Icon with glow effect */}
                <div className="relative mb-2">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-full blur-2xl opacity-75" />
                    <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/40 flex items-center justify-center">
                        <div className="text-primary w-12 h-12 md:w-14 md:h-14 flex items-center justify-center [&>svg]:w-full [&>svg]:h-full">
                            {icon}
                        </div>
                    </div>
                </div>

                {/* Title */}
                <div className="space-y-2 max-w-2xl">
                    <h1 className="text-3xl md:text-5xl font-black text-foreground leading-tight tracking-tighter">
                        {title}
                    </h1>
                    <p className="text-base md:text-lg text-muted-foreground font-medium">{tagline}</p>
                </div>
            </div>
        </div>
    );
}
