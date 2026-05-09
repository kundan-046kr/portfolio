/* ─── Icons ─── */
import { motion } from "framer-motion";

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
const LeetCodeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.665 2.665 0 0 1 .614-1.164L11.53 8.134c.54-.54 1.414-.54 1.954.003a1.373 1.373 0 0 0 1.952.003l3.623-3.62a1.375 1.375 0 0 0 0-1.953L15.436.44A1.377 1.377 0 0 0 13.483 0zm1.614 11.581a1.375 1.375 0 0 0-1.375 1.374 1.375 1.375 0 0 0 1.375 1.375h7.14a1.375 1.375 0 0 0 1.374-1.375 1.375 1.375 0 0 0-1.374-1.374h-7.14z"/>
  </svg>
);
const GFGIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="8 17 3 12 8 7"></polyline>
    <polyline points="16 17 21 12 16 7"></polyline>
  </svg>
);

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center text-center pt-20 px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full max-w-3xl"
      >
        {/* Subtle Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 bg-dark-card border border-white/10 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-slate-300 tracking-wide">Available for Internships</span>
        </div>

        {/* Name with typewriter reveal */}
        <motion.h1 
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: "linear", delay: 0.3 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-red-100 via-orange50 to-red-100 bg-[length:200%_auto] animate-text-gradient"
        >
          Hi, I'm Kundan
        </motion.h1>

        {/* Title */}
        <h2 className="text-lg md:text-2xl font-medium text-slate-400 mb-6">
          <span className="text-accent">Backend Developer</span> focusing on <br className="hidden md:block" />
          scalable APIs, databases, and full-stack systems.
        </h2>

        {/* Divider */}
        <div className="w-10 h-[2px] bg-accent/30 mb-8 rounded-full" />

        {/* CTA text */}
        <div className="flex items-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("projects")}
            className="px-7 py-3.5 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors duration-300"
          >
            View Work
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-7 py-3.5 bg-transparent text-white font-bold rounded-xl border border-white/20 hover:bg-white/5 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Social & Coding Profiles */}
        <div className="flex items-center gap-6 text-slate-500">
          <a
            href="https://github.com/kundan-046kr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white hover:-translate-y-1 transition-all duration-300"
            title="GitHub"
          >
            <GitHubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/kundan-046kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#0a66c2] hover:-translate-y-1 transition-all duration-300"
            title="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://leetcode.com/u/kundan_046kr/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ffa116] hover:-translate-y-1 transition-all duration-300"
            title="LeetCode"
          >
            <LeetCodeIcon />
          </a>
          <a
            href="https://www.geeksforgeeks.org/profile/kundan046kr?tab=activity"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2f8D46] hover:-translate-y-1 transition-all duration-300"
            title="GeeksForGeeks"
          >
            <GFGIcon />
          </a>
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-slate-500"
      >
        <span className="text-[10px] tracking-widest uppercase font-semibold">Scroll</span>
        <svg className="w-4 h-4 animate-bounce text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
