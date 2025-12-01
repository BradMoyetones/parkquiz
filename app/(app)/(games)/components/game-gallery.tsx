'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GameGalleryProps {
    images: string[];
    title: string;
}

export function GameGallery({ images, title }: GameGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const data = Array.from({ length: 9 });
    return (
        <div className='relative'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[Navigation, Pagination, EffectCards, Autoplay]}
                className="mySwiper"
                navigation
                loop
                autoplay={{delay: 5000}}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => setCurrentIndex(swiper.realIndex)}
                onSlideChange={(swiper) => setCurrentIndex(swiper.realIndex)}

            >
                    {/* Chip con la cantidad en total de slides */}
                    <div className="absolute top-4 right-4 z-10 bg-background/20 border backdrop-blur-sm font-bold text-sm px-3 py-1 rounded-full">
                        {currentIndex + 1} / {data.length}
                    </div>  
                    {data.map((_, index) => (
                        <SwiperSlide className='overflow-hidden! rounded-xl' key={index + '-slide'}>
                            {({ isActive }) => (
                                <Card className={cn("aspect-video flex items-center justify-center transition-all", isActive && "border-4 border-primary/50")}>Slide {index + 1}</Card>
                            )}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
