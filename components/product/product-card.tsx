'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import RatingStars from '@/components/shared/rating-stars';
import { useCart } from '@/components/cart/cart-summary';
import { useWishlist } from '@/components/wishlist/wishlist-context';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const liked = isInWishlist(product.id);

  return (
    <div
      className="
        group relative
        bg-card text-card-foreground
        rounded-lg overflow-hidden
        border
        transition
        hover:shadow-lg
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link
        href={`/shop/${product.id}`}
        className="relative block aspect-square overflow-hidden"
      >
        <Image
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs px-2 py-1 rounded">
            New
          </span>
        )}
        {product.isSale && (
          <span className="absolute top-3 left-3 bg-destructive text-destructive-foreground text-xs px-2 py-1 rounded">
            Sale
          </span>
        )}
      </Link>

      <div
        className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
          isHovered
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-2'
        }`}
      >
        <Button
          type="button"
          variant={liked ? 'default' : 'secondary'}
          size="icon"
          onClick={() => toggleWishlist(product)}
        >
          <Heart
            className={`w-5 h-5 ${
              liked ? 'fill-current' : ''
            }`}
          />
        </Button>

        <Link href={`/shop/${product.id}`}>
          <Button type="button" variant="secondary" size="icon">
            <Eye className="w-5 h-5" />
          </Button>
        </Link>

        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={() => addToCart(product)}
        >
          <ShoppingCart className="w-5 h-5" />
        </Button>
      </div>

      <div className="p-4">
        <Link href={`/shop/${product.id}`}>
          <h3 className="font-medium hover:text-primary transition mb-2">
            {product.name}
          </h3>
        </Link>

        <div className="mb-2">
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            ${product.price.toFixed(2)}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
