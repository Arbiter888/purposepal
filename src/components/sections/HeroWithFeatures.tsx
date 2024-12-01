import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Stars, Zap } from "lucide-react";

const HeroWithFeatures = () => {
  return (
    <section className="min-h-screen section-padding relative overflow-hidden flex items-center">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-secondary/20 via-accent/20 to-tertiary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-highlight/20 via-tertiary/20 to-accent/20 rounded-full blur-3xl"
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: [-10, -500],
              x: Math.sin(i) * 50,
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: '100%',
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center relative z-10"
      >
        {/* Enhanced badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
        >
          <Zap className="w-4 h-4 text-yellow-400" />
          <span className="text-gradient-rainbow text-sm font-medium">AI-Powered Life Transformation</span>
          <Zap className="w-4 h-4 text-yellow-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
          <span className="text-2xl md:text-3xl font-medium text-gradient inline-block">
            Welcome to BornPurpose
          </span>
          <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
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
            <Stars className="absolute -top-8 -right-8 w-12 h-12 text-yellow-400 animate-spin-slow" />
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
            className="glass px-8 py-4 rounded-full font-medium hover-lift flex items-center gap-2 group text-lg relative overflow-hidden"
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
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="ml-2 inline-block h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.span>
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-colors text-lg relative overflow-hidden"
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

        {/* Enhanced floating features */}
        <div className="mt-20 flex justify-center gap-8 flex-wrap">
          {[
            { icon: "🎯", text: "Smart Goal Setting" },
            { icon: "🧠", text: "AI-Powered Insights" },
            { icon: "💪", text: "Personal Growth" },
            { icon: "🌟", text: "Daily Motivation" }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              className="glass px-6 py-3 rounded-full text-base animate-float flex items-center gap-2"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <span className="text-2xl">{feature.icon}</span>
              <span>{feature.text}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HeroWithFeatures;