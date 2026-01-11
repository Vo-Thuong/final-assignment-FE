"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="py-16 bg-background text-foreground">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl font-extrabold text-left mb-12">
          <span className="text-foreground">Top </span>
          <span className="text-primary font-serif">Categories</span>
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 divide-x divide-border">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group"
            >
              <div
                className="
                  rounded-lg p-6 text-center
                  bg-card text-card-foreground
                  border
                  transition-all
                  hover:shadow-md
                "
              >
                {/* Icon */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>

                {/* Badge */}
                <span className="inline-block bg-primary text-primary-foreground text-xs px-2 py-1 rounded mb-2">
                  {category.productCount}
                </span>

                {/* Name */}
                <h3 className="font-medium text-sm text-foreground group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
