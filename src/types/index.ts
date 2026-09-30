export type Language = 'uz' | 'ru';

export type CategoryId = 'all' | 'breakfast' | 'main' | 'fastfood' | 'drinks' | 'desserts';

export interface Category {
  id: CategoryId;
  name: {
    uz: string;
    ru: string;
  };
  icon: string;
}

export type TagType = 'hit' | 'new' | 'recommended' | 'spicy' | 'vegetarian';

export interface MenuItem {
  id: string;
  categoryId: CategoryId;
  name: {
    uz: string;
    ru: string;
  };
  description: {
    uz: string;
    ru: string;
  };
  price: number;
  oldPrice?: number;
  image: string;
  weightOrVolume: string;
  prepTimeMinutes: number;
  calories?: number;
  tags?: TagType[];
  isAvailable: boolean;
  ingredients?: {
    uz: string;
    ru: string;
  };
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  comment?: string;
}

export type OrderType = 'delivery' | 'pickup';
export type PaymentMethod = 'cash' | 'card' | 'click' | 'payme';

export interface OrderForm {
  customerName: string;
  phoneNumber: string;
  orderType: OrderType;
  address?: string;
  landmark?: string;
  paymentMethod: PaymentMethod;
  notes?: string;
}
