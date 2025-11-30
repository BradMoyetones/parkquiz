'use client';

import type React from 'react';
import { cn } from '@/lib/utils';

interface GameLandingShellProps {
    children: React.ReactNode;
    className?: string;
    withGradient?: boolean;
}

export function GameLandingShell({ children, className, withGradient = true }: GameLandingShellProps) {
    return (
        <div
            className={cn(
                'min-h-screen w-full',
                'bg-background text-foreground',
                'flex items-center justify-center',
                'overflow-hidden relative',
                className
            )}
        >
            {/* Gradient background effect */}
            {withGradient && (
                <>
                    <div
                        className="absolute inset-0 opacity-10"
                        style={{
                            background: 'radial-gradient(circle at 20% 50%, var(--color-primary) 0%, transparent 50%)',
                            pointerEvents: 'none',
                        }}
                    />
                    <div
                        className="absolute inset-0 opacity-5"
                        style={{
                            background:
                                'radial-gradient(circle at 80% 80%, var(--color-secondary) 0%, transparent 50%)',
                            pointerEvents: 'none',
                        }}
                    />
                </>
            )}

            {/* Content */}
            <div className="relative w-full max-w-6xl px-4 md:px-8 py-12 md:py-20">{children}</div>

            {/* Animated background elements */}
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes game-icon-pulse {
                    0%,
                    100% {
                        box-shadow: 0 0 0 0 rgba(var(--color-primary), 0.7);
                    }
                    50% {
                        box-shadow: 0 0 0 12px rgba(var(--color-primary), 0);
                    }
                }
            `}</style>
        </div>
    );
}
