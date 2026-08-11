import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const STAR_COUNT = 6;

type ShootingStar = {
  position: THREE.Vector3;
  velocity: THREE.Vector3;
  life: number;
  maxLife: number;
  length: number;
  active: boolean;
};

const vertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;

    gl_Position =
      projectionMatrix *
      modelViewMatrix *
      vec4(position, 1.0);
  }
`;

const fragmentShader = `
  varying vec2 vUv;

  void main() {
    float head = smoothstep(1.0, 0.65, vUv.x);
    float tail = smoothstep(0.0, 0.45, vUv.x);

    float alpha = head * tail;

    float edgeFade =
      1.0 - abs(vUv.y - 0.5) * 2.0;

    edgeFade = smoothstep(0.0, 1.0, edgeFade);

    alpha *= edgeFade;

    float glow = smoothstep(0.85, 1.0, vUv.x);

    vec3 color = mix(
      vec3(0.35, 0.55, 1.0),
      vec3(1.0),
      glow
    );

    gl_FragColor = vec4(color, alpha);
  }
`;

export const ShootingStars = () => {
  const groupRef = useRef<THREE.Group>(null);

  // Only one star is allowed to appear at a time
  const activeStar = useRef(0);

  // Time until the next shooting star
  const spawnTimer = useRef(THREE.MathUtils.randFloat(3, 8));

  const stars = useMemo<ShootingStar[]>(() => {
    return Array.from({ length: STAR_COUNT }, () => ({
      position: new THREE.Vector3(0, -100, 0),
      velocity: new THREE.Vector3(),
      life: 0,
      maxLife: 0,
      length: 0,
      active: false,
    }));
  }, []);

  useFrame((_, delta) => {
    if (!groupRef.current) return;

    // --------------------------------
    // Wait before spawning
    // --------------------------------

    spawnTimer.current -= delta;

    if (spawnTimer.current <= 0) {
      const star = stars[activeStar.current];

      spawnStar(star);
      star.active = true;

      activeStar.current = (activeStar.current + 1) % STAR_COUNT;

      // Next shooting star appears after 4–10 seconds
      spawnTimer.current = THREE.MathUtils.randFloat(2, 4);
    }

    // --------------------------------
    // Update stars
    // --------------------------------

    stars.forEach((star, index) => {
      const mesh = groupRef.current!.children[index] as THREE.Mesh;

      if (!star.active) {
        mesh.visible = false;
        return;
      }

      mesh.visible = true;

      star.position.addScaledVector(star.velocity, delta);

      star.life -= delta;

      // --------------------------------
      // Remove when finished
      // --------------------------------

      if (star.life <= 0) {
        star.active = false;
        mesh.visible = false;
        return;
      }

      mesh.position.copy(star.position);

      // Point trail in movement direction
      const angle = Math.atan2(star.velocity.y, star.velocity.x);

      mesh.rotation.z = angle;

      // Fade in/out
      const progress = 1 - star.life / star.maxLife;

      const fade = Math.sin(progress * Math.PI);

      mesh.scale.set(star.length * fade, fade, 1);
    });
  });

  return (
    <group ref={groupRef}>
      {stars.map((_, index) => (
        <mesh key={index} visible={false}>
          <planeGeometry args={[1, 0.025]} />

          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            transparent
            depthWrite={false}
            blending={THREE.AdditiveBlending}
          />
        </mesh>
      ))}
    </group>
  );
};

function spawnStar(star: ShootingStar) {
  star.position.set(
    THREE.MathUtils.randFloat(5, 14),
    THREE.MathUtils.randFloat(-23, -10),
    THREE.MathUtils.randFloat(-4, 2),
  );

  star.velocity.set(
    -THREE.MathUtils.randFloat(8, 14),
    -THREE.MathUtils.randFloat(2, 5),
    0,
  );

  star.maxLife = THREE.MathUtils.randFloat(1.2, 2.2);

  star.life = star.maxLife;

  star.length = THREE.MathUtils.randFloat(1.5, 3.5);
}
