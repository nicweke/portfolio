"use client";

import { useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { Mesh } from "three";
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MeshComponent() {
  const fileUrl = "/abandoned/scene.gltf";
  const mesh = useRef<Mesh>(null!);
  const gltf = useLoader(GLTFLoader, fileUrl);

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

export function HomeScene() {
  return (
    <div>
      {/* <Canvas className='h-2xl w-2xl'> */}
      <Canvas
        style={{
          height: 500,
          width: 500,
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          // position: [4, 3, 6]
          position: [0, 5, 15],
        }}
        gl={{ antialias: true }}
      >
        <OrbitControls />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <MeshComponent />
      </Canvas>
    </div>
  );
}
