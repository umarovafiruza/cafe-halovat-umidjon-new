'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { X, Clock, Flame, Minus, Plus, ShoppingBag, Check } from 'lucide-react';

export const FoodModal: React.FC = () => {
  const { language, t } = useLanguage();
  const { selectedFoodModal, setSelectedFoodModal, addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  if (!selectedFoodModal) return null;

  const item = selectedFoodModal;

  const handleClose = () => {
    setSelectedFoodModal(null);
    setQuantity(1);
    setIsAdded(false);
  };

  const handleAddToCart = () => {
    addToCart(item, quantity);
    setIsAdded(true);
    setTimeout(() => {
      handleClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-cafe-950/70 transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl z-10 border border-cafe-200 animate-scaleUp">
        
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 z-20 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image */}
        <div className="relative aspect-[16/10] w-full bg-cafe-100 overflow-hidden">
          <Image
            src={item.image}
            alt={item.name[language]}
            fill
            sizes="(max-width: 640px) 100vw, 500px"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-4">
          <div>
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-serif text-2xl font-bold text-cafe-950">
                {item.name[language]}
              </h2>
              <span className="font-bold text-xl text-cafe-800 shrink-0">
                {formatPrice(item.price, language)}
              </span>
            </div>
            
            <p className="text-cafe-700 text-sm mt-2 leading-relaxed">
              {item.description[language]}
            </p>
          </div>

          {/* Quick Details Chips */}
          <div className="flex flex-wrap gap-2 pt-1 text-xs">
            <div className="bg-cafe-100 text-cafe-800 px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5">
              <span>{t('portion')}:</span>
              <strong className="text-cafe-950">{item.weightOrVolume}</strong>
            </div>

            <div className="bg-cafe-100 text-cafe-800 px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-cafe-600" />
              <span>{item.prepTimeMinutes} {t('mins')}</span>
            </div>

            {item.calories && (
              <div className="bg-amber-50 text-amber-900 border border-amber-200/60 px-3 py-1.5 rounded-xl font-medium flex items-center gap-1.5">
                <Flame className="w-3.5 h-3.5 text-amber-600" />
                <span>{item.calories} kkal</span>
              </div>
            )}
          </div>

          {/* Ingredients if available */}
          {item.ingredients && (
            <div className="bg-cafe-50 p-3.5 rounded-2xl border border-cafe-200/60 text-xs">
              <span className="font-bold text-cafe-900 block mb-1">
                {t('ingredients')}:
              </span>
              <span className="text-cafe-700 leading-relaxed">
                {item.ingredients[language]}
              </span>
            </div>
          )}

          {/* Quantity selector and Add to Cart Button */}
          <div className="pt-3 border-t border-cafe-200 flex items-center gap-4">
            {/* Quantity Controller */}
            <div className="flex items-center bg-cafe-100 rounded-2xl p-1 border border-cafe-200">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-cafe-800 hover:bg-white transition-colors"
                disabled={quantity <= 1}
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-8 text-center font-bold text-cafe-950 text-sm">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-cafe-800 hover:bg-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Main Add Button */}
            <button
              onClick={handleAddToCart}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-2xl font-semibold text-sm transition-colors shadow-md ${
                isAdded
                  ? 'bg-emerald-600 text-white'
                  : 'bg-cafe-800 hover:bg-cafe-900 text-white active:scale-98'
              }`}
            >
              {isAdded ? (
                <>
                  <Check className="w-4 h-4 stroke-[2.5]" />
                  <span>{t('inCart')}!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>
                    {t('addToCart')} • {formatPrice(item.price * quantity, language)}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
