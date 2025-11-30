'use client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatItem {
    label: string;
    value: string | number;
    max?: number;
    variant?: 'primary' | 'secondary' | 'accent';
}

interface GameStatsSidebarProps {
    stats?: StatItem[];
    onRankingClick?: () => void;
    className?: string;
}

export function GameStatsSidebar({ stats, onRankingClick, className }: GameStatsSidebarProps) {
    return (
        <div
            className={cn('space-y-4', className)}
            style={{
                animation: 'fadeInUp 0.8s ease-out 0.7s backwards',
            }}
        >
            <Card className="bg-card border-border/50 shadow-lg h-full">
                <CardHeader className="pb-4">
                    <CardTitle className="text-2xl flex items-center gap-2">
                        <Trophy className="w-6 h-6 text-primary" />
                        Tu Progreso
                    </CardTitle>
                </CardHeader>
                <Separator className="bg-border/30" />

                <CardContent className="pt-6 space-y-6">
                    {/* Stats Grid */}
                    {stats && stats.length > 0 && (
                        <div className="grid grid-cols-2 gap-3">
                            {stats.map((stat, idx) => (
                                <div
                                    key={idx}
                                    className={cn(
                                        'p-4 rounded-lg border-2 transition-all duration-300',
                                        'hover:shadow-md'
                                    )}
                                    style={{
                                        background:
                                            stat.variant === 'primary'
                                                ? 'var(--primary-background, rgba(var(--color-primary), 0.1))'
                                                : stat.variant === 'secondary'
                                                ? 'var(--secondary-background, rgba(var(--color-secondary), 0.1))'
                                                : 'rgba(var(--color-accent), 0.1)',
                                        borderColor:
                                            stat.variant === 'primary'
                                                ? 'rgba(var(--color-primary), 0.3)'
                                                : stat.variant === 'secondary'
                                                ? 'rgba(var(--color-secondary), 0.3)'
                                                : 'rgba(var(--color-accent), 0.3)',
                                    }}
                                >
                                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-semibold">
                                        {stat.label}
                                    </p>
                                    <p className="text-3xl font-extrabold text-foreground mt-1">
                                        {stat.value}
                                        {stat.max && <span className="text-xs text-muted-foreground">/{stat.max}</span>}
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}

                    <Separator className="bg-border/20" />

                    {/* Ranking Button */}
                    <div className="text-center">
                        <Button
                            onClick={onRankingClick}
                            variant="ghost"
                            className="w-full text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors"
                        >
                            <Trophy className="w-5 h-5 mr-2" />
                            Ver Ranking
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
