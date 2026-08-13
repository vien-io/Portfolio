import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";
import * as THREE from "three";
import "../../materials/AtmosphereMaterial";
import "../../materials/PlanetMaterial";
import "../../materials/CloudsMaterial";

/** Same procedural planet as desktop, with lower sphere segment count for mobile GPUs. */
export default function MobilePlanet() {
  const mesh = useRef<Mesh>(null!);
  const cloudMesh = useRef<Mesh>(null!);
  const group = useRef<Group>(null!);

  useFrame(({ clock }) => {
    group.current.rotation.y = clock.elapsedTime * 0.1;

    (mesh.current.material as THREE.ShaderMaterial & { uTime: number }).uTime =
      clock.elapsedTime;
    (
      cloudMesh.current.material as THREE.ShaderMaterial & { uTime: number }
    ).uTime = clock.elapsedTime;
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <mesh ref={mesh} rotation={[0, Math.PI / 2, 0]}>
        <sphereGeometry args={[2, 64, 64]} />
        <planetMaterial />
      </mesh>

      <mesh ref={cloudMesh} scale={1.01}>
        <sphereGeometry args={[2, 64, 64]} />
        <cloudsMaterial
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      <mesh scale={1.04}>
        <sphereGeometry args={[2, 64, 64]} />
        <atmosphereMaterial
          transparent
          side={THREE.BackSide}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
