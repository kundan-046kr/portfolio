import { motion } from "framer-motion";

const timeline = [
  {
    type: "Experience",
    title: "Data Analysis Intern (LLM-based)",
    org: "Edunet Foundation (VOIS for Tech)",
    date: "Jan 2025 – Feb 2025",
    desc: "Analyzed conversational datasets using LLM tools to extract structured insights. Developed Python scripts for data preprocessing and workflow automation.",
  },
  {
    type: "Education",
    title: "B.Tech CSE (Honors in DS & AI)",
    org: "Shri Mata Vaishno Devi University",
    date: "2023 – 2027",
    desc: "CGPA: 7.34/10. Coursework: Data Structures & Algorithms, DBMS, Operating Systems, Computer Networks, Machine Learning.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4 text-shadow-sm">About Me</h2>
          <p className="text-slate-300 max-w-4xl mx-auto leading-relaxed text-lg">
            I'm a backend-focused developer building scalable Node.js and Express APIs with MongoDB. I combine full-stack development skills using React, REST APIs, authentication, and database design to create practical, real-world applications.
          </p>
        </motion.div>

        {/* Experience & Education Timeline */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {timeline.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-dark-card/50 backdrop-blur-md rounded-2xl border border-white/5 p-7 hover:border-accent/30 hover:bg-dark-card/80 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-10 -mt-10 group-hover:bg-accent/10 transition-colors" />
              <span className="text-xs font-bold tracking-widest text-accent uppercase mb-2 block">
                {item.type} • {item.date}
              </span>
              <h3 className="font-bold text-white text-xl mb-1">{item.title}</h3>
              <p className="text-sm text-slate-300 font-medium mb-4">{item.org}</p>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Problem Solving & Certifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Problem Solving Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-dark-card/50 backdrop-blur-md rounded-2xl border border-white/5 p-7 hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="font-bold text-white text-xl mb-3">Problem Solving</h3>
            <p className="text-sm text-slate-400 mb-5 leading-relaxed">
              Consistently sharpening my algorithmic skills. Solved <strong className="text-white">130+ DSA problems</strong> covering 
              arrays, binary search, strings, linked lists, and recursion.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://leetcode.com/u/kundan_046kr/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#ffa116]/10 text-[#ffa116] border border-[#ffa116]/20 rounded-lg text-sm font-semibold hover:bg-[#ffa116]/20 transition-colors"
              >
                LeetCode ↗
              </a>
              <a 
                href="https://www.geeksforgeeks.org/profile/kundan046kr?tab=activity" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#2f8D46]/10 text-[#2f8D46] border border-[#2f8D46]/20 rounded-lg text-sm font-semibold hover:bg-[#2f8D46]/20 transition-colors"
              >
                GeeksForGeeks ↗
              </a>
            </div>
          </motion.div>

          {/* Certifications Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-dark-card/50 backdrop-blur-md rounded-2xl border border-white/5 p-7 hover:border-accent/30 transition-all duration-300"
          >
            <h3 className="font-bold text-white text-xl mb-5">Certifications</h3>
            <div className="flex flex-col gap-3">
              {[
                { name: "Cybersecurity Certification", issuer: "CDAC" },
                { name: "Full Stack Developer Path", issuer: "Scrimba (In Progress)" }
              ].map((cert) => (
                <div key={cert.name} className="flex items-center gap-3 p-3 bg-white/5 rounded-xl border border-white/5">
                  <div className="w-8 h-8 rounded-lg bg-dark-card flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">{cert.name}</p>
                    <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
