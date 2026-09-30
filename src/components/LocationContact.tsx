'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CAFE_INFO } from '../data/cafeInfo';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Send, 
  Instagram, 
  ExternalLink, 
  Copy, 
  Check, 
  Compass 
} from 'lucide-react';

export const LocationContact: React.FC = () => {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(
      `${CAFE_INFO.address[language]}, ${CAFE_INFO.landmark[language]}`
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#fdfbf7] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-amber-700 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5 text-amber-600" />
            <span>{t('contact')}</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1a120b] tracking-tight">
            {t('locationTitle')}
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-amber-600 to-amber-400 mx-auto mt-3.5 mb-3 rounded-full" />
          <p className="text-cafe-700 text-sm sm:text-base">
            {t('locationSubtitle')}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Info Cards */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            
            {/* Address Card */}
            <div className="p-6 sm:p-7 bg-white/95 backdrop-blur-md rounded-[1.75rem] border border-amber-900/10 shadow-[0_4px_25px_-4px_rgba(42,24,16,0.06)] space-y-3.5 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-amber-500/15 text-amber-800 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 text-xs text-cafe-700 hover:text-cafe-950 bg-cafe-100 hover:bg-cafe-200/80 px-3.5 py-1.5 rounded-xl transition-all font-semibold active:scale-95"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">{t('copied')}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-cafe-500" />
                      <span>{t('copyAddress')}</span>
                    </>
                  )}
                </button>
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#1a120b]">
                  {t('addressLabel')}
                </h4>
                <p className="text-sm text-cafe-800 mt-1 leading-relaxed font-medium">
                  {CAFE_INFO.address[language]}
                </p>
                <div className="inline-block bg-amber-500/15 text-amber-900 text-xs font-bold px-3 py-1 rounded-xl mt-2 border border-amber-500/25">
                  📍 {CAFE_INFO.landmark[language]}
                </div>
              </div>
            </div>

            {/* Working Hours Card */}
            <div className="p-6 sm:p-7 bg-white/95 backdrop-blur-md rounded-[1.75rem] border border-amber-900/10 shadow-[0_4px_25px_-4px_rgba(42,24,16,0.06)] space-y-3.5 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-2xl bg-emerald-500/15 text-emerald-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>

              <div>
                <h4 className="font-serif font-bold text-lg text-[#1a120b]">
                  {t('workingHours')}
                </h4>
                <p className="text-base font-bold text-[#2a1810] mt-1 font-mono">
                  {CAFE_INFO.workingHours[language]}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs text-emerald-700 font-bold uppercase tracking-wider">{t('openStatus')}</span>
                </div>
              </div>
            </div>

            {/* Phone & Direct Contact */}
            <div className="p-6 sm:p-7 bg-white/95 backdrop-blur-md rounded-[1.75rem] border border-amber-900/10 shadow-[0_4px_25px_-4px_rgba(42,24,16,0.06)] space-y-4 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-2xl bg-sky-500/15 text-sky-800 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-lg text-[#1a120b]">
                    {t('phoneLabel')}
                  </h4>
                  <div className="flex flex-col text-base text-[#1a120b] font-bold">
                    <a href={`tel:${CAFE_INFO.phone}`} className="hover:text-amber-800 transition-colors font-mono">
                      {CAFE_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-3 border-t border-cafe-100 flex gap-3">
                <a
                  href={`https://t.me/${CAFE_INFO.telegramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-sky-500 hover:bg-sky-600 text-white py-3 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>Telegram</span>
                </a>

                <a
                  href={`https://instagram.com/${CAFE_INFO.instagramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-gradient-to-r from-purple-600 via-rose-600 to-amber-500 hover:opacity-90 text-white py-3 px-3 rounded-2xl text-xs font-bold flex items-center justify-center gap-2 transition-all shadow-sm active:scale-95"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right: Map Presentation */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="relative flex-1 min-h-[380px] rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-cafe-200">
              {/* Map Illustration / Embed */}
              <iframe
                title="Cafe Halovat Location"
                src={CAFE_INFO.mapEmbedUrl}
                className="w-full h-full min-h-[380px] border-0"
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />

              {/* Overlay button to open in native map */}
              <div className="absolute bottom-5 right-5 bg-white/95 backdrop-blur-md p-2 rounded-2xl shadow-xl border border-amber-900/10">
                <a
                  href={CAFE_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-[#2a1810] hover:bg-[#1a120b] text-amber-200 hover:text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-all shadow-sm"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
