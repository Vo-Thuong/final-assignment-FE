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
            <Link href="/" className="hover:text-foreground">
              Home
            </Link>
            <span className="mx-2">—</span>
            <Link href="/shop" className="hover:text-foreground">
              Shop
            </Link>
            <span className="mx-2">—</span>
            <span className="text-foreground">Shop Details</span>
          </nav>
          <h1 className="text-3xl font-bold">Shop Details</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <div className="relative group w-full max-w-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                width={550}
                height={550}
                className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
                priority
              />
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/5 blur-2xl rounded-[100%]"></div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-primary/60">
                  {product.category}
                </span>
                <span className="w-8 h-[1px] bg-primary/20"></span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {product.name}
              </h2>
            </div>

            <div className="flex items-center gap-6">
              <RatingStars rating={product.rating} reviews={product.reviews} />
              <span className="text-sm text-muted-foreground italic">
                {product.reviews} khách hàng đánh giá
              </span>
            </div>

            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-light text-foreground">
                  ${product.price.toFixed(2)}
                </span>
                {product.oldPrice && (
                  <span className="text-lg text-muted-foreground/60 line-through">
                    ${product.oldPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <p className="text-sm text-green-600 font-medium">
                Miễn phí vận chuyển toàn quốc
              </p>
            </div>

            <p className="text-muted-foreground leading-relaxed max-w-[480px]">
              Sản phẩm mang phong cách hiện đại, tối giản, tập trung vào trải
              nghiệm người dùng và chất lượng hoàn thiện cao cấp.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <Button
                className="h-14 px-12 rounded-none bg-foreground text-background hover:bg-foreground/90 transition-all text-base uppercase tracking-widest flex-1 lg:flex-none"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </Button>

              <Button
                variant="outline"
                size="icon"
                className={`h-14 w-14 rounded-none border-foreground/10 transition-all ${
                  liked ? "bg-red-50 border-none" : ""
                }`}
                onClick={() => toggleWishlist(product)}
              >
                <Heart
                  className={`w-5 h-5 ${
                    liked ? "fill-red-500 text-red-500" : "text-foreground"
                  }`}
                />
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-border/50">
              <div>
                <span className="block text-[10px] uppercase tracking-tighter text-muted-foreground mb-1">
                  Brand
                </span>
                <span className="text-sm font-medium">{product.brand}</span>
              </div>
              <div>
                <span className="block text-[10px] uppercase tracking-tighter text-muted-foreground mb-1">
                  Color Options
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span
                    className="w-3 h-3 rounded-full border border-black/10"
                    style={{ backgroundColor: product.color.toLowerCase() }}
                  ></span>
                  <span className="text-sm font-medium">{product.color}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
