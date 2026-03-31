/* ─── Icons ─── */
const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-20 px-6"
    >
      {/* Badge
      <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-accent bg-accent-light rounded-full mb-6 uppercase">
        Open to Opportunities
      </span> */}

      {/* Name */}
      <h1 className="font-display text-5xl md:text-7xl text-slate-900 leading-tight mb-3">
        Hi, I'm Kundan
      </h1>

      {/* Title */}
      <p className="text-xs md:text-sm font-semibold tracking-[0.3em] text-accent uppercase mb-5">
        A FullStack Developer
      </p>

      {/* Tagline */}
      <p className="text-lg md:text-xl text-slate-500 font-light mb-8 max-w-md">
        Exploring. Experimenting. Evolving.
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-accent/30 mb-8" />

      {/* CTA text */}
      <p className="text-sm text-slate-500 mb-8">
        <button
          onClick={() => scrollTo("projects")}
          className="text-accent font-medium hover:underline underline-offset-2 transition-all"
        >
          View Projects
        </button>
        <span className="mx-2 text-slate-300">or</span>
        <button
          onClick={() => scrollTo("contact")}
          className="text-accent font-medium hover:underline underline-offset-2 transition-all"
        >
          Contact Me
        </button>
      </p>

      {/* Social icons */}
      <div className="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/kundan-046kr/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-slate-500 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-200"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>
        <a
          href="https://github.com/kundan-046kr"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-200 text-slate-500 hover:text-accent hover:border-accent hover:shadow-sm transition-all duration-200"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex flex-col items-center gap-2 text-slate-400">
        <span className="text-xs tracking-widest uppercase">Scroll down</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
