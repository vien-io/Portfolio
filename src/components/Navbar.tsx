import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  isHidden?: boolean;
}

export default function Navbar({ isHidden = false }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    "Projects",
    "Skills",
    "Experience",
    "About",
    "Contact",
  ];

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");

    const closeOnDesktop = () => {
      if (media.matches) {
        setIsMenuOpen(false);
      }
    };

    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (isHidden) {
      setIsMenuOpen(false);
    }
  }, [isHidden]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-3 z-50 transition-all duration-300 md:top-6 ${
        isHidden
          ? "pointer-events-none -translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-4 md:px-8">
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.03)] md:px-8 md:py-4">
          <a
            href="#hero"
            className="group flex shrink-0 items-center gap-2.5 pointer-events-auto md:gap-3"
            onClick={closeMenu}
          >
            <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)] transition-transform duration-300 group-hover:scale-125" />

            <span className="text-base font-bold tracking-[0.28em] text-white md:text-lg md:tracking-[0.35em]">
              VIEN
            </span>
          </a>

          <nav className="pointer-events-auto hidden md:block">
            <ul className="flex items-center gap-8">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="
                      relative
                      text-sm
                      uppercase
                      tracking-[0.25em]
                      text-gray-400
                      transition
                      duration-300
                      hover:text-white
                      after:absolute
                      after:-bottom-2
                      after:left-0
                      after:h-px
                      after:w-0
                      after:bg-blue-400
                      after:transition-all
                      after:duration-300
                      hover:after:w-full
                    "
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/80 transition hover:border-white/25 hover:text-white md:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="pointer-events-auto mx-4 mt-3 overflow-hidden rounded-3xl border border-white/10 bg-black/80 backdrop-blur-xl md:hidden"
        >
          <nav>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block border-b border-white/10 px-5 py-4 text-sm uppercase tracking-[0.2em] text-gray-300 transition last:border-b-0 hover:bg-white/5 hover:text-white"
                    onClick={closeMenu}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
