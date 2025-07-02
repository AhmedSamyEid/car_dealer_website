import { Statistics } from "@/components/statistics/Statistics";
import { WhyChooseUs } from "@/components/whychooseus/WhyChooseUs";
import { PopularMakes } from "@/components/popularmakes/PopularMakes";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { CallToActions } from "@/components/callToactions/CallToActions";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import { ShopByCategory } from "@/components/shopbycategory/ShopByCategory";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";
import FindYourPerfectCar from "@/components/findYourPerfectCar/HeroSection";
import { SellYourCarSection } from "@/components/sellyourcarsection/SellYourCarSection";
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
