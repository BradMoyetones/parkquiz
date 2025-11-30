'use client'
import { MotionEffect } from "@/components/animate-ui/motion-effect";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section";
import { GAMES } from "@/lib/data";
import GameCard from "../components/game-card";
import { useRouter } from "next/navigation";

export default function GamesPage() {
    const router = useRouter()
    
    return (
        <div>
            <Section id="games" className="bg-muted/30">
                <SectionContent>
                    <SectionHeader>
                        <SectionTitle>Juegos Disponibles</SectionTitle>
                        <SectionDescription>
                            Con este catálogo interactivo es casi imposible entrar en el aburrimiento.
                        </SectionDescription>
                    </SectionHeader>
                

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {GAMES.map((game, idx) => (
                            <MotionEffect
                                key={game.title}
                                slide={{ direction: "down" }}
                                fade
                                inView
                                delay={0.10 * idx} // aumento según el index
                            >
                                <GameCard
                                    title={game.title}
                                    description={game.description}
                                    icon={game.icon}
                                    tag={game.tag}
                                    onClick={() => router.push(game.href)}
                                />
                            </MotionEffect>
                        ))}
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}
