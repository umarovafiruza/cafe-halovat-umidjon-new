import { Language } from '../types';

export function formatPrice(amount: number, lang: Language = 'uz'): string {
  const formatted = new Intl.NumberFormat('ru-RU').format(amount);
  return lang === 'uz' ? `${formatted} so'm` : `${formatted} сум`;
}

export function formatPhoneNumber(phone: string): string {
  return phone;
}
