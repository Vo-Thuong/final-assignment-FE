"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/product/card-product";

export default function ProductSection() {
  const [activeTab, setActiveTab] = useState("all");

  const tabs = [
    { id: "all", label: "All" },
    { id: "popular", label: "Popular" },
    { id: "sale", label: "On Sale" },
    { id: "rated", label: "Best Rated" },
  ];

  const displayProducts = products.slice(0, 12);

  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        <h2 className="text-[30px] font-bold text-left mb-10 leading-tight">
          <span className="text-[#111111]">Popular </span>
          <span className="text-[#d51243] font-serif italic font-medium ml-1">
            <a href="/product">Products</a>
          </span>
        </h2>

        <div className="flex justify-end gap-6 mb-12">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`
                  text-lg font-medium pb-2 border-b-2 transition-colors
                  ${
                    isActive
                      ? "border-primary text-primary"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }
                `}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
