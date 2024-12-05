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
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create loading ring
    const torusGeometry = new THREE.TorusGeometry(2, 0.5, 16, 50);
    const torusMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x86B6B6,
      transparent: true,
      opacity: 0.8,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    scene.add(torus);

    // Inner ring
    const innerTorus = new THREE.Mesh(
      new THREE.TorusGeometry(1.5, 0.3, 16, 50),
      new THREE.MeshPhongMaterial({ 
        color: 0xE8A8A8,
        transparent: true,
        opacity: 0.8,
      })
    );
    innerTorus.rotation.x = Math.PI / 4;
    scene.add(innerTorus);

    // Position camera
    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      innerTorus.rotation.x += 0.02;
      innerTorus.rotation.y += 0.02;

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
      scene.remove(torus);
      scene.remove(innerTorus);
      torusGeometry.dispose();
      torusMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50"
    >
      <div className="text-white text-2xl font-bold absolute">Loading...</div>
    </div>
  );
};

export default LoadingScene;