// components/wishlist/wishlist-table.tsx
import { WishlistRow } from "./wishlist-row";

export function WishlistTable({ items }: { items: any[] }) {
  return (
    <div className="overflow-x-auto bg-card rounded-lg shadow-sm">
      <table className="w-full text-sm">
        <thead className="border-b bg-muted">
          <tr className="text-left">
            <th className="p-4">Images</th>
            <th className="p-4">Courses</th>
            <th className="p-4">Unit Price</th>
            <th className="p-4">Quantity</th>
            <th className="p-4">Total</th>
            <th className="p-4">Add To Cart</th>
            <th className="p-4">Remove</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <WishlistRow key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
