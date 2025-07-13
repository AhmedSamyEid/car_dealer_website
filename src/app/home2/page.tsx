import Exploeour from "@/components/explore _our/Exploreour";
import HeroSection from "@/components/HeroSection";
import { LatestBlogPosts } from "@/components/latestblogposts/LatestBlogPosts";
import Ourteam from "@/components/ourteam/Ourteam";
import TheMostSearched from "@/components/themostsearched/TheMostSearched";

export default function Home2() {
  return (
    <div>
      <HeroSection />
      <TheMostSearched />
      <Ourteam />
      <LatestBlogPosts />
      <Exploeour />
    </div>
  );
}
