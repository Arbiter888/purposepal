import { motion } from "framer-motion";

export const FloatingParticles = () => {
  return (
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
  );
};