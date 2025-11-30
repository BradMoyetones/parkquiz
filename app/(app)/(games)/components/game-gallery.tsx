'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface GameGalleryProps {
    images: string[];
    title: string;
}

export function GameGallery({ images, title }: GameGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <div className='relative'>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[Navigation, Pagination, EffectCards, Autoplay]}
                className="mySwiper"
                navigation
                autoplay={{delay: 5000}}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => setCurrentIndex(swiper.activeIndex)}
            >
                    {/* Chip con la cantidad en total de slides */}
                    <div className="absolute top-4 right-4 z-1000000 bg-background/20 border backdrop-blur-sm font-bold text-sm px-3 py-1 rounded-full">
                        {currentIndex + 1} / {9}
                    </div>  
                    {Array.from({ length: 9 }).map((_, index) => (
                        <SwiperSlide className={cn('bg-transparent')} key={index + '-slide'}>
                            {({ isActive }) => (
                                <Card className={cn("aspect-video flex items-center justify-center transition-all", isActive && "border-4 border-primary/50")}>Slide {index + 1}</Card>
                            )}
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}
