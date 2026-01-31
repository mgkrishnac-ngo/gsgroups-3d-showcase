import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree, extend } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import { EffectComposer, Bloom, ChromaticAberration } from '@react-three/postprocessing';
import { BlendFunction, ChromaticAberrationEffect } from 'postprocessing';
import * as THREE from 'three';
import { motion } from 'framer-motion';

// Neural node component
const NeuralNode = ({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.scale.setScalar(1 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1);
    }
  });

  return (
    <group position={position}>
      {/* Glow sphere */}
      <mesh ref={glowRef}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#667eea" transparent opacity={0.3} />
      </mesh>
      {/* Core node */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.08, 32, 32]} />
        <meshStandardMaterial
          color="#00d4ff"
          emissive="#00d4ff"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

// Connection line between nodes
const ConnectionLine = ({ 
  start, 
  end, 
  delay = 0 
}: { 
  start: [number, number, number]; 
  end: [number, number, number]; 
  delay?: number 
}) => {
  const lineRef = useRef<THREE.Line>(null);
  
  const points = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2 + (Math.random() - 0.5) * 0.5,
        (start[1] + end[1]) / 2 + (Math.random() - 0.5) * 0.5,
        (start[2] + end[2]) / 2 + (Math.random() - 0.5) * 0.5
      ),
      new THREE.Vector3(...end),
    ]);
    return curve.getPoints(20);
  }, [start, end]);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return geo;
  }, [points]);

  useFrame((state) => {
    if (lineRef.current && lineRef.current.material) {
      const material = lineRef.current.material as THREE.LineBasicMaterial;
      material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.2;
    }
  });

  return (
    <primitive object={new THREE.Line(geometry, new THREE.LineBasicMaterial({ color: '#667eea', transparent: true, opacity: 0.5 }))} ref={lineRef} />
  );
};

// Floating particles
const Particles = ({ count = 200 }: { count?: number }) => {
  const particlesRef = useRef<THREE.Points>(null);
  
  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
      
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i * 3] = 0.4; colors[i * 3 + 1] = 0.5; colors[i * 3 + 2] = 0.92; // Purple
      } else if (colorChoice < 0.66) {
        colors[i * 3] = 0; colors[i * 3 + 1] = 0.83; colors[i * 3 + 2] = 1; // Cyan
      } else {
        colors[i * 3] = 1; colors[i * 3 + 1] = 0.42; colors[i * 3 + 2] = 0.42; // Coral
      }
    }
    
    return [positions, colors];
  }, [count]);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
};

// Main AI Sphere
const AISphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Sphere ref={sphereRef} args={[1.5, 64, 64]}>
        <MeshDistortMaterial
          color="#667eea"
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          transparent
          opacity={0.8}
        />
      </Sphere>
      {/* Inner glow */}
      <Sphere args={[1.2, 32, 32]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} />
      </Sphere>
    </Float>
  );
};

// Floating geometric shapes
const FloatingShapes = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Orbiting cubes */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 3;
        return (
          <Float key={i} speed={1 + i * 0.2} rotationIntensity={1} floatIntensity={0.5}>
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 2) * 0.5,
                Math.sin(angle) * radius,
              ]}
            >
              <boxGeometry args={[0.3, 0.3, 0.3]} />
              <meshStandardMaterial
                color={i % 2 === 0 ? '#667eea' : '#00d4ff'}
                emissive={i % 2 === 0 ? '#667eea' : '#00d4ff'}
                emissiveIntensity={0.3}
                metalness={0.9}
                roughness={0.1}
                transparent
                opacity={0.7}
              />
            </mesh>
          </Float>
        );
      })}
      
      {/* Orbiting toruses */}
      {[...Array(4)].map((_, i) => {
        const angle = (i / 4) * Math.PI * 2 + Math.PI / 4;
        const radius = 4;
        return (
          <Float key={`torus-${i}`} speed={0.5 + i * 0.1} rotationIntensity={2} floatIntensity={1}>
            <mesh
              position={[
                Math.cos(angle) * radius,
                Math.sin(angle * 3) * 0.8,
                Math.sin(angle) * radius,
              ]}
              rotation={[Math.PI / 2, 0, angle]}
            >
              <torusGeometry args={[0.2, 0.08, 16, 32]} />
              <meshStandardMaterial
                color="#ff6b6b"
                emissive="#ff6b6b"
                emissiveIntensity={0.3}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
};

// Camera with mouse tracking
const CameraController = () => {
  const { camera } = useThree();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, mouseRef.current.x * 0.5, 0.02);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, -mouseRef.current.y * 0.3, 0.02);
    camera.lookAt(0, 0, 0);
  });

  return null;
};

// Neural Network with nodes and connections
const NeuralNetwork = () => {
  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 20; i++) {
      positions.push([
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
        (Math.random() - 0.5) * 4,
      ]);
    }
    return positions;
  }, []);

  const connections = useMemo(() => {
    const conns: { start: [number, number, number]; end: [number, number, number] }[] = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = Math.sqrt(
          Math.pow(nodes[i][0] - nodes[j][0], 2) +
          Math.pow(nodes[i][1] - nodes[j][1], 2) +
          Math.pow(nodes[i][2] - nodes[j][2], 2)
        );
        if (dist < 2 && Math.random() > 0.5) {
          conns.push({ start: nodes[i], end: nodes[j] });
        }
      }
    }
    return conns;
  }, [nodes]);

  return (
    <group>
      {nodes.map((pos, i) => (
        <NeuralNode key={i} position={pos} delay={i * 0.2} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn.start} end={conn.end} delay={i * 0.1} />
      ))}
    </group>
  );
};

// Main Scene
const Scene = () => {
  return (
    <>
      <color attach="background" args={['#0a0a0f']} />
      <fog attach="fog" args={['#0a0a0f', 5, 20]} />
      
      {/* Lighting */}
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#667eea" />
      <pointLight position={[-5, -5, 5]} intensity={0.5} color="#00d4ff" />
      <pointLight position={[0, 5, -5]} intensity={0.3} color="#ff6b6b" />
      
      {/* Main elements */}
      <AISphere />
      <NeuralNetwork />
      <FloatingShapes />
      <Particles count={300} />
      <Stars radius={50} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
      
      {/* Camera controller */}
      <CameraController />
      
      {/* Post-processing */}
      <EffectComposer>
        <Bloom
          intensity={1.5}
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
        />
      </EffectComposer>
    </>
  );
};

// Exported component
const NeuralNetworkScene = ({ className = '' }: { className?: string }) => {
  return (
    <motion.div 
      className={`w-full h-full ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Scene />
      </Canvas>
    </motion.div>
  );
};

export default NeuralNetworkScene;
