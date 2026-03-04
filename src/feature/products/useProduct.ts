import { useEffect, useState, useMemo } from "react";
import { fetchProducts } from "@/shared/api/ProductsApi";
import type { Product } from "@/entites/Product/types";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    fetchProducts()
      .then((data: { products: Product[] }) => setProducts(data.products))
      .finally(() => setLoading(false));
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = useMemo(
    () =>
      selectedCategory === "all"
        ? products
        : products.filter((p) => p.category === selectedCategory),
    [products, selectedCategory],
  );
  return {
    products,
    filteredProducts,
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
  };
};
