"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";
import { Product } from "@/types";

interface WishlistRowProps {
  item: Product;
}

export function WishlistRow({ item }: WishlistRowProps) {
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <tr className="border-b border-border last:border-0 hover:bg-gray-50 transition-colors">
      {/* Image */}
      <td className="p-4">
        <div className="relative w-[70px] h-[70px] overflow-hidden rounded-md border border-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </td>

      {/* Name */}
      <td className="p-4 font-bold text-[#111111] hover:text-[#d51243] cursor-pointer transition-colors">
        {item.name}
      </td>

      {/* Price */}
      <td className="p-4 font-medium text-gray-600">
        ${item.price.toFixed(2)}
      </td>

      {/* Stock Status */}
      <td className="p-4">
        <span className="text-green-600 text-sm font-medium bg-green-50 px-2 py-1 rounded">
          In Stock
        </span>
      </td>

      {/* Add to cart */}
      <td className="p-4">
        <Button
          onClick={() => addToCart(item)}
          className="bg-[#d51243] text-white hover:bg-[#b9103a] rounded-md h-11 px-6 font-semibold transition-all shadow-sm shadow-[#d51243]/20"
        >
          Add To Cart
        </Button>
      </td>

      {/* Remove */}
      <td className="p-4 text-right">
        <button
          onClick={() => toggleWishlist(item)}
          className="text-gray-400 hover:text-[#d51243] text-sm font-medium underline underline-offset-4 transition-all"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
