import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "../shaders/clouds.vert.glsl";
import fragmentShader from "../shaders/clouds.frag.glsl";

export const CloudsMaterial = shaderMaterial(
  {
    uTime: 0,
  },
  vertexShader,
  fragmentShader
);

extend({ CloudsMaterial });