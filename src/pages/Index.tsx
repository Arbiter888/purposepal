import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import BlogPreview from "@/components/sections/BlogPreview";
import ChatPreview from "@/components/ChatPreview";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { suggestedMessages } from "@/data/chatMessages";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const [selectedService, setSelectedService] = useState("spiritual");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHelp, setShowHelp] = useState(false);
  const { messages, sendMessage, isLoading } = useChat(selectedService);

  const handleScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollPx / winHeightPx;
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeCoach = coachInfo[selectedService as keyof typeof coachInfo];

  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="fixed inset-0 pointer-events-none z-50">
        <motion.div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60"
          style={{ scaleX: scrollProgress }}
          initial={{ transformOrigin: "left" }}
        />
        <motion.div 
          className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60"
          style={{ scaleY: scrollProgress }}
          initial={{ transformOrigin: "top" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60"
          style={{ scaleX: scrollProgress }}
          initial={{ transformOrigin: "right" }}
        />
        <motion.div 
          className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60"
          style={{ scaleY: scrollProgress }}
          initial={{ transformOrigin: "bottom" }}
        />
      </div>
      
      <div className="relative">
        <HeroWithFeatures />
        <FeaturesShowcase />
        <InteractiveDemo onServiceChange={setSelectedService} />
        <CoachPreview activeService={selectedService} />
        <ChatPreview 
          messages={messages} 
          service={selectedService}
          onSendMessage={sendMessage}
          isLoading={isLoading}
        />
        <CommunityHealth />
        <PricingSection />
        <BlogPreview />
      </div>
    </div>
  );
};

export default Index;