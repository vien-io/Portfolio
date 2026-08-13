import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const target = new THREE.Vector3();
const lookTarget = new THREE.Vector3();

/** Scroll-linked camera with reduced parallax for smoother mobile scrolling. */
export const MobileCameraRig = () => {
  const { camera, pointer } = useThree();

  useFrame(() => {
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = scrollHeight > 0 ? window.scrollY / scrollHeight : 0;
    const scrollOffset = scrollProgress * 48;

    target.set(pointer.x * 1.2, pointer.y * 1.2 - scrollOffset, 8);

    lookTarget.set(0, -scrollOffset, 0);

    camera.position.lerp(target, 0.05);
    camera.lookAt(lookTarget);
  });

  return null;
};
