import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";
import * as THREE from "three";

const FloatingBubble: React.FC<{ position: THREE.Vector3 }> = ({
  position,
}) => {
  const ref = useRef<THREE.Mesh>(null);
  const angularVelocity = useRef(
    new THREE.Vector3(Math.random(), Math.random(), Math.random())
  );

  useFrame(() => {
    if (ref.current) {
      // Animate the bubble's position to float around
      ref.current.position.x += Math.sin(ref.current.position.y) * 0.01;
      ref.current.position.y += Math.cos(ref.current.position.x) * 0.01;
      ref.current.position.z += Math.sin(ref.current.position.y) * 0.01;

      // Add angular momentum
      ref.current.rotation.x += angularVelocity.current.x * 0.05;
      ref.current.rotation.y += angularVelocity.current.y * 0.05;
      ref.current.rotation.z += angularVelocity.current.z * 0.05;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[0.5, 32, 32]} />

      <meshStandardMaterial
        color="#60a5fa"
        transparent
        opacity={2}
        roughness={0}
      />
    </mesh>
  );
};

const ThreeDScene: React.FC = () => {
  const bubbles = [
    new THREE.Vector3(-5, 2, 0),
    new THREE.Vector3(4, -3, 0),
    new THREE.Vector3(-3, -2, 0),
    new THREE.Vector3(2, 3, 0),
    new THREE.Vector3(0, 0, 5),
    new THREE.Vector3(-2, 4, -2),
    new THREE.Vector3(3, -1, 4),
  ];
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      camera={{ position: [0, 0, 5], fov: 75 }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 5, 2]} intensity={1} />

      {bubbles.map((pos, i) => (
        <FloatingBubble key={i} position={pos} />
      ))}
    </Canvas>
  );
};

export default ThreeDScene;
