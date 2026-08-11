import { ArrowUpRight, Download, Mail } from "lucide-react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

const links = [
  {
    label: "Email",
    href: "mailto:vienryomania@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/vien-io",
    icon: BsGithub,
  },
  {
    label: "LinkedIn",
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
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-6 text-xs tracking-[0.35em] text-white/40">
            GET IN TOUCH
          </p>

          <h2 className="text-5xl font-light leading-[1.05] tracking-tight text-white md:text-7xl">
            Let's build something
            <br />
            <span className="text-white/40">together.</span>
          </h2>
        </div>

        {/* Links */}
        <div className="mt-20 border-t border-white/10">
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
                className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.03] pointer-events-auto"
              >
                <div className="flex items-center gap-5">
                  <Icon
                    size={18}
                    className="text-white/40 transition-colors duration-300 group-hover:text-white"
                  />

                  <span className="text-lg font-light text-white/70 transition-colors duration-300 group-hover:text-white">
                    {link.label}
                  </span>
                </div>

                <ArrowUpRight
                  size={18}
                  className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
                />
              </a>
            );
          })}

          {/* Resume */}
          <a
            href="/Vien_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between border-b border-white/10 py-6 transition-colors duration-300 hover:bg-white/[0.03] pointer-events-auto"
          >
            <div className="flex items-center gap-5">
              <Download
                size={18}
                className="text-white/40 transition-colors duration-300 group-hover:text-white"
              />

              <span className="text-lg font-light text-white/70 transition-colors duration-300 group-hover:text-white">
                Resume
              </span>
            </div>

            <ArrowUpRight
              size={18}
              className="text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white"
            />
          </a>
        </div>

        {/* Footer */}
        <div className="mt-12 flex flex-col justify-between gap-4 text-xs text-white/30 md:flex-row">
          <span>© {new Date().getFullYear()} Christopher Omania</span>

          <span>Built with React · Three.js · GLSL</span>
        </div>
      </div>
    </section>
  );
}