import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const contactLinks = [
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
    label: "LinkedIn",
    value: "linkedin.com/in/kundankumar",
    href: "https://www.linkedin.com/in/kundan-046kr/",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    label: "GitHub",
    value: "github.com/kundan-046kr",
    href: "https://github.com/kundan-046kr",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "kundan.460kr@gmail.com",
    href: "mailto:kundan.460kr@gmail.com",
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Phone",
    value: "+91 7006436872",
    href: "tel:+917006436872",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSent(true);
          setForm({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
        }
      );
  };

  const inputClass =
    "w-full px-4 py-3 bg-dark-card/50 border border-white/10 rounded-xl text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all";

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-shadow-sm">Contact Me</h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            I'm currently looking for internship and collaboration opportunities. Whether you have a
            question or just want to say hi, my inbox is always open.
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* LEFT: Contact links */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col gap-4"
          >
            <h3 className="font-bold text-white text-xl mb-2">Find me here</h3>
            {contactLinks.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 bg-dark-card/40 backdrop-blur-sm rounded-2xl border border-white/5 hover:border-accent/50 hover:bg-white/5 transition-all duration-300 hover:shadow-glow"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-dark-card rounded-xl border border-white/10 text-slate-400 group-hover:text-accent group-hover:border-accent transition-colors shrink-0">
                  {c.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">{c.label}</p>
                  <p className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">{c.value}</p>
                </div>
                <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-accent transition-colors group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </motion.div>

          {/* RIGHT: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-dark-card/60 backdrop-blur-md rounded-2xl border border-white/5 p-7 shadow-lg"
          >
            <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>
            {sent && (
              <div className="mb-5 px-4 py-3 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-semibold">
                ✓ Message sent! I'll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <input
                required
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
              <input
                required
                type="text"
                name="subject"
                placeholder="Subject"
                value={form.subject}
                onChange={handleChange}
                className={inputClass}
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Your Message"
                value={form.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-accent text-white text-sm font-bold rounded-xl hover:bg-sky-400 hover:shadow-glow active:scale-95 transition-all duration-300 mt-2"
              >
                Send Message →
              </button>
            </form>
          </motion.div>
        </div>

        {/* CTA wide card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-br from-accent/20 to-purple-600/20 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center shadow-glow"
        >
          <h3 className="font-display text-3xl text-white mb-3 text-shadow-sm">Let's Work Together!</h3>
          <p className="text-slate-300 text-base mb-8 max-w-md mx-auto">
            Open to internships, freelance projects, and open-source collaborations.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:kundan.460kr@gmail.com"
              className="px-6 py-3 bg-accent text-white text-sm font-bold rounded-xl hover:bg-sky-400 hover:shadow-glow transition-all"
            >
              Contact Me
            </a>
            <a
              href="/assets/kundan_kumar_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white/5 text-white text-sm font-bold rounded-xl hover:bg-white/10 transition-colors border border-white/10"
            >
              View Resume ↗
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
