import OurTeam from "@/components/Our_team_mercedes/Ourteam";
import HeroSection from "@/components/mercedes_benz/HeroSection";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import Onlineinperson from "@/components/online_in_person/Onlineperson";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
export default function home5() {
  return (
    <div>
      <HeroSection />
      <TheMostSearchedCars />
      <Onlineinperson />
      <WhyChooseUs />
      <VehiclesSlider />
      <OurTeam />
    </div>
  );
}
