import { PopularMakes } from "@/components/popularmakes/PopularMakes";
import { BrandsSection } from "@/components/brandssection/BrandsSection";
import { CallToActions } from "@/components/callToactions/CallToActions";
import HeroSection from "@/components/fast_simple_and_easy/HeroSection";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import { SellYourCarSection } from "@/components/sellyourcarsection/SellYourCarSection";
import { Statistics } from "@/components/statistics/Statistics";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";

export default function home() {
  return (
    <div>
      <HeroSection />
      <TheMostSearchedCars />
      <CallToActions />
      <PopularMakes />
      <BrandsSection />
      <SellYourCarSection />
      <Statistics />
      <LatestBlogPosts />
    </div>
  );
}
