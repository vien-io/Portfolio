import About from "./components/About";
import Hero from "./components/Hero";
import { HeroScene } from "./components/HeroScene";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="relative bg-zinc-950 text-white">
      {/* Fixed 3D background */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* UI */}
      <div className="relative z-10 pointer-events-none">
        <Navbar />
        <Hero />
        <About />
      </div>
    </main>
  );
}
