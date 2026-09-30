'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { CAFE_INFO } from '../data/cafeInfo';
import { ShoppingBag, Phone, Menu as MenuIcon, X, Clock, MapPin, ChevronRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems, setIsCartOpen } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const isUz = language === 'uz';

  // Live real-time clock updating every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('uz-UZ', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll listener
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#menu', label: t('menu') },
    { href: '#about', label: t('about') },
    { href: '#location', label: t('contact') },
  ];

  return (
    <>
      {/* Top Bar with Live Real-time Clock, Phone & Address (1 compact row on mobile) */}
      <div className="bg-[#1a120b] text-[#f7f2e9] text-[11px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-6 border-b border-amber-950/40 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          
          {/* Left: Live Clock & Working Hours */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Live Clock */}
            <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-300 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full border border-amber-500/30 font-mono font-semibold text-[10px] sm:text-xs">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              <span className="hidden xs:inline">{isUz ? "Vaqt:" : "Время:"}</span>
              <b className="text-white font-mono">{currentTime || "..."}</b>
            </div>

            {/* Working Hours (hidden on xs mobile) */}
            <div className="hidden sm:flex items-center gap-1.5 text-stone-300 font-medium">
              <Clock className="w-3.5 h-3.5 text-amber-400/90" />
              <span>{CAFE_INFO.workingHours[language]}</span>
            </div>
          </div>

          {/* Right: Mo'ljal & Phone */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            {/* Mo'ljal (hidden on mobile, visible on tablet+) */}
            <a
              href="#location"
              className="hidden md:flex items-center gap-1.5 text-amber-200/90 hover:text-white transition-all font-medium bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-amber-400/20"
            >
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{CAFE_INFO.landmark[language]}</span>
            </a>

            {/* Phone (always accessible and clickable) */}
            <a 
              href={`tel:${CAFE_INFO.phone}`} 
              className="flex items-center gap-1 text-amber-300 hover:text-amber-100 transition-colors font-bold px-2 py-0.5 rounded-lg hover:bg-white/5 text-[11px] sm:text-xs"
            >
              <Phone className="w-3 h-3 text-emerald-400" />
              <span>{CAFE_INFO.phone}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-[0_8px_25px_-5px_rgba(42,24,16,0.1)] border-b border-cafe-200/80 py-2 sm:py-2.5'
            : 'bg-[#fdfbf7]/95 backdrop-blur-md border-b border-cafe-200/60 py-2.5 sm:py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2">
          
          {/* Brand Logo & Name (Ensured 1 line on all mobile screens) */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0 min-w-0">
            <div className="w-9 h-9 sm:w-11 sm:h-11 relative rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shadow-sm group-hover:scale-105 transition-transform shrink-0">
              <div className="w-full h-full relative rounded-full overflow-hidden bg-white">
                <Image
                  src="/images/logo.png"
                  alt="Cafe Halovat Logo"
                  fill
                  sizes="(max-width: 640px) 36px, 44px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div className="flex flex-col justify-center min-w-0">
              <span className="font-serif text-base sm:text-xl lg:text-2xl font-black tracking-tight text-[#2a1810] group-hover:text-amber-900 transition-colors whitespace-nowrap leading-tight">
                Cafe Halovat
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.14em] uppercase font-bold text-amber-800/80 whitespace-nowrap leading-none hidden min-[380px]:block mt-0.5">
                Oila Kafesi &middot; 2026
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 bg-cafe-100/60 backdrop-blur-sm px-6 py-2 rounded-full border border-cafe-200/70 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#543727] hover:text-[#2a1810] font-semibold text-sm transition-all duration-200 relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-600 to-amber-400 group-hover:w-full transition-all duration-200 rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right Actions: Compact Language Switcher, Cart & Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            
            {/* Language Switcher (Compact, sleek pill) */}
            <div className="flex items-center bg-amber-100/70 p-0.5 sm:p-1 rounded-full text-[10px] sm:text-xs font-bold shadow-inner border border-amber-300/60">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all duration-200 ${
                  language === 'uz'
                    ? 'bg-[#2a1810] text-amber-200 shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
                aria-label="O'zbek tili"
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full transition-all duration-200 ${
                  language === 'ru'
                    ? 'bg-[#2a1810] text-amber-200 shadow-sm'
                    : 'text-stone-700 hover:text-stone-950'
                }`}
                aria-label="Русский язык"
              >
                RU
              </button>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative flex items-center justify-center w-8 h-8 sm:w-auto sm:px-4 sm:py-2 rounded-full bg-gradient-to-r from-[#2a1810] to-[#543727] hover:from-[#1a120b] hover:to-[#2a1810] text-white shadow-md transition-all active:scale-95 border border-amber-900/30 group"
              aria-label="Shopping Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline ml-2 text-xs font-bold uppercase tracking-wider">{t('cart')}</span>
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-tr from-amber-500 to-amber-400 text-[#2a1810] font-black text-[10px] rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center shadow-md border border-white/60 animate-scaleUp">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-xl text-[#2a1810] bg-white/90 hover:bg-amber-100/60 transition-colors border border-amber-300/80 shadow-sm flex items-center justify-center active:scale-95"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <MenuIcon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-amber-900/15 px-4 py-4 space-y-3 shadow-2xl animate-scaleUp">
            
            {/* Quick Language Toggle inside menu */}
            <div className="flex items-center justify-between p-2.5 rounded-2xl bg-amber-500/10 border border-amber-300/60 mb-2">
              <span className="text-xs font-bold text-[#3a2010]">
                {isUz ? "Tilni tanlang:" : "Выберите язык:"}
              </span>
              <div className="flex gap-1.5">
                <button
                  onClick={() => setLanguage('uz')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    language === 'uz'
                      ? 'bg-[#2a1810] text-amber-200 shadow-sm'
                      : 'bg-white text-stone-700 border border-amber-200'
                  }`}
                >
                  🇺🇿 O&apos;zbekcha
                </button>
                <button
                  onClick={() => setLanguage('ru')}
                  className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                    language === 'ru'
                      ? 'bg-[#2a1810] text-amber-200 shadow-sm'
                      : 'bg-white text-stone-700 border border-amber-200'
                  }`}
                >
                  🇷🇺 Русский
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-2.5 px-3 rounded-xl text-cafe-900 hover:text-amber-900 hover:bg-amber-50 font-bold text-sm transition-colors border-b border-stone-100 last:border-0"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-amber-600/70" />
                </a>
              ))}
            </div>
            
            {/* Quick Info Badges */}
            <div className="pt-2 space-y-2 border-t border-stone-200 text-xs">
              <div className="flex items-center gap-2 font-bold text-amber-900 bg-amber-50/80 p-2.5 rounded-xl border border-amber-200/80">
                <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{CAFE_INFO.workingHours[language]}</span>
              </div>
              <div className="flex items-center gap-2 text-stone-800 bg-stone-50 p-2.5 rounded-xl border border-stone-200">
                <MapPin className="w-4 h-4 text-rose-500 shrink-0" />
                <span className="font-medium text-[11px] leading-tight">{CAFE_INFO.landmark[language]}</span>
              </div>
              <a
                href={`tel:${CAFE_INFO.phone}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-[#2a1810] text-amber-200 font-bold text-xs shadow-md border border-amber-900/30"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>{CAFE_INFO.phone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
