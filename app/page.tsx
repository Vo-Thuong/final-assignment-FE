import CategorySidebar from '@/components/layout/header/sidebar-categories';
import NavigationMenu from '@/components/layout/header/menu';
import HeroSlider from '@/components/layout/header/slide-header';
import SideBanners from '@/components/layout/header/side-banners';
import CategorySection from '@/components/home/top-categories';
import ProductSection from '@/components/home/popular-product';
import DealSection from '@/components/home/flash-sale';
import InstagramFeed from '@/components/home/slide-instagram';
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