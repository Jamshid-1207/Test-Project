import type { Product } from "@/entites/Product/types";

type ProductsResponse = {
  products: Product[];
};

const BASE_URL = import.meta.env.VITE_BASE_URL;
if (!BASE_URL) throw new Error("VITE_BASE_URL не задана!");

export const fetchProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await fetch(`${BASE_URL}/products`);

    if (!response.ok) {
      throw new Error(`Server error: ${response.status}`);
    }

    const data: ProductsResponse = await response.json();

    return data;
  } catch (error) {
    console.error("Fetch products failed:", error);
    throw error;
  }
};
