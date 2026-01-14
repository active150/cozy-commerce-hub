import { Product, Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Sofas',
    slug: 'sofas',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
    productCount: 48,
  },
  {
    id: '2',
    name: 'Chairs',
    slug: 'chairs',
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    productCount: 65,
  },
  {
    id: '3',
    name: 'Tables',
    slug: 'tables',
    image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80',
    productCount: 42,
  },
  {
    id: '4',
    name: 'Lighting',
    slug: 'lighting',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    productCount: 78,
  },
  {
    id: '5',
    name: 'Storage',
    slug: 'storage',
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    productCount: 35,
  },
  {
    id: '6',
    name: 'Decor',
    slug: 'decor',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    productCount: 120,
  },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Elora Velvet Sofa',
    description: 'Luxurious velvet sofa with deep button tufting and solid oak legs. Perfect for modern living spaces.',
    price: 1299,
    originalPrice: 1599,
    category: 'sofas',
    images: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
      'https://images.unsplash.com/photo-1550581190-9c1c48d21d6c?w=800&q=80',
    ],
    inStock: true,
    rating: 4.8,
    reviews: 124,
    colors: ['Terracotta', 'Sage Green', 'Charcoal'],
    materials: ['Velvet', 'Oak'],
    dimensions: { width: 220, height: 85, depth: 95 },
    featured: true,
    bestseller: true,
  },
  {
    id: '2',
    name: 'Nori Dining Chair',
    description: 'Scandinavian-inspired dining chair with curved backrest and premium upholstery.',
    price: 189,
    category: 'chairs',
    images: [
      'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=800&q=80',
    ],
    inStock: true,
    rating: 4.6,
    reviews: 89,
    colors: ['Natural Oak', 'Walnut', 'Black'],
    materials: ['Oak', 'Linen'],
    dimensions: { width: 48, height: 82, depth: 52 },
    new: true,
  },
  {
    id: '3',
    name: 'Luna Pendant Light',
    description: 'Hand-blown glass pendant with brass hardware. Creates ambient lighting for any space.',
    price: 245,
    category: 'lighting',
    images: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80',
    ],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    colors: ['Amber', 'Smoke', 'Clear'],
    materials: ['Glass', 'Brass'],
    featured: true,
  },
  {
    id: '4',
    name: 'Mika Coffee Table',
    description: 'Organic-shaped coffee table in solid mango wood with natural edge detailing.',
    price: 449,
    originalPrice: 549,
    category: 'tables',
    images: [
      'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=800&q=80',
    ],
    inStock: true,
    rating: 4.7,
    reviews: 45,
    materials: ['Mango Wood'],
    dimensions: { width: 120, height: 40, depth: 60 },
    bestseller: true,
  },
  {
    id: '5',
    name: 'Aria Bookshelf',
    description: 'Modular shelving system in powder-coated steel with oak shelves.',
    price: 689,
    category: 'storage',
    images: [
      'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
    ],
    inStock: true,
    rating: 4.5,
    reviews: 38,
    colors: ['Black', 'White', 'Terracotta'],
    materials: ['Steel', 'Oak'],
    dimensions: { width: 180, height: 200, depth: 35 },
    new: true,
  },
  {
    id: '6',
    name: 'Terra Ceramic Vase',
    description: 'Handcrafted ceramic vase with reactive glaze finish. Each piece is unique.',
    price: 78,
    category: 'decor',
    images: [
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
    ],
    inStock: true,
    rating: 4.8,
    reviews: 92,
    colors: ['Earth', 'Sand', 'Rust'],
    materials: ['Ceramic'],
    featured: true,
  },
  {
    id: '7',
    name: 'Oslo Armchair',
    description: 'Mid-century modern armchair with walnut frame and premium bouclé upholstery.',
    price: 749,
    category: 'chairs',
    images: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80',
    ],
    inStock: true,
    rating: 4.9,
    reviews: 156,
    colors: ['Cream', 'Camel', 'Forest Green'],
    materials: ['Walnut', 'Bouclé'],
    dimensions: { width: 75, height: 80, depth: 82 },
    featured: true,
    bestseller: true,
  },
  {
    id: '8',
    name: 'Sola Floor Lamp',
    description: 'Sculptural floor lamp with adjustable shade and marble base.',
    price: 395,
    category: 'lighting',
    images: [
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800&q=80',
    ],
    inStock: false,
    rating: 4.6,
    reviews: 34,
    colors: ['Black/White Marble', 'Brass/Green Marble'],
    materials: ['Steel', 'Marble'],
    new: true,
  },
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getBestsellers = (): Product[] => {
  return products.filter(product => product.bestseller);
};

export const getNewArrivals = (): Product[] => {
  return products.filter(product => product.new);
};
