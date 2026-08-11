import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";
import "../../materials/AtmosphereMaterial";
import "../../materials/PlanetMaterial";
import "../../materials/CloudsMaterial";
import type { Group } from "three";

export default function Planet() {
  const mesh = useRef<Mesh>(null!);
  const cloudMesh = useRef<Mesh>(null!);
  const group = useRef<Group>(null!);

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.1;

    (mesh.current.material as any).uTime = clock.elapsedTime;
    (cloudMesh.current.material as any).uTime = clock.elapsedTime;
  });

  return (
    <>
      <group ref={group} position={[0, 0, 0]}>
        {/* Planet */}
        <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]}>
          <sphereGeometry args={[2, 128, 128]} />
          <planetMaterial />
        </mesh>

        {/* Clouds */}
        <mesh ref={cloudMesh} scale={1.01}>
          <sphereGeometry args={[2, 128, 128]} />
          <cloudsMaterial
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
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
      </group>
    </>
  );
}
