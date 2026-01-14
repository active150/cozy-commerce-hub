import { Link } from 'react-router-dom';
import { Heart, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/context/CartContext';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductCard = ({ product, className, style }: ProductCardProps) => {
  const { addToCart } = useCart();

  return (
    <div className={cn("group animate-fade-in", className)} style={style}>
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-muted mb-4">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full">
                New
              </span>
            )}
            {product.bestseller && (
              <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                Bestseller
              </span>
            )}
            {product.originalPrice && (
              <span className="px-3 py-1 bg-destructive text-destructive-foreground text-xs font-medium rounded-full">
                Sale
              </span>
            )}
          </div>

          {/* Wishlist */}
          <button className="absolute top-3 right-3 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background">
            <Heart className="w-4 h-4" />
          </button>

          {/* Quick Add */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="secondary"
              className="w-full backdrop-blur-sm"
              onClick={(e) => {
                e.preventDefault();
                addToCart(product);
              }}
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Bag
            </Button>
          </div>

          {/* Out of stock overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-background/60 flex items-center justify-center">
              <span className="px-4 py-2 bg-foreground text-background text-sm font-medium rounded-full">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      <Link to={`/product/${product.id}`} className="block space-y-1">
        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-medium">£{product.price.toLocaleString()}</span>
          {product.originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              £{product.originalPrice.toLocaleString()}
            </span>
          )}
        </div>
        {product.colors && product.colors.length > 0 && (
          <p className="text-sm text-muted-foreground">
            {product.colors.length} colours
          </p>
        )}
      </Link>
    </div>
  );
};
