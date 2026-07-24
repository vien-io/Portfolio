import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

interface OrbitRingProps {
  radius: number;
  thickness: number;
  color: string;
  ringOpacity: number;

  spinSpeed: number;
  orbitSpeed: number;

  rotation?: [number, number, number];

  lightColor?: string;
  lightSize?: number;
  lightIntensity?: number;
  lightDistance?: number;
}

export const OrbitRing = ({
  radius,
  thickness,
  color,
  ringOpacity,

  spinSpeed,
  orbitSpeed,

  rotation = [0, 0, 0],

  lightColor = color,
  lightSize = 0.03,
  lightIntensity = 5,
  lightDistance = 6,
}: OrbitRingProps) => {
  const spinGroup = useRef<Group>(null!);
  const light = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;

    // spin the whole ring
    spinGroup.current.rotation.z = t * spinSpeed;

    // move the light around the ring
    light.current.position.set(
      Math.cos(t * orbitSpeed) * radius,
      Math.sin(t * orbitSpeed) * radius,
      0,
    );
  });

  return (
    <group rotation={rotation}>
      <group ref={spinGroup}>
        <mesh>
          <torusGeometry args={[radius, thickness, 16, 128]} />

          <meshBasicMaterial color={color} transparent opacity={ringOpacity} />
        </mesh>

        <mesh ref={light}>
          <sphereGeometry args={[lightSize, 24, 24]} />

          <meshBasicMaterial color={lightColor} />

          <pointLight
            color={lightColor}
            intensity={lightIntensity}
            distance={lightDistance}
          />
        </mesh>
      </group>
    </group>
  );
};
