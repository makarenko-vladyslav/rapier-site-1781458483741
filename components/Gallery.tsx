"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Gallery() {
  const { t } = useLocale();
  const items = t('gallery.items') as Array<{ url: string; alt: string }>;

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('gallery.badge') as string}
          title={t('gallery.title') as string}
        />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm ${i === 0 || i === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className={`relative w-full ${i === 0 || i === 3 ? 'aspect-[4/3]' : 'aspect-square'}`}>
                <img 
                  src={item.url} 
                  alt={item.alt} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-medium text-lg">{item.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
