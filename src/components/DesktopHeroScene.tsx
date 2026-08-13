import { Canvas } from "@react-three/fiber";
import { CameraRig } from "./3D/CameraRig";
import { Particles } from "./3D/Particles";
import Planet from "./3D/Planet";
import { ShootingStars } from "./3D/ShootingStars";
import Nebula from "./3D/Nebula";
import { FloatingRocks } from "./3D/FloatingRocks";
import Spaceship from "./3D/Spaceship";

export const DesktopHeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas>
        <CameraRig />

        <ambientLight intensity={0.08} />
        <directionalLight position={[5, 3, 8]} intensity={1.5} />

        <Nebula />
        <Particles />
        <Planet />
        <ShootingStars />
        <FloatingRocks />
        <Spaceship />
      </Canvas>
    </div>
  );
};
