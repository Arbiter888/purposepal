import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import ExperiencePlatform from "@/components/sections/ExperiencePlatform";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CommunityHealth from "@/components/sections/CommunityHealth";
import TelehealthDirectory from "@/components/sections/TelehealthDirectory";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";
import { useState } from "react";

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");

  return (
    <div className="min-h-screen bg-black text-white">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <ExperiencePlatform />
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <InteractiveDemo onServiceChange={setSelectedService} />
        <TelehealthDirectory activeService={selectedService} />
      </div>
      <CommunityHealth />
      <PricingSection />
      <CallToAction />
    </div>
  );
};

export default Index;