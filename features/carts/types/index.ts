import { Product } from "@/features/products/types";

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

export interface CartState {
  items: CartItem[];
  total: number;
}