'use client';

interface ShopToolbarProps {
  total: number;
  search: string;
  onSearch: (value: string) => void;
}

export default function ShopToolbar({
  total,
  search,
  onSearch,
}: ShopToolbarProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-6 gap-4">
      <p className="text-sm text-gray-500">
        {total} Item On List
      </p>

      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
        className="border px-4 py-2 rounded w-64 text-sm"
      />
    </div>
  );
}
