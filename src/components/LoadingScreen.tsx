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

      p.setup = () => {
        p.createCanvas(window.innerWidth, window.innerHeight);
        p.noStroke();
      };

      p.draw = () => {
        // Calculate progress
        const currentTime = Date.now();
        progress = Math.min((currentTime - startTime) / duration, 1);

        // Background gradient from dark to light blue
        const skyGradient = p.lerpColor(
          p.color(20, 20, 40),
          p.color(135, 206, 235),
          progress
        );
        p.background(skyGradient);

        // Draw sun
        const sunRadius = p.lerp(0, p.width * 0.15, progress);
        const sunY = p.lerp(
          p.height * 0.8,
          p.height * 0.4,
          p.ease(progress, 3)
        );

        // Sun glow
        for (let i = 5; i > 0; i--) {
          const alpha = p.map(i, 5, 0, 50, 255);
          const size = sunRadius * (1 + i * 0.2);
          p.fill(255, 200, 50, alpha * progress);
          p.circle(p.width * 0.5, sunY, size);
        }

        // Main sun
        p.fill(255, 200, 50);
        p.circle(p.width * 0.5, sunY, sunRadius);

        // Ground
        p.fill(50, 100, 50);
        p.rect(0, p.height * 0.8, p.width, p.height * 0.2);

        // Loading text
        p.fill(255);
        p.textSize(24);
        p.textAlign(p.CENTER, p.CENTER);
        const dots = '.'.repeat(Math.floor((currentTime / 500) % 4));
        p.text(`Loading${dots}`, p.width * 0.5, p.height * 0.9);

        // Complete loading
        if (progress >= 1) {
          setTimeout(() => {
            onLoadingComplete();
            p.remove();
          }, 500);
        }
      };

      // Custom easing function
      p.ease = (p: number, g: number) => {
        if (p < 0.5)
          return 0.5 * Math.pow(2 * p, g);
        else
          return 1 - 0.5 * Math.pow(2 * (1 - p), g);
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