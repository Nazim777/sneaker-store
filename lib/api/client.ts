import axios from "axios";
import { Category } from "@/types";
import { Product } from "@/features/products/types";

const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
});

export const getProducts = async (limit = 12, offset = 0): Promise<Product[]> => {
  const response = await api.get(`/products?limit=${limit}&offset=${offset}`);
  return response.data;
};

export const getProductById = async (id: number): Promise<Product> => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getCategories = async (): Promise<Category[]> => {
  const response = await api.get("/categories");
  return response.data;
};

export const getProductsByCategory = async (
  categoryId: number,
  limit = 8
): Promise<Product[]> => {
  const response = await api.get(
    `/products?categoryId=${categoryId}&limit=${limit}`
  );
  return response.data;
};
