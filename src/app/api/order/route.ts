import { NextResponse } from 'next/server';
import { CartItem } from '@/types';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

function escapeHtml(str: string): string {
  return (str || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export async function GET() {
  return NextResponse.json({ status: 'ok', service: 'cafe-halovat-order-api' });
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { order = {}, cart = [], itemsTotal = 0, deliveryFee = 0, grandTotal = 0, language = 'uz' } = body;

    // Telegram Bot Credentials
    const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || "7509058494:AAEiMAYpY61e7PGB-JMX9jIHwCULhxrkeQA";
    const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID || "7949632456";

    const isUz = language === 'uz';
    const rawNotes = order.notes || '';
    const safeCustomerName = escapeHtml(order.customerName || 'Mijoz');
    const safePhoneNumber = escapeHtml(order.phoneNumber || '-');
    const safeAddress = escapeHtml(order.address || "Ko'rsatilmagan");
    const safeLandmark = escapeHtml(order.landmark || '');
    const safeNotes = escapeHtml(rawNotes);

    // Food Delivery / Pickup Order format
    const title = isUz ? '🔔 YANGI BUYURTMA — CAFE HALOVAT' : '🔔 НОВЫЙ ЗАКАЗ — CAFE HALOVAT';
    const orderTypeLabel = order.orderType === 'delivery' 
      ? (isUz ? '🛵 Yetkazib berish (Dostavka)' : '🛵 Доставка')
      : (isUz ? '🛍️ Olib ketish (Samovivoz)' : '🛍️ Самовывоз');
    
    const paymentLabel = order.paymentMethod === 'cash' 
      ? (isUz ? '💵 Naqd pul' : '💵 Наличные')
      : (isUz ? '💳 Karta (Click/Payme)' : '💳 Картой (Click/Payme)');

    // Build items list
    let itemsText = '';
    if (Array.isArray(cart) && cart.length > 0) {
      cart.forEach((ci: CartItem, index: number) => {
        const rawName = isUz ? (ci.item?.name?.uz || 'Taom') : (ci.item?.name?.ru || 'Блюдо');
        const safeName = escapeHtml(rawName);
        const price = ci.item?.price || 0;
        const itemSum = new Intl.NumberFormat('ru-RU').format(price * (ci.quantity || 1));
        itemsText += `${index + 1}. <b>${safeName}</b>\n   ${ci.quantity || 1} dona × ${new Intl.NumberFormat('ru-RU').format(price)} = <b>${itemSum} so'm</b>\n`;
        if (ci.comment) {
          itemsText += `   <i>Izoh: ${escapeHtml(ci.comment)}</i>\n`;
        }
      });
    }

    const formattedItemsTotal = new Intl.NumberFormat('ru-RU').format(itemsTotal || 0);
    const formattedDeliveryFee = new Intl.NumberFormat('ru-RU').format(deliveryFee || 0);
    const formattedGrandTotal = new Intl.NumberFormat('ru-RU').format(grandTotal || 0);

    let message = `<b>${title}</b>\n`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `👤 <b>Mijoz:</b> ${safeCustomerName}\n`;
    message += `📞 <b>Telefon:</b> ${safePhoneNumber}\n`;
    message += `📦 <b>Turi:</b> ${orderTypeLabel}\n`;
    
    if (order.orderType === 'delivery') {
      message += `📍 <b>Manzil:</b> ${safeAddress}\n`;
      if (safeLandmark) {
        message += `🎯 <b>Mo'ljal:</b> ${safeLandmark}\n`;
      }
    }
    
    message += `💳 <b>To'lov turi:</b> ${paymentLabel}\n`;
    if (safeNotes) {
      message += `📝 <b>Qo'shimcha izoh:</b> ${safeNotes}\n`;
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `🛒 <b>BUYURTMA TARKIBI:</b>\n\n${itemsText || "Taomlar tanlanmagan\n"}`;
    message += `━━━━━━━━━━━━━━━━━━━━\n`;
    message += `Taomlar summasi: ${formattedItemsTotal} so'm\n`;
    if (order.orderType === 'delivery') {
      message += `Yetkazib berish: ${deliveryFee === 0 ? 'BEPUL 🎁' : `${formattedDeliveryFee} so'm`}\n`;
    }
    message += `💰 <b>JAMI TO'LOV: ${formattedGrandTotal} so'm</b>\n`;
    message += `⏰ <b>Vaqt:</b> ${new Date().toLocaleString('uz-UZ', { timeZone: 'Asia/Tashkent' })}\n`;

    // Dispatch to Telegram Bot API with timeout
    let telegramStatus = 'skipped';
    if (TELEGRAM_BOT_TOKEN && TELEGRAM_CHAT_ID) {
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 6000);
        const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
        
        const res = await fetch(telegramUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: message,
            parse_mode: 'HTML'
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        const resData = await res.json().catch(() => ({ ok: false }));
        if (resData.ok) {
          telegramStatus = 'sent';
        } else {
          telegramStatus = `telegram_error: ${resData.description || 'unknown'}`;
          console.warn('Telegram API Response:', resData);
        }
      } catch (tgErr) {
        console.error('Telegram dispatch error:', tgErr);
        telegramStatus = 'network_error';
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Order processed successfully',
      telegramStatus,
      orderDetails: {
        customerName: safeCustomerName,
        phoneNumber: safePhoneNumber,
        itemsTotal,
        grandTotal,
        formattedTelegramMessage: message
      }
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : 'Failed to process order';
    console.error('Error processing order:', error);
    return NextResponse.json(
      { success: false, error: errorMsg },
      { status: 500 }
    );
  }
}
