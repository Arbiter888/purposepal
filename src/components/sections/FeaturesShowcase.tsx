import { motion } from "framer-motion";
import { Brain, Heart, Globe, Users, Sparkles, DollarSign, MessageCircle, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Brain,
    title: "Meet Presence",
    description: "Your dedicated AI companion for personal transformation",
    capabilities: [
      "24/7 AI avatar coach support",
      "Personalized development roadmaps",
      "Comprehensive life assessment",
      "Multi-domain expertise",
      "Continuous learning & adaptation"
    ],
    savings: "Save $500+/month on coaching",
    gradient: "from-secondary via-accent to-tertiary"
  },
  {
    icon: Users,
    title: "Expert Network",
    description: "Connect with specialized coaches and practitioners",
    capabilities: [
      "Access to certified professionals",
      "Wellness & nutrition guidance",
      "Spiritual & mindfulness support",
      "Fitness & health expertise",
      "Financial planning assistance"
    ],
    savings: "Save $300+/month on specialists",
    gradient: "from-pink-500 via-purple-500 to-indigo-500"
  },
  {
    icon: Heart,
    title: "Community Growth",
    description: "Join a supportive network of like-minded individuals",
    capabilities: [
      "Peer support connections",
      "Group learning sessions",
      "Success story sharing",
      "Accountability partners",
      "Community challenges"
    ],
    savings: "Save $400+/month on programs",
    gradient: "from-yellow-400 via-orange-500 to-red-500"
  }
];

const FeaturesShowcase = () => {
  const totalMonthlySavings = features.reduce((acc, feature) => {
    const savingsMatch = feature.savings.match(/\$(\d+)/);
    return acc + (savingsMatch ? parseInt(savingsMatch[1]) : 0);
  }, 0);

  return (
    <section className="section-padding bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-accent/5 to-tertiary/5" />
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 relative z-10"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6"
        >
          <Sparkles className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">Your Personal AI Coach</span>
        </motion.div>
        
        <h2 className="text-4xl font-bold text-gradient-aurora mb-4">Transform Your Life with Presence</h2>
        <p className="text-xl text-muted-foreground/90 max-w-2xl mx-auto">
          Experience personalized coaching and support available 24/7, saving up to ${totalMonthlySavings}+ monthly compared to traditional services
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative"
          >
            <div className="glass rounded-2xl p-8 h-full border border-white/10 backdrop-blur-xl relative overflow-hidden hover:bg-white/5 transition-colors duration-300">
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <feature.icon className="w-12 h-12 mb-6 text-gradient-aurora transform group-hover:scale-110 transition-transform duration-500" />
                
                <h3 className="text-2xl font-semibold mb-3 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent group-hover:text-white transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-lg text-muted-foreground/90 mb-6">
                  {feature.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {feature.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground/90 group-hover:text-muted-foreground transition-colors duration-300">
                      <span className="text-secondary mt-1">•</span>
                      {capability}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-gradient-sunshine">
                    <DollarSign className="w-5 h-5" />
                    <p className="font-semibold">{feature.savings}</p>
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="outline"
                      className="flex-1 bg-white/5 hover:bg-white/10 border-none"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Chat Now
                    </Button>
                    <Button 
                      variant="outline"
                      className="flex-1 bg-white/5 hover:bg-white/10 border-none"
                    >
                      <Video className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesShowcase;