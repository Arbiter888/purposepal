import { useState } from "react";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import GradientShowcase from "@/components/sections/GradientShowcase";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import CallToAction from "@/components/sections/CallToAction";
import EnhancedChatPreview from "@/components/EnhancedChatPreview";

const Index = () => {
  const [activeService, setActiveService] = useState("wellness");

  const handleServiceChange = (service: string) => {
    setActiveService(service);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <GradientShowcase />
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <EnhancedChatPreview onServiceChange={handleServiceChange} />
        <CoachPreview activeService={activeService} />
      </div>
      <CommunityHealth />
      <CallToAction />
    </div>
  );
};

export default Index;