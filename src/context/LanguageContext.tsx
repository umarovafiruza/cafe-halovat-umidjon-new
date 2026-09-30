'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface Translations {
  [key: string]: {
    uz: string;
    ru: string;
  };
}

export const TRANSLATIONS: Translations = {
  // Navigation
  home: { uz: "Bosh sahifa", ru: "Главная" },
  menu: { uz: "Menyu", ru: "Меню" },
  about: { uz: "Biz haqimizda", ru: "О нас" },
  contact: { uz: "Aloqa & Manzil", ru: "Контакты & Локация" },
  workingHours: { uz: "Ish vaqti", ru: "Время работы" },
  cart: { uz: "Savat", ru: "Корзина" },
  emptyCart: { uz: "Savatingiz hozircha bo'sh", ru: "Ваша корзина пуста" },
  emptyCartDesc: { uz: "Menyudan o'zingizga yoqqan taom yoki ichimliklarni tanlang!", ru: "Выберите понравившиеся блюда или напитки из меню!" },
  
  // Hero
  heroBadge: { uz: "Shinam Oila Kafe & Restoran", ru: "Уютное Семейное Кафе" },
  heroTitle1: { uz: "Halovatli Lahzalar va", ru: "Место Спокойствия и" },
  heroTitleHighlight: { uz: "Unutilmas Ta'mlar", ru: "Незабываемых Вкусов" },
  heroSubtitle: { uz: "Mazali va to'yimli taomlar, samimiy xizmat hamda oshpazlarimiz tomonidan mehr bilan tayyorlangan sara taomlar.", ru: "Вкусные и сытные блюда, душевный сервис и приготовленные с любовью угощения в самой уютной атмосфере." },
  viewMenuBtn: { uz: "Menyuni Ko'rish", ru: "Смотреть Меню" },
  orderNowBtn: { uz: "Buyurtma Berish", ru: "Заказать Сейчас" },
  openStatus: { uz: "Hozir Ochiq", ru: "Сейчас Открыто" },
  
  // Menu Section
  menuTitle: { uz: "Bizning Mazali Menyumiz", ru: "Наше Вкусное Меню" },
  menuSubtitle: { uz: "Har bir taom eng sara va toza mahsulotlardan siz uchun maxsus tayyorlanadi", ru: "Каждое блюдо готовится исключительно из свежих и отборных ингредиентов" },
  searchPlaceholder: { uz: "Taom nomini qidiring...", ru: "Поиск блюд..." },
  allFilter: { uz: "Barchasi", ru: "Все" },
  hitsFilter: { uz: "🔥 Xitlar", ru: "🔥 Хиты" },
  recommendedFilter: { uz: "⭐ Tavsiya", ru: "⭐ Рекомендуем" },
  newFilter: { uz: "✨ Yangi", ru: "✨ Новинки" },
  addToCart: { uz: "Savatga", ru: "В корзину" },
  inCart: { uz: "Savatda", ru: "В корзине" },
  mins: { uz: "daq", ru: "мин" },
  portion: { uz: "Porsiya", ru: "Порция" },
  calories: { uz: "Kaloriya", ru: "Калории" },
  ingredients: { uz: "Tarkibi", ru: "Ингредиенты" },
  notFound: { uz: "Kechirasiz, bunday taom topilmadi", ru: "К сожалению, блюдо не найдено" },
  tryOtherSearch: { uz: "Boshqa qidiruv so'zini sinab ko'ring yoki toifalarni almashtiring", ru: "Попробуйте другой запрос или смените категорию" },

  // Cart & Checkout
  yourOrder: { uz: "Sizning Buyurtmangiz", ru: "Ваш Заказ" },
  orderType: { uz: "Buyurtma turi", ru: "Тип заказа" },
  delivery: { uz: "Yetkazib berish (Dostavka)", ru: "Доставка" },
  pickup: { uz: "Olib ketish (Samovivoz)", ru: "Самовывоз" },
  deliveryCost: { uz: "Yetkazib berish narxi", ru: "Стоимость доставки" },
  freeDelivery: { uz: "Bepul yetkazib berish", ru: "Бесплатная доставка" },
  freeDeliveryProgress: { uz: "so'mlik qo'shing va bepul yetkazishga ega bo'ling!", ru: "сум до бесплатной доставки!" },
  total: { uz: "Jami summa", ru: "Итого" },
  itemsTotal: { uz: "Taomlar narxi", ru: "Сумма блюд" },
  checkoutBtn: { uz: "Buyurtmani rasmiylashtirish", ru: "Оформить заказ" },
  
  // Checkout Modal
  checkoutTitle: { uz: "Buyurtmani Tasdiqlash", ru: "Подтверждение Заказа" },
  fullName: { uz: "Ismingiz", ru: "Ваше имя" },
  namePlaceholder: { uz: "Masalan: Umidjon", ru: "Например: Умиджон" },
  phoneNumber: { uz: "Telefon raqamingiz", ru: "Номер телефона" },
  phonePlaceholder: { uz: "+998 90 126 33 35", ru: "+998 90 126 33 35" },
  address: { uz: "Yetkazib berish manzili", ru: "Адрес доставки" },
  addressPlaceholder: { uz: "Ko'cha, uy, xonadon raqami...", ru: "Улица, дом, квартира..." },
  landmark: { uz: "Mo'ljal (ixtiyoriy)", ru: "Ориентир (необязательно)" },
  landmarkPlaceholder: { uz: "Masalan: Maktab yonida, 2-podyezd", ru: "Например: рядом со школой, 2-й подъезд" },
  paymentMethod: { uz: "To'lov usuli", ru: "Способ оплаты" },
  payCash: { uz: "Naqd pul bilan", ru: "Наличными курьеру" },
  payCard: { uz: "Karta / Click / Payme", ru: "Картой (Click / Payme)" },
  notes: { uz: "Buyurtma uchun qo'shimcha sharh", ru: "Комментарий к заказу" },
  notesPlaceholder: { uz: "Taomga qo'shimcha talab yoki eslatmalar...", ru: "Особые пожелания или уточнения..." },
  submitOrder: { uz: "Buyurtmani Yuborish", ru: "Отправить Заказ" },
  sending: { uz: "Yuborilmoqda...", ru: "Отправка..." },
  
  // Order Success
  orderSuccessTitle: { uz: "Buyurtmangiz Qabul Qilindi! 🎉", ru: "Заказ Успешно Принят! 🎉" },
  orderSuccessDesc: { uz: "Buyurtmangiz qabul qilindi va telegram orqali administratorimizga yetkazildi. Tez orada siz bilan bog'lanamiz!", ru: "Ваш заказ передан администратору в Telegram. Скоро мы свяжемся с вами для подтверждения!" },
  orderSuccessPickupDesc: { uz: "Buyurtmangiz tayyorlanishni boshladi. Kafemizga kelib olib ketishingiz mumkin!", ru: "Ваш заказ принят и готовится. Вы можете забрать его в нашем кафе!" },
  backToHome: { uz: "Bosh sahifaga qaytish", ru: "Вернуться на главную" },

  // About Section
  aboutTitle: { uz: "Cafe Halovat — Qalbingizga Orom Bag'ishlaydi", ru: "Cafe Halovat — Гармония и Спокойствие" },
  aboutText1: { uz: "Biz har bir mehmonimiz o'zini qadrdon uyidagidek shinam va erkin his qilishini istaymiz. 'Halovat' — bu shunchaki nom emas, bu biz taqdim etadigan xotirjamlik va yoqimli onlar falsafasi.", ru: "Мы создали место, где каждый гость чувствует себя как дома. 'Халоват' — это не просто название, это философия душевного спокойствия и уюта." },
  aboutText2: { uz: "Har kuni eng toza va sara mahsulotlardan issiq taomlar, somsalar hamda oshpazimizning maxsus taomlarini taqdim etamiz.", ru: "Каждый день мы готовим вкуснейшие горячие блюда, ароматную самсу и встречаем гостей с любовью." },

  // Location & Contact
  locationTitle: { uz: "Bizning Manzil va Bog'lanish", ru: "Локация и Контакты" },
  locationSubtitle: { uz: "Bizga tashrif buyuring yoki to'g'ridan-to'g'ri bog'laning", ru: "Приходите к нам в гости или свяжитесь с нами" },
  addressLabel: { uz: "Manzilimiz", ru: "Наш адрес" },
  phoneLabel: { uz: "Telefon raqam", ru: "Телефон" },
  socialLabel: { uz: "Ijtimoiy tarmoqlar", ru: "Социальные сети" },
  callNow: { uz: "Qo'ng'iroq qilish", ru: "Позвонить" },
  openInTelegram: { uz: "Telegramda yozish", ru: "Написать в Telegram" },
  openInMap: { uz: "Xaritada ochish", ru: "Открыть на карте" },
  copied: { uz: "Nusxalandi!", ru: "Скопировано!" },
  copyAddress: { uz: "Manzilni nusxalash", ru: "Скопировать адрес" },
  
  // Footer
  footerRights: { uz: "Barcha huquqlar himoyalangan.", ru: "Все права защищены." },
  halalCertified: { uz: "100% Halol va sifat kafolatlangan", ru: "100% Халяль и гарантия качества" }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('uz');

  useEffect(() => {
    const saved = localStorage.getItem('cafe_halovat_lang') as Language;
    if (saved && (saved === 'uz' || saved === 'ru')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('cafe_halovat_lang', lang);
  };

  const t = (key: string): string => {
    if (TRANSLATIONS[key] && TRANSLATIONS[key][language]) {
      return TRANSLATIONS[key][language];
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
