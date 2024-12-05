import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  initialX: number;
  initialY: number;
  size: number;
  color: string;
}

export const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothY = useSpring(mouseY, { damping: 50, stiffness: 400 });

  // Colors that match our theme
  const particleColors = [
    'from-secondary via-accent to-secondary',
    'from-tertiary via-accent to-tertiary',
    'from-highlight via-secondary to-highlight',
    'from-accent via-tertiary to-accent',
    'from-secondary/80 via-highlight to-secondary/80',
  ];

  useEffect(() => {
    // Initialize particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      initialX: Math.random() * window.innerWidth,
      initialY: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      color: particleColors[Math.floor(Math.random() * particleColors.length)],
    }));
    setParticles(newParticles);

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => {
        const motionX = useMotionValue(particle.x);
        const motionY = useMotionValue(particle.y);
        
        return (
          <motion.div
            key={particle.id}
            className={`absolute rounded-full bg-gradient-to-r ${particle.color}`}
            style={{
              width: particle.size,
              height: particle.size,
              x: motionX,
              y: motionY,
              filter: 'blur(1px)',
            }}
            animate={{
              x: [
                particle.initialX,
                particle.initialX + Math.sin(particle.id) * 100,
                particle.initialX,
              ],
              y: [
                particle.initialY,
                particle.initialY + Math.cos(particle.id) * 100,
                particle.initialY,
              ],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: "linear",
            }}
            drag
            dragConstraints={{
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
            }}
            dragElastic={0.2}
            whileHover={{ scale: 1.5 }}
          />
        );
      })}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
};