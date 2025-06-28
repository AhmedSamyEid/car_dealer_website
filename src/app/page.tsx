import FindYourPerfectCar from "./findYourPerfectCar/HeroSection";
import { BrandsSection } from "./components/header/brandsSection/BrandsSection";
import { VehiclesSlider } from "./components/header/vehiclesslider/VehiclesSlider ";
export default function Home() {
  return (
    <>
      <FindYourPerfectCar />
      <BrandsSection />
      <VehiclesSlider />
    </>
  );
}
