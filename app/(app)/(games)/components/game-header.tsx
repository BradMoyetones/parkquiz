'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

interface GameHeaderProps {
    icon: React.ReactNode;
    title: string;
    tagline: string;
    className?: string;
}

export function GameHeader({ icon, title, tagline, className }: GameHeaderProps) {
    return (
        <div className={cn('text-center space-y-4 mb-8', className)}>
            {/* Icon with animation */}
            <div className="flex justify-center mb-6">
                <div className="relative">
                    <div
                        className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"
                        style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
                    />
                    <div className="relative p-6 bg-primary/10 rounded-full border-2 border-primary/40">
                        <div className="text-primary w-12 h-12 flex items-center justify-center">{icon}</div>
                    </div>
                </div>
            </div>

            {/* Title with staggered animation */}
            <div className="space-y-2">
                <h1
                    className="text-5xl md:text-6xl font-black text-foreground leading-tight tracking-tight"
                    style={{
                        animation: 'fadeInUp 0.8s ease-out 0.2s backwards',
                    }}
                >
                    {title}
                </h1>
                <p
                    className="text-lg md:text-xl text-muted-foreground font-light italic"
                    style={{
                        animation: 'fadeInUp 0.8s ease-out 0.4s backwards',
                    }}
                >
                    {tagline}
                </p>
            </div>
        </div>
    );
}
