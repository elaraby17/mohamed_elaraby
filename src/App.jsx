import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-[#060910] text-slate-200 overflow-x-hidden">

      {/* Grid background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,245,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,245,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glow orbs */}
      <div
        className="fixed w-[500px] h-[500px] rounded-full pointer-events-none z-0"
        style={{
          background: "#00f5ff",
          top: -200,
          left: -200,
          filter: "blur(80px)",
          opacity: 0.08,
          animation: "float 8s ease-in-out infinite",
        }}
      />
      <div
        className="fixed w-[400px] h-[400px] rounded-full pointer-events-none z-0"
        style={{
          background: "#0066ff",
          bottom: "20%",
          right: -150,
          filter: "blur(80px)",
          opacity: 0.08,
          animation: "float 10s ease-in-out infinite reverse",
        }}
      />

      {/* Content */}
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />

      {/* Footer */}
      <footer className="relative z-10 text-center py-10 border-t" style={{ borderColor: "rgba(0,245,255,0.10)" }}>
        <p className="font-mono text-xs text-slate-600">
          Designed & built by{" "}
          <a href="https://www.linkedin.com/in/mohamed-el-araby-a1a098301/" target="_blank" className="text-cyan-400">Mohamed Elaraby</a> · Full Stack
          Developer ·{" "}
          <span className="text-cyan-400">React & Laravel</span>
        </p>
      </footer>

      {/* Global keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=Fira+Code:wght@300;400;500&display=swap');

        * { font-family: 'Syne', sans-serif; }
        .font-mono, [class*="font-mono"] { font-family: 'Fira Code', monospace !important; }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
