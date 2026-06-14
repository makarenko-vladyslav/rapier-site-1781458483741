"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';

export default function Process() {
  const { t } = useLocale();
  const items = t('process.items') as Array<{ step: string; title: string; desc: string }>;

  return (
    <section className="py-24 bg-bg-light relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('process.badge') as string}
          title={t('process.title') as string}
        />

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 md:-translate-x-1/2" />

          <div className="space-y-12">
            {items.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 ${
                  i % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Number Node */}
                <div className="absolute left-0 md:left-1/2 w-14 h-14 bg-white border-4 border-bg-light rounded-full flex items-center justify-center shadow-lg md:-translate-x-1/2 z-10">
                  <span className="font-display font-bold text-accent text-xl">{item.step}</span>
                </div>

                {/* Content Card */}
                <div className="ml-20 md:ml-0 w-full md:w-1/2 md:px-12">
                  <div className={`bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow ${
                    i % 2 === 0 ? 'md:text-left' : 'md:text-right'
                  }`}>
                    <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                    <p className="text-text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
