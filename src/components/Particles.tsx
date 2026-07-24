import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import type { Points } from "three";

export const Particles = () => {
  const count = 400;

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 20;
      array[i * 3 + 1] = (Math.random() - 0.5) * 12;
      array[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    return array;
  }, []);

  const points = useRef<Points>(null!);

  useFrame((_, delta) => {
    points.current.rotation.y += delta * 0.02;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>

      <pointsMaterial
        color="#dbeafe"
        size={0.025}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
};
