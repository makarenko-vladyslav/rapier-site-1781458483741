"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { MapPinIcon } from './Icons';

export default function Coverage() {
  const { t } = useLocale();
  const districts = t('coverage.districts') as string[];

  return (
    <section className="py-24 bg-bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('coverage.badge') as string}
          title={t('coverage.title') as string}
          subtitle={t('coverage.subtitle') as string}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
          >
            <div className="grid grid-cols-2 gap-4">
              {districts.map((district, i) => (
                <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-bg-light hover:bg-accent-light transition-colors group">
                  <MapPinIcon className="w-5 h-5 text-accent" />
                  <span className="font-medium text-primary group-hover:text-accent transition-colors">{district}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-200"
          >
            <iframe 
              src="https://www.google.com/maps?q=Київ,вул.Сагайдачного,12&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
