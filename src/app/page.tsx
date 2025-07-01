
import { Statistics } from "./components/ui/Statistics";
import { WhyChooseUs } from "./components/ui/WhyChooseUs";
import { PopularMakes } from "./components/ui/PopularMakes";
import { Testimonials } from "./components/ui/Testimonials";
import { CallToActions } from "./components/ui/CallToActions";
import { BrandsSection } from "./components/ui/BrandsSection";
import { VehiclesSlider } from "./components/ui/VehiclesSlider ";
import { ShopByCategory } from "./components/ui/ShopByCategory";
import { LatestBlogPosts } from "./components/ui/LatestBlogPosts";
import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { SellYourCarSection } from "./components/ui/SellYourCarSection";
export default function Home() {
  return (
    <>
    <div>
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
      <CallToActions />
    </div>
    
    </>
  );
}
