'use client'

import { siteConfig } from "@/lib/config";
import { Footprints } from "lucide-react";
import Image from "next/image";
import { Sidebar, SidebarContent, SidebarTrigger } from "./sidebar";
import { Button } from "./ui/button";
import { AnimateIcon } from "./animate-ui/icons/icon";
import { Menu } from "./animate-ui/icons/menu";
import { useState } from "react";
import { Separator } from "./ui/separator";
import { AnimatedThemeToggler } from "./animated-theme-toggler";

export default function SiteHeader() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}>
            <nav className="sticky top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-2">
                            <Image src="/LOGO_FPJD.png" alt={siteConfig.name} width={35} height={35} className="bg-accent rounded-md" />
                            
                            <span className="font-bold text-xl tracking-tight">{siteConfig.name}</span>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-center space-x-8">
                                <a
                                    href="#games"
                                    className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Juegos
                                </a>
                                <a
                                    href="#learn"
                                    className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium"
                                >
                                    Aprender
                                </a>
                                <a
                                    href="#social-run"
                                    className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1"
                                >
                                    <Footprints className="size-4" /> Carreras
                                </a>
                                <button className="bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-all px-5 py-2 rounded-full font-bold text-sm transform hover:scale-105 duration-200 cursor-pointer">
                                    Jugar Ahora
                                </button>
                            </div>
                        </div>
                        
                        <SidebarTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="icon"
                                className="md:hidden"
                            >
                                <AnimateIcon>
                                    <Menu animate={isOpen} />
                                </AnimateIcon>
                            </Button>
                        </SidebarTrigger>

                            
                    </div>
                </div>
            </nav>

            {/* Mobile Menú */}
            <SidebarContent>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm font-semibold text-muted-foreground">Menu</span>
                        <Button 
                            variant={"ghost"} 
                            size={"icon"} 
                            onClick={() => setIsOpen(false)}
                        >
                            <AnimateIcon>
                                <Menu animate={isOpen} />
                            </AnimateIcon>
                        </Button>
                    </div>

                    <Separator />

                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#games" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">
                            Juegos
                        </a>
                        <a href="#learn" className="block px-3 py-2 rounded-md text-base font-medium hover:text-primary">
                            Aprender
                        </a>
                        <a href="#social-run" className="flex items-center gap-1 px-3 py-2 rounded-md text-base font-medium hover:text-primary">
                            <Footprints className="size-4" /> Carreras
                        </a>
                        <a href="#games" className="block px-3 py-2 rounded-md text-base font-medium bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-all text-center">
                            Jugar Ahora
                        </a>
                    </div>

                    <Separator />

                    {/* Settings Section */}
                    <div className="flex flex-col gap-3">
                        <span className="text-xs font-semibold text-muted-foreground tracking-wide">Ajustes</span>
                        <div className="flex items-center justify-between px-3 py-2 rounded-md transition-colors">
                            <span className="text-sm">Tema</span>
                            <AnimatedThemeToggler variant={"ghost"} size={"icon"} />
                        </div>
                    </div>

                    <Separator />

                    {/* Spacer */}
                    <div className="flex-1" />
                </div>
            </SidebarContent>
        </Sidebar>
    );
}
