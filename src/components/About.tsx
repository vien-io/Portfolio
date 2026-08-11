import Typewriter from "./Typewriter";

const profileData = [
  {
    label: "ROLE",
    value: "FULL-STACK DEVELOPER",
  },
  {
    label: "FOCUS",
    value: "SYSTEMS & EXPERIENCES",
  },
  {
    label: "BASED",
    value: "PHILIPPINES",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen px-8 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Top metadata */}
        <div className="mb-20 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
            About
          </p>

          <p className="font-mono text-[10px] tracking-[0.25em] text-white/20">
            01 / 03
          </p>
        </div>

        {/* Main */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1.25fr_0.75fr] lg:gap-24">
          {/* Left */}
          <div>
            <h2
              className="
    min-h-[4.5em]
    max-w-3xl
    text-5xl font-bold leading-[1.05] tracking-tight text-white
    md:text-6xl
    lg:text-7xl
  "
            >
              <Typewriter
                text={"Building reliable systems\nand interactive experiences."}
                speed={40}
                deleteSpeed={20}
                delay={700}
                pause={2500}
              />
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-blue-400/60" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Systems / Interfaces / 3D
              </span>
            </div>

            {/* Profile */}
            <div className="mt-16 max-w-xl border-t border-white/20">
              {profileData.map((item) => (
                <div
                  key={item.label}
                  className="group flex items-center justify-between border-b border-white/20 py-4"
                >
                  <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">
                    {item.label}
                  </span>

                  <span className="text-xs tracking-[0.15em] text-white/70 transition-colors duration-300 group-hover:text-blue-400 pointer-events-auto">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="flex flex-col justify-start">
            {/* Description */}
            <div className="text-base space-y-6 leading-7 text-white/65">
              <p>
                I'm a full-stack developer who enjoys turning complex problems
                into simple, dependable software. I care about how things work
                under the hood just as much as how they feel to use.
              </p>
              <p>
                I primarily work with React, Laravel, Node.js, and PostgreSQL,
                building APIs, relational databases, authentication systems, and
                full-stack applications with a focus on maintainability and
                clear architecture.
              </p>
              <p>
                Outside of traditional application development, I explore the
                creative side of the web through Three.js, React Three Fiber,
                and GLSL — experimenting with interactive 3D experiences and
                visual interfaces.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom capabilities */}
        <div className="mt-24 grid grid-cols-1 border-t border-white/10 md:grid-cols-2  pointer-events-auto">
          <div className="group border-b border-white/10 py-8 md:border-b-0 md:border-r md:pr-12">
            <div className="flex items-start justify-between">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45 pointer-events-auto">
                Engineering
              </p>

              <span className="text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 pointer-events-auto">
                ↗
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              React · Laravel · Node · PostgreSQL
            </p>
          </div>

          <div className="group py-8 md:pl-12">
            <div className="flex items-start justify-between">
              <p className="text-xs uppercase tracking-[0.25em] text-white/45">
                Exploration
              </p>

              <span className="text-blue-400 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                ↗
              </span>
            </div>

            <p className="mt-4 text-sm text-white/60">
              Three.js · R3F · GLSL · Blender
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
