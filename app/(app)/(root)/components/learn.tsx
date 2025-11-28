import { Card, CardContent } from '@/components/ui/card'
import { FACTS } from '@/lib/data'
import { Compass } from 'lucide-react'
import React from 'react'

export default function Learn() {
    return (
        <section id='learn' className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
                <Compass className="w-6 h-6 text-primary" />
                <h3 className="text-2xl font-bold">Descubre el Parque</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {FACTS.map((fact, idx) => (
                    <Card
                        key={idx}
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
                ))}
            </div>
        </section>
    )
}
