const skillGroups = [
  {
    // icon: "⌨️",
    title: "Programming Languages",
    items: ["C", "Java", "Python", "JavaScript"],
    color: "bg-violet-50 border-violet-100",
    badge: "bg-violet-100 text-violet-700",
  },
  {
    // icon: "🖥️",
    title: "Frontend",
    items: ["HTML", "CSS", "React"],
    color: "bg-sky-50 border-sky-100",
    badge: "bg-sky-100 text-sky-700",
  },
  {
    // icon: "⚙️",
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB"],
    color: "bg-emerald-50 border-emerald-100",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    // icon: "🛠️",
    title: "Tools",
    items: ["Git", "GitHub", "VS Code"],
    color: "bg-orange-50 border-orange-100",
    badge: "bg-orange-100 text-orange-700",
  },
];

const coreConcepts = ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Object-Oriented Programming"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Technical Skills</p> */}
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-4">Technical Skills</h2>
          <p className="text-slate-500 mb-2 font-medium">Here are the tools & concepts I work with</p>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            I'm continuously expanding my skill set. Currently deepening my expertise in full-stack development
            and exploring cloud infrastructure and AI/ML tooling.
          </p>
        </div>

        {/* Skill grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-5">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className={`rounded-2xl border p-5 ${group.color} hover:shadow-md hover:-translate-y-0.5 transition-all duration-200`}
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="font-semibold text-slate-900 text-sm mb-3">{group.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className={`px-2.5 py-1 text-xs font-medium rounded-lg ${group.badge}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Core concepts wide card */}
        <div className="bg-slate-900 rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            {/* <span className="text-2xl">🧠</span> */}
            <h3 className="font-semibold text-white">Core Concepts</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {coreConcepts.map((c) => (
              <span
                key={c}
                className="px-3 py-1.5 bg-white/10 text-white/90 text-xs font-medium rounded-full border border-white/10 hover:bg-white/20 transition-colors cursor-default"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
