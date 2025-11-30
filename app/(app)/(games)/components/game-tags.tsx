'use client';

import { cn } from '@/lib/utils';

interface GameTagsProps {
    tags: string[];
    className?: string;
}

export function GameTags({ tags, className }: GameTagsProps) {
    const colors = ['from-primary/30 to-primary/10', 'from-accent/30 to-accent/10', 'from-success/30 to-success/10'];

    return (
        <div className={cn('flex flex-wrap gap-2', className)}>
            {tags.map((tag, idx) => (
                <span
                    key={tag}
                    className={cn(
                        'px-4 py-2 rounded-full text-xs md:text-sm font-semibold',
                        'border-2 border-primary/30',
                        'bg-gradient-to-r',
                        colors[idx % colors.length],
                        'transition-all duration-300 hover:scale-110 hover:shadow-lg',
                        'text-primary'
                    )}
                >
                    {tag}
                </span>
            ))}
        </div>
    );
}
