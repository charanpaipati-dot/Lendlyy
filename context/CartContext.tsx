import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ItemCard } from '../lib/data';

export interface CartItem {
  item: ItemCard;
  days: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: ItemCard) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItemDays: (itemId: string, days: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: ItemCard) => {
    setCartItems((prevItems) => {
      // Prevent adding the same item multiple times
      if (prevItems.find(cartItem => cartItem.item.id === item.id)) {
        return prevItems;
      }
      // Add item with a default of 1 day
      return [...prevItems, { item, days: 1 }];
    });
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.item.id !== itemId));
  };

  const updateCartItemDays = (itemId: string, days: number) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.item.id === itemId ? { ...cartItem, days: Math.max(1, days) } : cartItem // Ensure days is at least 1
      )
    );
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateCartItemDays }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
