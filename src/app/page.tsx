
import { Statistics } from "./components/ui/statistics/Statistics";
import { WhyChooseUs } from "./components/ui/whychooseus/WhyChooseUs";
import { PopularMakes } from "./components/ui/popularmakes/PopularMakes";
import { Testimonials } from "./components/ui/testimonials/Testimonials";
import { CallToActions } from "./components/ui/callToactions/CallToActions";
import { BrandsSection } from "./components/ui/brandssection/BrandsSection";
import { VehiclesSlider } from "./components/ui/vehiclesslider/VehiclesSlider ";
import { ShopByCategory } from "./components/ui/shopbycategory/ShopByCategory";
import { LatestBlogPosts } from "./components/ui/latestblogposts/LatestBlogPosts";
import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { SellYourCarSection } from "./components/ui/sellyourcarsection/SellYourCarSection";
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
