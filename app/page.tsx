

import CategorySidebar from '@/components/layout/header/category-sidebar';
import NavigationMenu from '@/components/layout/header/navigation-menu';
import HeroSlider from '@/components/home/hero-slider';
import SideBanners from '@/components/home/side-banners';
import CategorySection from '@/components/home/category-section';
import ProductSection from '@/components/home/product-section';
import DealSection from '@/components/home/deal-section';
import InstagramFeed from '@/components/home/instagram-feed';
export default function HomePage() {
  return (
    <>
      <section className="py-5">
        <div className="max-w-[1440px] mx-auto px-4">
          <div className="grid grid-cols-[220px_1fr] gap-0 items-start">
            <CategorySidebar />
            <div className="flex flex-col gap-0">
              <NavigationMenu />
              <div className="flex items-stretch gap-4 mt-4 ml-4">

                <div className="w-[828px] flex-shrink-0">
                  <HeroSlider />
                </div>

                <div className="flex-1">
                  <SideBanners />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CategorySection />
      <ProductSection />
      <DealSection />
      <InstagramFeed />
    </>
  );
}