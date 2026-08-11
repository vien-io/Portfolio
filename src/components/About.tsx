export default function About() {
  return (
    <section id="about" className="relative min-h-screen flex items-center">
      <div className="mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
            About
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building reliable systems
            <br />
            and interactive experiences.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-gray-400">
            <p>
              I'm a full-stack developer focused on building reliable software
              that balances strong engineering with thoughtful user experiences.
            </p>

            <p>
              I work primarily with React, Laravel, Node.js, and PostgreSQL,
              with experience designing APIs, relational databases,
              authentication systems, and scalable application architectures.
            </p>

            <p>
              I also enjoy exploring the creative side of development through
              Three.js, React Three Fiber, and GLSL, building interactive 3D
              experiences for the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
