/* eslint-disable @next/next/no-img-element */

import { MotionEffect } from '@/components/animate-ui/motion-effect';
import { Section, SectionContent } from '@/components/section';
import { CardStack } from '@/components/ui/card-stack';
import { cn } from '@/lib/utils';
import { Activity, CheckCircle, Clock, Coffee, Footprints } from 'lucide-react';

export const Highlight = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <span
            className={cn(
                'font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5',
                className
            )}
        >
            {children}
        </span>
    );
};
export default function Run() {
    return (
        <Section id="social-run" className="py-24 relative overflow-hidden bg-muted/30 border-y">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-indigo-900/20 to-transparent"></div>

            <SectionContent>
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    <div className="lg:w-1/2">
                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 mb-6">
                                <Footprints className="size-5" />
                                <span className="text-sm font-bold">Jaime Duque en Movimiento</span>
                            </div>
                        </MotionEffect>
                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                            delay={0.05}
                        >
                            <h2 className="text-4xl md:text-5xl font-black mb-6">
                                Carreras con <span className="text-indigo-400">Propósito</span>
                            </h2>
                        </MotionEffect>
                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                            delay={0.1}
                        >
                            <p className="text-lg text-muted-foreground mb-6">
                                Únete a nuestras carreras con causa y corre por un mundo mejor. Cada paso que das apoya
                                iniciativas ambientales y sociales que marcan la diferencia.
                            </p>
                        </MotionEffect>

                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                            delay={0.15}
                        >
                            <ul className="space-y-4 mb-8">
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent-foreground">
                                        <Clock className="text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-bold">07:30 AM</p>
                                        <p className="text-sm text-muted-foreground">
                                            Punto de encuentro: Puerta de Alcalá
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent-foreground">
                                        <Activity className="text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-bold">5K Pace Conversacional</p>
                                        <p className="text-sm text-muted-foreground">
                                            Para todos los niveles. ¡No se deja a nadie atrás!
                                        </p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent-foreground">
                                        <Coffee className="text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Café y Desayuno</p>
                                        <p className="text-sm text-muted-foreground">
                                            Incluido al finalizar la carrera.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </MotionEffect>

                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                            delay={0.2}
                        >
                            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors cursor-pointer">
                                <CheckCircle className="size-5" />
                                Ver mas información
                            </button>
                        </MotionEffect>
                    </div>

                    <div className="w-full lg:w-1/2 relative">
                        <MotionEffect
                            slide={{
                                direction: 'right',
                            }}
                            fade
                            inView
                        >
                            <CardStack
                                showButtons={false}
                                items={[
                                    {
                                        id: 1,
                                        image: '/parque/arboles.jpg',
                                        title: 'Árboles para mi País',
                                        description: 'Parque Jaime Duque',
                                    },
                                    {
                                        id: 2,
                                        image: '/parque/suenos.jpg',
                                        title: 'Carrera Sueños en Construcción',
                                        description: 'Apoya a los niños de la Fundación Sueños',
                                    }
                                ]}
                            />
                        </MotionEffect>
                    </div>
                </div>
            </SectionContent>
        </Section>
    );
}
