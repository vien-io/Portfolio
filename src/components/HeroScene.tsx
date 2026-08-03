import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./CameraRig";
import { Particles } from "./Particles";
import Planet from "./Planet";

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
