import { useState } from "react";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import GradientShowcase from "@/components/sections/GradientShowcase";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  const [activeService, setActiveService] = useState("wellness");

  return (
    <div className="flex flex-col min-h-screen">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <GradientShowcase />
      <CoachPreview activeService={activeService} />
      <CommunityHealth />
      <CallToAction />
    </div>
  );
};

export default Index;