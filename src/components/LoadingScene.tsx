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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.5);
    scene.add(ambientLight);

    // Create sun
    const sunGeometry = new THREE.SphereGeometry(2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({
      color: 0xff6b6b,
      transparent: true,
      opacity: 0.9,
    });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    sun.position.set(0, -4, -10);
    scene.add(sun);

    // Create sun glow
    const glowGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: 0xff9f43,
      transparent: true,
      opacity: 0.4,
    });
    const sunGlow = new THREE.Mesh(glowGeometry, glowMaterial);
    sun.add(sunGlow);

    // Create horizon plane
    const horizonGeometry = new THREE.PlaneGeometry(100, 100);
    const horizonMaterial = new THREE.MeshBasicMaterial({
      color: 0x2d3436,
      side: THREE.DoubleSide,
    });
    const horizon = new THREE.Mesh(horizonGeometry, horizonMaterial);
    horizon.rotation.x = Math.PI / 2;
    horizon.position.y = -5;
    horizon.position.z = -20;
    scene.add(horizon);

    // Add fog for atmosphere
    scene.fog = new THREE.Fog(0x000000, 1, 50);

    // Position camera
    camera.position.z = 15;
    camera.position.y = 0;

    // Animation
    let progress = 0;
    const animate = () => {
      requestAnimationFrame(animate);

      progress += 0.005;
      
      // Animate sun rising
      sun.position.y = -4 + (Math.sin(progress) * 8);
      
      // Animate sun glow
      const glowScale = 1 + Math.sin(progress * 2) * 0.1;
      sunGlow.scale.set(glowScale, glowScale, glowScale);

      // Change colors based on height
      const heightFactor = (sun.position.y + 4) / 8; // normalized 0-1
      const sunColor = new THREE.Color(0xff6b6b).lerp(new THREE.Color(0xffd93d), heightFactor);
      sunMaterial.color = sunColor;
      
      const glowColor = new THREE.Color(0xff9f43).lerp(new THREE.Color(0xffe8cc), heightFactor);
      glowMaterial.color = glowColor;

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
      glowGeometry.dispose();
      glowMaterial.dispose();
      horizonGeometry.dispose();
      horizonMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-t from-black via-purple-900/50 to-black backdrop-blur-sm z-50"
    >
      <div className="text-white text-2xl font-bold absolute">Loading...</div>
    </div>
  );
};

export default LoadingScene;