import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CommunityHealth from "@/components/sections/CommunityHealth";
import TelehealthDirectory from "@/components/sections/TelehealthDirectory";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <InteractiveDemo />
      <CommunityHealth />
      <TelehealthDirectory />
      <PricingSection />
      <CallToAction />
    </div>
  );
};

export default Index;