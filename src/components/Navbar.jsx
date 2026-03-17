import { useState, useEffect } from "react";

const navLinks = [
  { label: "about", href: "#about", num: "01" },
  { label: "skills", href: "#skills", num: "02" },
  { label: "projects", href: "#projects", num: "03" },
  { label: "contact", href: "#contact", num: "04" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300 ${
          scrolled
            ? "bg-[#060910]/95 backdrop-blur-xl border-b border-cyan-500/10"
            : "bg-[#060910]/80 backdrop-blur-xl border-b border-cyan-500/10"
        }`}
      >
        {/* Logo */}
        <div className="font-mono text-cyan-400 tracking-widest text-sm z-[110] relative select-none">
          &lt;Elaraby /&gt;
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 list-none">
          {navLinks.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="font-mono text-xs tracking-widest uppercase text-slate-500 hover:text-cyan-400 transition-colors duration-300 bg-transparent border-none cursor-pointer"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <button
          className={`md:hidden relative z-[110] flex flex-col justify-center items-center gap-[5px] w-10 h-10 border rounded-lg transition-colors duration-300 ${
            menuOpen
              ? "border-cyan-400/40 bg-cyan-400/5"
              : "border-cyan-500/15 hover:border-cyan-400/40"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded transition-all duration-300 origin-center ${
              menuOpen ? "translate-y-[6.5px] rotate-45 !bg-cyan-400" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded transition-all duration-300 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-[1.5px] bg-slate-300 rounded transition-all duration-300 origin-center ${
              menuOpen ? "-translate-y-[6.5px] -rotate-45 !bg-cyan-400" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-[99] flex flex-col items-center justify-center transition-all duration-350 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(6, 9, 16, 0.97)",
          backdropFilter: "blur(24px)",
        }}
      >
        {/* Top cyan line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, #00f5ff, transparent)",
          }}
        />

        <div className="flex flex-col items-center w-full">
          {navLinks.map((link, i) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`w-full text-center py-6 font-mono text-2xl tracking-widest uppercase text-slate-500 hover:text-cyan-400 hover:bg-cyan-400/[0.04] transition-all duration-300 border-none bg-transparent cursor-pointer ${
                menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: menuOpen ? `${i * 0.06 + 0.05}s` : "0s",
              }}
            >
              <span className="block text-[10px] text-cyan-400/50 tracking-[3px] mb-1">
                {link.num}
              </span>
              {link.label}
            </button>
          ))}
        </div>

        {/* Footer tag */}
        <div
          className={`absolute bottom-10 font-mono text-xs text-slate-600 tracking-widest transition-all duration-400 ${
            menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
          }`}
          style={{ transitionDelay: menuOpen ? "0.3s" : "0s" }}
        >
          &lt;<span className="text-cyan-400">Elaraby</span> /&gt; · Full Stack Developer
        </div>
      </div>
    </>
  );
}
