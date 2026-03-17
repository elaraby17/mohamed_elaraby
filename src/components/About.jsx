const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "15+", label: "Projects Done" },
  { number: "10+", label: "Happy Clients" },
  { number: "∞", label: "Lines of Code" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      {/* Header */}
      <span className="font-mono text-[11px] text-cyan-400 tracking-[3px] uppercase mb-3 block">
        // 01. about me
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-1px] mb-4 leading-[1.1]">
        Who I Am
      </h2>
      <div className="w-14 h-0.5 bg-cyan-400 mb-12" />

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div className="space-y-5">
          <p className="text-slate-400 leading-[1.9] text-base">
            I'm a passionate Full Stack Developer with a strong focus on building
            modern, performant web applications. I specialize in React for dynamic
            frontends and Laravel for robust, scalable backends.
          </p>
          <p className="text-slate-400 leading-[1.9] text-base">
            I love turning complex problems into simple, beautiful, and intuitive
            solutions. Whether it's a pixel-perfect UI or a clean REST API, I care
            deeply about the craft.
          </p>
          <button
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-2 px-8 py-3 bg-transparent text-cyan-400 border border-cyan-500/20 font-medium rounded-lg text-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Let's talk →
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-5">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#0d1117]/80 border border-cyan-500/12 rounded-xl p-6 text-center transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 cursor-default"
              style={{ borderColor: "rgba(0,245,255,0.12)" }}
            >
              <span className="block text-[2.5rem] font-bold text-cyan-400 font-mono leading-none mb-2">
                {stat.number}
              </span>
              <span className="text-[11px] text-slate-500 uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
