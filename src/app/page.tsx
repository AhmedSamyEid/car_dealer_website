import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { Statistics } from "./components/header/statistics/Statistics";
import { WhyChooseUs } from "./components/header/whychooseus/WhyChooseUs";
import { BrandsSection } from "./components/header/brandsSection/BrandsSection";
import { VehiclesSlider } from "./components/header/vehiclesslider/VehiclesSlider ";
import { SellYourCarSection } from "./components/header/sellYourcarsection/SellYourCarSection";
export default function Home() {
  return (
    <>
      <FindYourPerfectCar />
      <BrandsSection />
      <VehiclesSlider />
      <SellYourCarSection />
      <Statistics />
      <WhyChooseUs />
    </>
  );
}
