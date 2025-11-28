/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, LucideIcon } from "lucide-react";

type GameCardProps = {
    title: string,
    description: string,
    icon: React.ReactElement<LucideIcon>,
    tag?: string,
} & React.HTMLAttributes<HTMLDivElement>;

const GameCard = ({ title, description, icon, tag, ...props }: GameCardProps) => (
    <Card
        className={`group p-0 relative overflow-hidden border hover:border-primary transition-all duration-300 hover:-translate-y-2 cursor-pointer`}
        {...props}
    >
        <CardContent className="p-0">
            <div className="aspect-square bg-background overflow-hidden relative">
                <img src="https://midu.dev/images/wallpapers/una-taza-de-javascript.png" alt="Midudev" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                    <h3 className="font-bold text-xl text-primary/80 group-hover:text-primary group-hover:text-shadow-[0_0_20px_var(--primary)] transition-all">{title}</h3>
                    <p className="text-muted-foreground text-sm font-mono">Disponible</p>
                </div>
            </div>
            <div
                className={`absolute top-0 right-0 w-24 h-24 bg-accent-foreground opacity-10 rounded-bl-full transition-transform group-hover:scale-110`}
            />
            {tag && (
                <span className="absolute top-4 right-4 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
                    {tag}
                </span>
            )}

            <div className="p-4">
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{description}</p>
                <div className="flex items-center text-primary text-sm font-semibold group-hover:translate-x-2 transition-transform">
                    Jugar ahora <ChevronRight className="w-4 h-4 ml-1" />
                </div>
            </div>

        </CardContent>
    </Card>
);

export default GameCard