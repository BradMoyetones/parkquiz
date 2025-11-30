'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

interface GameInfoCardProps {
    icon: React.ReactNode | string;
    title: string;
    description: string;
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning' | 'destructive' | 'muted';
    className?: string;
}

export function GameInfoCard({ icon, title, description, variant = 'primary', className }: GameInfoCardProps) {
    const variantStyles = {
        primary: 'bg-primary/10 border-primary/30 text-primary',
        secondary: 'bg-secondary/10 border-secondary/30 text-secondary',
        accent: 'bg-accent/10 border-accent/30 text-accent',
        success: 'bg-success/10 border-success/30 text-success',
        warning: 'bg-warning/10 border-warning/30 text-warning',
        destructive: 'bg-destructive/10 border-destructive/30 text-destructive',
        muted: 'bg-muted border-border text-muted-foreground',
    };

    const iconSize = typeof icon === 'string' ? 'text-2xl' : 'w-5 h-5';

    return (
        <div
            className={cn(
                'p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105',
                'group cursor-default',
                variantStyles[variant],
                className
            )}
        >
            <div className="flex items-start gap-3">
                <div className={cn('flex-shrink-0 mt-0.5', iconSize)}>{icon}</div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-sm md:text-base leading-tight">{title}</h3>
                    <p className="text-xs md:text-sm opacity-80 leading-tight mt-1">{description}</p>
                </div>
            </div>
        </div>
    );
}
