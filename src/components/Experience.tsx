const experiences = [
  {
    year: "2026",
    role: "Project Lead · Full-Stack Developer",
    company: "C8nnect IT Solutions",
    type: "Practicum",
    description:
      "Led the development of an enterprise procurement and cash-flow monitoring system, translating client requirements into system architecture, database design, APIs, and production-ready features.",
    technologies: [
      "React",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "JWT",
      "Docker",
    ],
  },
  {
    year: "2023 — 2025",
    role: "Full-Stack Developer",
    company: "LOTMATCH",
    type: "Thesis Project",
    description:
      "Architected and developed a full-stack property management and forecasting platform managing 1,930+ properties, with AI-powered analysis, asynchronous processing, and interactive 3D visualization.",
    technologies: [
      "Laravel",
      "PHP",
      "PostgreSQL",
      "OpenAI",
      "Three.js",
      "Docker",
    ],
  },
  {
    year: "2026",
    role: "Android Developer",
    company: "Winners",
    type: "Personal Project",
    description:
      "Built an offline-first Android attendance management system with local persistence, background synchronization, and multi-device cloud data synchronization.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "Supabase",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs tracking-[0.35em] text-white/40">
            EXPERIENCE
          </p>

          <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">
            Where I've applied it.
          </h2>
        </div>

        {/* Experience list */}
        <div className="border-t border-white/10">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="
    group relative grid gap-8 border-b border-white/10 py-10
    transition-all duration-500
    md:grid-cols-[180px_1fr]
    pointer-events-auto
  "
            >
              {/* Hover glow */}
              <div
                className="
      pointer-events-none absolute inset-0
      bg-gradient-to-r from-blue-500/[0.04] via-transparent to-transparent
      opacity-0 transition-opacity duration-500
      group-hover:opacity-100
    "
              />

              {/* Animated line */}
              <div
                className="
      pointer-events-none absolute left-0 top-0 h-px w-0
      bg-blue-400
      transition-all duration-700
      group-hover:w-full
    "
              />

              {/* Date */}
              <div className="relative">
                <span
                  className="
        text-xs tracking-[0.2em] text-white/35
        transition-colors duration-300
        group-hover:text-blue-400
      "
                >
                  {experience.year}
                </span>

                {/* Small indicator */}
                <span
                  className="
        absolute -left-3 top-0
        h-1.5 w-1.5 rounded-full
        bg-blue-400
        opacity-0 blur-sm
        transition-all duration-500
        group-hover:opacity-100
      "
                />
              </div>

              {/* Content */}
              <div className="relative transition-transform duration-500 group-hover:translate-x-1">
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                  <div>
                    <h3
                      className="
            text-2xl font-light tracking-tight text-white
            transition-colors duration-300
          "
                    >
                      {experience.role}
                    </h3>

                    <p className="mt-1 text-sm text-white/40">
                      {experience.company}
                    </p>
                  </div>

                  <span
                    className="
          w-fit rounded-full border border-white/10
          px-3 py-1 text-xs text-white/40
          transition-all duration-300
          group-hover:border-blue-400/30
          group-hover:bg-blue-400/[0.05]
          group-hover:text-blue-300
        "
                  >
                    {experience.type}
                  </span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-7 text-white/45">
                  {experience.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
            rounded-full border border-white/10
            bg-white/[0.03]
            px-3 py-1.5 text-xs text-white/45
            transition-all duration-300
            group-hover:border-white/20
            group-hover:text-white/60
          "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
