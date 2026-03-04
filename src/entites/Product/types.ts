export type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  category: string;
  brand: string;
  rating: number;
  stock: number;
  discountPercentage?: number;
  tags?: string[];
  images?: string[];
  description?: string;
  availabilityStatus?: string;
};
