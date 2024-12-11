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
import { Button } from "@/components/ui/button";
import { HelpCircle } from "lucide-react";
import { wellnessMessages, nutritionMessages, spiritualMessages, fitnessMessages, financialMessages, suggestedMessages } from "@/data/chatMessages";
import { useChat } from "@/hooks/useChat";

const coachInfo = {
  wellness: {
    name: "Ava",
    title: "Mental Wellness Coach",
    description: "Transform your mental well-being with personalized guidance from your dedicated AI-powered Wellness Coach.",
    gradient: "from-green-400 via-cyan-500 to-blue-500",
    tags: ["Stress Management", "Mindfulness", "Emotional Balance"],
    videoUrl: "https://www.youtube.com/embed/GkOue0KxWaQ",
    backgroundImage: "/lovable-uploads/440c76a5-97ea-4586-87db-b7ad21444b16.png"
  },
  nutrition: {
    name: "Olivia",
    title: "Nutrition Expert",
    description: "Transform your dietary habits with personalized guidance from your dedicated AI-powered Nutrition Coach.",
    gradient: "from-pink-500 via-purple-500 to-indigo-500",
    tags: ["Meal Planning", "Portion Control", "Dietary Analysis"],
    videoUrl: "https://www.youtube.com/embed/_9x2l119RGw",
    backgroundImage: "/lovable-uploads/4335b249-4c44-4b85-bbbf-fa72d693bc4f.png"
  },
  spiritual: {
    name: "Amara",
    title: "Spiritual Guide",
    description: "Transform your spiritual journey with personalized guidance from your dedicated AI-powered Spiritual Coach.",
    gradient: "from-yellow-400 via-orange-500 to-red-500",
    tags: ["Meditation", "Mindfulness", "Spiritual Growth"],
    videoUrl: "https://www.youtube.com/embed/4cmO7dEGQBk",
    backgroundImage: "/lovable-uploads/440c76a5-97ea-4586-87db-b7ad21444b16.png"
  },
  fitness: {
    name: "Amber",
    title: "Fitness Expert",
    description: "Transform your fitness journey with personalized guidance from your dedicated AI-powered Fitness Coach.",
    gradient: "from-lime-400 via-emerald-500 to-teal-500",
    tags: ["Workout Planning", "Form Guidance", "Exercise Tips"],
    videoUrl: "https://www.youtube.com/embed/O0o-Y25rv7c",
    backgroundImage: "/lovable-uploads/2b866cad-b0b6-4291-b93e-404f8ef8e0e4.png"
  },
  financial: {
    name: "Maya",
    title: "Financial Coach",
    description: "Transform your financial future with personalized guidance from your dedicated AI-powered Financial Coach.",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    tags: ["Investment Planning", "Budgeting", "Wealth Building"],
    videoUrl: "https://www.youtube.com/embed/UiJ0OfgSt1M",
    backgroundImage: "/lovable-uploads/e1950664-3053-4b9a-aed1-78f46c6e7573.png"
  },
};

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
        
        <div className="relative py-12 md:py-24">
          <div className="max-w-7xl mx-auto px-4 space-y-8 md:space-y-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${activeCoach.gradient} bg-clip-text text-transparent mb-4`}>
                Meet {activeCoach.name}, your new {activeCoach.title}
              </h2>
              <p className="text-lg md:text-xl text-white/90">
                Choose your personal AI coach and start your journey to a better life
              </p>
            </motion.div>

            <InteractiveDemo onServiceChange={setSelectedService} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <CoachPreview activeService={selectedService} />
            </motion.div>

            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative glass rounded-3xl p-8 backdrop-blur-xl bg-black/40"
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
                  {showHelp && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="glass rounded-3xl p-6 mb-4"
                    >
                      <h3 className="text-xl font-semibold mb-4">Suggested Topics</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {suggestedMessages[selectedService as keyof typeof suggestedMessages]?.map((suggestion, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="glass p-3 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
                            onClick={() => sendMessage(suggestion)}
                          >
                            {suggestion}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  <ChatPreview 
                    messages={messages} 
                    service={selectedService}
                    onSendMessage={sendMessage}
                    isLoading={isLoading}
                  />
                </div>
              </motion.div>
            </div>

            <CommunityHealth />
            <PricingSection />
            <CallToAction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
