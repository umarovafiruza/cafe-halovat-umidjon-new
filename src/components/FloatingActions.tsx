'use client';

import React, { useState, useEffect } from 'react';
import { CAFE_INFO } from '../data/cafeInfo';
import { ArrowUp } from 'lucide-react';

const GoldenLantern: React.FC = () => (
  <div className="relative w-9 h-12 shrink-0 -my-2.5 -mr-1.5 drop-shadow-[0_4px_8px_rgba(180,115,25,0.45)]">
    {/* Warm Ambient Glow Behind Lantern */}
    <div className="absolute inset-1 bg-amber-400/50 rounded-full blur-[6px] animate-pulse" />
    <svg
      viewBox="0 0 64 82"
      className="w-full h-full relative z-10 filter drop-shadow-sm"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Top Ring / Finial */}
      <circle cx="32" cy="7" r="5" stroke="url(#goldGrad)" strokeWidth="2.5" fill="none" />
      <path d="M32 12V16" stroke="url(#goldGrad)" strokeWidth="2.5" strokeLinecap="round" />
      
      {/* Dome Roof */}
      <path d="M18 24C18 18 24 16 32 16C40 16 46 18 46 24L50 27H14L18 24Z" fill="url(#goldMetal)" stroke="url(#goldAccent)" strokeWidth="1" />
      <path d="M14 27H50V29H14V27Z" fill="url(#goldGrad)" />
      
      {/* Glass Body with Glowing Light */}
      <rect x="16" y="29" width="32" height="32" rx="2" fill="url(#glassGrad)" />
      
      {/* Inner Glowing Candle / Core Light */}
      <ellipse cx="32" cy="45" rx="9" ry="13" fill="url(#lanternGlow)" />
      <ellipse cx="32" cy="45" rx="4.5" ry="7.5" fill="#ffffff" opacity="0.95" />
      
      {/* Lantern Frame Arches / Pillars */}
      <path d="M16 29V61" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <path d="M48 29V61" stroke="url(#goldGrad)" strokeWidth="2.5" />
      <path d="M22 61V40C22 34 26 31 32 31C38 31 42 34 42 40V61" stroke="url(#goldGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
      
      {/* Bottom Base */}
      <path d="M14 61H50V64L44 70H20L14 64V61Z" fill="url(#goldMetal)" stroke="url(#goldAccent)" strokeWidth="1" />
      <path d="M22 70H42V73C42 74 40 75 39 75H25C24 75 22 74 22 73V70Z" fill="url(#goldGrad)" />

      {/* Gradients */}
      <defs>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fef08a" />
          <stop offset="50%" stopColor="#d97706" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="goldMetal" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="45%" stopColor="#b45309" />
          <stop offset="100%" stopColor="#5f2707" />
        </linearGradient>
        <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#fffbeb" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="glassGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#78350f" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#fef3c7" stopOpacity="0.75" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0.5" />
        </linearGradient>
        <radialGradient id="lanternGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
          <stop offset="35%" stopColor="#fef08a" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#d97706" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  </div>
);

const PearlChatIcon: React.FC = () => (
  <div className="relative w-5 h-5 shrink-0 flex items-center justify-center">
    {/* Secondary back bubble */}
    <div
      className="absolute right-0 top-0.5 w-3.5 h-3 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.15)] border border-amber-300/60"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #faecd5 100%)' }}
    />
    {/* Primary front bubble */}
    <div
      className="absolute left-0 bottom-0.5 w-4 h-3.5 rounded-full shadow-[0_2px_4px_rgba(90,45,10,0.2)] border border-amber-400/80 flex items-center justify-center"
      style={{ background: 'linear-gradient(135deg, #ffffff 0%, #fff8ec 60%, #eed5aa 100%)' }}
    >
      <div className="flex gap-0.5 items-center justify-center">
        <span className="w-0.5 h-0.5 rounded-full bg-amber-900/50" />
        <span className="w-0.5 h-0.5 rounded-full bg-amber-900/50" />
        <span className="w-0.5 h-0.5 rounded-full bg-amber-900/50" />
      </div>
    </div>
  </div>
);

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Back to Top Button (Bottom-left on mobile, bottom-right above chat on desktop) */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 left-4 sm:bottom-20 sm:right-6 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/95 backdrop-blur-md text-[#3a2010] hover:bg-amber-50 shadow-[0_4px_14px_rgba(42,23,14,0.25)] border border-amber-300/80 flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-scaleUp pointer-events-auto"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4 text-amber-900" />
        </button>
      )}

      {/* Luxury Silk Golden Lantern Chat Pill Button (Bottom-right) */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 pointer-events-auto">
        <a
          href={`https://t.me/${CAFE_INFO.telegramUsername}`}
          target="_blank"
          rel="noreferrer"
          className="group relative inline-flex items-center gap-2 pl-3.5 pr-2 py-1.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 border border-amber-400/80 select-none cursor-pointer"
          style={{
            background: 'linear-gradient(135deg, #ffffff 0%, #fbf3e4 40%, #edd4ab 85%, #dcb378 100%)',
            boxShadow: 'inset 0 1.5px 2px rgba(255,255,255,0.9), 0 8px 24px rgba(42,23,14,0.3), 0 0 15px rgba(212,168,83,0.3)'
          }}
          aria-label="Telegram Chat"
        >
          {/* Chat bubbles icon */}
          <PearlChatIcon />

          {/* Text */}
          <span className="text-[#321c0e] font-bold text-xs sm:text-sm tracking-wide drop-shadow-[0_1px_1px_rgba(255,255,255,0.7)] font-sans">
            Chat
          </span>

          {/* Glowing Golden Vintage Lantern */}
          <GoldenLantern />
        </a>
      </div>
    </>
  );
};
