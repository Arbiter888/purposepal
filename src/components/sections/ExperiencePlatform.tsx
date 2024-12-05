import { motion } from "framer-motion";
import { MessageSquare, Video, Calendar, Coins, Globe, Users, Bot, Brain, Heart, UserPlus, Sparkles, Target, Rocket } from "lucide-react";

const ExperiencePlatform = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background pointer-events-none" />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
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
          <span className="text-sm font-medium text-secondary">Transform Your Life</span>
        </motion.div>
        
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-6">
          Experience Personal Growth with Presence
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Embark on a transformative journey with personalized guidance and support that adapts to your unique path
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer group"
        >
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-accent via-tertiary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Target className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-candy mb-4">Personalized Goals</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Set and achieve meaningful goals with AI-powered guidance that understands your unique aspirations and challenges
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Core Feature</span>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-secondary" />
              <span className="font-semibold">Smart Planning</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer group"
        >
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-secondary via-highlight to-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Rocket className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-aurora mb-4">Continuous Growth</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Experience dynamic coaching that evolves with you, providing insights and strategies tailored to your progress
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Premium Feature</span>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-accent" />
              <span className="font-semibold">Adaptive Support</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer group"
        >
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-r from-highlight via-accent to-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Users className="w-7 h-7 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-rainbow mb-4">Supportive Community</h3>
          <p className="text-lg text-muted-foreground mb-6">
            Connect with like-minded individuals on similar journeys, sharing experiences and celebrating growth together
          </p>
          <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/10">
            <span className="text-sm text-muted-foreground">Elite Feature</span>
            <div className="flex items-center gap-2">
              <UserPlus className="w-4 h-4 text-highlight" />
              <span className="font-semibold">Community Growth</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;