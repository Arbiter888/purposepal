import HeroWithFeatures from "@/components/sections/HeroWithFeatures";
import FeaturesShowcase from "@/components/sections/FeaturesShowcase";
import ExperiencePlatform from "@/components/sections/ExperiencePlatform";
import InteractiveDemo from "@/components/sections/InteractiveDemo";
import CommunityHealth from "@/components/sections/CommunityHealth";
import TelehealthDirectory from "@/components/sections/TelehealthDirectory";
import PricingSection from "@/components/sections/PricingSection";
import CallToAction from "@/components/sections/CallToAction";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Video, MessageSquare, Star } from "lucide-react";

const Index = () => {
  const [selectedService, setSelectedService] = useState("wellness");
  const [scrollProgress, setScrollProgress] = useState(0);

  // Handle scroll progress
  const handleScroll = () => {
    const scrollPx = document.documentElement.scrollTop;
    const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = scrollPx / winHeightPx;
    setScrollProgress(scrolled);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Progress border container */}
      <div className="fixed inset-0 pointer-events-none z-50">
        {/* Top border */}
        <motion.div 
          className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60"
          style={{ scaleX: scrollProgress }}
          initial={{ transformOrigin: "left" }}
        />
        {/* Right border */}
        <motion.div 
          className="absolute top-0 right-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60"
          style={{ scaleY: scrollProgress }}
          initial={{ transformOrigin: "top" }}
        />
        {/* Bottom border */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 opacity-60"
          style={{ scaleX: scrollProgress }}
          initial={{ transformOrigin: "right" }}
        />
        {/* Left border */}
        <motion.div 
          className="absolute top-0 left-0 bottom-0 w-0.5 bg-gradient-to-b from-red-500 via-orange-500 to-yellow-400 opacity-60"
          style={{ scaleY: scrollProgress }}
          initial={{ transformOrigin: "bottom" }}
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background pointer-events-none" />
      
      <div className="relative">
        {/* Enhanced connecting line between sections with sunshine gradient */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-yellow-400/20 to-transparent after:content-[''] after:absolute after:inset-0 after:animate-pulse after:bg-gradient-to-b after:from-transparent after:via-orange-500/10 after:to-transparent -z-10" />
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <HeroWithFeatures />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FeaturesShowcase />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <ExperiencePlatform />
        </motion.div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <InteractiveDemo onServiceChange={setSelectedService} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-3xl p-8 backdrop-blur-xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
                    Meet Your Financial Coach
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    Transform your financial future with personalized guidance from our AI-powered Financial Coach. Get expert advice on budgeting, investments, and wealth building strategies.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {[...Array(3)].map((_, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500"
                        />
                      ))}
                    </div>
                    <div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Trusted by 10,000+ users
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Button className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
                      <MessageSquare className="w-4 h-4 mr-2" />
                      Chat Now
                    </Button>
                    <Button variant="outline" className="border-blue-400/20">
                      <Video className="w-4 h-4 mr-2" />
                      Schedule Video Call
                    </Button>
                  </div>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-indigo-500/20 to-purple-500/20 rounded-3xl blur-3xl" />
                  <div className="relative bg-muted/80 rounded-3xl p-6 backdrop-blur-xl">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500" />
                        <div>
                          <p className="font-medium">Financial AI Coach</p>
                          <p className="text-sm text-muted-foreground">Online now</p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        "I'll help you create a personalized financial plan, optimize your investments, and achieve your long-term financial goals. Let's start building your wealth today!"
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {["Investment Planning", "Budgeting", "Wealth Building", "Tax Strategy"].map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 rounded-full text-xs bg-blue-400/10 text-blue-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <TelehealthDirectory activeService={selectedService} />
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CommunityHealth />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <PricingSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <CallToAction />
        </motion.div>
      </div>
    </div>
  );
};

export default Index;