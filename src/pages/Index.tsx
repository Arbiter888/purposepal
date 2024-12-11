import { useState } from "react";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import GradientShowcase from "@/components/sections/GradientShowcase";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import CallToAction from "@/components/sections/CallToAction";
import { coachPersonalities } from "@/data/chatMessages";

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");

  return (
    <div className="flex flex-col min-h-screen">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <GradientShowcase />
      <CoachPreview 
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
      <CommunityHealth />
      <CallToAction />
    </div>
  );
};

export default Index;