import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Points } from "three";
import "../../materials/ParticlesMaterial";

const PARTICLE_COUNT = 80;

/** Static star field with shader twinkle only — no per-frame CPU position updates. */
export const MobileParticles = () => {
  const positions = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT * 3);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i * 3] = (Math.random() - 0.5) * 20;
      array[i * 3 + 1] = Math.random() * 70 - 60;
      array[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }

    return array;
  }, []);

  const scales = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i] = 2 + Math.random() * 2.5;
    }

    return array;
  }, []);

  const twinklePhases = useMemo(() => {
    const array = new Float32Array(PARTICLE_COUNT);

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      array[i] = Math.random() * Math.PI * 2;
    }

    return array;
  }, []);

  const points = useRef<Points>(null!);
  const material = useRef<
    THREE.ShaderMaterial & { uTime: number }
  >(null!);

  useFrame((state, delta) => {
    material.current.uTime = state.clock.elapsedTime;
    points.current.rotation.y += delta * 0.01;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-aScale" args={[scales, 1]} />
        <bufferAttribute
          attach="attributes-aPhase"
          args={[twinklePhases, 1]}
        />
      </bufferGeometry>

      <particlesMaterial
        ref={material}
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};
