'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { CAFE_INFO } from '../data/cafeInfo';
import { ArrowDown, Sparkles, Utensils, ShieldCheck, Bike, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden silk-hero-bg pt-12 pb-20 lg:pt-16 lg:pb-28">
      {/* Silk Waves Lighting Overlay */}
      <div className="absolute inset-0 silk-overlay pointer-events-none opacity-40" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-7 text-center lg:text-left">
            
            {/* Luxury Badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/70 backdrop-blur-md border border-amber-600/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-[0_2px_12px_rgba(155,104,44,0.15)]">
              <Sparkles className="w-4 h-4 text-amber-600 fill-amber-500" />
              <span className="text-[#3a2213]">{t('heroBadge')}</span>
              <span className="bg-[#1f5f38] text-white text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                {t('openStatus')}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1">
              <h1 className="leading-[1.15] sm:leading-[1.12]">
                <span className="font-serif italic text-[#8a551e] text-3xl sm:text-5xl lg:text-[4.2rem] block font-bold tracking-tight drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)]">
                  Halovatli Lahzalar
                </span>
                <span className="font-serif text-[#1e130c] font-black text-2xl sm:text-4xl lg:text-[3.6rem] tracking-tight block drop-shadow-sm mt-1 sm:mt-0">
                  va Unutilmas Ta&apos;mlar
                </span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-[#4e311f] text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              {t('heroSubtitle')}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <a
                href="#menu"
                className="group bg-[#2a170e] hover:bg-[#190d08] text-amber-100 hover:text-white font-bold px-8 py-3.5 rounded-full shadow-[0_8px_20px_rgba(42,23,14,0.35)] transition-all active:scale-95 flex items-center gap-2 text-sm border border-amber-500/40"
              >
                <span>{t('viewMenuBtn')}</span>
                <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">&rsaquo;</span>
              </a>
              <a
                href="#location"
                className="bg-white/40 hover:bg-white/70 text-[#2a170e] font-bold px-7 py-3.5 rounded-full border border-amber-900/30 shadow-sm transition-all text-sm backdrop-blur-sm active:scale-95"
              >
                {t('contact')}
              </a>
            </div>

            {/* Features Row - 4 Luxury Capsules */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-amber-900/15">
              
              {/* Feature 1 */}
              <div className="leather-capsule p-2.5 rounded-2xl flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-amber-100 leading-tight">Mazali Taomlar</div>
                  <div className="text-[9px] text-amber-300/70">Sara & To&apos;yimli</div>
                </div>
              </div>

              {/* Feature 2 - Embossed Gold */}
              <div className="gold-bevel-pill p-2.5 rounded-2xl flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-amber-700/15 text-amber-900 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-extrabold text-[#2a170e] leading-tight">100% Halol</div>
                  <div className="text-[9px] text-[#6b472e]">Sara & Toza</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="leather-capsule p-2.5 rounded-2xl flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Bike className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-amber-100 leading-tight">20-25 daqiqa</div>
                  <div className="text-[9px] text-amber-300/70">Tezkor yetkazish</div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="leather-capsule p-2.5 rounded-2xl flex items-center gap-2 text-left">
                <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-bold text-amber-100 leading-tight">Shinam Muhit</div>
                  <div className="text-[9px] text-amber-300/70">Halovat maskani</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Hero Image Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Golden Border Rim */}
              <div className="relative rounded-[2rem] overflow-hidden gold-rim-card aspect-[4/5] bg-[#2a170e]">
                <Image
                  src="/images/dishes/shohona-assorti-lagan.jpg"
                  alt="Shohona Halovat Assorti Lagan"
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  priority
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#140b06]/90 via-[#140b06]/20 to-transparent pointer-events-none" />
                
                {/* Bottom Banner Details */}
                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-amber-300">
                    CAFE HALOVAT
                  </p>
                  <p className="font-serif text-xl sm:text-2xl font-bold mt-1 text-white leading-snug">
                    Halovatli lahzalar va unutilmas ta&apos;mlar maskani
                  </p>
                </div>
              </div>

              {/* Top-Left Floating Luxury Badge */}
              <div className="absolute -top-3 -left-3 bg-[#fdfbf7]/95 backdrop-blur-md p-2.5 rounded-2xl shadow-xl border-2 border-amber-400/80 flex items-center gap-3 z-20 animate-float">
                <div className="w-11 h-11 relative rounded-xl overflow-hidden border border-amber-300 bg-white shadow-inner shrink-0">
                  <Image
                    src="/images/logo.png"
                    alt="Cafe Halovat Emblem"
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div className="pr-3">
                  <div className="text-xs font-black text-[#1e130c]">Cafe Halovat</div>
                  <div className="text-[11px] text-amber-700 font-bold flex items-center gap-1">
                    <span>★ 4.9</span>
                    <span className="text-stone-500 font-normal">(500+ baho)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
