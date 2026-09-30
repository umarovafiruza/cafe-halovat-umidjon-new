'use client';

import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Star, Quote, Sparkles, Heart } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const { language } = useLanguage();
  const isUz = language === 'uz';

  const reviews = [
    {
      name: "Malika Karimova",
      role: isUz ? "Doimiy mehmon" : "Постоянный гость",
      rating: 5,
      comment: isUz 
        ? "Shohona Assorti Lagan va Qozon Kabob nihoyatda mazali chiqdi! Go'shtlari yumshoq, xuddi uyimizdagidek samimiy va halol. Oilaviy kelish uchun eng zo'r joy."
        : "Царский сет и Казан-Кабоб просто превосходны! Мясо тает во рту, очень уютная семейная атмосфера. Однозначно рекомендую!",
      dish: isUz ? "Shohona Assorti Lagan" : "Царский Сет-Ассорти"
    },
    {
      name: "Sardor Aliyev",
      role: isUz ? "Toshkent shahri" : "г. Ташкент",
      rating: 5,
      comment: isUz
        ? "Shoxli somsa va qovurma chuchvarasiga gap yo'q! Qarsildoq, issiq va yetkazib berish juda tez keldi (35 daqiqada). Rahmat Cafe Halovat jamoasiga!"
        : "Самса-круассан и жареная чучвара — это шедевр! Доставка горячая и очень быстрая (за 35 минут). Спасибо!",
      dish: isUz ? "Shoxli Somsa & Chuchvara" : "Самса и Чучвара"
    },
    {
      name: "Nilufar & Bobur",
      role: isUz ? "VIP mehmonlar" : "VIP гости",
      rating: 5,
      comment: isUz
        ? "Kafedagi sokinlik va shinamlik insonga haqiqiy halovat bag'ishlaydi. Choy va tushlik bokslari juda to'yimli va pokiza. Xizmat ko'rsatish a'lo darajada."
        : "Тишина, чистота и душевный покой. Очень сытные комплексные обеды и вежливый персонал. 10 из 10!",
      dish: isUz ? "Halovat Kompleks Bento" : "Halovat Bento"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#f7f2e9]/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-800 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
            <span>{isUz ? "Mehmonlarimiz Fikrlari" : "Отзывы Гостей"}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a120b] tracking-tight">
            {isUz ? "Mijozlarimiz Nima Deyishadi?" : "Что Говорят Наши Гости"}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-3.5 mb-3 rounded-full" />
          <p className="text-cafe-700 text-sm sm:text-base">
            {isUz ? "Cafe Halovat ta'mlari va xizmatidan bahramand bo'lgan qadrli mehmonlarimiz e'tirofi" : "Впечатления наших гостей о вкусе блюд и атмосфере"}
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white/95 backdrop-blur-md rounded-[2rem] p-7 sm:p-8 border border-amber-900/10 shadow-[0_4px_25px_-4px_rgba(42,24,16,0.06)] hover:shadow-[0_20px_40px_-10px_rgba(42,24,16,0.12)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative group"
            >
              <div className="absolute top-6 right-6 text-amber-200/60 group-hover:text-amber-300 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-5 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-[#3c2518] text-sm sm:text-base leading-relaxed italic font-normal">
                  &ldquo;{rev.comment}&rdquo;
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-6 mt-6 border-t border-cafe-100 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-base text-[#1a120b]">
                    {rev.name}
                  </h4>
                  <span className="text-[11px] text-cafe-500 font-medium">
                    {rev.role}
                  </span>
                </div>

                <div className="bg-amber-500/15 text-amber-900 border border-amber-500/30 text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm">
                  <Heart className="w-3 h-3 text-amber-600 fill-amber-500" />
                  <span>{rev.dish}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
