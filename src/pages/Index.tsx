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
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60 shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
          style={{ 
            scaleX: scrollProgress,
            filter: scrollProgress > 0.95 ? 'brightness(1.5) blur(2px)' : 'none',
            boxShadow: scrollProgress > 0.95 ? '0 0 25px rgba(250,204,21,0.9), 0 0 15px rgba(250,204,21,0.7)' : 'none'
          }}
          initial={{ transformOrigin: "left" }}
        />
        <motion.div 
          className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60 shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
          style={{ 
            scaleY: scrollProgress,
            filter: scrollProgress > 0.95 ? 'brightness(1.5) blur(2px)' : 'none',
            boxShadow: scrollProgress > 0.95 ? '0 0 25px rgba(250,204,21,0.9), 0 0 15px rgba(250,204,21,0.7)' : 'none'
          }}
          initial={{ transformOrigin: "top" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60 shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
          style={{ 
            scaleX: scrollProgress,
            filter: scrollProgress > 0.95 ? 'brightness(1.5) blur(2px)' : 'none',
            boxShadow: scrollProgress > 0.95 ? '0 0 25px rgba(250,204,21,0.9), 0 0 15px rgba(250,204,21,0.7)' : 'none'
          }}
          initial={{ transformOrigin: "right" }}
        />
        <motion.div 
          className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60 shadow-[0_0_20px_rgba(250,204,21,0.7)] transition-all duration-300"
          style={{ 
            scaleY: scrollProgress,
            filter: scrollProgress > 0.95 ? 'brightness(1.5) blur(2px)' : 'none',
            boxShadow: scrollProgress > 0.95 ? '0 0 25px rgba(250,204,21,0.9), 0 0 15px rgba(250,204,21,0.7)' : 'none'
          }}
          initial={{ transformOrigin: "bottom" }}
        />
      </div>
      
      <div className="relative">
        <HeroWithFeatures />
        <FeaturesShowcase />
        <ExperiencePlatform />
        
        <div className="relative">
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