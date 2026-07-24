import { HeroScene } from "./HeroScene";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* three js bg */}
      <HeroScene />

      {/* hero content */}
      <div className="relative z-10 flex h-full items-center pointer-events-none">
        {/* left text */}
        {/* right portrait */}
      </div>
    </section>
  );
}
