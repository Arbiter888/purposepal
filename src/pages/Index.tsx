import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <InteractiveDemo />
      <PricingSection />
      <CallToAction />
    </div>
  );
};

export default Index;