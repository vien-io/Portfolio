import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] overflow-x-hidden md:h-screen md:overflow-hidden"
    >
      
      <div className="absolute inset-0 z-10 flex pointer-events-none items-start pt-28 pb-24 md:items-center md:pt-0 md:pb-0">
        <div className="mx-auto w-full max-w-[1700px] px-5 md:px-8">
          <span className="ml-auto hidden font-mono text-[10px] tracking-[0.25em] text-right text-white/30 md:block">
  01 / 06
</span>
          <div className="flex flex-col gap-10 md:grid md:grid-cols-3 md:items-center md:gap-0">
            <div className="max-w-xl md:max-w-xl">
              <p className="mb-3 text-sm font-medium text-blue-400 md:mb-4">
                Hello, I'm
              </p>

              <h1 className="text-5xl font-black leading-none sm:text-6xl md:text-8xl">
                Vienry
                <br />
                Omania
              </h1>

              <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
                Junior Full-Stack Developer
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                I build web applications, APIs, and data-driven systems with
                React, Laravel, Node.js, and PostgreSQL, with experience in
                authentication, database design, and production-ready systems. I
                also create interactive 3D experiences using Three.js and React
                Three Fiber.
              </p>
            </div>

            <div className="hidden md:block" />

            <div className="flex w-full flex-col gap-4 md:w-auto md:items-end md:gap-5">
              <a
                href="#projects"
                className="
      group
      pointer-events-auto
      relative
      w-full
      overflow-hidden
      rounded-3xl
      border border-blue-400/20
      bg-black/20
      backdrop-blur-xl
      px-6 py-6
      text-left
      shadow-[0_0_40px_rgba(59,130,246,0.08)]
      transition-all duration-200
      hover:-translate-y-1
      hover:border-blue-400/50
      hover:bg-blue-500/10
      md:w-96
      md:px-8
      md:py-7
    "
              >
                <div
                  className="
        absolute
        inset-0
        bg-blue-400/10
        opacity-0
        blur-2xl
        transition
        duration-200
        group-hover:opacity-100
      "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-blue-400">
                      Portfolio
                    </span>

                    <span className="text-blue-400 transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-bold md:text-3xl">
                    View Projects
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Explore my work and case studies.
                  </p>
                </div>
              </a>

              <a
                href="/Vien_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
      group
      pointer-events-auto
      relative
      w-full
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-black/20
      backdrop-blur-xl
      px-6 py-6
      text-left
      transition-all duration-200
      hover:-translate-y-1
      hover:border-white/30
      hover:bg-white/5
      md:w-96
      md:px-8
      md:py-7
    "
              >
                <div
                  className="
        absolute
        inset-0
        bg-white/5
        opacity-0
        blur-2xl
        transition
        duration-200
        group-hover:opacity-100
      "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                      My Resume
                    </span>

                    <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-3 text-2xl font-bold md:text-3xl">
                    View Resume
                  </div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Experience, skills, projects, and education.
                  </p>
                </div>
              </a>

              <div className="pointer-events-auto mt-2 flex items-center gap-5 md:mr-7 md:mt-8 md:justify-end">
                <a
                  href="https://github.com/vien-io"
                  aria-label="GitHub profile"
                  className="text-gray-400 transition hover:text-white"
                >
                  <BsGithub size={26} />
                </a>

                <a
                  href="https://linkedin.com/in/christopher-vienry-omania-b0380b373"
                  aria-label="LinkedIn profile"
                  className="text-gray-400 transition hover:text-white"
                >
                  <LiaLinkedin size={29} />
                </a>

                <a
                  href="mailto:vienryomania@gmail.com"
                  aria-label="Send email"
                  className="text-gray-400 transition hover:text-white"
                >
                  <MdEmail size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-20 -translate-x-1/2 md:bottom-10">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="animate-bounce text-2xl">↓</span>
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
