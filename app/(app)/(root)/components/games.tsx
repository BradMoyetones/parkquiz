/* eslint-disable @next/next/no-img-element */
'use client'
import { Brain, HelpCircle, Play, RotateCw, SearchIcon } from "lucide-react";
import GameCard from "./game-card";
import { useRouter } from "next/navigation";

export default function Games() {
    const router = useRouter()
    return (
        <section id="games" className="py-10 bg-muted/30 scroll-mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black mb-4"><span className="text-primary">/</span> Juegos Disponibles</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">Con este catálogo interactivo es casi imposible entrar en el aburrimiento.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <GameCard
                        title="Trivia Wakatá"
                        description="Demuestra cuánto sabes sobre los animales y monumentos del parque."
                        icon={<Brain className="w-6 h-6" />}
                        tag="Popular"
                        onClick={() => router.push('/trivia')}
                    />
                    <GameCard
                        title="Ruleta Familiar"
                        description="Verdad, Reto o Dato Curioso. ¡Perfecto para romper el hielo!"
                        icon={<RotateCw className="w-6 h-6" />}
                        tag="Diversión"
                        onClick={() => router.push('/roulette')}
                    />
                    <GameCard
                        title="Encuentra al Cóndor"
                        description="Mini-juego de observación. ¿Qué tan rápidos son tus ojos?"
                        icon={<SearchIcon />}
                        onClick={() => router.push('/soon')}
                    />
                    <GameCard
                        title="¿Quién Soy?"
                        description="Adivina el personaje o lugar con pistas que se vuelven más fáciles."
                        icon={<HelpCircle className="w-6 h-6" />}
                        onClick={() => router.push('/soon')}
                    />
                </div>
            </div>
        </section>
    )
}
