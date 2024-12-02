import { motion } from "framer-motion";

export const FloatingParticles = () => {
  // Array of gradient combinations using our predefined colors
  const gradients = [
    'linear-gradient(to right, #f59e0b, #f97316, #ef4444)', // Sunshine
    'linear-gradient(to right, #8B5CF6, #D946EF)', // Purple to Pink
    'linear-gradient(to right, #0EA5E9, #33C3F0)', // Ocean Blues
    'linear-gradient(to right, #F2FCE2, #FEF7CD)', // Soft Green to Yellow
    'linear-gradient(to right, #FEC6A1, #FFDEE2)', // Soft Orange to Pink
  ];

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
            background: gradients[i % gradients.length],
            boxShadow: '0 0 10px rgba(245, 158, 11, 0.5)'
          }}
        />
      ))}
    </div>
  );
};