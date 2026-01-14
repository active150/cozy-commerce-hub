export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  images: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  colors?: string[];
  materials?: string[];
  dimensions?: {
    width: number;
    height: number;
    depth: number;
  };
  featured?: boolean;
  new?: boolean;
  bestseller?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}
