import { WishlistRow } from "./wishlist-row";
import { Product } from "@/types";

interface WishlistTableProps {
  items: Product[];
}

export function WishlistTable({ items }: WishlistTableProps) {
  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-100">
      <table className="w-full text-sm text-left">
        <thead className="border-b bg-[#F9F9F9] text-gray-900 font-bold uppercase tracking-wider">
          <tr>
            <th className="p-5 w-[120px]">Images</th>
            <th className="p-5">Products</th>{" "}
            <th className="p-5">Unit Price</th>
            <th className="p-5">Stock Status</th>{" "}
            <th className="p-5">Total</th>
            <th className="p-5 text-center">Add To Cart</th>
            <th className="p-5 text-right">Remove</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {items.map((item) => (
            <WishlistRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      {items.length === 0 && (
        <div className="p-20 text-center text-gray-500 font-medium">
          Your wishlist is currently empty.
        </div>
      )}
    </div>
  );
}
