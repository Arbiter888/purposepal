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
          Meet Presence's AI Avatar Coach Friends
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-6">Experience Presence's Circle of Support</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Presence has carefully chosen these AI Avatar Coaches as trusted friends to provide comprehensive support across all aspects of your life journey
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
          <h3 className="text-2xl font-semibold text-gradient-candy mb-4">Presence's AI Support Network</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Each AI Avatar Coach is a trusted friend of Presence, carefully selected to provide personalized guidance and support on your transformational journey
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Core Feature</span>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Presence's Friends</span>
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
          <h3 className="text-2xl font-semibold text-gradient-aurora mb-4">Trusted by Presence</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Each AI Coach has been personally vetted by Presence to ensure they align with our values and commitment to your growth and well-being
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Premium Feature</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Presence's Network</span>
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
          <h3 className="text-2xl font-semibold text-gradient-rainbow mb-4">Community of Friends</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join a supportive community of individuals connected through Presence's network of trusted AI Coaches, sharing similar transformation journeys
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Elite Feature</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Presence's Community</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;