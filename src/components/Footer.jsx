export default function Footer() {
  return (
    <footer className="bg-dark-card border-t border-white/5 text-slate-400 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">© 2026 Kundan Kumar. All rights reserved.</p>
        <div className="flex items-center gap-6">
          {[
            { label: "GitHub", href: "https://github.com/kundan-046kr" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/kundan-046kr/" },
            { label: "Email", href: "mailto:kundan.460kr@gmail.com" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
