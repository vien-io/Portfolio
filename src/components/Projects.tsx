import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    number: "01",
    title: "LOTMATCH",
    subtitle: "Property Management & Forecasting System",
    description:
      "A full-stack property management and forecasting platform managing 1,930+ properties across 37 subdivision blocks, with AI-powered analysis and interactive 3D mapping.",
    technologies: [
      "Laravel",
      "PostgreSQL",
      "React",
      "Three.js",
      "OpenAI",
      "Docker",
    ],
    images: [
      "/images/lotmatch/lm2.png",
      "/images/lotmatch/lm4.png",
      "/images/lotmatch/lm6.png",
      "/images/lotmatch/lm8.png",
      "/images/lotmatch/lm1.jpg",
      "/images/lotmatch/lm3.jpg",
      "/images/lotmatch/lm7.jpg",
      "/images/lotmatch/lm5.jpg",
      "/images/lotmatch/lm9.jpg",
    ],
    video: "/videos/lotmatch/lm1.mp4",
    live: "https://lot-match.onrender.com/",
    github: "https://github.com/vien-io/lot-match-new",
    featured: true,
  },
  {
    number: "02",
    title: "PADRELLOS",
    subtitle: "Procurement & Cash-flow Monitoring System",
    description:
      "An enterprise procurement and financial monitoring platform for purchasing workflows, delivery tracking, approvals, expense management, and operational reporting.",
    technologies: [
      "React",
      "TypeScript",
      "Laravel",
      "PostgreSQL",
      "JWT",
    ],
    images: [
      "/images/padrellos/pd16.png",
      "/images/padrellos/pd15.png",
      "/images/padrellos/pd13.png",
      "/images/padrellos/pd11.png",
      "/images/padrellos/pd10.png",
      "/images/padrellos/pd9.png",
      "/images/padrellos/pd8.png",
      "/images/padrellos/pd6.png",
      "/images/padrellos/pd5.png",
      "/images/padrellos/pd4.png",
      "/images/padrellos/pd3.png",
      "/images/padrellos/pd2.png",
      "/images/padrellos/pd1.png",
    ],
    live: undefined,
    github: undefined,
  },
  {
    number: "03",
    title: "WINNERS",
    subtitle: "Offline-First Attendance Management System",
    description:
      "An offline-first Android application for managing members, attendance sessions, ministries, and church records with background cloud synchronization.",
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Room",
      "WorkManager",
      "Supabase",
    ],
    images: [
      "/projects/winners.png",
      "/projects/winners-2.png",
      "/projects/winners-3.png",
    ],
    live: undefined,
    github: undefined,
  },
];

interface ProjectsProps {
  onGalleryOpen: (open: boolean) => void;
}

