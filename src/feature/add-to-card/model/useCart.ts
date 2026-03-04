import { useState, useCallback } from "react";
import type { Product } from "@/entites/Product/types";

export const useCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCart((prev) => {
      const exists = prev.some((item) => item.id === product.id);
      if (exists) return prev;
      return [...prev, product];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }, []);

  return {
    cart,
    addToCart,
    removeFromCart,
  };
};
