'use client';

import { Gamepad2 } from 'lucide-react';
import type { ReactNode } from 'react';

interface GameStickyButtonProps {
    onClick: () => void;
    label: string;
    icon?: ReactNode;
    disabled?: boolean;
}

export function GameStickyButton({
    onClick,
    label,
    icon = <Gamepad2 className="w-6 h-6" />,
    disabled = false,
}: GameStickyButtonProps) {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-background via-background/95 to-transparent pt-4 pb-6 px-4">
            <div className="max-w-4xl mx-auto">
                <button
                    onClick={onClick}
                    disabled={disabled}
                    className="w-full h-14 md:h-16 rounded-xl bg-gradient-to-r from-primary via-primary to-primary/90 text-primary-foreground font-black text-lg hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 group"
                >
                    <span className="group-hover:scale-110 transition-transform duration-300">{icon}</span>
                    <span>{label}</span>
                </button>
            </div>
        </div>
    );
}
