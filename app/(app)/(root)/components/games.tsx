'use client'
import { Brain, HelpCircle, RotateCw, SearchIcon } from "lucide-react";
import GameCard from "./game-card";
import { useRouter } from "next/navigation";
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from "@/components/section";
import { MotionEffect } from "@/components/animate-ui/motion-effect";
import { GAMES } from "@/lib/data";

export default function Games() {
    const router = useRouter()
    return (
        <Section id="games" className="bg-muted/20">
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
                            zoom
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
    )
}
