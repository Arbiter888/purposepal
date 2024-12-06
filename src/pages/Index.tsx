import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CoachPreview from "@/components/sections/CoachPreview";
import CommunityHealth from "@/components/sections/CommunityHealth";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";
import ChatPreview from "@/components/ChatPreview";
import EnhancedChatPreview from "@/components/EnhancedChatPreview";
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { wellnessMessages, nutritionMessages, spiritualMessages, fitnessMessages, financialMessages, suggestedMessages } from "@/data/chatMessages";

const coachInfo = {
  wellness: {
    name: "Ava",
    title: "Wellness Coach",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    bgGradient: "bg-gradient-to-r from-green-400 via-cyan-500 to-blue-500"
  },
  nutrition: {
    name: "Olivia",
    title: "Nutrition Expert",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    bgGradient: "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
  },
  spiritual: {
    name: "Amara",
    title: "Spiritual Guide",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    bgGradient: "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
  },
  fitness: {
    name: "Amber",
    title: "Fitness Expert",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    bgGradient: "bg-gradient-to-r from-lime-400 via-emerald-500 to-teal-500"
  },
  financial: {
    name: "Maya",
    title: "Financial Advisor",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    bgGradient: "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
  }
};

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showHelp, setShowHelp] = useState(false);

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
  const messages = {
    wellness: wellnessMessages,
    nutrition: nutritionMessages,
    spiritual: spiritualMessages,
    fitness: fitnessMessages,
    financial: financialMessages,
  }[selectedService];

  const suggestions = suggestedMessages[selectedService as keyof typeof suggestedMessages];

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
        
        <div className="relative py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${activeCoach.gradient} bg-clip-text text-transparent mb-4`}>
                Meet {activeCoach.name}
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Choose your personal AI coach and start your journey to a better life
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <EnhancedChatPreview onServiceChange={setSelectedService} />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="order-2 md:order-1 relative"
              >
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 z-10"
                    onClick={() => setShowHelp(!showHelp)}
                  >
                    <HelpCircle className="w-5 h-5" />
                  </Button>
                  {showHelp ? (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="glass rounded-3xl p-6 mb-4"
                    >
                      <h3 className="text-xl font-semibold mb-4">Suggested Topics</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {suggestions.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
                          >
                            {suggestion}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  ) : null}
                  <ChatPreview messages={messages} service={selectedService} />
                </div>
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