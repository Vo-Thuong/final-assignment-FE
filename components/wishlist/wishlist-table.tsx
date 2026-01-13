import { WishlistRow } from "./wishlist-row";
import { Product } from "@/types";

interface WishlistTableProps {
  items: Product[];
}

export function WishlistTable({ items }: WishlistTableProps) {
  return (
    <div className="w-full border border-gray-200 rounded-sm overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Images
            </th>
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Courses
            </th>
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Unit Price
            </th>
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Quantity
            </th>
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Total
            </th>
            <th className="p-5 border-r border-gray-200 text-center font-bold text-base text-gray-900">
              Add To Cart
            </th>
            <th className="p-5 text-center font-bold text-base text-gray-900">
              Remove
            </th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <WishlistRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
      {items.length === 0 && (
        <div className="p-20 text-center text-gray-500 text-lg font-medium">
          Your wishlist is currently empty.
        </div>
      )}
    </div>
  );
}
