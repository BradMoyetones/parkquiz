import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section'
import { Button } from '@/components/ui/button'
import { Gamepad2 } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function TriviaPage() {
    return (
        <div>
            <Section className="bg-muted/30 min-h-[calc(100vh-64px)]">
                <SectionContent>
                    <SectionHeader>
                        <SectionTitle>Trivia Wakatá</SectionTitle>
                        <SectionDescription>
                            Mira las instrucciones y diviértete poniendo a prueba tus conocimientos sobre el parque.
                        </SectionDescription>
                    </SectionHeader>
                

                    <div>
                        <Link href={"/games/trivia/play"}>
                            <Button>
                                <Gamepad2 className="inline size-6" />
                                Play
                            </Button>
                        </Link>
                        {/* Aqui irán las instrucciones del juego boton de empezar a jugar, puntuacion si tiene etc... */}
                    </div>
                </SectionContent>
            </Section>
        </div>
    )
}
