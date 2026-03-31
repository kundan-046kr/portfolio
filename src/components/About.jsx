const infoCards = [
  {
    // icon: "💻",
    title: "What I Do",
    text: "I build full-stack web applications using the MERN stack, focusing on clean architecture and intuitive user experiences.",
  },
  {
    // icon: "🚀",
    title: "My Journey",
    text: "Started with C and Java, progressed to web development. Currently a 3rd-year CS student exploring backend systems and APIs.",
  },
  {
    // icon: "🎯",
    title: "Hobbies",
    text: "When not coding, I enjoy solving DSA problems, reading about system design, and tinkering with new frameworks.",
  },
  {
    // icon: "🤝",
    title: "Let's Connect",
    text: "I'm always open to interesting conversations, collaborations, and new opportunities. Feel free to reach out!",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          {/* <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">Get to Know Me</p> */}
          <h2 className="font-display text-4xl md:text-5xl text-slate-900 mb-4">About Me</h2>
          <p className="text-slate-600 max-w-4xl mx-auto leading-relaxed">
            I'm a 3rd-year Computer Science student with a passion for building real-world
            applications. I'm currently deepening my skills in the MERN stack while exploring
            AI integrations and Cloud technologies. I believe in writing clean, maintainable
            code and learning something new every day.
          </p>
        </div>

        {/* 2×2 info cards */}
        <div className="grid sm:grid-cols-2 gap-5 mb-5">
          {infoCards.map((card) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="text-2xl mb-3">{card.icon}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{card.text}</p>
            </div>
          ))}
        </div>

        {/* Wide certifications card */}
        <div className="bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-md transition-all duration-200">
          <div className="flex items-start gap-4">
            {/* <div className="text-2xl shrink-0">🏆</div> */}
            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Certifications & Achievements</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "MongoDB Atlas Certification",
                  "freeCodeCamp — Responsive Web Design",
                  "Coursera — Python for Everybody",
                  "HackerRank — Problem Solving (Gold)",
                  "LeetCode — 100+ Problems Solved",
                  "Google Cloud — Fundamentals",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="px-3 py-1.5 bg-accent-light text-accent text-xs font-medium rounded-full"
                  >
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
