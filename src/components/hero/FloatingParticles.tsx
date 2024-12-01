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
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: '100%',
            background: `linear-gradient(to right, #f59e0b, #f97316, #ef4444)`, // Sunshine colors
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)' // Adds a subtle glow effect
          }}
        />
      ))}
    </div>
  );
};