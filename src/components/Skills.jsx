const skillCategories = [
  {
    title: "Frontend",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Laravel", "PHP", "Node.js", "REST API", "MySQL", "PostgreSQL", "Redis", "Eloquent ORM"],
  },
  {
    title: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "Linux", "Figma", "Postman", "VS Code"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <span className="font-mono text-[11px] text-cyan-400 tracking-[3px] uppercase mb-3 block">
        // 02. skills
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-1px] mb-4 leading-[1.1]">
        Tech Stack
      </h2>
      <div className="w-14 h-0.5 bg-cyan-400 mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {skillCategories.map((cat) => (
          <div
            key={cat.title}
            className="bg-[#0d1117]/80 border rounded-xl p-7 transition-all duration-300 hover:-translate-y-1 group"
            style={{ borderColor: "rgba(0,245,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,255,0.4)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,255,0.12)")}
          >
            <div className="font-mono text-[10px] text-cyan-400 tracking-[2px] uppercase mb-5">
              {cat.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1.5 text-[13px] text-slate-400 font-mono rounded-full border transition-all duration-300 cursor-default hover:text-cyan-400"
                  style={{
                    background: "rgba(0,245,255,0.05)",
                    borderColor: "rgba(0,245,255,0.15)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(0,245,255,0.12)";
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(0,245,255,0.05)";
                    e.currentTarget.style.borderColor = "rgba(0,245,255,0.15)";
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
