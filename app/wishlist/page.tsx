'use client';

import { WishlistTable } from '@/components/wishlist/wishlist-table';
import { useWishlist } from '@/components/wishlist/wishlist-context';

export default function WishlistPage() {
  const { items } = useWishlist();

  return (
    <div className="w-full px-6 lg:px-12 py-10">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

      {items.length === 0 ? (
        <p>Your wishlist is empty.</p>
      ) : (
        <WishlistTable items={items} />
      )}
    </div>
  );
}
