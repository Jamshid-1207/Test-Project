import { useState } from "react";
import { createPortal } from "react-dom";
import type { Product } from "@/entites/Product/types";
import { Button } from "@/shared/ui/Button/Button";
import "../style/modal.css";

type Props = {
  product: Product;
  onAdd: (product: Product) => void;
  cart: Product[];
};

export const ProductCard = ({ product, onAdd, cart }: Props) => {
  const [showModal, setShowModal] = useState(false);

  const discountedPrice = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

  const handleAddClick = () => setShowModal(true);

  const handleConfirm = () => {
    if (!cart.some((p) => p.id === product.id)) {
      onAdd(product);
    }
    setShowModal(false);
  };

  const handleCancel = () => setShowModal(false);

  return (
    <div className="Card">
      <img src={product.thumbnail} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="brand">{product.brand}</p>

      {discountedPrice ? (
        <p className="price">
          <span className="original-price">${product.price.toFixed(2)}</span>{" "}
          <span className="discounted-price">${discountedPrice}</span>
        </p>
      ) : (
        <p className="price">${product.price.toFixed(2)}</p>
      )}

      <p className="availability">
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>

      <p className="rating">⭐ {product.rating.toFixed(1)}</p>

      <div className="tags">
        {product.tags?.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <Button className="add-btn" variant="yellow" onClick={handleAddClick}>
        Add to Cart
      </Button>

      {showModal &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal">
              <p>Добавить "{product.title}" в корзину?</p>
              <div className="modal-buttons">
                <Button variant="primary" onClick={handleConfirm}>
                  Да
                </Button>
                <Button variant="danger" onClick={handleCancel}>
                  Нет
                </Button>
              </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
};
