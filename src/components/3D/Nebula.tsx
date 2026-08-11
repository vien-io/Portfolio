import { useMemo } from "react";
import * as THREE from "three";
import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const NebulaMaterial = shaderMaterial(
  {
    uTime: 0,
  },

  // Vertex
  `
    varying vec2 vUv;

    void main() {
      vUv = uv;

      gl_Position =
        projectionMatrix *
        modelViewMatrix *
        vec4(position, 1.0);
    }
  `,

  // Fragment
  `
    varying vec2 vUv;
    uniform float uTime;

    float hash(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);

      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);

      f = f * f * (3.0 - 2.0 * f);

      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));

      return mix(
        mix(a, b, f.x),
        mix(c, d, f.x),
        f.y
      );
    }

    float fbm(vec2 p) {
      float value = 0.0;
      float amplitude = 0.5;

      for (int i = 0; i < 5; i++) {
        value += noise(p) * amplitude;

        p *= 2.0;
        amplitude *= 0.5;
      }

      return value;
    }

    void main() {

      vec2 uv = vUv - 0.5;

      // Stretch horizontally
      uv.x *= 1.6;

      // Large cloud structure
      float cloud = fbm(uv * 2.8);

      // Wispy detail
      float detail = fbm(
        uv * 6.0 +
        cloud * 1.5
      );

      cloud = mix(
        cloud,
        detail,
        0.35
      );

      // Broad elliptical shape
      float shape =
        1.0 -
        smoothstep(
          0.15,
          0.75,
          length(uv)
        );

      // Combine
      float intensity =
        cloud *
        shape;

      // Make visible
      intensity = smoothstep(
        0.38,
        0.72,
        intensity
      );

      intensity *= 0.65;

      // Colors
      vec3 blue = vec3(
        0.05,
        0.18,
        0.55
      );

      vec3 purple = vec3(
        0.38,
        0.08,
        0.50
      );

      float colorMix =
        smoothstep(
          0.35,
          0.75,
          cloud
        );

      vec3 color = mix(
        blue,
        purple,
        colorMix
      );

      gl_FragColor = vec4(
        color,
        intensity
      );
    }
  `
);

extend({ NebulaMaterial });

export default function Nebula() {
  const material = useMemo(() => {
    return new NebulaMaterial();
  }, []);

  return (
    <mesh
      position={[0, -40, -25]}
      scale={[40, 28, 1]}
      renderOrder={-10}
    >
      <planeGeometry args={[2, 2]} />

      <primitive
        object={material}
        transparent
        depthWrite={false}
        depthTest={false}
        side={THREE.DoubleSide}
        blending={THREE.AdditiveBlending}
      />
    </mesh>
  );
}