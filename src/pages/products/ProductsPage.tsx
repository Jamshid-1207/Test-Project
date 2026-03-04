import { Header } from "@/widgets";
import { useSearch } from "@/feature/index";
import type { Product } from "@/entites/Product/types";

export const ProductsPage = () => {
  const { query, setQuery } = useSearch<Product>("title");

  return (
    <>
      <div>
        <Header query={query} setQuery={setQuery} />
      </div>
    </>
  );
};
