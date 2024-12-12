import { useState } from "react";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import BlogSection from "@/components/sections/BlogSection";
import FaithBasedServices from "@/components/FaithBasedServices";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import ChatPreview from "@/components/ChatPreview";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const [activeService, setActiveService] = useState("wellness");
  const { messages, sendMessage, isLoading } = useChat(activeService);

  return (
    <main className="min-h-screen">
      <HeroWithFeatures />
      <FeaturesShowcase />
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <InteractiveDemo onServiceChange={setActiveService} />
          <ChatPreview 
            messages={messages}
            service={activeService}
            onSendMessage={sendMessage}
            isLoading={isLoading}
          />
        </div>
      </section>
      <CommunityHealth />
      <FaithBasedServices />
      <BlogSection />
      <PricingSection />
    </main>
  );
};

export default Index;