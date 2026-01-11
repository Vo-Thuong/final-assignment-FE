'use client';

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

type Props = {
  categories: string[];
  category: string;
  setCategory: (v: string) => void;
  price: number[];
  setPrice: (v: number[]) => void;
  colors: string[];
  setColors: (v: string[]) => void;
  brands: string[];
  setBrands: (v: string[]) => void;
};

const colorOptions = ["Black", "Blue", "Grey", "Green", "Red"];
const brandOptions = ["Adidas", "Balenciaga", "Burberry", "Chloe"];

export default function ShopSidebar({
  categories,
  category,
  setCategory,
  price,
  setPrice,
  colors,
  setColors,
  brands,
  setBrands,
}: Props) {
  const toggle = (
    value: string,
    list: string[],
    setList: (v: string[]) => void
  ) => {
    setList(
      list.includes(value)
        ? list.filter((v) => v !== value)
        : [...list, value]
    );
  };

  return (
    <aside className="w-72 shrink-0 space-y-10">
      <div>
        <h4 className="font-semibold mb-4">Category</h4>
        <ul className="space-y-2 text-sm">
          {categories.map((c) => (
            <li key={c}>
              <button
                onClick={() => setCategory(c)}
                className={`hover:text-pink-600 ${
                  category === c ? "text-pink-600 font-medium" : ""
                }`}
              >
                {c}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Filter</h4>
        <Slider
          value={price}
          max={100}
          step={1}
          onValueChange={setPrice}
          className="mb-3"
        />
        <p className="text-sm">${price[0]}</p>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Color</h4>
        <ul className="space-y-2 text-sm">
          {colorOptions.map((c) => (
            <li key={c} className="flex items-center gap-2">
              <Checkbox
                checked={colors.includes(c)}
                onCheckedChange={() => toggle(c, colors, setColors)}
              />
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-semibold mb-4">Brand</h4>
        <ul className="space-y-2 text-sm">
          {brandOptions.map((b) => (
            <li key={b} className="flex items-center gap-2">
              <Checkbox
                checked={brands.includes(b)}
                onCheckedChange={() => toggle(b, brands, setBrands)}
              />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
