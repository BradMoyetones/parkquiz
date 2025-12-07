/* eslint-disable @next/next/no-img-element */
'use client';

import { useRef, useState } from 'react';
import { Brain, Clock, Zap, Target, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { GameInstructionsGrid } from '../../components/game-instructions-grid';
import { GameStickyButton } from '../../components/game-sticky-button';
import { CardProps, CardStack } from '@/components/ui/card-stack';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const TRIVIA_GALLERY_IMAGES: CardProps[] = [
    {
        id: 1,
        image: '/games/spiderman/gamepad.jpg',
    },
    {
        id: 2,
        image: '/multiple-choice-questions-interface.jpg',
    },
    {
        id: 3,
        image: '/leaderboard-ranking-screen.jpg',
    },
];

const INSTRUCTION_ITEMS = [
    {
        icon: <Clock className="w-5 h-5" />,
        title: '⏱️ Tiempo Limitado',
        description: '15 segundos para responder. ¡Piensa rápido como un jaguar!',
        color: 'warning' as const,
    },
    {
        icon: <Zap className="w-5 h-5" />,
        title: '⚡ Puntos y Récords',
        description: '10 preguntas. Cada acierto suma puntos. ¡Busca el Top 10!',
        color: 'destructive' as const,
    },
    {
        icon: <Target className="w-5 h-5" />,
        title: '🎯 Modo de Juego',
        description: 'Elige una de cuatro respuestas. Solo una es correcta.',
        color: 'success' as const,
    },
    {
        icon: <Brain className="w-5 h-5" />,
        title: '🧠 Temas a Explorar',
        description: 'Conoce sobre animales e historia del parque.',
        color: 'primary' as const,
    },
];

const TOPICS = ['Bioparque Wakatá', 'Monumentos Históricos', 'Historia de Colombia', 'Fauna y Biodiversidad'];

export default function TriviaPage() {
    const [isExpanded, setIsExpanded] = useState(false);
    const imgRef = useRef(null)

    const handlePlay = () => {
        console.log('Navigate to trivia game');
    };

    const handleRanking = () => {
        console.log('Navigate to ranking');
    };

    useGSAP(() => {
        // Parte de este código se baso en el ejemplo de la cominidad de GSAP -> https://gsap.com/community/forums/topic/37847-parallax-effect-on-background-image/
        const smoother = ScrollSmoother.create({
            wrapper: '#smooth-wrapper',
            content: '#smooth-content',
            smooth: 1.2,
            effects: true,
        });

        const header = document.getElementById("parallax-header");
        const img = imgRef.current;

        if (!img || !header) return;

        // Igual que el ejemplo
        const getRatio = (el: HTMLElement) => window.innerHeight / (window.innerHeight + el.offsetHeight);

        // Crear espacio extra para mover sin recortar
        gsap.set(img, { scale: 1 });

        gsap.fromTo(
            img,
            {
                y: () => 0, // como el i===0 del ejemplo
            },
            {
                y: () => window.innerHeight * (1 - getRatio(header)),
                ease: "none",
                scrollTrigger: {
                    trigger: header,
                    start: "top", 
                    end: "bottom top",
                    scrub: true,
                    invalidateOnRefresh: true,
                }
            }
        );

        return () => {
            smoother.kill();
        };

    }, []);

    // Nota: Dejar las dependencias vacías es correcto si usas GSAP con IDs en el DOM.

    return (
        <main className="min-h-screen w-full bg-background text-foreground">
            <div id="smooth-wrapper">
                <div id="smooth-content" className='relative max-w-4xl mx-auto'>
                    <header 
                        id="parallax-header"
                        className="flex relative items-center justify-center h-96 bg-accent max-w-4xl mx-auto overflow-hidden"
                    >
                        <img ref={imgRef} src="/games/spiderman/spiderman-background.jpg" alt="" className='absolute object-center object-cover w-full h-full top-0 left-0' />
                        {/* <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" alt="" className='object-center object-cover w-full' /> */}
                    </header>
                    <div
                        className="absolute inset-0 h-97 bg-linear-to-t from-background to-transparent"
                    />

                    {/* Content with padding for sticky button */}
                    <div className="relative w-full pb-24">
                        {/* Hero Section - Attractive header */}
                        <div className="px-4 md:px-6 pt-8 md:pt-12 pb-8">
                            <div className="max-w-4xl mx-auto">
                                {/* Icon Badge */}
                                <div className="mb-6 flex justify-center">
                                    <div className="inline-flex items-center justify-center text-primary outline-8 outline-transparent hover:outline-8 hover:outline-accent p-4 rounded-2xl bg-linear-to-br from-primary/20 to-accent/20 border-2 border-primary/30 group hover:scale-110 transition-all duration-300">
                                        <Brain className="w-12 h-12" />
                                    </div>
                                </div>

                                {/* Title and Tagline */}
                                <div className="text-center mb-8">
                                    <h1 className="text-4xl md:text-5xl font-black text-foreground mb-3 leading-tight">
                                        Trivia Bioparque Wakatá
                                    </h1>
                                    <p className="text-lg md:text-xl text-muted-foreground font-light">
                                        Pon a prueba tu conocimiento sobre la naturaleza y la historia de Colombia
                                    </p>
                                </div>

                                {/* Quick Stats */}
                                <div className="grid grid-cols-2 gap-4 mb-8">
                                    <div className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-center">
                                        <p className="text-sm font-medium text-muted-foreground mb-1">
                                            Tu Mejor Puntaje
                                        </p>
                                        <p className="text-3xl font-black text-primary">9/10</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 text-center">
                                        <p className="text-sm font-medium text-muted-foreground mb-1">
                                            Partidas Jugadas
                                        </p>
                                        <p className="text-3xl font-black text-accent">14</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Gallery Section */}
                        <div className="px-4 md:px-6 pb-12 overflow-hidden">
                            <div className="max-w-4xl mx-auto">
                                <h2 className="text-2xl font-black text-foreground mb-4">Vista Previa del Juego</h2>
                                <CardStack items={TRIVIA_GALLERY_IMAGES} className="max-w-4xl w-full mt-10" />
                            </div>
                        </div>

                        {/* Expandable Instructions Section */}
                        <div className="px-4 md:px-6">
                            <div className="max-w-4xl mx-auto">
                                {/* Expand Toggle Button */}
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="w-full px-6 py-4 rounded-xl border-2 border-border font-bold text-foreground hover:bg-muted/50 transition-all duration-200 flex items-center justify-between group"
                                >
                                    <span>{isExpanded ? '− Ocultar Instrucciones' : '+ Ver Cómo Jugar'}</span>
                                    <span
                                        className={`transition-transform duration-300 ${
                                            isExpanded ? 'rotate-180' : ''
                                        }`}
                                    >
                                        ▼
                                    </span>
                                </button>

                                {/* Instructions Grid - Expandable */}
                                {isExpanded && (
                                    <div className="mt-6 space-y-8 pb-8 animate-in fade-in duration-300">
                                        <GameInstructionsGrid items={INSTRUCTION_ITEMS} />

                                        {/* Topics Section */}
                                        <div className="space-y-4">
                                            <h3 className="text-xl font-black text-foreground">Temas que Explorarás</h3>
                                            <div className="flex flex-wrap gap-3">
                                                {TOPICS.map((topic, index) => (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-sm font-semibold text-foreground hover:scale-105 transition-transform duration-300 cursor-default"
                                                    >
                                                        {topic}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Leaderboard CTA */}
                                        <div className="p-6 rounded-xl bg-gradient-to-br from-primary/15 via-transparent to-accent/10 border-2 border-primary/20">
                                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                                                <div>
                                                    <h3 className="text-lg font-black text-foreground mb-1">
                                                        Compite con Otros Jugadores
                                                    </h3>
                                                    <p className="text-sm text-muted-foreground">
                                                        Sube el ranking global y demuestra tu conocimiento
                                                    </p>
                                                </div>
                                                <Button
                                                    onClick={handleRanking}
                                                    className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground font-bold"
                                                >
                                                    <Trophy className="w-4 h-4 mr-2" />
                                                    Ver Ranking
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <GameStickyButton onClick={handlePlay} label="¡JUGAR AHORA!" />

            {/* Animations */}
            <style jsx>{`
                @keyframes pulse {
                    0%,
                    100% {
                        opacity: 1;
                    }
                    50% {
                        opacity: 0.7;
                    }
                }

                .animate-pulse {
                    animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }

                .delay-500 {
                    animation-delay: 500ms;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }

                @supports (animation-timeline: view()) {
                    .animate-in {
                        animation: slideIn 0.3s ease-out forwards;
                    }

                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateY(10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }
            `}</style>
        </main>
    );
}
