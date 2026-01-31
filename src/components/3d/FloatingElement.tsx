import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';

type ShapeType = 'sphere' | 'box' | 'torus' | 'octahedron' | 'icosahedron';

interface FloatingElementProps {
  shape?: ShapeType;
  color?: string;
  emissiveColor?: string;
  size?: number;
  speed?: number;
  distort?: boolean;
  wobble?: boolean;
}

const Shape = ({ 
  shape = 'sphere', 
  color = '#667eea',
  emissiveColor = '#667eea',
  size = 1,
  distort = false,
  wobble = false
}: FloatingElementProps) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  const getGeometry = () => {
    switch (shape) {
      case 'box':
        return <boxGeometry args={[size, size, size]} />;
      case 'torus':
        return <torusGeometry args={[size * 0.6, size * 0.3, 32, 64]} />;
      case 'octahedron':
        return <octahedronGeometry args={[size * 0.8]} />;
      case 'icosahedron':
        return <icosahedronGeometry args={[size * 0.8]} />;
      default:
        return <sphereGeometry args={[size, 64, 64]} />;
    }
  };

  const getMaterial = () => {
    if (distort) {
      return (
        <MeshDistortMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={0.4}
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      );
    }
    if (wobble) {
      return (
        <MeshWobbleMaterial
          color={color}
          emissive={emissiveColor}
          emissiveIntensity={0.4}
          factor={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      );
    }
    return (
      <meshStandardMaterial
        color={color}
        emissive={emissiveColor}
        emissiveIntensity={0.4}
        roughness={0.2}
        metalness={0.8}
      />
    );
  };

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <mesh ref={meshRef}>
        {getGeometry()}
        {getMaterial()}
      </mesh>
    </Float>
  );
};

const Scene = (props: FloatingElementProps) => {
  return (
    <>
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#667eea" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#00d4ff" />
      
      <Shape {...props} />
      
      <EffectComposer>
        <Bloom intensity={1} luminanceThreshold={0.3} />
      </EffectComposer>
    </>
  );
};

const FloatingElement = ({ 
  className = '', 
  ...props 
}: FloatingElementProps & { className?: string }) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 4], fov: 50 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene {...props} />
      </Canvas>
    </div>
  );
};

export default FloatingElement;
