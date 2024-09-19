import React, { useRef, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

const BallStumpsModel = () => {
  const modelRef = useRef();
  const [scale, setScale] = useState([0.3, 0.3, 0.3]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        // Small screens
        setScale([0.2, 0.2, 0.2]);
      } else if (width >= 640 && width < 1024) {
        // Medium screens
        setScale([0.3, 0.3, 0.3]);
      } else {
        // Large screens
        setScale([0.4, 0.4, 0.4]);
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <OrbitControls enableZoom={false} />
      <mesh ref={modelRef} scale={scale} position={[0, 0, 0]}>
        <primitive object={useGLTF('/models/ball-hitting-stump.glb').scene} />
      </mesh>
    </Canvas>
  );
};

export default BallStumpsModel;
