import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
function Sphere() {
  const meshRef = useRef(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.2 * delta;
      meshRef.current.rotation.y += 0.2 * delta;
      meshRef.current.position.y = Math.sin(Date.now() * 0.001) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
 
      <Canvas
        style={{ width: "100vw", height: "100vh", background: "black" }}
        camera={{ position: [5, 5, 5], fov: 60 }}
      >
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
        />
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} />

        <Sphere />

        <OrbitControls />
      </Canvas>
      
    

  );
}
