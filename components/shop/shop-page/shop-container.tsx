'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductGrid from "@/components/product/grid";
import ShopToolbar from "./shop-toolbar";
import ShopSidebar from "./shop-sidebar";

export type ViewMode = "grid" | "list";

export default function ShopContainer() {
  const [view, setView] = useState<ViewMode>("grid");
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState<number[]>([100]);
  const [limit, setLimit] = useState(12);
  const [colors, setColors] = useState<string[]>([]);
  const [brands, setBrands] = useState<string[]>([]);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = category === "all" || p.category === category;
      const matchPrice = p.price <= price[0];
      const matchColor = colors.length === 0 || colors.includes(p.color);
      const matchBrand = brands.length === 0 || brands.includes(p.brand);

      return matchCategory && matchPrice && matchColor && matchBrand;
    });
  }, [category, price, colors, brands]);

  const displayedProducts = filteredProducts.slice(0, limit);

  return (
    <>
      {/* HEADER */}
      <section className="bg-muted">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <nav className="text-sm text-muted-foreground mb-2">
            <Link href="/" className="hover:text-foreground">Home</Link>
            <span className="mx-2">—</span>
            <span className="text-foreground">Shop</span>
          </nav>
          <h1 className="text-3xl font-bold">Shop</h1>
        </div>
      </section>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <ShopToolbar
          total={filteredProducts.length}
          view={view}
          setView={setView}
          limit={limit}
          setLimit={setLimit}
        />

        <div className="flex gap-10">
          <div className="flex-1">
            <ProductGrid products={displayedProducts} view={view} />
          </div>

          <ShopSidebar
            categories={categories}
            category={category}
            setCategory={setCategory}
            price={price}
            setPrice={setPrice}
            colors={colors}
            setColors={setColors}
            brands={brands}
            setBrands={setBrands}
          />
        </div>
      </div>
    </>
  );
}
