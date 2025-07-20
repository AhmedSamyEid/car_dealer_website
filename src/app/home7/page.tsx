import OurTeam from "@/components/Our_Team/Ourteam";
import { Statistics } from "@/components/statistics/Statistics";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import HeroSection from "@/components/lets_find_your_perfect/HeroSection";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import AutoLoanCalculator from "@/components/auto_loan_calculator/Autooanalculator";
import Whatourcustomers from "@/components/what_our_customers_say/Whatourcustomers";
import SubscribeToOurMailing from "@/components/subscribe_to_our_mailing/Subscribetoour";

export default function home() {
  return (
    <div>
      <HeroSection />
      <BrandsSection />
      <VehiclesSlider />
      <Statistics />
      <TheMostSearchedCars />
      <Whatourcustomers />
      <OurTeam />
      <AutoLoanCalculator />
      <SubscribeToOurMailing />
    </div>
  );
}
