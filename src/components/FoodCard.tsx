'use client';

import React from 'react';
import Image from 'next/image';
import { MenuItem } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { Plus, Clock, Flame, Star, Sparkles, Check } from 'lucide-react';

interface FoodCardProps {
  item: MenuItem;
}

export const FoodCard: React.FC<FoodCardProps> = ({ item }) => {
  const { language, t } = useLanguage();
  const { addToCart, cart, setSelectedFoodModal } = useCart();

  const cartItem = cart.find((ci) => ci.item.id === item.id);
  const inCartQty = cartItem ? cartItem.quantity : 0;

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(item, 1);
  };

  return (
    <div
      onClick={() => setSelectedFoodModal(item)}
      className="group bg-white rounded-[1.75rem] overflow-hidden border border-amber-900/10 hover:border-amber-400/70 shadow-[0_4px_20px_-4px_rgba(42,24,16,0.06)] hover:shadow-[0_22px_45px_-10px_rgba(42,24,16,0.14)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col cursor-pointer transform-gpu relative"
    >
      {/* Food Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-cafe-100/60">
        <Image
          src={item.image}
          alt={item.name[language]}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          {item.tags?.includes('hit') && (
            <span className="bg-gradient-to-r from-rose-600 to-rose-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-[0_2px_8px_rgba(244,63,94,0.4)] tracking-wide">
              <Flame className="w-3 h-3 fill-current" />
              HIT
            </span>
          )}
          {item.tags?.includes('recommended') && (
            <span className="bg-gradient-to-r from-amber-500 to-amber-400 text-[#1a120b] text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-[0_2px_8px_rgba(245,158,11,0.4)] tracking-wide">
              <Star className="w-3 h-3 fill-current" />
              TOP
            </span>
          )}
          {item.tags?.includes('new') && (
            <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full flex items-center gap-1 shadow-[0_2px_8px_rgba(16,185,129,0.4)] tracking-wide">
              <Sparkles className="w-3 h-3" />
              YANGI
            </span>
          )}
        </div>

        {/* Prep time & Weight Badge */}
        <div className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-xl flex items-center gap-1.5 z-10 border border-white/15 shadow-sm">
          <span>{item.weightOrVolume}</span>
          <span className="text-amber-400">•</span>
          <span className="flex items-center gap-1 text-amber-200">
            <Clock className="w-3 h-3" />
            {item.prepTimeMinutes} {t('mins')}
          </span>
        </div>
      </div>

      {/* Food Info */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif font-bold text-lg text-[#1a120b] group-hover:text-amber-900 transition-colors line-clamp-1">
            {item.name[language]}
          </h3>
          <p className="text-cafe-700 text-xs sm:text-sm mt-1.5 line-clamp-2 leading-relaxed font-normal">
            {item.description[language]}
          </p>
        </div>

        {/* Price and Add Button */}
        <div className="mt-5 pt-3.5 border-t border-cafe-100 flex items-center justify-between">
          <div>
            <div className="font-extrabold text-lg sm:text-xl text-[#1a120b] font-serif">
              {formatPrice(item.price, language)}
            </div>
            {item.oldPrice && (
              <div className="text-xs text-cafe-400 line-through font-medium -mt-0.5">
                {formatPrice(item.oldPrice, language)}
              </div>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`flex items-center gap-1.5 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 active:scale-95 shadow-sm ${
              inCartQty > 0
                ? 'bg-gradient-to-r from-amber-500 to-amber-400 text-[#1a120b] shadow-[0_4px_12px_rgba(245,158,11,0.3)] scale-105'
                : 'bg-gradient-to-r from-[#2a1810] to-[#543727] hover:from-[#1a120b] hover:to-[#2a1810] text-amber-100 hover:text-white shadow-md'
            }`}
          >
            {inCartQty > 0 ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>{inCartQty} ta</span>
              </>
            ) : (
              <>
                <Plus className="w-4 h-4 text-amber-400" />
                <span>{t('addToCart')}</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
