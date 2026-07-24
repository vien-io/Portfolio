import { Canvas } from "@react-three/fiber";
import { Lights } from "./Lights";
import { CameraRig } from "./CameraRig";
import { Particles } from "./Particles";
import Planet from "./Planet";
// import { OrbitRing } from "./OrbitRing";
// import { LiquidBlob } from "./LiquidBlob";


export const HeroScene = () => {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{
          position: [20, 20, 20],
          fov: 45,
        }}
      >
        <CameraRig />
        <Lights />
        <Particles />
        <group>
          {/* <LiquidBlob /> */}
          <Planet />
          {/* <OrbitRing
            radius={2.8}
            thickness={0.004}
            color="#8be9fd"
            ringOpacity={0.6}
            spinSpeed={0.2}
            orbitSpeed={0.8}
          />

          <OrbitRing
            radius={3.2}
            thickness={0.006}
            color="#ffffff"
            ringOpacity={0.35}
            spinSpeed={-0.15}
            orbitSpeed={-0.5}
            rotation={[0.7, 0.4, 0]}
            lightColor="#c084fc"
          /> */}
        </group>
      </Canvas>
    </div>
  );
};
