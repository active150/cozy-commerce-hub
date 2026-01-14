import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '@/components/products/ProductCard';
import { getFeaturedProducts } from '@/data/products';

export const FeaturedProducts = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-20 bg-cream-dark">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              Featured Pieces
            </h2>
            <p className="text-muted-foreground">
              Our most loved designs, handpicked for you
            </p>
          </div>
          <Link 
            to="/category/all" 
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map((product, index) => (
            <ProductCard 
              key={product.id} 
              product={product}
              className="opacity-0"
              style={{ animationDelay: `${index * 100}ms` }}
            />
          ))}
        </div>

        <Link 
          to="/category/all" 
          className="md:hidden flex items-center justify-center gap-2 text-sm font-medium mt-8 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
