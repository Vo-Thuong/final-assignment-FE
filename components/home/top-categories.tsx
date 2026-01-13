"use client";

import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";

export default function CategorySection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-[30px] font-bold text-left mb-12 flex items-baseline">
          <span className="text-[#111111] tracking-tight">Top</span>
          <span className="text-[#d51243] font-serif italic font-medium ml-2 relative">
            Categories
          </span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-l border-gray-100">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/shop?category=${category.slug}`}
              className="group flex flex-col items-center px-4 border-r border-gray-100 py-4"
            >
              <div className="relative mb-6">
                <div className="w-[120px] h-[120px] rounded-full bg-white shadow-[0_0_20px_rgba(0,0,0,0.05)] flex items-center justify-center group-hover:shadow-[0_0_25px_rgba(213,18,67,0.1)] transition-all duration-300">
                  <div className="relative w-12 h-12">
                    <Image
                      src={category.icon}
                      alt={category.name}
                      fill
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="absolute top-1 -right-1 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center">
                  <span className="text-[#d51243] text-xs font-bold">
                    {category.productCount < 10
                      ? `0${category.productCount}`
                      : category.productCount}
                  </span>
                </div>
              </div>

              <h3 className="text-[15px] font-bold text-[#111111] text-center leading-tight max-w-[120px] group-hover:text-[#d51243] transition-colors duration-300">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
