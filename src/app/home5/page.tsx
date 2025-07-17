import HeroSection from "@/components/mercedes_benz/HeroSection";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import Onlineinperson from "@/components/online_in_person/Onlineperson";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
export default function home5() {
  return (
    <div>
      <HeroSection />
      <TheMostSearchedCars />
      <Onlineinperson />
      <WhyChooseUs />
    </div>
  );
}
