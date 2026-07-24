import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const target = new THREE.Vector3();

export const CameraRig = () => {
  const { camera, pointer } = useThree();

  useFrame(() => {
    target.set(pointer.x * 3.9, pointer.y * 3.9, 8);

    camera.position.lerp(target, 0.05);

    camera.lookAt(0, 0, 0);
  });

  return null;
};
