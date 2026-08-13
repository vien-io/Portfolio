import { useEffect, useState } from "react";

/** Tailwind `md` — phones use the lightweight scene; tablets+ use desktop. */
const MOBILE_SCENE_QUERY = "(max-width: 767px)";

export function useIsMobileScene() {
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia(MOBILE_SCENE_QUERY).matches,
  );

  useEffect(() => {
    const media = window.matchMedia(MOBILE_SCENE_QUERY);
    const onChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return isMobile;
}
