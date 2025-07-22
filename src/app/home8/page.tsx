import OurTeam from "@/components/Our_Team/Ourteam";
import { Statistics } from "@/components/statistics/Statistics";
import GetFairPrice from "@/components/get_fair_price/Getfairprice";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";
import Areyoulooking from "@/components/are_you_looking/Areyoulooking";
import HeroSection from "@/components/search_less_live_more/HeroSection";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";

export default function home () {
  return(
    <div>
      <HeroSection />
      <GetFairPrice />
      <Statistics />
      <Areyoulooking />
      <TheMostSearchedCars />
      <WhyChooseUs />
      <OurTeam />
      <LatestBlogPosts />
    </div>
  )
}