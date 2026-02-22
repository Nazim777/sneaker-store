"use client";

import React, {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import { CartItem,CartState } from "@/features/carts/types";
import {Product} from '@/features/products/types'
type CartAction =
  | { type: "ADD_ITEM"; payload: { product: Product; size: string } }
  | { type: "REMOVE_ITEM"; payload: { productId: number; size: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { productId: number; size: string; quantity: number };
    }
  | { type: "CLEAR_CART" };

interface CartContextType {
  state: CartState;
  addItem: (product: Product, size: string) => void;
  removeItem: (productId: number, size: string) => void;
  updateQuantity: (productId: number, size: string, quantity: number) => void;
  clearCart: () => void;
  itemCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { product, size } = action.payload;
      const existingIndex = state.items.findIndex(
        (item) => item.product.id === product.id && item.size === size
      );
      let newItems: CartItem[];
      if (existingIndex >= 0) {
        newItems = state.items.map((item, idx) =>
          idx === existingIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        newItems = [...state.items, { product, quantity: 1, size }];
      }
      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return { items: newItems, total };
    }
    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(
            item.product.id === action.payload.productId &&
            item.size === action.payload.size
          )
      );
      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return { items: newItems, total };
    }
    case "UPDATE_QUANTITY": {
      const { productId, size, quantity } = action.payload;
      const newItems =
        quantity <= 0
          ? state.items.filter(
              (item) => !(item.product.id === productId && item.size === size)
            )
          : state.items.map((item) =>
              item.product.id === productId && item.size === size
                ? { ...item, quantity }
                : item
            );
      const total = newItems.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
      );
      return { items: newItems, total };
    }
    case "CLEAR_CART":
      return { items: [], total: 0 };
    default:
      return state;
  }
};

const initialState: CartState = { items: [], total: 0 };

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("kicks-cart");
      if (saved) {
        try {
          return JSON.parse(saved) as CartState;
        } catch {
          return initialState;
        }
      }
    }
    return initialState;
  });

  useEffect(() => {
    localStorage.setItem("kicks-cart", JSON.stringify(state));
  }, [state]);

  const addItem = (product: Product, size: string) =>
    dispatch({ type: "ADD_ITEM", payload: { product, size } });

  const removeItem = (productId: number, size: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: { productId, size } });

  const updateQuantity = (productId: number, size: string, quantity: number) =>
    dispatch({ type: "UPDATE_QUANTITY", payload: { productId, size, quantity } });

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  const itemCount = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{ state, addItem, removeItem, updateQuantity, clearCart, itemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};
