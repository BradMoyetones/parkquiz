/* eslint-disable @next/next/no-img-element */
'use client'
import { MotionEffect } from "@/components/animate-ui/motion-effect";
import { siteConfig } from "@/lib/config";
import { ArrowRight, Calendar, MapPin } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-[calc(100vh-65px)] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 pattern-grid opacity-20 text-muted-foreground/40"></div>
            {/* Abstract Shapes */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <MotionEffect
                    slide={{
                        direction: 'down',
                    }}
                    fade
                    zoom
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground border border-primary mb-8 backdrop-blur-2xl animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="text-sm font-medium">Nuevos mini-juegos disponibles</span>
                    </div>
                </MotionEffect>
                
                <MotionEffect
                    slide={{
                        direction: 'down',
                    }}
                    fade
                    zoom
                    delay={0.15}
                >
                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6">
                        ¡La espera es parte de la <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-emerald-600">Diversión!</span>
                    </h1>
                </MotionEffect>

                <MotionEffect
                    slide={{
                        direction: 'down',
                    }}
                    fade
                    zoom
                    delay={0.25}
                >
                    <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-muted-foreground">
                        Juega, aprende y desafía a tu familia mientras disfrutas de nuestros restaurantes. Sin descargas, directo desde tu mesa.
                    </p>
                </MotionEffect>
                
                <div className="mt-8 flex flex-col items-center justify-center gap-4">
                    <MotionEffect
                        slide={{
                            direction: 'down',
                        }}
                        fade
                        zoom
                        delay={0.35}
                    >
                        <div className="flex items-center gap-3 text-lg font-semibold bg-muted/30 px-6 py-3 rounded-xl border border-border">
                            <Calendar className="text-primary" /> {new Date().toLocaleDateString('es-CO', {
                                day: "2-digit",
                                month: "long",
                                year: "numeric",
                            })}
                            <span className="text-muted-foreground">|</span>
                            <MapPin className="text-primary" /> PJD
                        </div>
                    </MotionEffect>
                    
                    <MotionEffect
                        slide={{
                            direction: 'down',
                        }}
                        fade
                        zoom
                        delay={0.45}
                    >
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-muted-foreground text-sm">Organizado por</span>
                            <a href={siteConfig.links.website} className="flex items-center gap-2 bg-accent border-primary px-3 py-1 rounded-full border">
                                <img src="https://itsbrad.dev/_next/image?url=%2Fimages%2Favatar.jpg&w=32&q=75" alt="midudev" className="w-6 h-6 rounded-full border border-primary object-cover object-center" />
                                <span className="font-bold text-accent-foreground text-sm">@itsbradn</span>
                            </a>
                        </div>
                    </MotionEffect>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <MotionEffect
                        slide={{
                            direction: 'down',
                        }}
                        fade
                        zoom
                        delay={0.55}
                    >
                        <a href="#games" className="flex items-center justify-center gap-2 px-8 py-4 bg-primary/80 text-primary-foreground font-bold text-lg rounded-lg hover:bg-primary hover:scale-105 transition-all shadow-[0_0_20px_var(--primary)]">
                            Explorar Juegos <ArrowRight />
                        </a>
                    </MotionEffect>
                    <MotionEffect
                        slide={{
                            direction: 'down',
                        }}
                        fade
                        zoom
                        delay={0.65}
                    >
                        <a href="#learn" className="px-8 py-4 bg-transparent border border-border font-bold text-lg rounded-lg hover:border-primary transition-all">
                            Aprender
                        </a>
                    </MotionEffect>
                </div>
            </div>
        </section>
    )
}
