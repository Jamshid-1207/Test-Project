import { ProductFilters } from "./ProductFilters";
import "../style/product-list.css";

type Props = {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
};

export const ProductsList = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}: Props) => {
  return (
    <>
      <ProductFilters
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </>
  );
};
