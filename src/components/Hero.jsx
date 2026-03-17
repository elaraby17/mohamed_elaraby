import { useState, useEffect } from "react";

const typedTexts = [
  "Full Stack Developer",
  "React Developer",
  "Laravel Developer",
  "Problem Solver",
];

export default function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = typedTexts[textIndex];
    let timeout;

    if (!deleting) {
      if (charIndex <= current.length) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex));
          setCharIndex((c) => c + 1);
        }, 90);
      } else {
        timeout = setTimeout(() => setDeleting(true), 1800);
      }
    } else {
      if (charIndex >= 0) {
        timeout = setTimeout(() => {
          setDisplayText(current.slice(0, charIndex));
          setCharIndex((c) => c - 1);
        }, 60);
      } else {
        setDeleting(false);
        setTextIndex((i) => (i + 1) % typedTexts.length);
        setCharIndex(0);
      }
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, textIndex]);

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 pt-24 pb-16 z-10">
      <div className="text-center max-w-3xl mx-auto">
        {/* Badge */}
        <div
          className="inline-block font-mono text-xs text-cyan-400 border border-cyan-500/20 px-5 py-2 rounded-full mb-8 tracking-widest animate-[fadeDown_0.8s_ease_forwards]"
          style={{ background: "rgba(0,245,255,0.08)" }}
        >
          ⚡ Available for work
        </div>

        {/* Name */}
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.1] tracking-[-2px] mb-4 animate-[fadeUp_0.8s_ease_0.2s_forwards] opacity-0">
          Mohamed
          <br />
          <span className="text-cyan-400">Elaraby</span>
        </h1>

        {/* Typed title */}
        <p className="font-mono text-[clamp(1rem,2vw,1.3rem)] text-slate-500 mb-8 animate-[fadeUp_0.8s_ease_0.4s_forwards] opacity-0">
          {displayText}
          <span className="text-cyan-400 animate-[blink_1s_infinite]">_</span>
        </p>

        {/* Description */}
        <p className="text-[1.05rem] text-slate-400 max-w-xl mx-auto mb-12 leading-[1.8] animate-[fadeUp_0.8s_ease_0.5s_forwards] opacity-0">
          I build exceptional digital experiences with React & Laravel.
          Transforming ideas into scalable, elegant web applications.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 justify-center flex-wrap animate-[fadeUp_0.8s_ease_0.6s_forwards] opacity-0">
          <button
            onClick={() => scrollTo("#projects")}
            className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,245,255,0.3)] cursor-pointer"
          >
            View my work
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 bg-transparent text-cyan-400 border border-cyan-500/20 font-medium rounded-lg text-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-600 text-[11px] font-mono animate-[bounce_2s_infinite]">
        <span>scroll</span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, #00f5ff, transparent)",
          }}
        />
      </div>
    </section>
  );
}
