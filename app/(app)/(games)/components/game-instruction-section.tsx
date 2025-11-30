'use client';

import type React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

interface InstructionItem {
    icon: React.ReactNode;
    title: string;
    description: string | React.ReactNode;
    color?: 'primary' | 'success' | 'warning' | 'destructive' | 'accent';
}

interface GameInstructionSectionProps {
    title?: string;
    items: InstructionItem[];
    className?: string;
    tags?: string[];
}

const colorMap = {
    primary: 'bg-primary/10 border-primary/30',
    success: 'bg-success/10 border-success/30',
    warning: 'bg-warning/10 border-warning/30',
    destructive: 'bg-destructive/10 border-destructive/30',
    accent: 'bg-accent/10 border-accent/30',
};

export function GameInstructionSection({
    title = 'Prepárate: Las Reglas',
    items,
    className,
    tags,
}: GameInstructionSectionProps) {
    return (
        <div
            className={cn('space-y-6', className)}
            style={{
                animation: 'fadeInUp 0.8s ease-out 0.5s backwards',
            }}
        >
            <Card className="bg-card border-border/50 shadow-lg">
                <CardHeader className="pb-4">
                    <CardTitle className="text-3xl flex items-center gap-3">{title}</CardTitle>
                </CardHeader>
                <Separator className="bg-border/30" />

                <CardContent className="pt-6 space-y-4">
                    {/* Instruction Items */}
                    <div className="space-y-4">
                        {items.map((item, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    'flex items-start gap-4 p-4 rounded-lg border-2 transition-all duration-300',
                                    'hover:shadow-md hover:scale-[1.01]',
                                    colorMap[item.color || 'primary']
                                )}
                            >
                                <div className="flex-shrink-0 text-2xl mt-1">{item.icon}</div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                    <p className="text-muted-foreground text-sm">
                                        {typeof item.description === 'string' ? item.description : item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Tags */}
                    {tags && tags.length > 0 && (
                        <>
                            <Separator className="bg-border/20 my-6" />
                            <div className="space-y-3">
                                <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                                    Temas a Explorar
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className={cn(
                                                'px-4 py-2 rounded-full text-sm font-semibold',
                                                'bg-primary/15 text-primary border border-primary/30',
                                                'transition-all duration-300 hover:scale-105 hover:bg-primary/25 cursor-pointer'
                                            )}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
