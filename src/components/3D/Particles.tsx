import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import type { Points } from "three";
import "../../materials/ParticlesMaterial";

export const Particles = () => {
  const count = 400;

  const positions = useMemo(() => {
    const array = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      array[i * 3] = (Math.random() - 0.5) * 20; // x
      array[i * 3 + 1] = Math.random() * 50 - 40; // y
      array[i * 3 + 2] = (Math.random() - 0.5) * 12; // z
    }

    return array;
  }, []);

  const scales = useMemo(() => {
  const arr = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    arr[i] = 2 + Math.random() * 3;
  }

  return arr;
}, []);

const twinklePhases = useMemo(() => {
  const arr = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    arr[i] = Math.random() * Math.PI * 2;
  }

  return arr;
}, []);

  // Each particle gets its own floating speed
  const speeds = useMemo(
    () =>
      Array.from({ length: count }, () => 0.03 + Math.random() * 0.08),
    []
  );

  // Each particle gets a unique sway phase
  const phases = useMemo(
    () =>
      Array.from({ length: count }, () => Math.random() * Math.PI * 2),
    []
  );

  // Store original X positions so sway doesn't drift away forever
  const baseX = useMemo(() => {
    const array = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      array[i] = positions[i * 3];
    }

    return array;
  }, [positions]);

  const points = useRef<Points>(null!);
  const geometry = useRef<THREE.BufferGeometry>(null!);
  const material = useRef<any>(null);

  useFrame((state, delta) => {
    const pos = geometry.current.attributes.position.array as Float32Array;
    const time = state.clock.elapsedTime;

    material.current.uTime = state.clock.elapsedTime;

    for (let i = 0; i < count; i++) {
      // Float upward
      pos[i * 3 + 1] += speeds[i] * delta;

      // Gentle horizontal sway
      pos[i * 3] = baseX[i] + Math.sin(time + phases[i]) * 0.12;

      // Respawn at bottom
      if (pos[i * 3 + 1] > 10) {
        pos[i * 3 + 1] = -40;

        // Randomize X/Z when respawning
        baseX[i] = (Math.random() - 0.5) * 20;
        pos[i * 3] = baseX[i];
        pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
      }
    }

    geometry.current.attributes.position.needsUpdate = true;

    // Very slow overall rotation
    points.current.rotation.y += delta * 0.015;
  });

  return (
    <points ref={points}>
      <bufferGeometry ref={geometry}>
  <bufferAttribute
    attach="attributes-position"
    args={[positions, 3]}
  />

  <bufferAttribute
    attach="attributes-aScale"
    args={[scales, 1]}
  />

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