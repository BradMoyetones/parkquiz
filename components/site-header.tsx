'use client'

import { siteConfig } from "@/lib/config";
import { Footprints } from "lucide-react";
import Image from "next/image";

export default function SiteHeader() {
    return (
        <nav className="sticky top-0 w-full z-50 bg-background/90 backdrop-blur-md border-b border-border">
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
                            <button className="bg-accent text-primary hover:bg-primary hover:text-primary-foreground transition-all px-5 py-2 rounded-full font-bold text-sm transform hover:scale-105 duration-200">
                                Jugar Ahora
                            </button>
                        </div>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            type="button"
                            onClick={() => document.getElementById('mobile-menu')?.classList.toggle('hidden')}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
                        >
                            <i data-lucide="menu" className="w-6 h-6"></i>
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div className="hidden md:hidden bg-[#1a1a1a]" id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700">
                    <a href="#speakers" className="block px-3 py-2 rounded-md text-base font-medium hover:text-js-base">
                        Speakers
                    </a>
                    <a href="#agenda" className="block px-3 py-2 rounded-md text-base font-medium hover:text-js-base">
                        Agenda
                    </a>
                    <a href="#social-run" className="block px-3 py-2 rounded-md text-base font-medium hover:text-js-base">
                        Social Run
                    </a>
                    <a href="#" className="block px-3 py-2 rounded-md text-base font-medium text-js-base font-bold">
                        Comprar Tickets
                    </a>
                </div>
            </div>
        </nav>
    );
}
