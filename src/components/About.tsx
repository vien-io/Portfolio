export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center"
    >
      <div className="mx-auto max-w-[1200px] w-full px-8">
        <div className="max-w-3xl">
          <p className="text-blue-400 text-sm uppercase tracking-[0.3em]">
            About
          </p>

          <h2 className="mt-6 text-5xl md:text-6xl font-bold leading-tight">
            Building reliable systems
            <br />
            with immersive experiences.
          </h2>

          <div className="mt-10 space-y-6 text-lg leading-8 text-gray-400">
            <p>
              I enjoy solving backend problems while building polished user
              experiences. I focus on creating scalable applications that are
              efficient, maintainable, and intuitive.
            </p>

            <p>
              My primary stack includes Laravel, Express, PostgreSQL, Docker,
              and React. I enjoy designing clean architectures, APIs, and
              systems that solve real-world problems.
            </p>

            <p>
              Outside backend development, I explore graphics programming
              through Three.js and GLSL shaders, creating interactive 3D
              experiences for the web.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}