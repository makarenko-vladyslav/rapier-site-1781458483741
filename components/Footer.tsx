"use client";
import React from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoIcon } from './Icons';

export default function Footer() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white/80 py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 text-white mb-6">
              <LogoIcon className="w-8 h-8 text-accent" />
              <span className="font-display font-bold text-2xl tracking-wide">Кришталь</span>
            </a>
            <p className="max-w-sm leading-relaxed">
              {t('footer.description') as string}
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Навігація</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="hover:text-accent transition-colors">Послуги</a></li>
              <li><a href="#calculator" className="hover:text-accent transition-colors">Калькулятор</a></li>
              <li><a href="#reviews" className="hover:text-accent transition-colors">Відгуки</a></li>
              <li><a href="#faq" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Контакти</h4>
            <ul className="space-y-4">
              <li>{t('contact.phone') as string}</li>
              <li>{t('contact.email') as string}</li>
              <li>{t('contact.address') as string}</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/50">
          <p>© {year} Кришталь Клінінг. {t('footer.rights') as string}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
            <a href="#" className="hover:text-white transition-colors">Договір оферти</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
