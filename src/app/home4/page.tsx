import { PopularMakes } from "@/components/popularmakes/PopularMakes";
import HeroSection from "@/components/rangerblack/HeroSection";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";

export default function home() {
  return (
    <div>
      <HeroSection />
      <PopularMakes />
      <WhyChooseUs />
    </div>
  );
}
