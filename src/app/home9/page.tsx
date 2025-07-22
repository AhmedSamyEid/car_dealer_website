import HeroSection from "@/components/findyour_perfect/HeroSection";
import Havemorequestions from "@/components/have_more_questions/Havemorequestions";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";
import TheMostSearchedCars from "@/components/themostsearched/TheMostSearched";
import { WhyChooseUs } from "@/components/why_choose_us/WhyChooseUs";



export default function home () {
  return (
    <div>
    <HeroSection />
    <WhyChooseUs />
    <TheMostSearchedCars />
    <LatestBlogPosts />
    <Havemorequestions />
    </div>
  )
}