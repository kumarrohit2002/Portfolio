"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function FloatingObjects() {
  const sphere1 = useRef<THREE.Mesh>(null);
  const sphere2 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (sphere1.current) {
      sphere1.current.position.y = Math.sin(t / 1.5) / 2;
      sphere1.current.rotation.x = t / 4;
    }
    if (sphere2.current) {
      sphere2.current.position.y = Math.cos(t / 2) / 2;
      sphere2.current.rotation.z = t / 3;
    }
  });

  return (
    <>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere ref={sphere1} args={[1, 100, 100]} position={[2, 0, 0]}>
          <MeshDistortMaterial
            color="#5454D4"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0}
            metalness={1}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={2} floatIntensity={1}>
        <Sphere ref={sphere2} args={[0.6, 100, 100]} position={[-3, 1, -2]}>
          <MeshWobbleMaterial
            color="#C1C1FF"
            factor={0.5}
            speed={2}
          />
        </Sphere>
      </Float>
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} color="#5454D4" intensity={2} />
        <FloatingObjects />
      </Canvas>
    </div>
  );
}
