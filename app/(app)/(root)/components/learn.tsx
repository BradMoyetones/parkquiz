import { MotionEffect } from '@/components/animate-ui/motion-effect'
import { Section, SectionContent, SectionDescription, SectionHeader, SectionTitle } from '@/components/section'
import { Card, CardContent } from '@/components/ui/card'
import { FACTS } from '@/lib/data'

export default function Learn() {
    return (
        <Section id="learn">
            <SectionContent>
                <SectionHeader>
                    <SectionTitle>Aprende Más Parque</SectionTitle>
                    <SectionDescription>
                        Con este catálogo interactivo es casi imposible entrar en el aburrimiento.
                    </SectionDescription>
                </SectionHeader>
                

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {FACTS.map((fact, idx) => (
                        <MotionEffect
                            key={fact.title}
                            slide={{ direction: "down" }}
                            fade
                            zoom
                            inView
                            delay={0.10 * idx} // aumento según el index
                        >
                            <Card
                                className="rounded-xl hover:bg-accent transition-colors"
                            >
                                <CardContent>
                                    <div className="mb-3 p-2 bg-accent w-fit rounded-lg border">
                                        {fact.icon}
                                    </div>
                                    <h4 className="font-bold mb-2">{fact.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{fact.text}</p>
                                </CardContent>
                            </Card>
                        </MotionEffect>
                    ))}
                </div>
            </SectionContent>
        </Section>
    )
}
