"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, MeshDistortMaterial, Sphere, Environment } from "@react-three/drei"
import { useRef } from "react"
import type * as THREE from "three"

function AnimatedSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={meshRef} args={[1, 64, 64]} scale={2.5}>
        <MeshDistortMaterial
          color="#6366f1"
          attach="material"
          distort={0.5}
          speed={2.5}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  )
}

export default function Scene3D() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.5} color="#a78bfa" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#6366f1" />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#8b5cf6" />
      <Environment preset="city" />
      <AnimatedSphere />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  )
}
