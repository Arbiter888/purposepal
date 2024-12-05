import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const LoadingScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced ambient lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    // Create a larger, more dramatic sun
    const sunGeometry = new THREE.SphereGeometry(3, 64, 64);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xffa500,
      transparent: true,
      opacity: 1,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, -6, -15);
    scene.add(sun);

    // Create multiple layers of sun glow for more dramatic effect
    const createGlow = (size: number, color: number, opacity: number) => {
      const glowGeometry = new THREE.SphereGeometry(size, 64, 64);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity,
      });
      return new THREE.Mesh(glowGeometry, glowMaterial);
    };

    const innerGlow = createGlow(3.2, 0xffd700, 0.6);
    const middleGlow = createGlow(3.5, 0xffb74d, 0.4);
    const outerGlow = createGlow(4, 0xff9800, 0.2);
    
    sun.add(innerGlow);
    sun.add(middleGlow);
    sun.add(outerGlow);

    // Create a more detailed horizon with gradient
    const horizonGeometry = new THREE.PlaneGeometry(200, 200);
    const horizonMaterial = new THREE.MeshBasicMaterial({
      color: 0x1a237e,
      side: THREE.DoubleSide,
    });
    const horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizon.rotation.x = Math.PI / 2;
    horizon.position.y = -8;
    horizon.position.z = -50;
    scene.add(horizon);

    // Add volumetric fog for atmospheric effect
    scene.fog = new THREE.FogExp2(0x000000, 0.01);

    // Position camera for better view
    camera.position.z = 20;
    camera.position.y = 2;

    // Animation
    let progress = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      progress += 0.003;
      
      // Animate sun rising with more dramatic movement
      sun.position.y = -6 + (Math.sin(progress) * 12);
      
      // Animate sun glow with pulsing effect
      const glowScale = 1 + Math.sin(progress * 3) * 0.1;
      innerGlow.scale.set(glowScale, glowScale, glowScale);
      middleGlow.scale.set(glowScale * 1.1, glowScale * 1.1, glowScale * 1.1);
      outerGlow.scale.set(glowScale * 1.2, glowScale * 1.2, glowScale * 1.2);

      // Dynamic color transitions based on height
      const heightFactor = (sun.position.y + 6) / 12;
      const sunColor = new THREE.Color(0xff4500).lerp(new THREE.Color(0xffd700), heightFactor);
      sunMaterial.color = sunColor;
      
      // Update glow colors
      const innerColor = new THREE.Color(0xff8c00).lerp(new THREE.Color(0xffd700), heightFactor);
      const middleColor = new THREE.Color(0xff6b00).lerp(new THREE.Color(0xffb74d), heightFactor);
      const outerColor = new THREE.Color(0xff4500).lerp(new THREE.Color(0xff9800), heightFactor);
      
      innerGlow.material.color = innerColor;
      middleGlow.material.color = middleColor;
      outerGlow.material.color = outerColor;

      // Update horizon color based on sun position
      const horizonColor = new THREE.Color(0x1a237e).lerp(new THREE.Color(0x4a148c), heightFactor);
      horizonMaterial.color = horizonColor;

      renderer.render(scene, camera);
    };

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      scene.remove(sun);
      scene.remove(horizon);
      sunGeometry.dispose();
      sunMaterial.dispose();
      horizonGeometry.dispose();
      horizonMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-indigo-900 via-purple-900/50 to-orange-900/30 backdrop-blur-sm z-50"
    >
      <div className="text-white text-2xl font-bold absolute animate-pulse">Loading...</div>
    </div>
  );
};

export default LoadingScene;