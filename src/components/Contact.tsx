import { ArrowUpRight, Download, Mail } from "lucide-react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const links = [
  {
    label: "Email",
    description: "vienryomania@gmail.com",
    href: "mailto:vienryomania@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    description: "vien-io",
    href: "https://github.com/vien-io",
    icon: BsGithub,
  },
  {
    label: "LinkedIn",
    description: "Christopher Vienry Omania",
    href: "https://linkedin.com/in/christopher-vienry-omania-b0380b373",
    icon: BsLinkedin,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative z-10 px-6 py-40 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-24 flex items-center justify-between">
          <p className="text-xs uppercase tracking-[0.35em] text-blue-400">
            Get in touch
          </p>

          <p className="font-mono text-[10px] tracking-[0.25em] text-white/35">
            06 / 06
          </p>
        </div>

        {/* Hero */}
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-[1fr_0.4fr] lg:gap-24">
          {/* Heading */}
          <div>
            <h2 className="max-w-5xl text-5xl font-bold leading-[0.95] tracking-tight text-white md:text-7xl lg:text-8xl">
              Let's build
              <br />
              something{" "}
              <span className="text-blue-400">together.</span>
            </h2>

            <div className="mt-12 flex items-center gap-4">
              <div className="h-px w-16 bg-blue-400" />

              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Availability */}
          <div className="self-end">
            <div className="border-t border-white/15 pt-5">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-50" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-blue-400" />
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/75">
                  Available for work
                </span>
              </div>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                Interested in building reliable systems, thoughtful
                interfaces, and interactive experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Links */}
        <div className="mt-28 border-t border-white/15">
          {links.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group relative flex items-center justify-between overflow-hidden border-b border-white/15 py-7 transition-colors duration-500 pointer-events-auto"
              >
                {/* Hover background */}
                <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-blue-400/[0.05] transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex min-w-0 items-center gap-5">
                  <Icon
                    size={18}
                    strokeWidth={1.8}
                    className="shrink-0 text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
                  />

                  <div className="flex min-w-0 flex-col gap-1 sm:flex-row sm:items-center sm:gap-4">
                    <span className="text-lg font-medium text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                      {link.label}
                    </span>

                    <span className="truncate text-sm text-white/35 transition-colors duration-300 group-hover:text-white/55">
                      {link.description}
                    </span>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                  className="ml-6 shrink-0 text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
                />
              </a>
            );
          })}

          {/* Resume */}
          <a
            href="/Vien_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between overflow-hidden border-b border-white/15 py-7 transition-colors duration-500 pointer-events-auto"
          >
            {/* Hover background */}
            <span className="absolute inset-0 -z-10 origin-left scale-x-0 bg-blue-400/[0.05] transition-transform duration-500 group-hover:scale-x-100" />

            <div className="flex items-center gap-5">
              <Download
                size={18}
                strokeWidth={1.8}
                className="text-white/50 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400"
              />

              <div className="flex items-center gap-4">
                <span className="text-lg font-medium text-white/80 transition-all duration-300 group-hover:translate-x-1 group-hover:text-white">
                  Resume
                </span>

                <span className="hidden text-sm text-white/35 sm:inline">
                  Download CV
                </span>
              </div>
            </div>

            <ArrowUpRight
              size={20}
              strokeWidth={1.5}
              className="text-white/40 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-400"
            />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col justify-between gap-4 text-xs text-white/35 md:flex-row">
          <span>© {new Date().getFullYear()} Vienry Omania</span>

          <span className="font-mono tracking-wide">
            React · Three.js · GLSL
          </span>
        </div>
      </div>
    </section>
  );
}