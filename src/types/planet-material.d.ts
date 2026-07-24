import { ThreeElement } from "@react-three/fiber";
import { PlanetMaterial } from "../materials/PlanetMaterial";
import { AtmosphereMaterial } from "../materials/AtmosphereMaterial";
import { CloudsMaterial } from "../materials/CloudsMaterial";

declare module "@react-three/fiber" {
  interface ThreeElements {
    planetMaterial: {
      uTime?: number;
    } & React.ComponentProps<"shaderMaterial">;
    atmosphereMaterial: ThreeElement<typeof AtmosphereMaterial>;
    cloudsMaterial: ThreeElement<typeof CloudsMaterial>;
  }
}