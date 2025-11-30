/* eslint-disable @next/next/no-img-element */

import { MotionEffect } from "@/components/animate-ui/motion-effect";
import { Section, SectionContent } from "@/components/section";
import { Activity, CheckCircle, Clock, Coffee, Footprints } from "lucide-react";

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
                            <h2 className="text-4xl md:text-5xl font-black mb-6">Carreras con <span className="text-indigo-400">Propósito</span></h2>
                        </MotionEffect>
                        <MotionEffect
                            slide={{
                                direction: 'left',
                            }}
                            fade
                            inView
                            delay={0.10}
                        >
                            <p className="text-lg text-muted-foreground mb-6">
                                Únete a nuestras carreras con causa y corre por un mundo mejor. Cada paso que das apoya iniciativas ambientales y sociales que marcan la diferencia.
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
                                        <p className="text-sm text-muted-foreground">Punto de encuentro: Puerta de Alcalá</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent-foreground">
                                        <Activity className="text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-bold">5K Pace Conversacional</p>
                                        <p className="text-sm text-muted-foreground">Para todos los niveles. ¡No se deja a nadie atrás!</p>
                                    </div>
                                </li>
                                <li className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center border border-accent-foreground">
                                        <Coffee className="text-accent-foreground" />
                                    </div>
                                    <div>
                                        <p className="font-bold">Café y Desayuno</p>
                                        <p className="text-sm text-muted-foreground">Incluido al finalizar la carrera.</p>
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
                            delay={0.20}
                        >
                            <button className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-lg transition-colors cursor-pointer">
                                <CheckCircle className="size-5" />
                                Ver mas información
                            </button>
                        </MotionEffect>
                    </div>

                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-indigo-500 rounded-2xl rotate-3 blur opacity-30"></div>
                        <MotionEffect
                            slide={{
                                direction: 'right',
                            }}
                            fade
                            inView
                        >
                            <div className="relative bg-muted/60 backdrop-blur-2xl rounded-2xl p-2 border border-indigo-400/50">
                                <div className="aspect-video bg-gray-900 rounded-xl overflow-hidden relative flex items-center justify-center">
                                    <img src="https://images.unsplash.com/photo-1610816529753-0498f9bb1906?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Runners" className="opacity-50 object-cover w-full h-full" />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-muted-foreground/50 text-center">
                                            <h4 className="text-2xl font-bold text-white mb-2">Arboles para mi País</h4>
                                            <p className="text-primary">Parque Jaime Duque</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </MotionEffect>
                    </div>
                </div>
            </SectionContent>
        </Section>
    )
}
