import { motion } from "framer-motion";
import { MessageSquare, Video, Calendar, Coins, Globe, Users, Bot, Brain, Heart, UserPlus } from "lucide-react";

const ExperiencePlatform = () => {
  return (
    <section className="section-padding">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-sm uppercase tracking-wider text-secondary mb-4 inline-block"
        >
          Your AI Avatar Coach Features
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-6">Transform Your Life with AI Guidance</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Your personal AI Avatar Coach combines advanced technology with human-like understanding to provide comprehensive support across all aspects of your life
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-accent via-tertiary to-secondary flex items-center justify-center mb-6">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-candy mb-4">24/7 AI Support</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Your AI Avatar Coach is always available to provide instant guidance, support, and personalized coaching for your journey
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Core Feature</span>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Advanced AI</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-secondary via-highlight to-tertiary flex items-center justify-center mb-6">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-aurora mb-4">Expert Connections</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Your AI Coach introduces you to BornPurpose Expert Friends for specialized guidance when needed
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Premium Feature</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Human Touch</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-highlight via-accent to-tertiary flex items-center justify-center mb-6">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-rainbow mb-4">Community Matching</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with like-minded members on similar transformation journeys for mutual support and accountability
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Elite Feature</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Real Connections</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;