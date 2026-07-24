import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "../shaders/planet.vert.glsl";
import fragmentShader from "../shaders/planet.frag.glsl";

export const PlanetMaterial = shaderMaterial(
  {
    uTime: 0,
    uSunDirection: [1, 0.6, 0.8],
  },
  vertexShader,
  fragmentShader
);

extend({ PlanetMaterial });