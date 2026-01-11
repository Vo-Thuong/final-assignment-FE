'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";

export function WishlistRow({ item }: { item: any }) {
  const { addToCart } = useCart();
  const { toggleWishlist } = useWishlist();

  return (
    <tr className="border-b border-border last:border-0">
      {/* Image */}
      <td className="p-4">
        <Image
          src={item.image}
          alt={item.name}
          width={70}
          height={70}
          className="rounded-md"
        />
      </td>

      {/* Name */}
      <td className="p-4 font-medium text-foreground">
        {item.name}
      </td>

      {/* Price */}
      <td className="p-4">
        ${item.price}
      </td>

      {/* Quantity (disabled) */}
      <td className="p-4">
        <input
          type="number"
          value={1}
          disabled
          className="
            w-16 h-10
            rounded-md
            border border-border
            text-center
            bg-card
            text-card-foreground
          "
        />
      </td>

      {/* Total */}
      <td className="p-4 font-medium text-foreground">
        ${item.price}
      </td>

      {/* Add to cart */}
      <td className="p-4">
        <Button
          onClick={() => addToCart(item)}
          className="bg-brand-pink text-brand-pink-foreground hover:bg-brand-pink/90"
        >
          Add To Cart
        </Button>
      </td>

      {/* Remove */}
      <td className="p-4">
        <button
          onClick={() => toggleWishlist(item)}
          className="
            text-muted-foreground
            hover:text-brand-pink
            transition
          "
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
