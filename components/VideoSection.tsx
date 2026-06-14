"use client";
import React, { useState } from 'react';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function VideoSection() {
  const { t } = useLocale();
  const [isPlaying, setIsPlaying] = useState(false);
  const posterUrl = t('video.posterUrl') as string;

  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,hsl(43_60%_45%_/_0.15)_0%,transparent_50%)]" />
      
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('video.badge') as string}
          title={t('video.title') as string}
          light={true}
        />

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] bg-black">
          {!isPlaying ? (
            <>
              <img 
                src={posterUrl} 
                alt="Video poster" 
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
              <button 
                onClick={() => setIsPlaying(true)}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-accent text-white rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 shadow-xl"
              >
                <svg className="w-10 h-10 ml-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </>
          ) : (
            <video 
              className="w-full h-full object-cover"
              controls 
              autoPlay 
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Placeholder video
            />
          )}
        </div>
      </div>
    </section>
  );
}
