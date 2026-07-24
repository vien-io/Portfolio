import { shaderMaterial } from "@react-three/drei";
import { extend } from "@react-three/fiber";

import vertexShader from "../shaders/atmosphere.vert.glsl";
import fragmentShader from "../shaders/atmosphere.frag.glsl";
import * as THREE from "three";

export const AtmosphereMaterial = shaderMaterial(
  {
    uSunDirection: new THREE.Vector3(1, 0.6, 0.8),
  },
  vertexShader,
  fragmentShader,
);

extend({ AtmosphereMaterial });
