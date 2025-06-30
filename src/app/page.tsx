import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { Testimonials } from "./components/ui/Testimonials";
import { Statistics } from "./components/ui/Statistics";
import { WhyChooseUs } from "./components/ui/WhyChooseUs";
import { PopularMakes } from "./components/ui/PopularMakes";
import { LatestBlogPosts } from "./components/ui/LatestBlogPosts";
import { BrandsSection } from "./components/ui/BrandsSection";
import { VehiclesSlider } from "./components/ui/VehiclesSlider ";
import { ShopByCategory } from "./components/ui/ShopByCategory";
import { SellYourCarSection } from "./components/ui/SellYourCarSection";
export default function Home() {
  return (
    <>
      <FindYourPerfectCar />
      <BrandsSection />
      <VehiclesSlider />
      <SellYourCarSection />
      <Statistics />
      <WhyChooseUs />
      <PopularMakes />
      <ShopByCategory />
      <Testimonials />
      <LatestBlogPosts />
    </>
  );
}
