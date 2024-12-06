import { Toaster } from "@/components/ui/toaster";
import { useState } from "react";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import ChatAndKanbanSection from "@/components/sections/ChatAndKanbanSection";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");

  return (
    <div className="min-h-screen bg-black text-white relative">
      <HeroWithFeatures />
      <FeaturesShowcase />
      
      <div className="relative py-12 md:py-24">
        <div className="max-w-[1800px] mx-auto px-4 space-y-8 md:space-y-16">
          <ChatAndKanbanSection onServiceChange={setSelectedService} />
          <CommunityHealth />
          <PricingSection />
          <CallToAction />
        </div>
      </div>
      
      <Toaster />
    </div>
  );
};

export default Index;