'use client';

import type React from 'react';

import { cn } from '@/lib/utils';

interface GameStatsCardProps {
    label: string;
    value: string | number;
    icon?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'accent' | 'success' | 'warning';
    className?: string;
}

export function GameStatsCard({ label, value, icon, variant = 'primary', className }: GameStatsCardProps) {
    const variantStyles = {
        primary: 'bg-primary/15 border-primary/40 text-primary',
        secondary: 'bg-secondary/15 border-secondary/40 text-secondary',
        accent: 'bg-accent/15 border-accent/40 text-accent',
        success: 'bg-success/15 border-success/40 text-success',
        warning: 'bg-warning/15 border-warning/40 text-warning',
    };

    return (
        <div
            className={cn(
                'p-4 rounded-lg border-2 transition-all duration-300 hover:scale-105',
                variantStyles[variant],
                className
            )}
        >
            <div className="flex items-center justify-between gap-2">
                <p className="text-xs md:text-sm font-semibold opacity-75 uppercase tracking-wider">{label}</p>
                {icon && <div className="flex-shrink-0 opacity-60">{icon}</div>}
            </div>
            <p className="text-2xl md:text-3xl font-black mt-2">{value}</p>
        </div>
    );
}
