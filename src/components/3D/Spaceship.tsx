import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

const MODEL_PATH = "/models/spaceship-optimized.glb";

const Spaceship = () => {
  const groupRef = useRef<THREE.Group>(null);

  const { scene } = useGLTF(MODEL_PATH);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;

    const time = clock.getElapsedTime();

    groupRef.current.position.y = -33 + Math.sin(time * 0.7) * 0.08;

    groupRef.current.rotation.z = Math.sin(time * 0.5) * 0.025;

    groupRef.current.rotation.y += 0.0008;
  });

  return (
    <group
      ref={groupRef}
      position={[5, -33, 3]}
      rotation={[4, Math.PI, 0]}
      scale={0.8}
    >
      <primitive object={scene} />
    </group>
  );
};

useGLTF.preload(MODEL_PATH);

export default Spaceship;
