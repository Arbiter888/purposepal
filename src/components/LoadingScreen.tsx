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
      const duration = 3000;
      const startTime = Date.now();
      const particles: { x: number; y: number; z: number; speed: number; size: number; color: p5.Color }[] = [];
      let mandala: { angle: number; radius: number; color: p5.Color }[] = [];
      
      const ease = (progress: number, g: number) => {
        if (progress < 0.5)
          return 0.5 * Math.pow(2 * progress, g);
        else
          return 1 - 0.5 * Math.pow(2 * (1 - progress), g);
      };

      const initParticles = () => {
        for (let i = 0; i < 150; i++) {
          particles.push({
            x: p.random(-p.width, p.width),
            y: p.random(-p.height, p.height),
            z: p.random(0, 1000),
            speed: p.random(1, 3),
            size: p.random(2, 6),
            color: p.color(
              p.random([
                [255, 200, 50],  // Gold
                [147, 39, 143],  // Purple
                [234, 172, 232], // Light Purple
                [255, 255, 200]  // Warm Light
              ])
            )
          });
        }
      };

      const initMandala = () => {
        const totalPoints = 12;
        for (let i = 0; i < totalPoints; i++) {
          mandala.push({
            angle: (p.TWO_PI / totalPoints) * i,
            radius: 150,
            color: p.color(p.random([
              [147, 39, 143, 150],  // Purple
              [234, 172, 232, 150], // Light Purple
              [255, 200, 50, 150],  // Gold
            ]))
          });
        }
      };

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight, p.WEBGL);
        p.noStroke();
        initParticles();
        initMandala();
      };

      p.draw = () => {
        const currentTime = Date.now();
        progress = Math.min((currentTime - startTime) / duration, 1);

        p.clear();
        p.camera(0, -200, (1 - progress) * 500 + 200, 0, 0, 0, 0, 1, 0);
        
        // Cosmic background gradient
        const skyTop = p.lerpColor(
          p.color(20, 20, 40),
          p.color(147, 39, 143), // Deep Purple
          progress
        );
        const skyBottom = p.lerpColor(
          p.color(40, 40, 80),
          p.color(234, 172, 232), // Light Purple
          progress
        );
        
        // Draw cosmic background
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

        // Draw mandala
        p.push();
        p.rotateY(p.frameCount * 0.01);
        p.rotateX(p.sin(p.frameCount * 0.01) * 0.2);
        
        mandala.forEach((point, i) => {
          p.push();
          const pulseRadius = point.radius + p.sin(p.frameCount * 0.05 + i) * 20;
          const x = p.cos(point.angle) * pulseRadius;
          const y = p.sin(point.angle) * pulseRadius;
          p.translate(x, y, 0);
          p.fill(point.color);
          p.sphere(15 * progress);
          
          // Draw connecting lines
          if (i < mandala.length - 1) {
            const nextPoint = mandala[i + 1];
            const nextX = p.cos(nextPoint.angle) * pulseRadius;
            const nextY = p.sin(nextPoint.angle) * pulseRadius;
            p.stroke(255, 255, 255, 50 * progress);
            p.line(0, 0, nextX - x, nextY - y);
          }
          p.pop();
        });
        p.pop();

        // Central orb (representing purpose)
        p.push();
        p.translate(0, 0, 50 * p.sin(p.frameCount * 0.02));
        for (let i = 5; i > 0; i--) {
          const alpha = p.map(i, 5, 0, 50, 255);
          const size = 80 * (1 + i * 0.15) * progress;
          p.fill(255, 200, 50, alpha * progress); // Golden light
          p.sphere(size);
        }
        p.pop();

        // Particles
        particles.forEach((particle) => {
          particle.z -= particle.speed;
          
          if (particle.z < -1000) {
            particle.z = 1000;
            particle.x = p.random(-p.width, p.width);
            particle.y = p.random(-p.height, p.height);
          }
          
          const alpha = p.map(particle.z, 1000, -1000, 50, 255);
          p.push();
          p.translate(particle.x, particle.y, particle.z);
          p.fill(p.red(particle.color), p.green(particle.color), p.blue(particle.color), alpha * progress);
          p.sphere(particle.size);
          p.pop();
        });

        // Inspirational loading text
        p.push();
        p.translate(0, 200, 0);
        p.fill(255);
        p.textSize(24);
        p.textAlign(p.CENTER, p.CENTER);
        const messages = [
          "Discovering Your Purpose",
          "Awakening Your Potential",
          "Embracing Your Journey"
        ];
        const messageIndex = Math.floor((currentTime / 1000) % messages.length);
        const dots = '.'.repeat(Math.floor((currentTime / 500) % 4));
        p.text(`${messages[messageIndex]}${dots}`, 0, 0);
        p.pop();

        if (progress >= 1) {
          setTimeout(() => {
            onLoadingComplete();
            p.remove();
          }, 500);
        }
      };

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight);
      };
    };

    new p5(sketch, containerRef.current);
  }, [onLoadingComplete]);

  return <div ref={containerRef} className="fixed inset-0 z-50" />;
};

export default LoadingScreen;