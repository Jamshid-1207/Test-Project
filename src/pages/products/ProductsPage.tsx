import { Header } from "@/widgets";
import { useSearch, useProducts } from "@/feature/index";
import type { Product } from "@/entites/Product/types";
import { ProductsList } from "@/widgets/product-list/ui/ProductList";

export const ProductsPage = () => {
  const { query, setQuery } = useSearch<Product>("title");
  const { categories, selectedCategory, setSelectedCategory } = useProducts();
  return (
    <>
      <div>
        <Header query={query} setQuery={setQuery} />
        <ProductsList
          categories={categories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
    </>
  );
};
