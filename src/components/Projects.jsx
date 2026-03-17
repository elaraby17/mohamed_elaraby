const projects = [
  {
    num: "01",
    title: "E-Commerce Platform",
    desc: "Full-featured online store with cart management, payment integration, real-time inventory tracking, and admin dashboard.",
    stack: ["React", "Laravel", "MySQL", "Stripe"],
    demo: "#",
    github: "#",
  },
  {
    num: "02",
    title: "Task Management App",
    desc: "Real-time collaborative project management tool with drag-and-drop Kanban boards, team roles, and activity tracking.",
    stack: ["React", "Laravel", "WebSockets", "Redis"],
    demo: "#",
    github: "#",
  },
  {
    num: "03",
    title: "REST API Service",
    desc: "Scalable RESTful API with JWT auth, role-based access, rate limiting, and comprehensive Swagger documentation.",
    stack: ["Laravel", "JWT", "PostgreSQL", "Docker"],
    demo: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <span className="font-mono text-[11px] text-cyan-400 tracking-[3px] uppercase mb-3 block">
        // 03. projects
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-1px] mb-4 leading-[1.1]">
        My Work
      </h2>
      <div className="w-14 h-0.5 bg-cyan-400 mb-12" />

      <div className="grid md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <div
            key={project.num}
            className="bg-[#0d1117]/80 border rounded-2xl p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
            style={{ borderColor: "rgba(0,245,255,0.12)" }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,255,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(0,245,255,0.12)")}
          >
            {/* Top line on hover */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-400"
              style={{
                background: "linear-gradient(90deg, transparent, #00f5ff, transparent)",
              }}
            />

            <div className="font-mono text-[11px] text-cyan-400/50 mb-4">
              {project.num}
            </div>
            <h3 className="text-lg font-semibold text-slate-200 mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-slate-500 leading-[1.7] mb-6">
              {project.desc}
            </p>

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="text-[11px] px-2.5 py-1 text-cyan-400 font-mono rounded"
                  style={{ background: "rgba(0,245,255,0.08)" }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-5">
              <a
                href={project.demo}
                className="text-[13px] text-slate-500 font-mono hover:text-cyan-400 transition-colors duration-300 no-underline"
              >
                ↗ Live demo
              </a>
              <a
                href={project.github}
                className="text-[13px] text-slate-500 font-mono hover:text-cyan-400 transition-colors duration-300 no-underline"
              >
                ⌥ GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
