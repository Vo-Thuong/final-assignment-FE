"use client";

import { useState } from "react";
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
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value);
    if (!isNaN(val) && val > 0) {
      setQuantity(val);
    }
  };

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <td className="p-4 border-r border-gray-200">
        <div className="flex justify-center items-center">
          <Image
            src={item.image}
            alt={item.name}
            width={120}
            height={120}
            className="object-contain"
          />
        </div>
      </td>

      <td className="p-4 border-r border-gray-200 text-center font-medium text-gray-900">
        {item.name}
      </td>

      <td className="p-4 border-r border-gray-200 text-center text-gray-600">
        ${item.price}
      </td>

      <td className="p-4 border-r border-gray-200">
        <div className="flex justify-center">
          <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
            className="w-20 h-12 border border-gray-200 rounded text-center text-lg font-bold focus:outline-none focus:border-[#d51243]"
          />
        </div>
      </td>

      <td className="p-4 border-r border-gray-200 text-center font-bold">
        ${(item.price * quantity).toFixed(2)}
      </td>

      <td className="p-4 border-r border-gray-200">
        <div className="flex justify-center">
          <Button
            onClick={() => {
              for (let i = 0; i < quantity; i++) {
                addToCart(item);
              }
            }}
            className="bg-[#d51243] hover:bg-[#b50f39] text-white font-bold py-6 px-10 rounded-md transition-colors"
          >
            Add To Cart
          </Button>
        </div>
      </td>

      <td className="p-4 text-center">
        <button
          onClick={() => toggleWishlist(item)}
          className="text-gray-500 hover:text-[#d51243] text-sm transition-colors"
        >
          Remove
        </button>
      </td>
    </tr>
  );
}
