import { useEffect, useRef } from 'react';
import p5 from 'p5';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const sketch = (p: p5) => {
      let progress = 0;
      const duration = 3000; // 3 seconds
      const startTime = Date.now();
      const particles: { x: number; y: number; z: number; speed: number }[] = [];
      
      // Custom easing function
      const ease = (progress: number, g: number) => {
        if (progress < 0.5)
          return 0.5 * Math.pow(2 * progress, g);
        else
          return 1 - 0.5 * Math.pow(2 * (1 - progress), g);
      };

      // Initialize particles
      const initParticles = () => {
        for (let i = 0; i < 100; i++) {
          particles.push({
            x: p.random(-p.width, p.width),
            y: p.random(-p.height, p.height),
            z: p.random(0, 1000),
            speed: p.random(2, 5)
          });
        }
      };

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        p.noStroke();
        initParticles();
      };

      p.draw = () => {
        // Calculate progress
        const currentTime = Date.now();
        progress = Math.min((currentTime - startTime) / duration, 1);

        // Clear and set camera
        p.clear();
        p.camera(0, -200, (1 - progress) * 500, 0, 0, 0, 0, 1, 0);
        
        // Background gradient from dark to light
        const skyTop = p.lerpColor(
          p.color(20, 20, 40),
          p.color(135, 206, 235),
          progress
        );
        const skyBottom = p.lerpColor(
          p.color(40, 40, 80),
          p.color(255, 200, 100),
          progress
        );
        
        // Draw sky gradient
        p.push();
        p.translate(0, 0, -1000);
        p.scale(2000);
        p.beginShape();
        p.fill(skyTop);
        p.vertex(-1, -1);
        p.vertex(1, -1);
        p.fill(skyBottom);
        p.vertex(1, 1);
        p.vertex(-1, 1);
        p.endShape(p.CLOSE);
        p.pop();

        // Draw sun
        p.push();
        p.translate(0, p.lerp(200, -100, ease(progress, 3)));
        
        // Sun glow layers
        for (let i = 5; i > 0; i--) {
          const alpha = p.map(i, 5, 0, 50, 255);
          const size = 100 * (1 + i * 0.2);
          p.fill(255, 200, 50, alpha * progress);
          p.sphere(size);
        }
        
        // Main sun
        p.fill(255, 200, 50);
        p.sphere(100);
        p.pop();

        // Update and draw particles
        particles.forEach((particle, i) => {
          // Move particle
          particle.z -= particle.speed;
          
          // Reset particle if it goes too far
          if (particle.z < -1000) {
            particle.z = 1000;
            particle.x = p.random(-p.width, p.width);
            particle.y = p.random(-p.height, p.height);
          }
          
          // Draw particle
          const pSize = p.map(particle.z, 1000, -1000, 1, 4);
          const alpha = p.map(particle.z, 1000, -1000, 50, 255);
          p.push();
          p.translate(particle.x, particle.y, particle.z);
          p.fill(255, 255, 200, alpha * progress);
          p.sphere(pSize);
          p.pop();
        });

        // Loading text
        p.push();
        p.translate(0, 200, 0);
        p.fill(255);
        p.textSize(24);
        p.textAlign(p.CENTER, p.CENTER);
        const dots = '.'.repeat(Math.floor((currentTime / 500) % 4));
        p.text(`Loading${dots}`, 0, 0);
        p.pop();

        // Complete loading
        if (progress >= 1) {
          setTimeout(() => {
            onLoadingComplete();
            p.remove();
          }, 500);
        }
      };

      // Handle window resize
      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    new p5(sketch, containerRef.current);
  }, [onLoadingComplete]);

  return <div ref={containerRef} className="fixed inset-0 z-50" />;
};

export default LoadingScreen;