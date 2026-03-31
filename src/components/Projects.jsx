/* ─── Tag ─── */
const Tag = ({ label }) => (
  <span className="px-2.5 py-1 bg-accent-light text-accent text-xs font-medium rounded-lg">
    {label}
  </span>
);

/* ─── External link icon ─── */
const ExternalIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ─── GitHub icon ─── */
const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ─── MAIN project ─── */
const mainProject = {
  title: "GenAI Full Stack Platform",
  description:
    "A production-grade full-stack application built on the MERN stack, integrating Google's Gemini API for AI-driven content generation. Features include secure JWT-based authentication, RESTful API architecture, and a dynamic React frontend with real-time AI responses.",
  points: [
    "MERN stack architecture with modular, scalable codebase",
    "Gemini API integration for AI-driven content generation",
    "JWT authentication with protected routes",
    "REST API with full CRUD operations",
  ],
  tags: ["React", "Node.js", "MongoDB", "Express", "Gemini API", "JWT"],
  github: "https://github.com",
  live: "https://example.com",
};

/* ─── MEDIUM projects ─── */
const mediumProjects = [
  {
    title: "Bank Transaction Backend API",
    description:
      "RESTful backend API for managing bank accounts and financial transactions with validation, error handling, and structured JSON responses.",
    tags: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com",
  },
  {
    title: "Geospatial Data Analysis",
    description:
      "Analyzed and visualized large location-based datasets to extract geospatial patterns using Python data science tools.",
    tags: ["Python", "Pandas", "Matplotlib"],
    github: "https://github.com",
  },
  {
    title: "Movie Watchlist App",
    description:
      "A React app to search, save, and manage a personal movie watchlist with local storage persistence and TMDB API integration.",
    tags: ["React", "TMDB API", "CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

//  icon: "✅",
//  icon: "🌤️",
//   icon: "🧩",
//    icon: "🗂️",
/* ─── SMALL projects ─── */
const smallProjects = [
  { title: "Todo App", tags: ["React"] },
  { title: "Weather App", tags: ["JS", "API"] },
  { title: "Quiz App", tags: ["React"] },
  { title: "Portfolio v1", tags: ["HTML", "CSS"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">My Work</p> */}
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-4">Projects</h2>
          <p className="text-slate-500 max-w-xl mx-auto text-sm">
            From full-stack platforms to CLI tools — here's what I've built. Projects are arranged
            by complexity and impact.
          </p>
        </div>

        {/* ── MAIN PROJECT (full-width) ── */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300 mb-6">
          {/* Header bar */}
          <div className="bg-gradient-to-r from-accent to-indigo-400 px-6 py-3 flex items-center justify-between">
            <span className="text-white text-xs font-semibold tracking-widest uppercase">Featured Project</span>
            <span className="text-white/70 text-xs">01</span>
          </div>
          <div className="p-7 md:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              {/* Left: content */}
              <div className="flex-1">
                <h3 className="font-display text-2xl md:text-3xl text-slate-900 mb-3">
                  {mainProject.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">
                  {mainProject.description}
                </p>
                <ul className="space-y-1.5 mb-6">
                  {mainProject.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="text-accent mt-0.5 shrink-0">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {mainProject.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              {/* Right: links */}
              <div className="flex md:flex-col gap-3 shrink-0">
                <a
                  href={mainProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-accent text-white text-xs font-semibold rounded-xl hover:bg-indigo-600 transition-colors"
                >
                  <ExternalIcon /> Live Demo
                </a>
                <a
                  href={mainProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 text-slate-600 text-xs font-semibold rounded-xl hover:border-accent hover:text-accent transition-colors"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── MEDIUM PROJECTS (3 columns) ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-6">
          {mediumProjects.map((p, idx) => (
            <div
              key={p.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-400 tracking-widest">0{idx + 2}</span>
                <div className="flex gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-slate-400 hover:text-accent transition-colors">
                      <ExternalIcon />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-accent transition-colors">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed flex-1 mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </div>
          ))}
        </div>

        {/* ── SMALL PROJECTS (4 columns) ── */}
        <div>
          <p className="text-xs font-semibold tracking-widest text-slate-400 uppercase mb-4">
            Smaller Projects & Experiments
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {smallProjects.map((p) => (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center"
              >
                <span className="text-2xl mb-2">{p.icon}</span>
                <h4 className="font-semibold text-slate-800 text-sm mb-2">{p.title}</h4>
                <div className="flex flex-wrap gap-1 justify-center">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-gray-100 text-slate-500 text-[10px] rounded-md font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
