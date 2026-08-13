# Vienry Omania — Portfolio

Personal portfolio site for **Vienry Omania**, a junior full-stack developer focused on backend systems, APIs, and database-driven applications—with interactive 3D visuals built using React Three Fiber and custom GLSL shaders.

Repository: [github.com/vien-io/Portfolio](https://github.com/vien-io/Portfolio)

## Overview

Single-page portfolio showcasing selected work, technical skills, and experience. The site combines a content-focused layout (projects, skills, experience, contact) with a fixed WebGL hero background featuring a procedurally shaded planet, particle field, nebula, and scroll-driven camera movement.

## Features

- **Hero** — Name, role, intro, project/contact CTAs, and social links over a live 3D scene
- **About** — Background, focus areas, and engineering vs. graphics split
- **Projects** — Featured LOTMATCH case study with video demo, image gallery, live link, and GitHub; additional project cards with modal galleries
- **Skills** — Grouped technology list (Backend, Database, Frontend, Graphics, Mobile, DevOps)
- **Experience** — Timeline of practicum, thesis, and personal project work
- **Contact** — Email, GitHub, LinkedIn, and downloadable CV

### 3D / WebGL

- Custom GLSL materials for planet surface, clouds, atmosphere, particles, and nebula
- Scroll-linked camera rig with pointer parallax
- Instanced floating rocks, shooting stars, and GLTF spaceship model
- Shaders loaded via `vite-plugin-glsl`

## Tech Stack

| Layer | Technologies |
|---|---|
| UI | React 19, TypeScript, Tailwind CSS 4 |
| 3D | Three.js, React Three Fiber, `@react-three/drei` |
| Shaders | GLSL (`.vert` / `.frag` via Vite plugin) |
| Tooling | Vite 8, ESLint, TypeScript |

## Project Structure

```
src/
├── components/
│   ├── 3D/           # R3F scene objects (Planet, Particles, CameraRig, etc.)
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Hero.tsx
│   ├── HeroScene.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   ├── Skills.tsx
│   └── Typewriter.tsx
├── materials/        # Extended shader materials (Planet, Clouds, Atmosphere, Particles)
├── shaders/          # GLSL source files
├── types/            # R3F custom element typings
├── App.tsx
├── main.tsx
└── index.css

public/
├── fonts/            # Custom display fonts
├── images/           # Project screenshots
├── models/           # GLTF assets
├── videos/           # Project demo videos
└── Vien_CV.pdf       # Resume
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install

```bash
git clone https://github.com/vien-io/Portfolio.git
cd Portfolio
npm install
```

### Development

```bash
npm run dev
```

Open the URL shown in the terminal (typically `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

Build output is written to `dist/`.

### Lint

```bash
npm run lint
```

## Deployment

The app is a static Vite build. Deploy the `dist/` folder to any static host (e.g. Vercel, Netlify, GitHub Pages, Cloudflare Pages).

Ensure `public/` assets (images, videos, models, CV) are included in the deployment.

## Featured Projects (external)

| Project | Description | Links |
|---|---|---|
| **LOTMATCH** | Property management & forecasting platform (1,930+ properties) | [Live demo](https://lot-match.onrender.com/) · [GitHub](https://github.com/vien-io/lot-match-new) |
| **PADRELLOS** | Enterprise procurement & cash-flow monitoring (practicum) | Screenshots in portfolio |
| **WINNERS** | Offline-first Android attendance app | Screenshots in portfolio |

## Contact

- **Email:** [vienryomania@gmail.com](mailto:vienryomania@gmail.com)
- **GitHub:** [@vien-io](https://github.com/vien-io)
- **LinkedIn:** [Christopher Vienry Omania](https://linkedin.com/in/christopher-vienry-omania-b0380b373)

## License

This project is for personal portfolio use. Project screenshots, demos, and assets belong to their respective owners unless otherwise stated.
