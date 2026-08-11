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
    <section id="skills" className="relative z-10 px-8 py-32">
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs tracking-[0.35em] text-blue-400/70">
            TECHNOLOGIES
          </p>

          <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">
            Tools I build with.
          </h2>
        </div>

        {/* Skills */}
        <div className="border-t border-white/10 pointer-events-auto">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="group relative grid grid-cols-1 gap-6 border-b border-white/10 py-8 transition-colors duration-500 md:grid-cols-[80px_220px_1fr] md:items-start"
            >
              {/* Ambient row glow */}
              <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-r from-blue-500/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Number */}
              <span className="text-xs tracking-[0.25em] text-white/30 transition-colors duration-300 group-hover:text-blue-400/70">
                {group.number}
              </span>

              {/* Category */}
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/50 transition-all duration-500 group-hover:translate-x-1 group-hover:text-white">
                {group.title}
              </h3>

              {/* Technologies */}
              <div className="flex max-w-3xl flex-wrap gap-x-8 gap-y-4">
                {group.skills.map((skill) => {
                  const isHovered = hoveredSkill === skill;
                  const hasHovered = hoveredSkill !== null;

                  return (
                    <button
                      key={skill}
                      type="button"
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className={`
                        group/skill relative flex items-center gap-2
                        text-base font-light
                        transition-all duration-300
                        ${
                          hasHovered && !isHovered
                            ? "text-white/25"
                            : "text-white/70"
                        }
                        ${isHovered ? "text-white" : ""}
                      `}
                    >
                      {/* Skill */}
                      <span className="relative">
                        {skill}

                        {/* Animated underline */}
                        <span
                          className={`
                            absolute -bottom-1 left-0 h-px
                            bg-blue-400
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
                          pointer-events-none absolute -inset-x-3 -inset-y-2
                          -z-10 rounded-full
                          bg-blue-400/10 blur-xl
                          transition-opacity duration-300
                          ${
                            isHovered ? "opacity-100" : "opacity-0"
                          }
                        `}
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}