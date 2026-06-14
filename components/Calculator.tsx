"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import pricing from '@/lib/pricing.json';
import SectionHeading from './SectionHeading';

export default function Calculator() {
  const { t } = useLocale();
  const [area, setArea] = useState(50);
  const [type, setType] = useState<'regular' | 'general' | 'repair'>('general');
  const [total, setTotal] = useState(0);

  const types = t('calculator.types') as Record<string, string>;

  useEffect(() => {
    const rate = pricing.basePrices[type];
    const calculated = Math.max(pricing.minPrice, area * rate);
    setTotal(calculated);
  }, [area, type]);

  return (
    <section id="calculator" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading 
          badge={t('calculator.badge') as string}
          title={t('calculator.title') as string}
          subtitle={t('calculator.subtitle') as string}
        />

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_hsl(215_40%_15%_/_0.08)] border border-gray-100 p-8 md:p-12"
        >
          <div className="space-y-10">
            {/* Area Slider */}
            <div>
              <div className="flex justify-between items-end mb-6">
                <label className="text-lg font-bold text-primary">{t('calculator.areaLabel') as string}</label>
                <span className="text-3xl font-display font-bold text-accent">{area} м²</span>
              </div>
              <input 
                type="range" 
                min="20" 
                max="200" 
                step="5"
                value={area}
                onChange={(e) => setArea(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
              />
              <div className="flex justify-between text-sm text-text-muted mt-2">
                <span>20 м²</span>
                <span>200 м²</span>
              </div>
            </div>

            {/* Type Selection */}
            <div>
              <label className="text-lg font-bold text-primary mb-4 block">{t('calculator.typeLabel') as string}</label>
              <div className="grid sm:grid-cols-3 gap-4">
                {(Object.keys(types) as Array<keyof typeof types>).map((k) => (
                  <button
                    key={k}
                    onClick={() => setType(k as any)}
                    className={`py-4 px-6 rounded-xl font-medium transition-all border-2 ${
                      type === k 
                        ? 'border-accent bg-accent-light text-primary' 
                        : 'border-gray-100 bg-white text-text-muted hover:border-gray-200'
                    }`}
                  >
                    {types[k]}
                  </button>
                ))}
              </div>
            </div>

            {/* Result & CTA */}
            <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-text-muted font-medium mb-1">{t('calculator.totalLabel') as string}</p>
                <div className="text-5xl font-display font-bold text-primary flex items-baseline gap-2">
                  <motion.span
                    key={total}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {total.toLocaleString()}
                  </motion.span>
                  <span className="text-2xl text-text-muted">{pricing.currency}</span>
                </div>
              </div>
              <button className="w-full md:w-auto bg-accent text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-accent/90 transition-all shadow-md">
                {t('calculator.cta') as string}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
