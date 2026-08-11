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
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-blue-400">
              Experience
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Where I've built.
            </h2>
          </div>

          <span className="hidden font-mono text-[10px] tracking-[0.25em] text-white/30 md:block">
            04 / 06
          </span>
        </div>

        {/* Experience list */}
        <div className="border-t border-white/15">
          {experiences.map((experience, index) => (
            <article
              key={`${experience.company}-${index}`}
              className="
                group relative grid gap-8
                border-b border-white/15
                py-12
                transition-colors duration-500
                md:grid-cols-[180px_1fr]
                pointer-events-auto
              "
            >
              {/* Hover background */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  -z-10 origin-left scale-x-0
                  bg-blue-400/[0.035]
                  transition-transform duration-700
                  group-hover:scale-x-100
                "
              />

              {/* Date */}
              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-white/20
                      transition-all duration-500
                      group-hover:bg-blue-400
                      group-hover:shadow-[0_0_10px_rgba(96,165,250,0.8)]
                    "
                  />

                  <span
                    className="
                      font-mono text-xs tracking-[0.2em] text-white/45
                      transition-colors duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {experience.year}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative">
                {/* Top row */}
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3
                      className="
                        text-2xl font-medium tracking-tight text-white
                        transition-transform duration-500
                        group-hover:translate-x-1
                      "
                    >
                      {experience.role}
                    </h3>

                    <p className="mt-2 text-sm font-medium text-white/50">
                      {experience.company}
                    </p>
                  </div>

                  <span
                    className="
                      w-fit rounded-full
                      border border-white/15
                      px-3 py-1.5
                      text-[10px] uppercase tracking-[0.15em]
                      text-white/45
                      transition-all duration-300
                      group-hover:border-blue-400/30
                      group-hover:bg-blue-400/[0.05]
                      group-hover:text-blue-300
                    "
                  >
                    {experience.type}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="
                    mt-7 max-w-3xl
                    text-sm leading-7 text-white/60
                    transition-colors duration-300
                    group-hover:text-white/70
                  "
                >
                  {experience.description}
                </p>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {experience.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="
                        rounded-full
                        border border-white/10
                        bg-white/[0.025]
                        px-3 py-1.5
                        text-xs text-white/50
                        transition-all duration-300
                        group-hover:border-white/20
                        group-hover:text-white/70
                      "
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover indicator */}
              <div
                className="
                  pointer-events-none absolute
                  bottom-0 left-0
                  h-px w-0
                  bg-blue-400
                  transition-all duration-700
                  group-hover:w-full
                "
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}