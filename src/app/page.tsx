import AboutUs from "@/page/homePage/AboutUs";
import CSRSection from "@/page/homePage/CSRSection";
import GlobalPresence from "@/page/homePage/GlobalPresence";
import HeroSection from "@/page/homePage/HeroSection";
import PostSection from "@/page/homePage/PostSection";
import OurProducts from "@/page/homePage/Products";
import StatsBanner from "@/page/homePage/StatsBanner";
import TeamMembers from "@/page/homePage/TeamMembers";

export default function Home() {
  return <main>
    <HeroSection />
    <AboutUs />
    <OurProducts />
    <StatsBanner />
    <TeamMembers />
    <GlobalPresence />
    <CSRSection />
    <PostSection />
  </main>;
}
