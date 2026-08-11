import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

const ParticlesMaterial = shaderMaterial(
  {
    uTime: 0,
  },

  // Vertex shader
  `
  attribute float aScale;
  attribute float aPhase;

  varying float vPhase;

  uniform float uTime;

  void main() {
      vPhase = aPhase;

      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);

      float twinkle = 0.8 + 0.2 * sin(uTime * 2.0 + aPhase);

      gl_PointSize = aScale * twinkle * (15.0 / -mvPosition.z);

      gl_Position = projectionMatrix * mvPosition;
  }
  `,

  // Fragment shader
  `
  varying float vPhase;

  uniform float uTime;

  void main() {

      vec2 uv = gl_PointCoord - 0.5;
      float d = length(uv);

      float alpha = smoothstep(0.5, 0.0, d);

      float glow = 0.5 + 0.5 * sin(uTime * 2.0 + vPhase);

      vec3 color = vec3(0.86, 0.93, 1.0);

      gl_FragColor = vec4(color, alpha * glow);
  }
  `
);

extend({ ParticlesMaterial });

declare module "@react-three/fiber" {
  interface ThreeElements {
    particlesMaterial: ThreeElements["shaderMaterial"];
  }
}