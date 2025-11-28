import { siteConfig } from "@/lib/config";
import { Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

export default function SiteFooter() {
    return (
        <footer className="bg-background border-t py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Image src="/LOGO_FPJD.png" alt={siteConfig.name} width={35} height={35} className="bg-accent rounded-md" />
                            <span className="font-bold text-xl tracking-tight">{siteConfig.name}</span>
                        </div>
                        <p className="text-muted-foreground max-w-sm">
                            La conferencia hecha por la comunidad, para la comunidad. Impulsada por la pasión por el código.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Enlaces</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><a href="#" className="hover:text-js-base">Código de Conducta</a></li>
                            <li><a href="#" className="hover:text-js-base">Sponsorship</a></li>
                            <li><a href="#" className="hover:text-js-base">Prensa</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href={siteConfig.links.twitter} className="text-muted-foreground hover:text-primary"><Twitter /></a>
                            <a href={siteConfig.links.instagram} className="text-muted-foreground hover:text-primary"><Instagram /></a>
                            <a href={siteConfig.links.github} className="text-muted-foreground hover:text-primary"><Github /></a>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} Brad Moyetones. Todos los derechos reservados.</p>
                    <p>Hecho con 💛💙❤️ y JavaScript por <a href="https://itsbrad.dev" className="text-primary hover:underline">Brad</a></p>
                </div>
            </div>
        </footer>
    )
}
