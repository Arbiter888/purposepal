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
      
      <div className="relative">
        <HeroWithFeatures />
        <FeaturesShowcase />
        <ExperiencePlatform />
        
        <div className="relative py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8 md:mb-16"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-aurora mb-4">
                Meet Your AI Coaches
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto">
                Choose your personal AI coach and start your journey to a better life
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1"
              >
                <InteractiveDemo onServiceChange={setSelectedService} />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-1 md:order-2"
              >
                <CoachPreview activeService={selectedService} />
              </motion.div>
            </div>
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