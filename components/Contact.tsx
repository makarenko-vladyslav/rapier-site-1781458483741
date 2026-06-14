"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLocale } from '@/lib/i18n';
import SectionHeading from './SectionHeading';
import { PhoneIcon, MailIcon, MapPinIcon } from './Icons';

export default function Contact() {
  const { t } = useLocale();
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 bg-bg-light relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          badge={t('contact.badge') as string}
          title={t('contact.title') as string}
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-display font-bold text-primary mb-8">Наші контакти</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Телефон</p>
                    <a href={`tel:${t('contact.phone')}`} className="text-xl font-bold text-primary hover:text-accent transition-colors">
                      {t('contact.phone') as string}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Email</p>
                    <a href={`mailto:${t('contact.email')}`} className="text-lg font-bold text-primary hover:text-accent transition-colors">
                      {t('contact.email') as string}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent-light flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted mb-1">Адреса</p>
                    <p className="text-lg font-bold text-primary">{t('contact.address') as string}</p>
                    <p className="text-text-muted mt-1">{t('contact.hours') as string}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-500 mb-4">
                  <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary">{t('contact.success') as string}</h3>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.nameLabel') as string}</label>
                  <input 
                    type="text" 
                    required
                    className="w-full px-5 py-4 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.phoneLabel') as string}</label>
                  <input 
                    type="tel" 
                    required
                    className="w-full px-5 py-4 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-primary mb-2">{t('contact.messageLabel') as string}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-5 py-4 bg-bg-light border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-accent text-white py-4 rounded-xl font-bold text-lg hover:bg-accent/90 transition-all disabled:opacity-70"
                >
                  {status === 'loading' ? '...' : t('contact.submit') as string}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
