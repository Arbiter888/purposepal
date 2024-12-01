import { motion } from "framer-motion";
import { MessageSquare, Video, Calendar } from "lucide-react";

const ExperiencePlatform = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent pointer-events-none" />
      
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
          Platform Features
        </motion.span>
        <h2 className="text-4xl md:text-5xl font-bold text-gradient-purple mb-6">Experience Our Platform</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          See how our AI-powered platform can transform your journey to wellness and personal growth
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
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-accent via-tertiary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-candy mb-4">AI Chat Support</h3>
          <p className="text-lg text-muted-foreground">
            24/7 intelligent chat support to guide you through your wellness journey
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-secondary via-highlight to-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Video className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-aurora mb-4">Video Sessions</h3>
          <p className="text-lg text-muted-foreground">
            High-quality video consultations with wellness experts and coaches
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="glass rounded-3xl p-8 hover:bg-white/10 transition-all cursor-pointer border border-white/5 hover:border-white/20"
        >
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-r from-highlight via-accent to-tertiary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl font-semibold text-gradient-rainbow mb-4">Smart Scheduling</h3>
          <p className="text-lg text-muted-foreground">
            AI-powered scheduling to help you maintain your wellness routine
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperiencePlatform;