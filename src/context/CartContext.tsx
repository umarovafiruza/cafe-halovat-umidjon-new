'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { CartItem, MenuItem } from '../types';
import { CAFE_INFO } from '../data/cafeInfo';

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: MenuItem, quantity?: number, comment?: string) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalItems: number;
  itemsTotal: number;
  deliveryFee: number;
  grandTotal: (orderType: 'delivery' | 'pickup') => number;
  isFreeDelivery: boolean;
  amountNeededForFreeDelivery: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  isCheckoutOpen: boolean;
  setIsCheckoutOpen: (open: boolean) => void;
  selectedFoodModal: MenuItem | null;
  setSelectedFoodModal: (item: MenuItem | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [selectedFoodModal, setSelectedFoodModal] = useState<MenuItem | null>(null);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // Load from local storage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('cafe_halovat_cart');
      if (saved) {
        setCart(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load cart from storage', e);
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('cafe_halovat_cart', JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: MenuItem, quantity: number = 1, comment?: string) => {
    setCart(prev => {
      const existingIndex = prev.findIndex(ci => ci.item.id === item.id);
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + quantity,
          comment: comment || updated[existingIndex].comment
        };
        return updated;
      } else {
        return [...prev, { item, quantity, comment }];
      }
    });
  };

  const removeFromCart = (itemId: string) => {
    setCart(prev => prev.filter(ci => ci.item.id !== itemId));
  };

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      return prev
        .map(ci => {
          if (ci.item.id === itemId) {
            const newQty = ci.quantity + delta;
            return newQty > 0 ? { ...ci, quantity: newQty } : null;
          }
          return ci;
        })
        .filter(Boolean) as CartItem[];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const itemsTotal = cart.reduce((sum, item) => sum + item.item.price * item.quantity, 0);

  const isFreeDelivery = itemsTotal >= CAFE_INFO.deliveryInfo.freeDeliveryThreshold;
  const amountNeededForFreeDelivery = Math.max(0, CAFE_INFO.deliveryInfo.freeDeliveryThreshold - itemsTotal);
  const deliveryFee = isFreeDelivery || itemsTotal === 0 ? 0 : CAFE_INFO.deliveryInfo.deliveryFee;

  const grandTotal = (orderType: 'delivery' | 'pickup') => {
    if (orderType === 'pickup') {
      return itemsTotal;
    }
    return itemsTotal + deliveryFee;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        itemsTotal,
        deliveryFee,
        grandTotal,
        isFreeDelivery,
        amountNeededForFreeDelivery,
        isCartOpen,
        setIsCartOpen,
        isCheckoutOpen,
        setIsCheckoutOpen,
        selectedFoodModal,
        setSelectedFoodModal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
