import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "REST APIs", "JWT Auth"],
    color: "bg-emerald-500/10 border-emerald-500/20",
    badge: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",
  },
  {
    title: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQL"],
    color: "bg-sky-500/10 border-sky-500/20",
    badge: "bg-sky-500/20 text-sky-300 border border-sky-500/30",
  },
  {
    title: "Languages",
    items: ["JavaScript (ES6+)", "C++", "Python"],
    color: "bg-indigo-500/10 border-indigo-500/20",
    badge: "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",
  },
  {
    title: "Tools & AI",
    items: ["Git & GitHub", "Postman", "Docker", "Gemini API"],
    color: "bg-orange-500/10 border-orange-500/20",
    badge: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  },
];

const coreConcepts = ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Machine Learning"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-dark-card/30 border-y border-white/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-shadow-sm">Technical Skills</h2>
          <p className="text-accent mb-2 font-semibold tracking-wide">Here are the tools & concepts I work with</p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            I'm continuously expanding my skill set. Currently deepening my expertise in full-stack development
            and exploring cloud infrastructure and AI/ML tooling.
          </p>
        </motion.div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
          {skillGroups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-2xl border p-6 ${group.color} backdrop-blur-md hover:shadow-glow hover:-translate-y-1 transition-all duration-300`}
            >
              {group.icon && <div className="text-2xl mb-3">{group.icon}</div>}
              <h3 className="font-bold text-white text-base mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className={`px-3 py-1.5 text-xs font-semibold rounded-lg ${group.badge} shadow-sm`}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Core concepts wide card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-dark-card border border-white/5 rounded-2xl p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <h3 className="font-bold text-white text-lg">Core Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {coreConcepts.map((c) => (
              <span
                key={c}
                className="px-4 py-2 bg-white/5 text-slate-300 text-sm font-medium rounded-xl border border-white/10 hover:bg-white/10 hover:text-white transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
