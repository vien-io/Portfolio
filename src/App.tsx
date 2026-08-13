import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import { HeroScene } from "./components/HeroScene";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <main className="relative overflow-x-hidden bg-zinc-950 text-white">
      {/* Fixed 3D background */}
      <div className="fixed inset-0 z-0">
        <HeroScene />
      </div>

      {/* UI */}
      <div className="relative z-10 pointer-events-none">
        <Navbar isHidden={isGalleryOpen} />
        <Hero />
        <Projects onGalleryOpen={setIsGalleryOpen} />
        <Skills />
        <Experience />
        <About />
        <Contact />
      </div>
    </main>
  );
}
