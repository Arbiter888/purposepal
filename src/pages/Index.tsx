import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";
import GradientShowcase from "@/components/sections/GradientShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroWithFeatures />
      <GradientShowcase />
      <FeaturesShowcase />
      <InteractiveDemo />
      <CommunityHealth />
      <PricingSection />
      <CallToAction />
    </div>
  );
};

export default Index;