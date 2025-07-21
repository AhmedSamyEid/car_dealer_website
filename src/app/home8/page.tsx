import { Statistics } from "@/components/statistics/Statistics";
import GetFairPrice from "@/components/get_fair_price/Getfairprice";
import Areyoulooking from "@/components/are_you_looking/Areyoulooking";
import HeroSection from "@/components/search_less_live_more/HeroSection";

export default function home () {
  return(
    <div>
      <HeroSection />
      <GetFairPrice />
      <Statistics />
      <Areyoulooking />
    </div>
  )
}