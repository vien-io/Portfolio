import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./3D/CameraRig";
import { Particles } from "./3D/Particles";
import Planet from "./3D/Planet";

export const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        /* camera={{
          position: [20, 20, 20],
          fov: 45,
        }} */
      >
        <CameraRig />
        <Particles />
        <Planet />
      </Canvas>
    </div>
  );
};
