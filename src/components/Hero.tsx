import { BsGithub } from "react-icons/bs";
import { LiaLinkedin } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen overflow-hidden">
      {/* Hero Content */}
      <div className="absolute inset-0 z-10 pointer-events-none flex items-center">
        <div className="mx-auto max-w-[1700px] w-full px-8">
          <div className="grid grid-cols-3 items-center">
            {/* Left - Content */}
            <div className="max-w-xl">
              <p className="text-blue-400 font-medium mb-4">Hello, I'm</p>

              <h1 className="text-6xl md:text-8xl font-black leading-none">
                Vienry
                <br />
                Omania
              </h1>

              <h2 className="mt-6 text-2xl md:text-3xl text-gray-300">
                Backend Developer
              </h2>

              <p className="mt-6 text-gray-400 leading-8">
                I build scalable web applications with Laravel, Node.js, and
                PostgreSQL, while crafting immersive 3D web experiences using
                React Three Fiber and GLSL.
              </p>
            </div>

            {/* Center - Empty (Earth is behind) */}
            <div />

            {/* Right - Buttons */}
            <div className="flex flex-col items-end gap-5">
              {/* Projects */}
              <button
                className="
      group
      pointer-events-auto
      relative
      w-96
      overflow-hidden
      rounded-3xl
      border border-blue-400/20
      bg-black/20
      backdrop-blur-xl
      px-8 py-7
      text-left
      shadow-[0_0_40px_rgba(59,130,246,0.08)]
      transition-all duration-23
      hover:-translate-y-1
      hover:border-blue-400/50
      hover:bg-blue-500/10
    "
              >
                {/* glow */}
                <div
                  className="
        absolute
        inset-0
        bg-blue-400/10
        opacity-0
        blur-2xl
        transition
        duration-23
        group-hover:opacity-100
      "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-blue-400">
                      Portfolio
                    </span>

                    <span className="text-blue-400 transition-transform duration-23 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-3 text-3xl font-bold">View Projects</div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Explore my work and case studies.
                  </p>
                </div>
              </button>

              {/* Contact */}
              <button
                className="
      group
      pointer-events-auto
      relative
      w-96
      overflow-hidden
      rounded-3xl
      border border-white/10
      bg-black/20
      backdrop-blur-xl
      px-8 py-7
      text-left
      transition-all duration-23
      hover:-translate-y-1
      hover:border-white/30
      hover:bg-white/5
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
        duration-23
        group-hover:opacity-100
      "
                />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-[0.35em] text-gray-400">
                      Let's Talk
                    </span>

                    <span className="text-gray-400 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>

                  <div className="mt-3 text-3xl font-bold">Contact Me</div>

                  <p className="mt-3 text-sm leading-6 text-gray-400">
                    Available for freelance and full-time roles.
                  </p>
                </div>
              </button>

              {/* Social Links */}
              <div className="pointer-events-auto mr-7 mt-8 flex items-center justify-end gap-5">
                <a
                  href="https://github.com/vien-io"
                  className="text-gray-400 transition hover:text-white"
                >
                  <BsGithub size={26} />
                </a>

                <a
                  href="https://linkedin.com/in/christopher-vienry-omania-b0380b373"
                  className="text-gray-400 transition hover:text-white"
                >
                  <LiaLinkedin size={29} />
                </a>

                <a
                  href="mailto:vienryomania@gmail.com"
                  className="text-gray-400 transition hover:text-white"
                >
                  <MdEmail size={26} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2 pointer-events-none">
        <div className="flex flex-col items-center gap-2 text-gray-400">
          <span className="text-2xl">↓</span>
          <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        </div>
      </div>
    </section>
  );
}
