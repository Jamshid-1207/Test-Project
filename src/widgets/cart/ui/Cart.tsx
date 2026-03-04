import type { Product } from "@/entites/Product/types";
import "@/widgets/cart/style/basket.css";
import { Button } from "@/shared/ui/Button/Button";

type Props = {
  items: Product[];
  onDelete: (id: number) => void;
};

export const Cart = ({ items, onDelete }: Props) => {
  return (
    <div className="basket__section">
      <h3>Корзина</h3>

      {items.length === 0 && (
        <span className="basket__empty">Корзина пуста</span>
      )}

      {items.map((item) => (
        <div className="basket__item" key={item.id}>
          <span className="basket__title">{item.title}</span>
          <Button variant="danger" onClick={() => onDelete(item.id)}>
            delete
          </Button>
        </div>
      ))}
    </div>
  );
};
