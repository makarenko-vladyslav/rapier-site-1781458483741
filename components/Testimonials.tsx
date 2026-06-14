"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Testimonials() {
  const { t } = useLocale();
  const items = t('testimonials.items') as Array<{ name: string; role: string; text: string }>;

  // Duplicate for infinite marquee
  const marqueeItems = [...items, ...items];

  return (
    <section id="reviews" className="py-24 bg-primary overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(215_40%_25%)_0%,transparent_100%)] opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
        <SectionHeading 
          badge={t('testimonials.badge') as string}
          title={t('testimonials.title') as string}
          light={true}
        />
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="animate-[marquee_40s_linear_infinite] flex gap-6 px-3 group-hover:[animation-play-state:paused]">
          {marqueeItems.map((item, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(star => (
                  <svg key={star} className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-text-main text-lg leading-relaxed mb-8">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <img 
                  src={`https://picsum.photos/seed/${item.name.replace(/\s/g, '')}/100/100`} 
                  alt={item.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-100"
                />
                <div>
                  <p className="text-primary font-bold">{item.name}</p>
                  <p className="text-text-muted text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
