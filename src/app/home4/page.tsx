import HeroSection from "@/components/rangerblack/HeroSection";
import BrowsebyType from "@/components/browse_by_type/Browsebytype";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import { PopularMakes } from "@/components/popularmakes/PopularMakes";
import { ShopByCategory } from "@/components/shopbycategory/ShopByCategory";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import AutoLoanCalculator from "@/components/auto_loan_calculator/Autooanalculator";
import OurTeam from "@/components/Our_Team/Ourteam";


export default function home() {
  return (
    <div>
      <HeroSection />
      <PopularMakes />
      <WhyChooseUs />
      <BrowsebyType />
      <ShopByCategory />
      <BrandsSection />
      <AutoLoanCalculator />
      <OurTeam />
    </div>
  );
}
