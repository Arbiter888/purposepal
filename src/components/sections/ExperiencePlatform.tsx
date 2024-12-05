import { motion } from "framer-motion";
import { MessageSquare, Users, ArrowRight, Bot, Heart, Handshake } from "lucide-react";

const ExperiencePlatform = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 mb-6"
        >
          <Bot className="w-4 h-4 text-secondary" />
          <span className="text-sm font-medium text-secondary">AI Coach Network</span>
        </motion.div>
        
        <h2 className="text-4xl font-bold text-gradient-purple mb-6">
          Your Journey with Specialized AI Coaches
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          After Presence understands your goals, connect with specialized AI coaches who will guide you through specific aspects of your journey
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <MessageSquare className="w-12 h-12 mb-4 text-pink-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Personal Coaching Sessions</h3>
          <p className="text-muted-foreground mb-4">
            Each AI coach specializes in different areas of personal growth, from wellness to finance, providing targeted guidance for your specific needs
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 mr-2" />
            <span>Seamlessly switch between coaches based on your needs</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Heart className="w-12 h-12 mb-4 text-purple-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Personalized Matching</h3>
          <p className="text-muted-foreground mb-4">
            Your interactions with AI coaches help refine your profile, improving the quality of matches with potential partners, friends, and business connections
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 mr-2" />
            <span>AI-powered compatibility analysis</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
        >
          <Handshake className="w-12 h-12 mb-4 text-cyan-500" />
          <h3 className="text-xl font-semibold text-gradient-neon mb-3">Community Integration</h3>
          <p className="text-muted-foreground mb-4">
            Your AI coaches help introduce you to like-minded individuals in our community who share similar goals and values
          </p>
          <div className="flex items-center text-sm text-muted-foreground">
            <ArrowRight className="w-4 h-4 mr-2" />
            <span>Connect with others on similar journeys</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;