"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function CTABanner() {
  const { t } = useLocale();

  return (
    <section className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,hsl(43_60%_45%_/_0.2)_0%,transparent_60%)]" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
              {t('ctaBanner.title') as string}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10">
              {t('ctaBanner.subtitle') as string}
            </p>
            <a 
              href="#calculator" 
              className="inline-block bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:-translate-y-1"
            >
              {t('ctaBanner.cta') as string}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
