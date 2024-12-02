import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import ExperiencePlatform from "@/components/sections/ExperiencePlatform";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");
  const [scrollProgress, setScrollProgress] = useState(0);

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

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pointer-events-none" />
      
      <div className="relative">
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent after:content-[''] after:absolute after:inset-0 after:animate-pulse after:bg-gradient-to-b after:from-transparent after:via-orange-500/10 after:to-transparent -z-10" />
        
        <HeroWithFeatures />
        <FeaturesShowcase />
        <ExperiencePlatform />
        
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 space-y-12">
            <CoachPreview activeService={selectedService} />
            <InteractiveDemo onServiceChange={setSelectedService} />
          </div>
        </div>

        <CommunityHealth />
        <PricingSection />
        <CallToAction />
      </div>
    </div>
  );
};

export default Index;