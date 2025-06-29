import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { Statistics } from "./components/header/statistics/Statistics";
import { WhyChooseUs } from "./components/header/whychooseus/WhyChooseUs";
import { PopularMakes } from "./components/header/popularmakes/PopularMakes";
import { BrandsSection } from "./components/header/brandsSection/BrandsSection";
import { VehiclesSlider } from "./components/header/vehiclesslider/VehiclesSlider ";
import { ShopByCategory } from "./components/header/ShopByCategory/ShopByCategory";
import { SellYourCarSection } from "./components/header/sellYourcarsection/SellYourCarSection";
import { Testimonials } from "./components/Testimonials/Testimonials";
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
    </>
  );
}
