'use client';

import { Button } from '@/components/ui/button';
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
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-linear-to-t from-background via-background/70 to-transparent py-4 px-4">
            <div className="max-w-4xl mx-auto">
                <Button
                    onClick={onClick}
                    disabled={disabled}
                    className="w-full h-14 md:h-16 font-black text-lg hover:shadow-2xl hover:shadow-primary/40 transition-shadow duration-300 cursor-pointer"
                >
                    <span>{icon}</span>
                    <span>{label}</span>
                </Button>
            </div>
        </div>
    );
}
