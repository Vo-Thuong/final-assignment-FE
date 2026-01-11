'use client';

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

interface ShopFilterProps {
  categories: string[];
  colors: string[];
  price: number;
  onCategoryChange: (value: string) => void;
  onColorChange: (value: string) => void;
  onPriceChange: (value: number) => void;
}

export default function ShopFilter({
  categories,
  colors,
  price,
  onCategoryChange,
  onColorChange,
  onPriceChange,
}: ShopFilterProps) {
  return (
    <aside className="w-full lg:w-64 space-y-8">
      
      {/* CATEGORY */}
      <div>
        <h4 className="font-semibold mb-3">Category</h4>
        <ul className="space-y-2 text-sm">
          <li>
            <button onClick={() => onCategoryChange("all")} className="hover:text-pink-600">
              All
            </button>
          </li>
          {categories.map((item) => (
            <li key={item}>
              <Button
                onClick={() => onCategoryChange(item)}
                className="hover:text-pink-600"
              >
                {item}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* PRICE */}
      <div>
        <h4 className="font-semibold mb-3">Filter</h4>
        <Input
          type="range"
          min={0}
          max={200}
          value={price}
          onChange={(e) => onPriceChange(Number(e.target.value))}
          className="w-full"
        />
        <p className="text-sm mt-2">${price}</p>
      </div>

      {/* COLOR */}
      <div>
        <h4 className="font-semibold mb-3">Color</h4>
        <ul className="space-y-2 text-sm">
          {colors.map((color) => (
            <li key={color}>
              <Button
                onClick={() => onColorChange(color)}
                className="hover:text-pink-600"
              >
                {color}
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
