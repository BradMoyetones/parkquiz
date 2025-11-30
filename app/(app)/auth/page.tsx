'use client'

import GoogleLogo from "@/components/icons/google-icon";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "@/lib/auth-client";
import { toast } from "sonner";
import { MotionEffect } from "@/components/animate-ui/motion-effect";
import Image from "next/image";

export default function AuthPage() {
    const [tab, setTab] = useState("login")

    const TITLE = tab === "login" ? "Inicia Sesión" : "Crea una Cuenta";
    const PARAGRAPH = tab === "login" ? "Bienvenido de nuevo! Inicia Sesión para continuar" : "Bienvenido! Crea una cuenta para empezar";
    

    async function handleProviderLogin(provider: "google" | "github") {
        try {
            const res = await signIn.social({
                provider,
                callbackURL: "/" // redirigir al home después de login
            })

            if (res.error) {
                toast.error("Hubo un error al iniciar sesión.")
            }
        } catch (error) {
            console.error(error)
            toast.error("Algo salió mal. Intenta de nuevo.")
        }
    }
    return (
        <div className="flex justify-center items-center min-h-screen bg-muted/50">
            <section className="flex min-h-screen bg-card px-4 py-16 md:py-32 shadow border-4 border-t-0 rounded-b-full">
                <form
                    action=""
                    className="max-w-92 m-auto h-fit w-full"
                    key={tab}
                >
                    <div className="p-6">
                        <div>
                            <MotionEffect
                                slide={{
                                    direction: 'left',
                                }}
                                fade
                                zoom
                                delay={0.1}
                            >
                                <Link
                                    href="/"
                                    aria-label="go home"
                                    className="flex items-center gap-2 text-2xl font-bold"
                                >
                                    <Image src={"/LOGO_FPJD.png"} width={30} height={30} alt="Logo del Parque Jaime Duque" />
                                    <h1>ParkQuiz</h1>
                                </Link>
                            </MotionEffect>
                            <MotionEffect
                                slide={{
                                    direction: 'down',
                                }}
                                fade
                                zoom
                                delay={0.15}
                            >
                                <h1 
                                    className="mb-1 mt-4 text-xl font-semibold"
                                >
                                    {TITLE}
                                </h1>
                            </MotionEffect>

                            <MotionEffect
                                slide={{
                                    direction: 'down',
                                }}
                                fade
                                zoom
                                delay={0.2}
                            >
                                <p>
                                    {PARAGRAPH}
                                </p>
                            </MotionEffect>
                        </div>

                        <div className="mt-6 space-y-2">
                            <MotionEffect
                                slide={{
                                    direction: 'down',
                                }}
                                fade
                                zoom
                                delay={0.25}
                            >
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => handleProviderLogin("google")}
                                >
                                    <GoogleLogo className="size-6" />
                                    <span>Google</span>
                                </Button>
                            </MotionEffect>
                        </div>
                    </div>

                    <MotionEffect
                        slide={{
                            direction: 'down',
                        }}
                        fade
                        zoom
                        delay={0.3}
                    >
                        <p className="text-center text-sm">
                            {tab === "login" ? "¿Aun no tienes Cuenta?" : "¿Ya tienes una cuenta?"}
                            <Button
                                variant="link"
                                className="px-2"
                                type="button"
                                onClick={() => setTab((value) => value === "login" ? "singup" : "login")}
                            >
                                {tab === "login" ? "Crear Cuenta" : "Iniciar Sesión"}
                            </Button>
                        </p>
                    </MotionEffect>
                </form>
            </section>
            
        </div>
    )
}

