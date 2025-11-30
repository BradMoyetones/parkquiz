'use client';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Play, Info } from 'lucide-react';

interface GameActionButtonsProps {
    onPlay: () => void;
    onInfo: () => void;
    playLabel?: string;
    infoLabel?: string;
    isComingSoon?: boolean;
    className?: string;
}

export function GameActionButtons({
    onPlay,
    onInfo,
    playLabel = '¡JUGAR AHORA!',
    infoLabel = 'Cómo Jugar',
    isComingSoon = false,
    className,
}: GameActionButtonsProps) {
    return (
        <div
            className={cn('flex flex-col sm:flex-row gap-4 justify-center', className)}
            style={{
                animation: 'fadeInUp 0.8s ease-out 0.6s backwards',
            }}
        >
            <Button
                onClick={onPlay}
                disabled={isComingSoon}
                className={cn(
                    'py-7 px-8 text-lg font-bold shadow-lg',
                    'hover:scale-105 active:scale-95 transition-all duration-200',
                    !isComingSoon && 'bg-primary hover:bg-primary/90 text-primary-foreground'
                )}
            >
                <Play className="w-5 h-5 mr-2 fill-current" />
                {isComingSoon ? 'PRÓXIMAMENTE' : playLabel}
            </Button>

            <Button
                onClick={onInfo}
                variant="outline"
                className="py-7 px-8 text-lg font-bold hover:scale-105 active:scale-95 transition-all duration-200 bg-transparent"
            >
                <Info className="w-5 h-5 mr-2" />
                {infoLabel}
            </Button>
        </div>
    );
}
