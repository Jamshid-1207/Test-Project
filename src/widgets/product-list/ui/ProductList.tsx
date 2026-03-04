import { ProductFilters } from "./ProductFilters";
import { ProductCard } from "./ProductCart";
import { Preloader } from "@/shared/api/Preloader";
import type { Product } from "@/entites/Product/types";
import "../style/product-list.css";

type Props = {
  onAdd: (product: Product) => void;
  products: Product[];
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  loading: boolean;
  cart: Product[];
};

export const ProductsList = ({
  onAdd,
  products,
  categories,
  selectedCategory,
  setSelectedCategory,
  loading,
  cart,
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
          <ProductCard
            cart={cart}
            key={product.id}
            product={product}
            onAdd={onAdd}
          />
        ))}
      </div>
    </>
  );
};
