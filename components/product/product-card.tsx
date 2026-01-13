"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, ShoppingCart, ArrowLeftRight } from "lucide-react";
import { Product } from "@/types";
import RatingStars from "@/components/shared/rating-stars";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";

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
      className="group bg-transparent w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square bg-[#f8f8f8] rounded-2xl overflow-hidden mb-5">
        <Link href={`/shop/${product.id}`} className="block w-full h-full">
          <Image
            src={
              isHovered && product.hoverImage
                ? product.hoverImage
                : product.image
            }
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`flex items-center bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] px-2 py-1 transition-all duration-300 transform ${
              isHovered ? "scale-100 translate-y-0" : "scale-90 translate-y-4"
            }`}
          >
            <button
              onClick={() => addToCart(product)}
              className="p-3 text-gray-500 hover:text-[#d51243] transition-colors"
              title="Add to cart"
            >
              <ShoppingCart className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <button
              className="p-3 text-gray-500 hover:text-[#d51243] transition-colors border-x border-gray-100"
              title="Compare"
            >
              <ArrowLeftRight className="w-5 h-5 stroke-[1.5px]" />
            </button>
            <Link
              href={`/shop/${product.id}`}
              className="p-3 text-gray-500 hover:text-[#d51243] transition-colors"
              title="Quick view"
            >
              <Eye className="w-5 h-5 stroke-[1.5px]" />
            </Link>
            <button
              onClick={() => toggleWishlist(product)}
              className={`p-3 border-l border-gray-100 transition-colors ${
                liked ? "text-[#d51243]" : "text-gray-500 hover:text-[#d51243]"
              }`}
              title="Wishlist"
            >
              <Heart
                className={`w-5 h-5 stroke-[1.5px] ${
                  liked ? "fill-current" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      <div className="px-1">
        <Link href={`/shop/${product.id}`}>
          <h3 className="text-[#8e8e8e] text-[16px] font-normal mb-1 transition-colors group-hover:text-[#d51243]">
            {product.name}
          </h3>
        </Link>

        <div className="text-[20px] font-bold text-[#111111] mb-3">
          ${product.price.toFixed(2)}
        </div>

        <div
          className={`flex items-center justify-between transition-all duration-500 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="w-3.5 h-3.5 rounded-full bg-[#a3c7f7] cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#e91243] cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#ff8a80] cursor-pointer hover:scale-110 transition-transform"></span>
            <span className="w-3.5 h-3.5 rounded-full bg-[#b39ddb] cursor-pointer hover:scale-110 transition-transform"></span>
          </div>

          <div className="flex items-center gap-1">
            <div className="flex text-[#ffc107]">
              <RatingStars rating={product.rating} />
            </div>
            <span className="text-[#8e8e8e] text-[13px] font-medium">
              ({product.reviews || 0})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
