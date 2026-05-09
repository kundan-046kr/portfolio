import { useState } from "react";

const navLinks = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollTo = (id) => {
    const el = document.getElementById(id.toLowerCase());
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-card/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Left: Brand */}
        <button
          onClick={() => scrollTo("home")}
          className="font-display text-xl font-bold text-white tracking-wide hover:text-accent transition-colors text-shadow-sm"
        >
          Welcome<span className="text-accent">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="px-4 py-2 text-sm font-medium text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-all duration-150"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-dark-card/95 backdrop-blur-xl border-t border-white/5 px-6 py-3 flex flex-col gap-1 shadow-2xl">
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left px-4 py-2.5 text-sm font-medium text-slate-300 rounded-lg hover:bg-white/5 hover:text-white transition-colors"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
