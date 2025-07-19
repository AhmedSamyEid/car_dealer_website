import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import { Browsebytype } from "@/components/browseby_type/Browsebytype";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import Vehiclesavailable from "@/components/vehicles _available/Vehiclesavailable";
import GetFairPrice from "@/components/get_fair_price/Getfairprice";

export default function home() {
  return (
    <div>
      <Vehiclesavailable />
      <Browsebytype />
      <WhyChooseUs />
      <VehiclesSlider />
      <GetFairPrice />
    </div>
  );
}
