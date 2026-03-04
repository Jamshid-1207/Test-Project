import { Button } from "@/shared/ui/Button/Button";

type Props = {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
};

export const ProductFilters = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: Props) => {
  return (
    <div className="types">
      <Button
        variant={selectedCategory === "all" ? "yellow" : "black"}
        onClick={() => onSelectCategory("all")}>
        All
      </Button>

      {categories.map((cat) => (
        <Button
          key={cat}
          variant={selectedCategory === cat ? "yellow" : "black"}
          onClick={() => onSelectCategory(cat)}>
          {cat}
        </Button>
      ))}
    </div>
  );
};
