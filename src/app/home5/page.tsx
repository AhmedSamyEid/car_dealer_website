import SignUp from "../auth/sign_up/Signup";
import OurTeam from "@/components/Our_team_mercedes/Ourteam";
import HeroSection from "@/components/mercedes_benz/HeroSection";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import Wemakefinding from "@/components/we_make_finding/Wemakefinding";
import Onlineinperson from "@/components/online_in_person/Onlineperson";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
export default function home5() {
  return (
    <div>
      <HeroSection />
      <TheMostSearchedCars />
      <Onlineinperson />
      <WhyChooseUs />
      <VehiclesSlider />
      <OurTeam />
      <BrandsSection />
      <Wemakefinding />
      <SignUp />
    </div>
  );
}
