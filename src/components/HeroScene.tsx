import { useIsMobileScene } from "../hooks/useIsMobileScene";
import { DesktopHeroScene } from "./DesktopHeroScene";
import { MobileHeroScene } from "./MobileHeroScene";

export const HeroScene = () => {
  const isMobile = useIsMobileScene();

  return isMobile ? <MobileHeroScene /> : <DesktopHeroScene />;
};
