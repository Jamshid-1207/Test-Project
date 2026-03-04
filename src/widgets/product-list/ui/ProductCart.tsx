import type { Product } from "@/entites/Product/types";
import { Button } from "@/shared/ui/Button/Button";
import "../style/product-list.css";

type Props = {
  product: Product;
};

export const ProductCard = ({ product }: Props) => {
  const discountedPrice = product.discountPercentage
    ? (product.price * (1 - product.discountPercentage / 100)).toFixed(2)
    : null;

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

      <Button className="add-btn" variant="yellow">
        Add to Cart
      </Button>
    </div>
  );
};
