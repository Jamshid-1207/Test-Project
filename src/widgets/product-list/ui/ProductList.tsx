import { ProductFilters } from "./ProductFilters";
import { ProductCard } from "./ProductCart";
import { Preloader } from "@/shared/api/Preloader";
import type { Product } from "@/entites/Product/types";
import "../style/product-list.css";

type Props = {
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  loading: boolean;
};

export const ProductsList = ({
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
}: Props) => {
  if (loading) return <Preloader />;

  return (
    <>
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />

      <div className="products-grid">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};
