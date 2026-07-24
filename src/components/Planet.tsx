import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";
import "../materials/AtmosphereMaterial";
import "../materials/PlanetMaterial";
import "../materials/CloudsMaterial";

export default function Planet() {
  const mesh = useRef<Mesh>(null!);
  const cloudMesh = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    mesh.current.rotation.y = clock.elapsedTime * 0.1;
    cloudMesh.current.rotation.y = clock.elapsedTime * 0.12;

    (mesh.current.material as any).uTime = clock.elapsedTime;
  (cloudMesh.current.material as any).uTime = clock.elapsedTime;
  });

  return (
<>
    {/* Planet */}
    <mesh ref={mesh}>
        <sphereGeometry args={[2, 128, 128]} />
        <planetMaterial />
    </mesh>

    {/* Clouds */}
    <mesh ref={cloudMesh} scale={1.01}>
        <sphereGeometry args={[2, 128, 128]} />
        <cloudsMaterial
            transparent
            depthWrite={false}
        />
    </mesh>

    {/* Atmosphere */}
    <mesh scale={1.04}>
        <sphereGeometry args={[2, 128, 128]} />
        <atmosphereMaterial
            transparent
            side={THREE.BackSide}
            depthWrite={false}
        />
    </mesh>
</>
  );
}
