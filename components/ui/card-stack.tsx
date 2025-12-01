/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CardProps = {
  id: number;
  image: string;
  title?: string;
  description?: string;
};

type CardStackProps = {
  items: CardProps[];
  offset?: number;
  scaleFactor?: number;
  showButtons?: boolean;
  showIndicators?: boolean;
  isAutoplay?: boolean;
  delay?: number;
  pauseOnManual?: number;
} & React.HTMLAttributes<HTMLDivElement>;

function CardStack({
  items,
  offset = 12,
  scaleFactor = 0.06,
  showButtons = true,
  showIndicators = true,
  isAutoplay = true,
  delay = 5000,
  pauseOnManual = 3000,
  className,
  ...props
}: CardStackProps) {
  const [cards, setCards] = useState<CardProps[]>(items);
  const [paused, setPaused] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const rotateNext = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.unshift(arr.pop()!);
      return arr;
    });

    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  const rotatePrev = () => {
    setCards((prev) => {
      const arr = [...prev];
      arr.push(arr.shift()!);
      return arr;
    });

    setActiveIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  const handleManual = (action: () => void) => {
    action(); // execute next or previous

    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // pause autoplay for X ms
    timeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, pauseOnManual);
  };

  // Go to specific index via dots
  const goToIndex = (targetIndex: number) => {
    if (targetIndex === activeIndex) return;

    const diff = targetIndex - activeIndex;
    const arr = [...cards];

    if (diff > 0) {
      for (let i = 0; i < diff; i++) {
        arr.unshift(arr.pop()!);
      }
    } else {
      for (let i = 0; i < Math.abs(diff); i++) {
        arr.push(arr.shift()!);
      }
    }

    setCards(arr);
    setActiveIndex(targetIndex);

    setPaused(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setPaused(false);
    }, pauseOnManual);
  };

  // Rotar automáticamente (stack animation)
  useEffect(() => {
    if (!isAutoplay || paused) return;

    autoplayRef.current = setInterval(() => {
      rotateNext();
    }, delay);

    return () => clearInterval(autoplayRef.current!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAutoplay, paused, delay]);

  return (
    <div 
      className={cn("relative max-w-[600px] w-full aspect-video mx-auto", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      {...props}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-indigo-500 rounded-2xl rotate-3 blur opacity-30"></div>

      {/* Cards */}
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute left-0 right-0 w-full h-full mx-auto"
            style={{ transformOrigin: "top center" }}
            animate={{
              top: index * -offset,
              scale: 1 - index * scaleFactor,
              zIndex: cards.length - index,
            }}
          >
            <StackCard {...card} />
          </motion.div>
        );
      })}

      {/* Buttons */}
      {showButtons && (
        <>
          <button
            onClick={() => handleManual(rotatePrev)}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => handleManual(rotateNext)}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && (
        <>
          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2 bg-black/30 backdrop-blur-sm px-3 py-2 rounded-full">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => goToIndex(i)}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${i === activeIndex ? "bg-white w-6" : "bg-white/40 w-2"}
                `}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="absolute top-4 right-4 z-20 px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-sm font-medium">
            {activeIndex + 1}/{items.length}
          </div>
        </>
      )}
    </div>
  );
}

function StackCard({
  image,
  title,
  description,
}: CardProps) {
  const showOverlay = title || description;

  return (
    <div className="relative bg-muted/60 backdrop-blur-2xl rounded-2xl p-2 border border-indigo-400/50">
      <div className="aspect-video bg-background rounded-xl overflow-hidden relative flex items-center justify-center">
        <img
          src={image}
          alt={title || "Image"}
          className="opacity-50 object-cover w-full h-full"
        />

        {showOverlay && (
          <div className="absolute inset-0 flex items-center justify-center p-2">
            <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl border border-muted-foreground/50 text-center">
              {title && (
                <h4 className="text-xl sm:text-2xl font-bold text-white mb-2">{title}</h4>
              )}
              {description && (
                <p className="text-sm sm:text-base text-primary">{description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export {
  CardStack,
  StackCard,
  type CardStackProps,
  type CardProps,
}