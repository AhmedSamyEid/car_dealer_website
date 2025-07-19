import { BrandsSection } from "@/components/brandssection/BrandsSection";
import HeroSection from "@/components/lets_find_your_perfect/HeroSection";
import OurTeam from "@/components/Our_Team/Ourteam";
import { Statistics } from "@/components/statistics/Statistics";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import Whatourcustomers from "@/components/what_our_customers_say/Whatourcustomers";

export default function home (){
  return(
    <div>
      <HeroSection />
      <BrandsSection />
      <VehiclesSlider />
      <Statistics />
      <TheMostSearchedCars />
      <Whatourcustomers />
      <OurTeam />
    </div>
  )
}