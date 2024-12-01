import { motion } from "framer-motion";
import { AnimatedBackground } from "../hero/AnimatedBackground";
import { FloatingParticles } from "../hero/FloatingParticles";
import { FeatureBadges } from "../hero/FeatureBadges";

const HeroWithFeatures = () => {
  return (
    <section className="min-h-screen section-padding relative overflow-hidden flex items-center">
      <AnimatedBackground />
      <FloatingParticles />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <span className="text-gradient-rainbow text-sm font-medium">AI-Powered Life Transformation</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="text-2xl md:text-3xl font-medium text-gradient inline-block">
            Welcome to BornPurpose
          </span>
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6 text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-tight"
        >
          Your AI-Powered
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gradient-aurora block mt-2 relative"
          >
            Life Coach
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-xl md:text-2xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed glass p-6 rounded-xl"
        >
          Transform your life with personalized guidance and support from our advanced AI coach.
          Your journey to success starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex items-center justify-center gap-6 flex-wrap"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-medium text-gradient-candy hover:text-gradient-aurora transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-accent/20"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            <span className="relative z-10">Start Your Journey</span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-medium text-gradient-mystic hover:text-gradient-cosmic transition-all duration-300 bg-white/5 hover:bg-white/10 border border-white/10 relative overflow-hidden group"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-tertiary/20 to-highlight/20"
              animate={{
                x: ["0%", "100%"],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: 1.5,
              }}
            />
            <span className="relative z-10">Watch Demo</span>
          </motion.button>
        </motion.div>

        <FeatureBadges />
      </motion.div>
    </section>
  );
};

export default HeroWithFeatures;