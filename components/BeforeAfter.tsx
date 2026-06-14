"use client";
import React, { useState, useRef, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function BeforeAfter() {
  const { t } = useLocale();
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const position = ((x - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(position, 0), 100));
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading 
          badge={t('beforeAfter.badge') as string}
          title={t('beforeAfter.title') as string}
        />

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden cursor-ew-resize shadow-2xl"
          onMouseMove={handleMove}
          onTouchMove={handleMove}
        >
          {/* After Image (Base) */}
          <img 
            src="https://picsum.photos/seed/clean-after/1200/800" 
            alt="After cleaning" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute top-6 right-6 bg-accent text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
            {t('beforeAfter.after') as string}
          </div>

          {/* Before Image (Clipped) */}
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
          >
            <img 
              src="https://picsum.photos/seed/dirty-before/1200/800" 
              alt="Before cleaning" 
              className="absolute inset-0 w-full h-full object-cover filter grayscale-[30%] contrast-75"
            />
            <div className="absolute top-6 left-6 bg-primary text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg">
              {t('beforeAfter.before') as string}
            </div>
          </div>

          {/* Slider Line & Handle */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] cursor-ew-resize"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
