"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingCart, User, Heart, ChevronDown } from "lucide-react";
import ThemeToggle from "@/components/layout/theme/theme-toggle";
import { useCart } from "@/components/cart/cart-summary";
import { useWishlist } from "@/components/wishlist/wishlist-context";
import CartSidebar from "@/components/cart/mini-cart";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [isCurrencyOpen, setIsCurrencyOpen] = useState(false);

  const [isSticky, setIsSticky] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const { getTotalItems } = useCart();
  const { items: wishlistItems } = useWishlist();

  const menuItems = [
    {
      label: "Home",
      dropdown: [
        { label: "Wooden Home", href: "/shop" },
        { label: "Fashion Home", href: "/shop" },
        { label: "Furniture Home", href: "/shop" },
        { label: "Cosmetics Home", href: "/shop" },
        { label: "Food Grocery", href: "/shop" },
      ],
    },
    {
      label: "Shop",
      dropdown: [
        { label: "Shop", href: "/shop" },
        { label: "Shop 2", href: "/shop" },
        { label: "Shop Details", href: "/shop-details" },
        { label: "Cart", href: "/cart" },
      ],
    },
    {
      label: "Pages",
      dropdown: [
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      label: "Blog",
      dropdown: [
        { label: "Blog", href: "/blog" },
        { label: "Blog Details", href: "/blog-details" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`bg-background text-foreground border-b sticky top-0 z-40 w-full transition-all duration-300 ${
          isSticky ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-5 px-10 relative">
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/assets/img/logo/logo.png"
                  alt="VTC Academy"
                  width={160}
                  height={50}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="flex-1 flex items-center justify-center mx-8">
              {!isSticky ? (
                <div className="hidden md:flex relative w-full max-w-[600px] animate-in fade-in duration-300">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-[#F3F5F9] border-none rounded-md focus:outline-none"
                  />
                </div>
              ) : (
                <div className="flex items-center w-full justify-between animate-in fade-in slide-in-from-top-1 duration-500">
                  <ul className="flex items-center gap-8 font-semibold">
                    {menuItems.map((item) => (
                      <li
                        key={item.label}
                        className="relative flex items-center"
                        onMouseEnter={() => setOpenDropdown(item.label)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        <button
                          className={`flex items-center gap-1 transition-colors text-[15px] ${
                            openDropdown === item.label
                              ? "text-pink-600"
                              : "text-gray-700 hover:text-pink-600"
                          }`}
                        >
                          {item.label}
                          <ChevronDown className="w-4 h-4" />
                        </button>

                        {openDropdown === item.label && (
                          <div className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                            {item.dropdown.map((subItem) => (
                              <Link
                                key={subItem.label}
                                href={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-pink-600 transition-colors"
                              >
                                {subItem.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/contact"
                        className="text-gray-700 hover:text-pink-600 font-semibold text-[15px]"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>

                  <div className="relative w-[220px] ml-4">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="w-full pl-9 pr-4 py-2 bg-[#F3F5F9] border-none rounded-md focus:outline-none text-sm"
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              {!isSticky && (
                <div className="flex items-center gap-4 animate-in fade-in duration-300">
                  <div className="group relative">
                    <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-all min-w-[125px] justify-between h-11">
                      <div className="flex items-center gap-2">
                        <Image
                          src="/assets/img/icon/lang-flag.png"
                          alt="EN"
                          width={24}
                          height={16}
                          className="rounded-sm"
                        />
                        <span className="text-sm font-bold">English</span>
                      </div>
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:rotate-180 transition-transform" />
                    </button>
                    <div className="absolute top-full right-0 mt-1 w-full bg-white border shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 overflow-hidden">
                      <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 font-medium">
                        Vietnamese
                      </button>
                    </div>
                  </div>

                  <div className="relative">
                    <button
                      onClick={() => setIsCurrencyOpen(!isCurrencyOpen)}
                      className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-all min-w-[85px] justify-between h-11 font-bold text-sm"
                    >
                      <span>{currency}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          isCurrencyOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isCurrencyOpen && (
                      <div className="absolute top-full right-0 mt-1 w-full bg-white border shadow-lg rounded-md z-50 overflow-hidden">
                        <button
                          onClick={() => {
                            setCurrency("USD");
                            setIsCurrencyOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100 font-medium"
                        >
                          USD
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4 pl-2">
                <ThemeToggle />
                <button
                  onClick={() => setIsCartOpen(true)}
                  className="relative hover:text-[#D2153D] transition-colors"
                >
                  <ShoppingCart className="w-6 h-6 stroke-[1.5]" />
                  <span className="absolute -top-2 -right-2 bg-[#D2153D] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                </button>
                <Link href="/auth" className="hover:text-[#D2153D]">
                  <User className="w-6 h-6 stroke-[1.5]" />
                </Link>
                <Link
                  href="/wishlist"
                  className="relative hover:text-[#D2153D]"
                >
                  <Heart className="w-6 h-6 stroke-[1.5]" />
                  <span className="absolute -top-2 -right-2 bg-[#D2153D] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold">
                    {wishlistItems.length}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
