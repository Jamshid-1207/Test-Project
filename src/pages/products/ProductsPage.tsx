import { useMemo } from "react";
import { ProductsList, Cart, Header } from "@/widgets/index";
import { useCart, useSearch, useProducts } from "@/feature";
import type { Product } from "@/entites/Product/types";
import "@/index.css";

export function ProductsPage() {
  const { cart, addToCart, removeFromCart } = useCart();
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
    <div>
      <Cart items={cart} onDelete={removeFromCart} />

      <Header query={query} setQuery={setQuery} />

      <ProductsList
        cart={cart}
        onAdd={addToCart}
        products={visibleProducts}
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        loading={loading}
      />
    </div>
  );
}
