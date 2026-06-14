"use client";
import React, { useState, useEffect } from 'react';
import { useLocale } from '@/lib/i18n';
import { LogoIcon, MenuIcon, XIcon, PhoneIcon } from './Icons';

export default function Header() {
  const { t, locale, setLocale } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: t('nav.services') as string },
    { href: '#calculator', label: t('nav.calculator') as string },
    { href: '#reviews', label: t('nav.reviews') as string },
    { href: '#faq', label: t('nav.faq') as string },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className={`flex items-center gap-3 ${scrolled ? 'text-primary' : 'text-white'}`}>
          <LogoIcon className="w-8 h-8 text-accent" />
          <span className="font-display font-bold text-2xl tracking-wide">Кришталь</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              className={`font-medium transition-colors hover:text-accent ${
                scrolled ? 'text-text-main' : 'text-white/90'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => setLocale('uk')} 
              className={`text-sm font-bold transition-colors ${locale === 'uk' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              UK
            </button>
            <span className={scrolled ? 'text-text-muted' : 'text-white/40'}>/</span>
            <button 
              onClick={() => setLocale('en')} 
              className={`text-sm font-bold transition-colors ${locale === 'en' ? 'text-accent' : scrolled ? 'text-text-muted' : 'text-white/60'}`}
            >
              EN
            </button>
          </div>
          <a 
            href="tel:+380671234567" 
            className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-full font-medium hover:bg-accent/90 transition-colors shadow-md"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>+380 67 123 45 67</span>
          </a>
        </div>

        <button 
          className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 p-6 flex flex-col gap-6 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-primary"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
            <button onClick={() => { setLocale('uk'); setMobileMenuOpen(false); }} className={`font-bold ${locale === 'uk' ? 'text-accent' : 'text-text-muted'}`}>UK</button>
            <button onClick={() => { setLocale('en'); setMobileMenuOpen(false); }} className={`font-bold ${locale === 'en' ? 'text-accent' : 'text-text-muted'}`}>EN</button>
          </div>
        </div>
      )}
    </header>
  );
}
