import { useEffect, useRef } from "react";
import p5 from "p5";

const ParticleSystem = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<p5>();

  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      const particles: Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        color: p5.Color;
        size: number;
      }> = [];
      const numParticles = 50;

      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight);
        canvas.parent(containerRef.current!);

        // Initialize particles with p5 color objects
        for (let i = 0; i < numParticles; i++) {
          const colors = [
            p.color(134, 182, 182, 100), // secondary
            p.color(232, 168, 168, 100), // accent
            p.color(184, 168, 232, 100), // tertiary
            p.color(168, 232, 212, 100), // highlight
          ];

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

        // Update and draw particles
        particles.forEach((particle) => {
          // Add mouse interaction
          const dx = p.mouseX - particle.x;
          const dy = p.mouseY - particle.y;
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

          // Draw particle
          p.noStroke();
          p.fill(particle.color);
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