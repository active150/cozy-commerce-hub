import { useParams, Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/products/ProductCard';
import { products, categories, getProductsByCategory } from '@/data/products';
import { ChevronRight, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState('featured');

  const category = categories.find(c => c.slug === slug);
  const categoryProducts = slug === 'all' ? products : getProductsByCategory(slug || '');

  const sortedProducts = [...categoryProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.new ? -1 : 1;
      default:
        return a.featured ? -1 : 1;
    }
  });

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground capitalize">{category?.name || slug || 'All Products'}</span>
        </nav>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h1 className="font-display text-4xl md:text-5xl font-semibold capitalize mb-2">
              {category?.name || (slug === 'all' ? 'All Products' : slug)}
            </h1>
            <p className="text-muted-foreground">
              {sortedProducts.length} products
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="h-9 px-3 rounded-md border border-input bg-background text-sm"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {sortedProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {sortedProducts.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                style={{ animationDelay: `${index * 50}ms` }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="font-display text-2xl mb-4">No products found</h2>
            <p className="text-muted-foreground mb-6">
              We couldn't find any products in this category.
            </p>
            <Button asChild>
              <Link to="/category/all">View All Products</Link>
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
