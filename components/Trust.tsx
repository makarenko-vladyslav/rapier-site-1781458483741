"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { ShieldIcon } from './Icons';

export default function Trust() {
  const { t } = useLocale();
  const items = t('trust.items') as Array<{ title: string; desc: string }>;

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('trust.badge') as string}
          title={t('trust.title') as string}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-light rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />
              <ShieldIcon className="w-10 h-10 text-accent mb-6 relative z-10" />
              <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
              <p className="text-text-muted leading-relaxed relative z-10">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
