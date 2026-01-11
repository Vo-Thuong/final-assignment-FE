'use client';

import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import RatingStars from "@/components/shared/rating-stars";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";

export default function ShopDetail({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const liked = isInWishlist(product.id);

  return (
    <>
      {/* HEADER */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <nav className="text-sm text-muted-foreground mb-2">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">—</span>
            <Link href="/shop" className="hover:text-foreground">Shop</Link>
            <span className="mx-2">—</span>
            <span className="text-foreground">Shop Details</span>
          </nav>
          <h1 className="text-3xl font-bold">Shop Details</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* IMAGE */}
        <div className="bg-card rounded-lg p-10 flex items-center justify-center border">
          <Image
            src={product.image}
            alt={product.name}
            width={420}
            height={420}
            className="object-contain"
          />
        </div>

        {/* INFO */}
        <div className="space-y-5">
          <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
            {product.category}
          </span>

          <h2 className="text-3xl font-bold">{product.name}</h2>

          <RatingStars rating={product.rating} reviews={product.reviews} />

          <div className="flex items-center gap-3">
            <span className="text-2xl font-semibold text-primary">
              ${product.price.toFixed(2)}
            </span>
            {product.oldPrice && (
              <span className="line-through text-muted-foreground">
                ${product.oldPrice.toFixed(2)}
              </span>
            )}
          </div>

          <p className="text-muted-foreground">
            Demo product detail page for assignment.
          </p>

          <div className="flex items-center gap-4 pt-4">
            <Button onClick={() => addToCart(product)}>
              Add To Cart
            </Button>

            <Button
              variant={liked ? "default" : "outline"}
              size="icon"
              onClick={() => toggleWishlist(product)}
            >
              <Heart className={liked ? "fill-current" : ""} />
            </Button>
          </div>

          <div className="pt-6 space-y-2 text-sm text-muted-foreground">
            <p><b>Brand:</b> {product.brand}</p>
            <p><b>Color:</b> {product.color}</p>
          </div>
        </div>
      </div>
    </>
  );
}
