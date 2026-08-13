interface NavbarProps {
  isHidden?: boolean;
}

export default function Navbar({ isHidden = false }: NavbarProps) {
  const links = [
    "Projects",
    "Skills",
    "Experience",
    "About",
    "Contact",
  ];

  return (
     <header
      className={`fixed inset-x-0 top-6 z-50 transition-all duration-300 ${
        isHidden
          ? "pointer-events-none -translate-y-8 opacity-0"
          : "translate-y-0 opacity-100"
      }`}
    >
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8">
        {/* Floating Navbar */}
        <div className="flex w-full items-center justify-between rounded-full border border-white/10 bg-black/20 px-8 py-4 backdrop-blur-xl shadow-[0_0_40px_rgba(255,255,255,0.03)]">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 pointer-events-auto"
          >
            <div className="h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.9)] transition-transform duration-300 group-hover:scale-125" />

            <span className="text-lg font-bold tracking-[0.35em] text-white">
              VIEN
            </span>
          </a>

          {/* Navigation */}
          <nav className="pointer-events-auto">
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
        </div>
      </div>
    </header>
  );
}