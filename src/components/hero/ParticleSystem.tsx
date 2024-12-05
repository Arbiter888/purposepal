import { useEffect, useRef } from "react";
import p5 from "p5";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
  size: number;
}

const ParticleSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5>();

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const particles: Particle[] = [];
      const numParticles = 50;
      let mouseX = 0;
      let mouseY = 0;

      // Colors from our theme
      const colors = [
        "#86B6B6", // secondary
        "#E8A8A8", // accent
        "#B8A8E8", // tertiary
        "#A8E8D4", // highlight
      ];

      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent(containerRef.current!);

        // Initialize particles
        for (let i = 0; i < numParticles; i++) {
          particles.push({
            x: p.random(0, p.width),
            y: p.random(0, p.height),
            vx: p.random(-1, 1),
            vy: p.random(-1, 1),
            color: colors[Math.floor(p.random(0, colors.length))],
            size: p.random(4, 8),
          });
        }
      };

      p.draw = () => {
        p.clear();
        mouseX = p.mouseX;
        mouseY = p.mouseY;

        // Update and draw particles
        particles.forEach((particle) => {
          // Add mouse interaction
          const dx = mouseX - particle.x;
          const dy = mouseY - particle.y;
          const distance = p.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            const angle = p.atan2(dy, dx);
            const force = (100 - distance) * 0.01;
            particle.vx -= p.cos(angle) * force;
            particle.vy -= p.sin(angle) * force;
          }

          // Update position
          particle.x += particle.vx;
          particle.y += particle.vy;

          // Add some natural movement
          particle.vx += p.random(-0.1, 0.1);
          particle.vy += p.random(-0.1, 0.1);

          // Dampen velocity
          particle.vx *= 0.99;
          particle.vy *= 0.99;

          // Wrap around edges
          if (particle.x < 0) particle.x = p.width;
          if (particle.x > p.width) particle.x = 0;
          if (particle.y < 0) particle.y = p.height;
          if (particle.y > p.height) particle.y = 0;

          // Parse the hex color to RGB values
          const r = parseInt(particle.color.slice(1, 3), 16);
          const g = parseInt(particle.color.slice(3, 5), 16);
          const b = parseInt(particle.color.slice(5, 7), 16);

          // Draw particle with RGB values and alpha
          p.noStroke();
          p.fill(r, g, b, 64); // Using RGB values and alpha of 64 (25% opacity)
          p.circle(particle.x, particle.y, particle.size);
        });
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    sketchRef.current = new p5(sketch);

    return () => {
      sketchRef.current?.remove();
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10" />;
};

export default ParticleSystem;