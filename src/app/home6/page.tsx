import { Statistics } from "@/components/statistics/Statistics";
import GetFairPrice from "@/components/get_fair_price/Getfairprice";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import { Browsebytype } from "@/components/browseby_type/Browsebytype";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import { VehiclesSlider } from "@/components/vehiclesslider/VehiclesSlider ";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";
import Vehiclesavailable from "@/components/vehicles _available/Vehiclesavailable";
import Whatourcustomers from "@/components/what_our_customers_say/Whatourcustomers";
import AutoLoanCalculator from "@/components/auto_loan_calculator/Autooanalculator";

export default function home() {
  return (
    <div>
      <Vehiclesavailable />
      <Browsebytype />
      <WhyChooseUs />
      <VehiclesSlider />
      <GetFairPrice />
      <Statistics />
      <Whatourcustomers />
      <AutoLoanCalculator />
      <BrandsSection />
      <LatestBlogPosts />
    </div>
  );
}
