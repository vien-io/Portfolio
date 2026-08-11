import { useState } from "react";

const skillGroups = [
  {
    number: "01",
    title: "Backend",
    skills: [
      "Laravel",
      "Node.js",
      "Express.js",
      "PHP",
      "REST APIs",
      "JWT Authentication",
      "Laravel Queues",
    ],
  },
  {
    number: "02",
    title: "Database",
    skills: [
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "SQL",
      "Drizzle ORM",
      "Schema Design",
      "Query Optimization",
    ],
  },
  {
    number: "03",
    title: "Frontend",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Vite",
      "Chart.js",
    ],
  },
  {
    number: "04",
    title: "Graphics",
    skills: [
      "Three.js",
      "React Three Fiber",
      "GLSL",
      "Blender",
    ],
  },
  {
    number: "05",
    title: "Mobile",
    skills: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "Supabase",
    ],
  },
  {
    number: "06",
    title: "DevOps & Tools",
    skills: [
      "Docker",
      "Git",
      "Linux",
      "Bash",
      "Apache",
      "Render",
      "Postman",
    ],
  },
];

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  return (
    <section
      id="skills"
      className="relative z-10 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Header */}
        <div className="mb-20 flex items-end justify-between">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[0.35em] text-blue-400">
              Technologies
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Tools I build with.
            </h2>
          </div>

          <span className="hidden font-mono text-[10px] tracking-[0.25em] text-white/30 md:block">
            03 / 06
          </span>
        </div>

        {/* Skills */}
        <div className="border-t border-white/15 pointer-events-auto">
          {skillGroups.map((group) => {
            const groupHasHoveredSkill = group.skills.some(
              (skill) => skill === hoveredSkill
            );

            return (
              <div
                key={group.number}
                className="
                  group relative
                  grid grid-cols-1 gap-6
                  border-b border-white/15
                  py-9
                  transition-colors duration-500
                  md:grid-cols-[80px_220px_1fr]
                  md:items-start
                "
              >
                {/* Background sweep */}
                <div
                  className="
                    pointer-events-none absolute inset-0 -z-10
                    origin-left scale-x-0
                    bg-blue-400/[0.025]
                    transition-transform duration-700
                    group-hover:scale-x-100
                  "
                />

                {/* Number */}
                <div className="flex items-center gap-3">
                  <span
                    className="
                      h-1.5 w-1.5 rounded-full
                      bg-white/15
                      transition-all duration-500
                      group-hover:bg-blue-400
                      group-hover:shadow-[0_0_8px_rgba(96,165,250,0.8)]
                    "
                  />

                  <span
                    className="
                      font-mono text-xs tracking-[0.2em]
                      text-white/40
                      transition-colors duration-300
                      group-hover:text-blue-400
                    "
                  >
                    {group.number}
                  </span>
                </div>

                {/* Category */}
                <h3
                  className="
                    text-sm font-medium uppercase
                    tracking-[0.2em]
                    text-white/65
                    transition-all duration-500
                    group-hover:translate-x-1
                    group-hover:text-white
                  "
                >
                  {group.title}
                </h3>

                {/* Technologies */}
                <div className="flex max-w-4xl flex-wrap gap-x-8 gap-y-5">
                  {group.skills.map((skill) => {
                    const isHovered = hoveredSkill === skill;

                    const isDimmed =
                      groupHasHoveredSkill && !isHovered;

                    return (
                      <button
                        key={skill}
                        type="button"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`
                          group/skill relative
                          flex items-center gap-2
                          text-base font-light
                          transition-all duration-300
                          ${
                            isDimmed
                              ? "text-white/20"
                              : "text-white/70"
                          }
                          ${
                            isHovered
                              ? "text-white"
                              : ""
                          }
                        `}
                      >
                        {/* Skill name */}
                        <span className="relative">
                          {skill}

                          {/* Underline */}
                          <span
                            className={`
                              absolute -bottom-1 left-0
                              h-px bg-blue-400
                              transition-all duration-300
                              ${
                                isHovered
                                  ? "w-full opacity-100"
                                  : "w-0 opacity-0"
                              }
                            `}
                          />
                        </span>

                        {/* Arrow */}
                        <span
                          className={`
                            text-blue-400
                            transition-all duration-300
                            ${
                              isHovered
                                ? "translate-x-0 opacity-100"
                                : "-translate-x-2 opacity-0"
                            }
                          `}
                        >
                          ↗
                        </span>

                        {/* Glow */}
                        <span
                          className={`
                            pointer-events-none
                            absolute -inset-x-4 -inset-y-2
                            -z-10 rounded-full
                            bg-blue-400/10 blur-xl
                            transition-opacity duration-300
                            ${
                              isHovered
                                ? "opacity-100"
                                : "opacity-0"
                            }
                          `}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}