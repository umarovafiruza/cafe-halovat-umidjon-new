'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { CAFE_INFO } from '../data/cafeInfo';
import { Heart, Send, Instagram, ShieldCheck, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const isUz = language === 'uz';

  const menuLinks = [
    { href: '#menu', name: isUz ? 'Shohona Assorti Lagan' : 'Царский Сет-Ассорти' },
    { href: '#menu', name: isUz ? 'Qozon Kabob & Do\'lma' : 'Казан-Кабоб и Долма' },
    { href: '#menu', name: isUz ? 'Lyulya Kebab & Manti' : 'Сет Люля & Манты' },
    { href: '#menu', name: isUz ? 'Tandir & Shoxli Somsa' : 'Самса из тандыра' },
    { href: '#menu', name: isUz ? 'Raffaello Biskvit Tort' : 'Торт Раффаэлло' },
    { href: '#menu', name: isUz ? 'Karamelli Beze Torti' : 'Безе-Торт с Карамелью' },
  ];

  return (
    <footer className="bg-[#120a05] text-[#f7f2e9] pt-12 sm:pt-20 pb-32 sm:pb-14 border-t border-amber-900/40 relative overflow-hidden">
      {/* Decorative Warm Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-44 bg-amber-500/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Grid with structured luxury cards on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 sm:gap-8 lg:gap-10 pb-10 sm:pb-12 border-b border-amber-900/30">
          
          {/* Col 1: Brand Info (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-3.5 bg-white/[0.04] p-5 sm:p-0 rounded-2xl sm:rounded-none border border-amber-900/30 sm:border-0 shadow-sm sm:shadow-none">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 relative rounded-full overflow-hidden p-0.5 bg-gradient-to-tr from-amber-600 via-amber-400 to-amber-200 shrink-0 shadow-lg">
                <div className="w-full h-full relative rounded-full overflow-hidden bg-white">
                  <Image
                    src="/images/logo.png"
                    alt="Cafe Halovat Logo"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <span className="font-serif text-xl sm:text-2xl font-black text-white tracking-tight block">
                  Cafe Halovat
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-amber-400 block -mt-0.5">
                  Shinam Oila Kafesi
                </span>
              </div>
            </div>
            
            <p className="text-xs text-stone-300 leading-relaxed">
              {CAFE_INFO.description[language]}
            </p>

            <div className="inline-flex items-center gap-2 text-xs text-emerald-300 font-bold bg-emerald-950/70 border border-emerald-700/60 px-3 py-1.5 rounded-xl shadow-inner">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{t('halalCertified')}</span>
            </div>
          </div>

          {/* Col 2: Top Menu Links (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white/[0.04] p-5 sm:p-0 rounded-2xl sm:rounded-none border border-amber-900/30 sm:border-0 shadow-sm sm:shadow-none">
            <h4 className="font-serif font-bold text-amber-300 text-base mb-3 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t('menu')}</span>
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 gap-2 text-xs text-stone-300">
              {menuLinks.map((item, idx) => (
                <li key={idx}>
                  <a 
                    href={item.href} 
                    className="group flex items-center justify-between py-1 px-2 -mx-2 rounded-lg hover:bg-amber-500/10 hover:text-amber-200 transition-colors"
                  >
                    <span>{item.name}</span>
                    <ArrowRight className="w-3 h-3 text-amber-400/50 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all hidden sm:block" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contacts & Address (lg:col-span-3) */}
          <div className="lg:col-span-3 bg-white/[0.04] p-5 sm:p-0 rounded-2xl sm:rounded-none border border-amber-900/30 sm:border-0 shadow-sm sm:shadow-none">
            <h4 className="font-serif font-bold text-amber-300 text-base mb-3 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t('contact')}</span>
            </h4>
            <div className="space-y-3 text-xs">
              {/* Address */}
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-amber-200/90 font-bold block text-[11px] uppercase tracking-wider">{t('addressLabel')}</span>
                  <span className="text-stone-300 leading-snug block">{CAFE_INFO.address[language]}</span>
                  <span className="text-amber-400/90 text-[11px] block mt-0.5">{CAFE_INFO.landmark[language]}</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-amber-200/90 font-bold block text-[11px] uppercase tracking-wider">{t('phoneLabel')}</span>
                  <a href={`tel:${CAFE_INFO.phone}`} className="text-white hover:text-amber-300 transition-colors font-mono font-bold text-sm">
                    {CAFE_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-amber-200/90 font-bold block text-[11px] uppercase tracking-wider">{t('workingHours')}</span>
                  <span className="text-stone-300">{CAFE_INFO.workingHours[language]}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 4: Social Media (lg:col-span-2) */}
          <div className="lg:col-span-2 bg-white/[0.04] p-5 sm:p-0 rounded-2xl sm:rounded-none border border-amber-900/30 sm:border-0 shadow-sm sm:shadow-none">
            <h4 className="font-serif font-bold text-amber-300 text-base mb-3 tracking-wide flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span>{t('socialLabel')}</span>
            </h4>
            <p className="text-xs text-stone-300 mb-3 leading-relaxed">
              {isUz 
                ? 'Yangiliklar va aksiyalarni ijtimoiy tarmoqlarimizda kuzatib boring:' 
                : 'Следите за новинками и акциями в наших соцсетях:'}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-2.5">
              <a
                href={`https://t.me/${CAFE_INFO.telegramUsername}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-stone-900/90 hover:bg-sky-600 text-stone-200 hover:text-white transition-all duration-200 border border-amber-900/40 hover:border-sky-400 group text-xs font-semibold"
              >
                <div className="w-6 h-6 rounded-lg bg-sky-500/20 text-sky-400 group-hover:bg-white group-hover:text-sky-600 flex items-center justify-center transition-colors shrink-0">
                  <Send className="w-3.5 h-3.5" />
                </div>
                <span>Telegram</span>
              </a>

              <a
                href={`https://instagram.com/${CAFE_INFO.instagramUsername}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-stone-900/90 hover:bg-gradient-to-r hover:from-purple-600 hover:to-rose-600 text-stone-200 hover:text-white transition-all duration-200 border border-amber-900/40 hover:border-rose-400 group text-xs font-semibold"
              >
                <div className="w-6 h-6 rounded-lg bg-rose-500/20 text-rose-400 group-hover:bg-white group-hover:text-rose-600 flex items-center justify-center transition-colors shrink-0">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
                <span>Instagram</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Cafe Halovat. {t('footerRights')}</p>
          <div className="flex items-center justify-center gap-1.5 text-stone-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>for Cafe Halovat guests</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
