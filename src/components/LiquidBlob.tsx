import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export const LiquidBlob = () => {
  const mesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    mesh.current.rotation.y = t * 0.25;

    mesh.current.scale.x = 1 + Math.sin(t * 1.5) * 0.05;
    mesh.current.scale.y = 1 + Math.cos(t * 1.2) * 0.05;
    mesh.current.scale.z = 1 + Math.sin(t * 1.8) * 0.05;
  });

  return (
    <mesh ref={mesh}>
      <icosahedronGeometry args={[2, 5]} />

 <meshPhysicalMaterial
  color="#ffffff"
  metalness={0}
  roughness={0.1}
  iridescence={1}
  iridescenceIOR={1.3}
  iridescenceThicknessRange={[100, 400]}
  clearcoat={1}
/>
    </mesh>
  );
};
