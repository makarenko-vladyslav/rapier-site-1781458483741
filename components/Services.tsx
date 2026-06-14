"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { SparkleIcon, BrushIcon, SofaIcon, WindowIcon } from './Icons';

const iconMap: Record<string, React.ReactNode> = {
  sparkle: <SparkleIcon className="w-8 h-8" />,
  brush: <BrushIcon className="w-8 h-8" />,
  sofa: <SofaIcon className="w-8 h-8" />,
  window: <WindowIcon className="w-8 h-8" />
};

export default function Services() {
  const { t } = useLocale();
  const items = t('services.items') as Array<{ id: string; title: string; desc: string; icon: string }>;

  return (
    <section id="services" className="py-24 bg-bg-light relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <SectionHeading 
          badge={t('services.badge') as string}
          title={t('services.title') as string}
          subtitle={t('services.subtitle') as string}
        />

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 h-[600px] rounded-3xl overflow-hidden shadow-xl relative bg-gray-100"
          >
            <img 
              src="https://picsum.photos/seed/karcher-cleaning-equipment/800/1200" 
              alt="Professional cleaning equipment" 
              className="w-full h-full object-cover"
              onError={(e) => { e.currentTarget.style.display='none'; e.currentTarget.parentElement?.classList.add('img-fallback') }}
            />
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-[0_8px_30px_hsl(215_40%_15%_/_0.04)] hover:shadow-[0_20px_40px_hsl(215_40%_15%_/_0.08)] transition-all duration-300 group border border-gray-50"
              >
                <div className="w-14 h-14 rounded-xl bg-accent-light text-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {iconMap[item.icon] || <SparkleIcon className="w-8 h-8" />}
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-text-muted leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
