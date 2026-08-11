import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const target = new THREE.Vector3();
const lookTarget = new THREE.Vector3();

export const CameraRig = () => {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const scrollProgress =
      window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight);

    const scrollOffset = scrollProgress * 48;

    target.set(
      pointer.x * 3.9,
      pointer.y * 3.9 - scrollOffset,
      8
    );

    lookTarget.set(
      0,
      -scrollOffset,
      0
    );

    camera.position.lerp(target, 0.05);
    camera.lookAt(lookTarget);
  });

  return null;
};