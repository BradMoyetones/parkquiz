import type { ReactNode } from 'react';

interface InstructionItem {
    icon: ReactNode;
    title: string;
    description: string;
    color: 'primary' | 'secondary' | 'accent' | 'destructive' | 'success' | 'warning';
}

interface GameInstructionsGridProps {
    items: InstructionItem[];
}

const colorClasses: Record<string, string> = {
    primary: 'bg-primary/10 border-primary/30 text-primary',
    secondary: 'bg-secondary/10 border-secondary/30 text-secondary',
    accent: 'bg-accent/10 border-accent/30 text-accent',
    destructive: 'bg-destructive/10 border-destructive/30 text-destructive',
    success: 'bg-success/10 border-success/30 text-success',
    warning: 'bg-warning/10 border-warning/30 text-warning',
};

const iconColorClasses: Record<string, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    accent: 'text-accent',
    destructive: 'text-destructive',
    success: 'text-success',
    warning: 'text-warning',
};

export function GameInstructionsGrid({ items }: GameInstructionsGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {items.map((item, index) => (
                <div
                    key={index}
                    className={`p-5 rounded-xl border-2 ${
                        colorClasses[item.color]
                    } group hover:shadow-lg transition-all duration-300 hover:scale-105`}
                >
                    <div className="flex gap-4">
                        <div
                            className={`flex-shrink-0 p-3 rounded-lg ${colorClasses[item.color]} ${
                                iconColorClasses[item.color]
                            } group-hover:scale-110 transition-transform duration-300`}
                        >
                            {item.icon}
                        </div>
                        <div>
                            <h3 className="font-bold text-sm md:text-base mb-1">{item.title}</h3>
                            <p className="text-xs md:text-sm text-foreground/70">{item.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
