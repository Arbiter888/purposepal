import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import BlogSection from "@/components/sections/BlogSection";
import FaithBasedServices from "@/components/FaithBasedServices";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <CommunityHealth />
      <FaithBasedServices />
      <BlogSection />
      <PricingSection />
    </main>
  );
};

export default Index;