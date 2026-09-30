'use client';

import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useCart } from '../context/CartContext';
import { OrderForm } from '../types';
import { formatPrice } from '../utils/formatters';
import { CAFE_INFO } from '../data/cafeInfo';
import { 
  X, 
  Bike, 
  Store, 
  CheckCircle2, 
  Send, 
  Phone, 
  User, 
  MapPin, 
  CreditCard, 
  Banknote, 
  MessageSquare
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const CheckoutModal: React.FC = () => {
  const { language, t } = useLanguage();
  const {
    cart,
    isCheckoutOpen,
    setIsCheckoutOpen,
    itemsTotal,
    deliveryFee,
    grandTotal,
    clearCart
  } = useCart();

  const [formData, setFormData] = useState<OrderForm>({
    customerName: '',
    phoneNumber: '+998 ',
    orderType: 'delivery',
    address: '',
    landmark: '',
    paymentMethod: 'cash',
    notes: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isCheckoutOpen) return null;

  const currentGrandTotal = grandTotal(formData.orderType);
  const isUz = language === 'uz';

  const handleClose = () => {
    setIsCheckoutOpen(false);
    if (isSuccess) {
      clearCart();
      setIsSuccess(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.customerName.trim()) {
      setErrorMsg(isUz ? 'Iltimos, ismingizni kiriting' : 'Пожалуйста, укажите ваше имя');
      return;
    }

    if (!formData.phoneNumber || formData.phoneNumber.trim().length < 9) {
      setErrorMsg(isUz ? 'Iltimos, telefon raqamingizni to\'liq kiriting' : 'Пожалуйста, введите корректный номер телефона');
      return;
    }

    if (formData.orderType === 'delivery' && !formData.address?.trim()) {
      setErrorMsg(isUz ? 'Iltimos, yetkazib berish manzilini kiriting' : 'Пожалуйста, укажите адрес доставки');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      // Send order to internal API (Telegram Bot)
      const response = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          order: formData,
          cart,
          itemsTotal,
          deliveryFee: formData.orderType === 'delivery' ? deliveryFee : 0,
          grandTotal: currentGrandTotal,
          language
        })
      });

      if (!response.ok) {
        throw new Error('API request failed');
      }

      setIsSuccess(true);
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch {}
    } catch (apiErr) {
      console.warn('API error, using direct telegram fallback:', apiErr);
      try {
        const isUzLang = language === 'uz';
        let itemsText = '';
        cart.forEach((ci, idx) => {
          const name = isUzLang ? ci.item.name.uz : ci.item.name.ru;
          const sum = new Intl.NumberFormat('ru-RU').format(ci.item.price * ci.quantity);
          itemsText += `${idx + 1}. ${name} - ${ci.quantity} dona x ${new Intl.NumberFormat('ru-RU').format(ci.item.price)} = ${sum} so'm\n`;
        });

        const directMsg = `🔔 YANGI BUYURTMA — CAFE HALOVAT\n━━━━━━━━━━━━━━━━━━━━\n👤 Mijoz: ${formData.customerName}\n📞 Telefon: ${formData.phoneNumber}\n📦 Turi: ${formData.orderType === 'delivery' ? '🛵 Yetkazib berish' : '🛍️ Olib ketish'}\n${formData.orderType === 'delivery' ? `📍 Manzil: ${formData.address}\n🎯 Mo'ljal: ${formData.landmark || '-'}\n` : ''}💳 To'lov: ${formData.paymentMethod}\n${formData.notes ? `📝 Izoh: ${formData.notes}\n` : ''}━━━━━━━━━━━━━━━━━━━━\n🛒 BUYURTMA:\n${itemsText}━━━━━━━━━━━━━━━━━━━━\n💰 Jami: ${new Intl.NumberFormat('ru-RU').format(currentGrandTotal)} so'm`;

        await fetch('https://api.telegram.org/bot7509058494:AAEiMAYpY61e7PGB-JMX9jIHwCULhxrkeQA/sendMessage', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: '7949632456',
            text: directMsg
          })
        });
      } catch {}
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-cafe-950/60 backdrop-blur-sm transition-opacity"
      />

      {/* Modal Dialog */}
      <div className="relative bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl z-10 border border-cafe-200 animate-scaleUp max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-4 sm:p-5 bg-cafe-100 border-b border-cafe-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h3 className="font-serif font-bold text-lg text-cafe-950">
              {isSuccess ? t('orderSuccessTitle') : t('checkoutTitle')}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-full text-cafe-700 hover:bg-cafe-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-6 space-y-4">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <h4 className="font-serif text-2xl font-bold text-cafe-950">
                {isUz ? "Rahmat, buyurtmangiz qabul qilindi!" : "Спасибо, ваш заказ принят!"}
              </h4>

              <p className="text-cafe-700 text-sm leading-relaxed max-w-sm mx-auto">
                {formData.orderType === 'delivery'
                  ? t('orderSuccessDesc')
                  : t('orderSuccessPickupDesc')}
              </p>

              <div className="bg-cafe-50 p-4 rounded-2xl border border-cafe-200 text-left text-xs space-y-2 max-w-sm mx-auto">
                <div className="flex justify-between">
                  <span className="text-cafe-600">{t('fullName')}:</span>
                  <strong className="text-cafe-950">{formData.customerName}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-cafe-600">{t('phoneNumber')}:</span>
                  <strong className="text-cafe-950">{formData.phoneNumber}</strong>
                </div>
                <div className="flex justify-between">
                  <span className="text-cafe-600">{t('total')}:</span>
                  <strong className="text-cafe-950 text-sm">{formatPrice(currentGrandTotal, language)}</strong>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://t.me/${CAFE_INFO.telegramUsername}`}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-3 px-4 rounded-2xl transition-colors text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('openInTelegram')}</span>
                </a>
                <button
                  onClick={handleClose}
                  className="flex-1 bg-cafe-800 hover:bg-cafe-900 text-white font-semibold py-3 px-4 rounded-2xl transition-colors text-sm"
                >
                  {t('backToHome')}
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Order Type Selector */}
              <div>
                <label className="block text-xs font-bold text-cafe-800 uppercase tracking-wider mb-2">
                  {t('orderType')}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'delivery' })}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all ${
                      formData.orderType === 'delivery'
                        ? 'bg-cafe-800 text-white border-cafe-800 shadow-sm'
                        : 'bg-cafe-50 text-cafe-700 border-cafe-200 hover:bg-cafe-100'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>{t('delivery')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, orderType: 'pickup' })}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all ${
                      formData.orderType === 'pickup'
                        ? 'bg-cafe-800 text-white border-cafe-800 shadow-sm'
                        : 'bg-cafe-50 text-cafe-700 border-cafe-200 hover:bg-cafe-100'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>{t('pickup')}</span>
                  </button>
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">
                  {t('fullName')} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-cafe-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.customerName}
                    onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                    placeholder={t('namePlaceholder')}
                    className="w-full bg-cafe-50 border border-cafe-200 text-cafe-900 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500/50"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">
                  {t('phoneNumber')} *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-cafe-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder={t('phonePlaceholder')}
                    className="w-full bg-cafe-50 border border-cafe-200 text-cafe-900 rounded-xl pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500/50"
                  />
                </div>
              </div>

              {/* Delivery Address (only if delivery chosen) */}
              {formData.orderType === 'delivery' && (
                <>
                  <div>
                    <label className="block text-xs font-semibold text-cafe-800 mb-1">
                      {t('address')} *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-cafe-400 absolute left-3.5 top-3" />
                      <textarea
                        required
                        rows={2}
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder={t('addressPlaceholder')}
                        className="w-full bg-cafe-50 border border-cafe-200 text-cafe-900 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-cafe-800 mb-1">
                      {t('landmark')}
                    </label>
                    <input
                      type="text"
                      value={formData.landmark}
                      onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                      placeholder={t('landmarkPlaceholder')}
                      className="w-full bg-cafe-50 border border-cafe-200 text-cafe-900 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500/50"
                    />
                  </div>
                </>
              )}

              {/* Payment Method */}
              <div>
                <label className="block text-xs font-bold text-cafe-800 uppercase tracking-wider mb-2">
                  {t('paymentMethod')}
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'cash' })}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all ${
                      formData.paymentMethod === 'cash'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-cafe-50 text-cafe-700 border-cafe-200 hover:bg-cafe-100'
                    }`}
                  >
                    <Banknote className="w-4 h-4" />
                    <span>{t('payCash')}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, paymentMethod: 'card' })}
                    className={`p-3 rounded-2xl border flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold transition-all ${
                      formData.paymentMethod === 'card'
                        ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                        : 'bg-cafe-50 text-cafe-700 border-cafe-200 hover:bg-cafe-100'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{t('payCard')}</span>
                  </button>
                </div>
              </div>

              {/* Notes / Special Requests */}
              <div>
                <label className="block text-xs font-semibold text-cafe-800 mb-1">
                  {t('notes')}
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-cafe-400 absolute left-3.5 top-3" />
                  <textarea
                    rows={2}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t('notesPlaceholder')}
                    className="w-full bg-cafe-50 border border-cafe-200 text-cafe-900 rounded-xl pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cafe-500/50"
                  />
                </div>
              </div>

              {/* Error Message */}
              {errorMsg && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-700 rounded-xl text-xs font-medium">
                  {errorMsg}
                </div>
              )}

              {/* Total Calculation Row */}
              <div className="p-3.5 bg-cafe-100 rounded-2xl border border-cafe-200 space-y-1 text-xs">
                <div className="flex justify-between text-cafe-700">
                  <span>{t('itemsTotal')}:</span>
                  <span className="font-semibold">{formatPrice(itemsTotal, language)}</span>
                </div>
                {formData.orderType === 'delivery' && (
                  <div className="flex justify-between text-cafe-700">
                    <span>{t('deliveryCost')}:</span>
                    <span className="font-semibold">
                      {deliveryFee === 0 ? t('freeDelivery') : formatPrice(deliveryFee, language)}
                    </span>
                  </div>
                )}
                <div className="pt-2 border-t border-cafe-200 flex justify-between items-center text-sm font-bold text-cafe-950">
                  <span>{t('total')}:</span>
                  <span className="font-serif text-base text-cafe-900">
                    {formatPrice(currentGrandTotal, language)}
                  </span>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-cafe-800 hover:bg-cafe-900 active:scale-98 disabled:opacity-50 text-white font-semibold py-3.5 px-4 rounded-2xl shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-sm"
              >
                {isSubmitting ? (
                  <span>{t('sending')}</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{t('submitOrder')} • {formatPrice(currentGrandTotal, language)}</span>
                  </>
                )}
              </button>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
