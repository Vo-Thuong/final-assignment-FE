import { products } from "@/data/products";
import ShopDetail from "@/components/shop/shop-detail/shop-detail";

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (p) => String(p.id) === id
  );

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-bold">Product not found</h2>
      </div>
    );
  }

  return <ShopDetail product={product} />;
}
