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
  return (
    <section
      id="skills"
      className="relative z-10 px-8 py-32"
    >
      <div className="mx-auto w-full max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-xs tracking-[0.35em] text-white/40">
            TECHNOLOGIES
          </p>

          <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">
            Tools I build with.
          </h2>
        </div>

        {/* Skills */}
        <div className="border-t border-white/10">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid grid-cols-1 gap-6 border-b border-white/10 py-8 md:grid-cols-[80px_220px_1fr] md:items-start"
            >
              {/* Number */}
              <span className="text-xs tracking-[0.25em] text-white/30">
                {group.number}
              </span>

              {/* Category */}
              <h3 className="text-sm uppercase tracking-[0.2em] text-white/60">
                {group.title}
              </h3>

              {/* Technologies */}
              <div className="flex max-w-3xl flex-wrap gap-x-8 gap-y-4">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-base font-light text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}