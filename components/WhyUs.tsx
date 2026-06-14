"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { CheckIcon, ClockIcon, PhoneIcon, SparkleIcon } from './Icons';

const icons = [CheckIcon, ClockIcon, PhoneIcon, SparkleIcon];

export default function WhyUs() {
  const { t } = useLocale();
  const items = t('whyUs.items') as Array<{ title: string; desc: string }>;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('whyUs.badge') as string}
          title={t('whyUs.title') as string}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-bg-light border border-gray-100 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
