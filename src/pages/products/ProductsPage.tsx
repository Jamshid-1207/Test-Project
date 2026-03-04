import { useMemo } from "react";
import { Header } from "@/widgets";
import { useSearch, useProducts } from "@/feature/index";
import type { Product } from "@/entites/Product/types";
import { ProductsList } from "@/widgets/product-list/ui/ProductList";

export const ProductsPage = () => {
  const {
    filteredProducts,
    loading,
    categories,
    selectedCategory,
    setSelectedCategory,
  } = useProducts();

  const { query, setQuery, filter } = useSearch<Product>("title");

  const visibleProducts = useMemo(
    () => filter(filteredProducts),
    [filter, filteredProducts],
  );
  return (
    <>
      <div>
        <Header query={query} setQuery={setQuery} />

        <ProductsList
          products={visibleProducts}
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          loading={loading}
        />
      </div>
    </>
  );
};
