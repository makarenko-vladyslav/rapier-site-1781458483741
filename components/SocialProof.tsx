"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';

export default function SocialProof() {
  const { t } = useLocale();
  const stats = t('socialProof.stats') as Array<{ value: string; label: string }>;

  return (
    <section className="bg-white py-12 border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-gray-100">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`text-center ${i % 2 !== 0 ? 'border-l border-gray-100 md:border-none' : ''}`}
            >
              <p className="text-4xl font-display font-bold text-primary mb-2">{stat.value}</p>
              <p className="text-sm text-text-muted font-medium uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
