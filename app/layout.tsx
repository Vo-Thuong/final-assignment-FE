import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import TopBar from "@/components/layout/header/top-bar";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import { CartProvider } from "@/components/cart/cart-summary";
import { WishlistProvider } from "@/components/wishlist/wishlist-context";
import { Toaster } from "react-hot-toast";
import { ThemeProvider } from "@/components/layout/theme/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VTC Academy E-commerce",
  description: "Turning Passion into Career",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen flex flex-col overflow-x-hidden text-xs font-bold`}
      >
        <ThemeProvider>
          <CartProvider>
            <WishlistProvider>
              <TopBar />
              <Header />
              <main className="flex-1 w-full overflow-x-hidden ">
                <div className="max-w-8xl mx-auto px-4">{children}</div>
              </main>
              <Footer />
              <Toaster position="top-right" />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
