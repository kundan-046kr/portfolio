import { motion } from "framer-motion";

/* ─── Tag ─── */
const Tag = ({ label }) => (
  <span className="px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-lg border border-accent/20 shadow-sm">
    {label}
  </span>
);

/* ─── External link icon ─── */
const ExternalIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

/* ─── GitHub icon ─── */
const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

/* ─── MAIN project ─── */
const mainProject = {
  title: "GenAI Full Stack Platform",
  description:
    "Developed a MERN application for AI-driven content generation based on user prompts. Engineered a robust backend with 6+ RESTful APIs, handling user sessions, and integrating Google's Gemini API for real-time dynamic responses.",
  points: [
    "Designed and implemented 6+ RESTful APIs for complex workflows",
    "Implemented JWT-based authentication and protected routes",
    "Integrated Gemini API for real-time dynamic content generation",
    "Built a responsive React frontend for seamless user interaction",
  ],
  tags: ["React", "Node.js", "MongoDB", "Express.js", "Gemini API", "JWT"],
  github: "https://github.com/kundan-046kr",
  live: "https://example.com",
};

/* ─── MEDIUM projects ─── */
const mediumProjects = [
  {
    title: "Social Media Backend API",
    description:
      "Built a scalable backend with JWT authentication and protected routes. Designed MongoDB schemas using ObjectId references and populate for efficient relational data retrieval in a highly modular architecture.",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
    github: "https://github.com/kundan-046kr",
  },
  {
    title: "GeoInt Platform",
    description:
      "Developed a full-stack Geospatial Intelligence platform for managing large-scale movement data. Features real-time tracking via WebSockets, PostGIS spatial processing, automated geofencing, and an Isolation Forest ML model for anomaly detection.",
    tags: ["React", "Node.js", "PostgreSQL", "PostGIS", "Python", "Machine Learning"],
    github: "https://github.com/kundan-046kr",
  },
  {
    title: "Bank Transaction Backend API",
    description:
      "Developed RESTful APIs for banking operations including deposit, withdrawal, and transaction tracking. Implemented optimized MongoDB schemas, robust input validation, and centralized error handling.",
    tags: ["Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/kundan-046kr",
  },
];

/* ─── SMALL projects ─── */
const smallProjects = [
  { title: "Movie Watchlist App", tags: ["React", "API"] },
  { title: "Todo App", tags: ["React"] },
  { title: "Weather App", tags: ["JS", "API"] },
  { title: "Portfolio v1", tags: ["HTML", "CSS"] },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-shadow-sm">Projects</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            From full-stack platforms to CLI tools — here's what I've built. Projects are arranged
            by complexity and impact.
          </p>
        </motion.div>

        {/* ── MAIN PROJECT (full-width) ── */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card/60 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden hover:border-accent/50 hover:shadow-glow transition-all duration-300 mb-8"
        >
          {/* Header bar */}
          <div className="bg-gradient-to-r from-accent to-purple-600 px-6 py-3 flex items-center justify-between">
            <span className="text-white text-xs font-bold tracking-widest uppercase">Featured Project</span>
            <span className="text-white/80 text-xs font-bold">01</span>
          </div>
          <div className="p-7 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Left: content */}
              <div className="flex-1">
                <h3 className="font-display text-3xl md:text-4xl text-white mb-4 text-shadow-sm">
                  {mainProject.title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  {mainProject.description}
                </p>
                <ul className="space-y-2 mb-8">
                  {mainProject.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <span className="text-accent mt-0.5 shrink-0 font-bold">›</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {mainProject.tags.map((t) => <Tag key={t} label={t} />)}
                </div>
              </div>
              {/* Right: links */}
              <div className="flex flex-row md:flex-col gap-4 shrink-0">
                <a
                  href={mainProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 bg-accent text-white text-sm font-semibold rounded-xl hover:bg-sky-400 hover:shadow-glow transition-all"
                >
                  <ExternalIcon /> Live Demo
                </a>
                <a
                  href={mainProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 border border-white/10 text-white text-sm font-semibold rounded-xl hover:border-accent hover:text-accent hover:bg-white/5 transition-all"
                >
                  <GitHubIcon /> GitHub
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── MEDIUM PROJECTS (3 columns) ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {mediumProjects.map((p, idx) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-card/40 backdrop-blur-sm rounded-2xl border border-white/5 p-7 hover:border-accent/40 hover:-translate-y-1 hover:shadow-glow transition-all duration-300 flex flex-col group"
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-sm font-bold text-slate-500 tracking-widest group-hover:text-accent transition-colors">0{idx + 2}</span>
                <div className="flex gap-3">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors">
                      <ExternalIcon />
                    </a>
                  )}
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white transition-colors">
                    <GitHubIcon />
                  </a>
                </div>
              </div>
              <h3 className="font-bold text-white text-xl mb-3 group-hover:text-accent transition-colors">{p.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-6">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => <Tag key={t} label={t} />)}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── SMALL PROJECTS (4 columns) ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-widest text-slate-500 uppercase mb-5">
            Smaller Projects & Experiments
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {smallProjects.map((p) => (
              <div
                key={p.title}
                className="bg-dark-card/30 rounded-2xl border border-white/5 p-5 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 flex flex-col items-center text-center group"
              >
                {p.icon && <span className="text-2xl mb-3">{p.icon}</span>}
                <h4 className="font-semibold text-slate-300 text-sm mb-3 group-hover:text-white transition-colors">{p.title}</h4>
                <div className="flex flex-wrap gap-1.5 justify-center">
                  {p.tags.map((t) => (
                    <span key={t} className="px-2 py-0.5 bg-white/5 border border-white/10 text-slate-400 text-[10px] rounded-md font-semibold">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
