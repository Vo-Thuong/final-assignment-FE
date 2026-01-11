import Link from "next/link";
import {
  Menu,
  Flame,
  Gift,
  Droplet,
  Crown,
  Gem,
  ArrowRight,
} from "lucide-react";

export default function CategorySidebar() {
  const categories = [
    { name: "Candles", icon: Flame, hasSub: false },
    {
      name: "Handmade",
      icon: Gift,
      hasSub: true,
      subItems: [
        "Chair",
        "Table",
        "Wooden",
        "furniture",
        "Clock",
        "Gifts",
        "Crafts",
      ],
    },
    { name: "Gift Sets", icon: Gift, hasSub: false },
    { name: "Plastic Gifts", icon: Gem, hasSub: false },
    { name: "Handy Cream", icon: Droplet, hasSub: false },
    { name: "Cosmetics", icon: Crown, hasSub: false },
    { name: "Silk Accessories", icon: Gem, hasSub: false },
  ];

  return (
    <div className="w-[216px] h-[506px] bg-white text-card-foreground rounded-lg border shadow-sm relative flex flex-col">
      <div className="bg-[#d51243] text-white px-6 py-[16px] flex items-center gap-3 rounded-t-lg shrink-0">
        <Menu className="w-5 h-5 stroke-[2.5px]" />{" "}
        <span className="font-bold text-[17px] tracking-tight">Categories</span>
      </div>

      <div className="flex-1 flex flex-col justify-between py-2">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group/item flex-1 flex flex-col justify-center"
          >
            <Link
              href={`/shop?category=${cat.name.toLowerCase()}`}
              className="flex items-center justify-between px-6 py-1 text-gray-700 hover:text-[#d51243] transition-colors"
            >
              <div className="flex items-center gap-3">
                <cat.icon className="w-4 h-4 text-[#d51243]" />
                <span className="font-medium text-sm leading-none">
                  {cat.name}
                </span>
              </div>
              {cat.hasSub && (
                <ArrowRight className="w-3.5 h-3.5 text-[#d51243] opacity-70" />
              )}
            </Link>

            {cat.hasSub && (
              <div className="invisible opacity-0 group-hover/item:visible group-hover/item:opacity-100 absolute left-full top-0 ml-[1px] w-[200px] bg-white border shadow-xl rounded-r-lg transition-all z-50 py-4 min-h-[506px]">
                {cat.subItems?.map((sub, sIdx) => (
                  <Link
                    key={sIdx}
                    href="#"
                    className="block px-8 py-3 text-gray-700 hover:text-[#d51243] transition-colors font-medium text-[13px]"
                  >
                    {sub}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-gray-100 py-4 bg-gray-50/50 rounded-b-lg shrink-0">
        {["Value of the Day", "Top 100 Offers", "New Arrivals"].map(
          (label, idx) => (
            <div key={idx} className="px-6 py-2">
              <Link
                href="/shop"
                className="group relative inline-block font-bold text-sm"
              >
                <span className="text-gray-900 group-hover:text-[#d51243] transition-colors duration-300">
                  {label}
                </span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1.5px] bg-[#d51243] transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
