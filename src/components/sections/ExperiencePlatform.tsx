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
          Your Personal Transformation Journey
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-6">Experience Personal Growth with Presence</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Discover how Presence's personalized coaching approach helps you achieve your goals through comprehensive support and guidance
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
          <h3 className="text-2xl font-semibold text-gradient-candy mb-4">24/7 Personal Support</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Access your dedicated AI coach anytime, anywhere. Get personalized guidance and support whenever you need it on your journey
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Core Feature</span>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Always Available</span>
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
          <h3 className="text-2xl font-semibold text-gradient-aurora mb-4">Personalized Guidance</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Experience coaching that adapts to your unique needs, goals, and progress, ensuring a truly personalized growth journey
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Premium Feature</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Tailored Support</span>
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
          <h3 className="text-2xl font-semibold text-gradient-rainbow mb-4">Growth Community</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Join a supportive community of like-minded individuals on their personal development journey, sharing experiences and insights
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Elite Feature</span>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <span className="font-semibold">Community Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;