'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../utils/formatters';
import { CAFE_INFO } from '../data/cafeInfo';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Sparkles, Bike } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    itemsTotal,
    clearCart,
    isFreeDelivery,
    amountNeededForFreeDelivery,
    setIsCheckoutOpen
  } = useCart();

  if (!isCartOpen) return null;

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const progressPercent = Math.min(
    100,
    Math.round((itemsTotal / CAFE_INFO.deliveryInfo.freeDeliveryThreshold) * 100)
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={() => setIsCartOpen(false)}
        className="fixed inset-0 bg-cafe-950/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-cafe-100 border-b border-cafe-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-cafe-800" />
              <h2 className="font-serif font-bold text-lg text-cafe-950">
                {t('yourOrder')}
              </h2>
              <span className="bg-cafe-800 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((s, i) => s + i.quantity, 0)}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-rose-600 hover:text-rose-800 font-medium px-2 py-1 rounded-lg hover:bg-rose-50 transition-colors"
                >
                  Tozalash
                </button>
              )}
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-1.5 rounded-full text-cafe-700 hover:bg-cafe-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Free Delivery Bar */}
          {cart.length > 0 && (
            <div className="bg-amber-50/70 border-b border-amber-200/60 p-3.5">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <div className="flex items-center gap-1.5 font-medium text-amber-900">
                  <Bike className="w-4 h-4 text-amber-700" />
                  {isFreeDelivery ? (
                    <span className="font-bold text-emerald-700 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                      {t('freeDelivery')}!
                    </span>
                  ) : (
                    <span>
                      Yana <b>{formatPrice(amountNeededForFreeDelivery, language)}</b> {t('freeDeliveryProgress')}
                    </span>
                  )}
                </div>
                <span className="text-[11px] font-bold text-amber-800">
                  {progressPercent}%
                </span>
              </div>
              <div className="w-full bg-amber-200/60 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {cart.length === 0 ? (
              <div className="text-center py-20 px-4">
                <div className="w-20 h-20 rounded-full bg-cafe-100 flex items-center justify-center mx-auto text-cafe-400 mb-4">
                  <ShoppingBag className="w-10 h-10" />
                </div>
                <h3 className="font-serif font-bold text-lg text-cafe-900">
                  {t('emptyCart')}
                </h3>
                <p className="text-cafe-600 text-xs sm:text-sm mt-1 max-w-xs mx-auto">
                  {t('emptyCartDesc')}
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-6 bg-cafe-800 hover:bg-cafe-900 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors"
                >
                  {t('viewMenuBtn')}
                </button>
              </div>
            ) : (
              cart.map(({ item, quantity, comment }) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3 border border-cafe-200 flex gap-3 items-center shadow-sm"
                >
                  {/* Dish Thumbnail */}
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-cafe-100 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name[language]}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <h4 className="font-serif font-bold text-sm text-cafe-950 truncate">
                      {item.name[language]}
                    </h4>
                    <div className="text-xs font-semibold text-cafe-800 mt-0.5">
                      {formatPrice(item.price, language)}
                    </div>
                    {comment && (
                      <p className="text-[11px] text-cafe-500 italic truncate">
                        &quot;{comment}&quot;
                      </p>
                    )}
                  </div>

                  {/* Quantity Actions */}
                  <div className="flex flex-col items-end gap-1.5 shrink-0">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-cafe-400 hover:text-rose-600 transition-colors p-1"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    
                    <div className="flex items-center bg-cafe-100 rounded-lg p-0.5 border border-cafe-200">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-cafe-800 hover:bg-white transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-5 text-center text-xs font-bold text-cafe-950">
                        {quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded flex items-center justify-center text-cafe-800 hover:bg-white transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-5 bg-cafe-50 border-t border-cafe-200 space-y-3">
              <div className="space-y-1.5 text-xs text-cafe-700">
                <div className="flex justify-between">
                  <span>{t('itemsTotal')}:</span>
                  <span className="font-semibold text-cafe-900">
                    {formatPrice(itemsTotal, language)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>{t('deliveryCost')}:</span>
                  <span className="font-semibold text-cafe-900">
                    {isFreeDelivery ? (
                      <span className="text-emerald-700 font-bold">{t('freeDelivery')}</span>
                    ) : (
                      formatPrice(CAFE_INFO.deliveryInfo.deliveryFee, language)
                    )}
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-cafe-200 flex justify-between items-center text-cafe-950">
                <span className="font-bold text-sm sm:text-base">{t('total')}:</span>
                <span className="font-serif font-extrabold text-lg sm:text-xl text-cafe-900">
                  {formatPrice(
                    isFreeDelivery ? itemsTotal : itemsTotal + CAFE_INFO.deliveryInfo.deliveryFee,
                    language
                  )}
                </span>
              </div>

              <button
                onClick={handleProceedToCheckout}
                className="w-full bg-cafe-800 hover:bg-cafe-900 active:scale-98 text-white font-semibold py-3.5 px-4 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                <span>{t('checkoutBtn')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