export default function Projects({ onGalleryOpen }: ProjectsProps) {
  return (
    <section
      id="projects"
      className="relative z-10 px-6 py-32 md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-20">
          <p className="mb-4 text-xs tracking-[0.35em] text-white/40">
            SELECTED WORK
          </p>

          <h2 className="text-4xl font-light tracking-tight text-white md:text-6xl">
            Projects
          </h2>
        </div>

        {/* Featured project */}
        <FeaturedProject project={projects[0]} />

        {/* Other projects */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <ProjectCard project={projects[1]} onGalleryOpen={onGalleryOpen} />
          <ProjectCard project={projects[2]} onGalleryOpen={onGalleryOpen} />
        </div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: (typeof projects)[number] }) {
  type Media = { type: "video"; src: string } | { type: "image"; src: string };

  const [selectedMedia, setSelectedMedia] = useState<Media>({
    type: "video",
    src: project.video!,
  });

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-md">
      {/* Main screenshot */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-white/10">
        {selectedMedia.type === "video" ? (
          <video
            src={selectedMedia.src}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        ) : (
          <img
            src={selectedMedia.src}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover transition-all duration-500"
          />
        )}

        {/* Dark gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />

        {/* Project number */}
        <div className="absolute left-6 top-6 text-xs tracking-[0.3em] text-white/50">
          {project.number}
        </div>
      </div>

      {/* Screenshot selector */}
      <div className="flex gap-2 overflow-x-auto border-b border-white/10 p-4 scrollbar-none">
        {/* Video */}
        {project.video && (
          <button
            type="button"
            onClick={() =>
              setSelectedMedia({
                type: "video",
                src: project.video!,
              })
            }
            className={`pointer-events-auto relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
              selectedMedia.type === "video"
                ? "border-white/60"
                : "border-white/10 opacity-50 hover:border-white/30 hover:opacity-100"
            }`}
          >
            <video
              src={project.video}
              muted
              playsInline
              className="pointer-events-none h-full w-full object-cover"
            />

            <span className="absolute inset-0 flex items-center justify-center bg-black/30 text-white">
              ▶
            </span>

            <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white/70">
              DEMO
            </span>
          </button>
        )}

        {/* Images */}
        {project.images.map((image, index) => (
          <button
            key={image}
            type="button"
            onClick={() =>
              setSelectedMedia({
                type: "image",
                src: image,
              })
            }
            className={`pointer-events-auto relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 ${
              selectedMedia.type === "image" && selectedMedia.src === image
                ? "border-white/60"
                : "border-white/10 opacity-50 hover:border-white/30 hover:opacity-100"
            }`}
          >
            <img
              src={image}
              alt={`${project.title} preview ${index + 1}`}
              className="pointer-events-none h-full w-full object-cover"
            />

            <span className="absolute bottom-1 right-1 rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-white/70">
              {String(index + 1).padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="p-7 md:p-10">
        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <div className="max-w-2xl">
            <p className="mb-2 text-sm text-white/40">{project.subtitle}</p>

            <h3 className="text-3xl font-light tracking-tight text-white md:text-4xl">
              {project.title}
            </h3>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-white/50"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="flex shrink-0 items-end gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-xs text-white transition hover:bg-white/10 pointer-events-auto"
              >
                Live Demo
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-xs text-white/70 transition hover:bg-white/10 hover:text-white pointer-events-auto"
              >
                <BsGithub size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

function ProjectCard({
  project,
  onGalleryOpen,
}: {
  project: (typeof projects)[number];
  onGalleryOpen: (open: boolean) => void;
}) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const openGallery = () => {
    setSelectedImage(0);
    setIsGalleryOpen(true);
    onGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
    onGalleryOpen(false);
  };

  const nextImage = () => {
    setSelectedImage((current) =>
      current === project.images.length - 1 ? 0 : current + 1,
    );
  };

  const previousImage = () => {
    setSelectedImage((current) =>
      current === 0 ? project.images.length - 1 : current - 1,
    );
  };

  return (
    <>
      <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] backdrop-blur-md transition-colors duration-500 hover:bg-white/[0.06]">
        {/* Screenshot */}
        <button
          type="button"
          onClick={openGallery}
          className="relative block aspect-[16/10] w-full overflow-hidden border-b border-white/10 text-left pointer-events-auto"
        >
          <img
            src={project.images[0]}
            alt={`${project.title} screenshot`}
            className="h-full w-full object-cover opacity-80 transition duration-700 group-hover:scale-[1.04] group-hover:opacity-100"
          />

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

          {/* Project number */}
          <div className="absolute left-6 top-6 text-xs tracking-[0.3em] text-white/50">
            {project.number}
          </div>

          {/* View gallery */}
          <div className="absolute bottom-5 right-5 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-xs text-white/70 opacity-0 backdrop-blur-md transition duration-300 group-hover:opacity-100">
            View Gallery →
          </div>
        </button>

        {/* Content */}
        <div className="p-7">
          <p className="text-sm text-white/40">{project.subtitle}</p>

          <h3 className="mt-2 text-2xl font-light tracking-tight text-white">
            {project.title}
          </h3>

          <p className="mt-4 text-sm leading-6 text-white/45">
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/45"
              >
                {technology}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="mt-7 flex gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-xs text-white transition hover:text-white/60"
              >
                Live
                <ArrowUpRight size={14} />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center gap-2 text-xs text-white/60 transition hover:text-white"
              >
                <BsGithub size={14} />
                GitHub
              </a>
            )}
          </div>
        </div>
      </article>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6 backdrop-blur-xl pointer-events-auto"
          onClick={closeGallery}
        >
          {/* Close */}
          <button
            type="button"
            onClick={closeGallery}
            className="absolute right-6 top-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/60 backdrop-blur-md transition hover:bg-white/10 hover:text-white"
            aria-label="Close gallery"
          >
            ×
          </button>

          {/* Project title */}
          <div className="absolute left-6 top-7">
            <p className="text-xs tracking-[0.3em] text-white/40">
              {project.number}
            </p>

            <h3 className="mt-1 text-lg font-light text-white">
              {project.title}
            </h3>
          </div>

          {/* Previous */}
          {project.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                previousImage();
              }}
              className="absolute left-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/60 backdrop-blur-md transition hover:bg-white/10 hover:text-white md:left-10"
              aria-label="Previous image"
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="flex max-h-[85vh] max-w-[85vw] flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={project.images[selectedImage]}
              alt={`${project.title} screenshot ${selectedImage + 1}`}
              className="max-h-[78vh] max-w-[85vw] rounded-xl object-contain shadow-2xl"
            />

            {/* Counter */}
            <div className="mt-5 text-xs tracking-[0.3em] text-white/40">
              {String(selectedImage + 1).padStart(2, "0")} /{" "}
              {String(project.images.length).padStart(2, "0")}
            </div>
          </div>

          {/* Next */}
          {project.images.length > 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-xl text-white/60 backdrop-blur-md transition hover:bg-white/10 hover:text-white md:right-10"
              aria-label="Next image"
            >
              →
            </button>
          )}

          {/* Thumbnail strip */}
          <div
            className="absolute bottom-5 left-1/2 flex max-w-[80vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-xl border border-white/10 bg-black/40 p-2 backdrop-blur-md scrollbar-none"
            onClick={(e) => e.stopPropagation()}
          >
            {project.images.map((image, index) => (
              <button
                key={image}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`h-12 w-20 shrink-0 overflow-hidden rounded-md border transition ${
                  selectedImage === index
                    ? "border-white/70"
                    : "border-white/10 opacity-50 hover:border-white/30 hover:opacity-100"
                }`}
              >
                <img
                  src={image}
                  alt={`${project.title} thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
