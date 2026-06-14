"use client";
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import { CheckIcon } from './Icons';

export default function Hero() {
  const { t } = useLocale();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);

  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img 
          src="https://picsum.photos/seed/clean-bright-living-room/1920/1080" 
          alt="Premium cleaning" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30 md:to-transparent" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1.5 px-4 rounded-full bg-white text-primary text-sm font-bold tracking-wider uppercase mb-6 shadow-sm">
              {t('hero.badge') as string}
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {t('hero.title') as string}
            </h1>
            <p className="text-xl text-white/90 mb-10 max-w-2xl leading-relaxed">
              {t('hero.subtitle') as string}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#calculator" 
                className="bg-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-lg hover:-translate-y-1"
              >
                {t('hero.ctaPrimary') as string}
              </a>
              <a 
                href="#services" 
                className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-lg"
              >
                {t('hero.ctaSecondary') as string}
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Card */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="hidden lg:block absolute bottom-20 right-20 bg-white p-6 rounded-2xl max-w-xs shadow-2xl border border-gray-100"
      >
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center">
            <CheckIcon className="w-6 h-6 text-accent" />
          </div>
          <div>
            <p className="text-text-muted text-sm font-medium">{t('hero.cardTitle') as string}</p>
            <p className="text-primary font-bold text-xl">{t('hero.cardValue') as string}</p>
          </div>
        </div>
        <p className="text-text-muted text-sm">{t('hero.cardDesc') as string}</p>
      </motion.div>
    </section>
  );
}
