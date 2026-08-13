import { Canvas } from "@react-three/fiber";
import { MobileCameraRig } from "./3D/MobileCameraRig";
import { MobileParticles } from "./3D/MobileParticles";
import MobilePlanet from "./3D/MobilePlanet";
import Nebula from "./3D/Nebula";

export const MobileHeroScene = () => {
  return (
    <div className="absolute inset-0">
       {/* DEBUG */}
      <div className="absolute top-20 left-4 z-50 rounded bg-red-500 px-3 py-1 text-sm font-bold text-white">
        MOBILE SCENE
      </div>
      <Canvas dpr={[1, 1.5]} gl={{ antialias: true, powerPreference: "low-power" }}>
        <MobileCameraRig />

        <ambientLight intensity={0.08} />
        <directionalLight position={[5, 3, 8]} intensity={1.5} />

        <Nebula />
        <MobileParticles />
        <MobilePlanet />
      </Canvas>
    </div>
  );
};
