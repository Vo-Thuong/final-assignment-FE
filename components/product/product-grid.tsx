import ProductCard from "./product-card";
import { Product } from "@/types";

interface ProductGridProps {
  products: Product[];
  view?: "grid" | "list";
}

export default function ProductGrid({
  products,
  view = "grid",
}: ProductGridProps) {
  if (view === "list") {
    return (
      <div className="space-y-6">
        {products.map((p) => (
          <div key={p.id} className="border rounded-lg p-4">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
