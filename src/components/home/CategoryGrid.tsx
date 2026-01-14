import { Link } from 'react-router-dom';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';

export const CategoryGrid = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              Shop by Category
            </h2>
            <p className="text-muted-foreground">
              Find everything you need for your home
            </p>
          </div>
          <Link 
            to="/categories" 
            className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors group"
          >
            View All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/category/${category.slug}`}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? 'md:row-span-2' : ''
              }`}
              style={{ 
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className={`aspect-square ${index === 0 ? 'md:aspect-[4/5]' : ''} overflow-hidden`}>
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                <h3 className="font-display text-xl md:text-2xl text-background mb-1">
                  {category.name}
                </h3>
                <p className="text-background/70 text-sm">
                  {category.productCount} products
                </p>
              </div>
              <div className="absolute top-4 right-4 w-10 h-10 bg-background/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-background" />
              </div>
            </Link>
          ))}
        </div>

        <Link 
          to="/categories" 
          className="md:hidden flex items-center justify-center gap-2 text-sm font-medium mt-8 py-3 border border-border rounded-lg hover:border-primary hover:text-primary transition-colors"
        >
          View All Categories
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
