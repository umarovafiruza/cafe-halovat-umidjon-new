'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Sparkles, Heart, Award, Utensils } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const { language, t } = useLanguage();
  const isUz = language === 'uz';

  return (
    <section id="about" className="py-20 sm:py-28 bg-gradient-to-b from-[#fdfbf7] via-[#f7f2e9] to-[#fdfbf7] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-200/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Section Badge */}
        <div className="inline-flex items-center gap-2 text-amber-700 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-600" />
          <span>{t('about')}</span>
        </div>

        {/* Section Title */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a120b] leading-tight mb-4">
          {t('aboutTitle')}
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mb-8 rounded-full" />

        {/* Story Text Box */}
        <div className="bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-[2rem] border border-amber-900/10 shadow-[0_10px_35px_-10px_rgba(42,24,16,0.08)] space-y-4 text-center text-[#543727] text-base sm:text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-[#2a1810]">
            &ldquo;{t('aboutText1')}&rdquo;
          </p>
          <p className="text-cafe-700 text-sm sm:text-base font-normal pt-2 border-t border-cafe-100">
            {t('aboutText2')}
          </p>
        </div>

        {/* 3 Value Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-amber-900/10 shadow-[0_4px_20px_-4px_rgba(42,24,16,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-3.5 rounded-2xl bg-amber-500/15 text-amber-800 mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#1a120b]">
              {isUz ? "Mehr bilan pishirilgan" : "Приготовлено с душой"}
            </h4>
            <p className="text-xs sm:text-sm text-cafe-600 mt-2 leading-relaxed">
              {isUz ? "Har bir taomda o'zgacha e'tibor, poklik va samimiyat" : "Особое внимание и искренность в каждом заказе"}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-amber-900/10 shadow-[0_4px_20px_-4px_rgba(42,24,16,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-3.5 rounded-2xl bg-emerald-500/15 text-emerald-800 mb-4 group-hover:scale-110 transition-transform">
              <Award className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#1a120b]">
              {isUz ? "100% Halol & Toza" : "100% Халяль и Чистота"}
            </h4>
            <p className="text-xs sm:text-sm text-cafe-600 mt-2 leading-relaxed">
              {isUz ? "Faqat ishonchli, toza va sara sifatli mahsulotlar" : "Только надежные и свежие отборные продукты"}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/90 backdrop-blur-sm border border-amber-900/10 shadow-[0_4px_20px_-4px_rgba(42,24,16,0.06)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group">
            <div className="p-3.5 rounded-2xl bg-sky-500/15 text-sky-800 mb-4 group-hover:scale-110 transition-transform">
              <Utensils className="w-7 h-7" />
            </div>
            <h4 className="font-serif font-bold text-lg text-[#1a120b]">
              {isUz ? "Shinam & Orombaxsh" : "Уютная Атмосфера"}
            </h4>
            <p className="text-xs sm:text-sm text-cafe-600 mt-2 leading-relaxed">
              {isUz ? "Oila va do'stlar davrasida xotirjam dam olish maskani" : "Идеальное место для спокойного отдыха с семьей"}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
