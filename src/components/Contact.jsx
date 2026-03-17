const socials = [
  {
    key: "instagram",
    name: "Instagram",
    handle: "@me_mohamedessam",
    href: "https://www.instagram.com/me_mohamedessam/",
    hoverBorder: "rgba(225,48,108,0.5)",
    hoverShadow: "0 12px 30px rgba(225,48,108,0.12)",
    nameColor: "#E1306C",
    iconBg: "linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    key: "facebook",
    name: "Facebook",
    handle: "mohamed.el.araby",
    href: "https://www.facebook.com/mohamed.el.araby.833588",
    hoverBorder: "rgba(24,119,242,0.5)",
    hoverShadow: "0 12px 30px rgba(24,119,242,0.12)",
    nameColor: "#1877F2",
    iconBg: "#1877F2",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    handle: "mohamed-el-araby",
    href: "https://www.linkedin.com/in/mohamed-el-araby-a1a098301/",
    hoverBorder: "rgba(10,102,194,0.5)",
    hoverShadow: "0 12px 30px rgba(10,102,194,0.12)",
    nameColor: "#0A66C2",
    iconBg: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    key: "github",
    name: "GitHub",
    handle: "elaraby17",
    href: "https://github.com/elaraby17",
    hoverBorder: "rgba(240,246,252,0.3)",
    hoverShadow: "0 12px 30px rgba(255,255,255,0.06)",
    nameColor: "#e2e8f0",
    iconBg: "#24292e",
    iconBorder: "1px solid rgba(255,255,255,0.1)",
    icon: (
      <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    key: "phone",
    name: "Phone",
    handle: "+20 106 988 0640",
    href: "tel:+201069880640",
    hoverBorder: "rgba(0,245,255,0.5)",
    hoverShadow: "0 12px 30px rgba(0,245,255,0.1)",
    nameColor: "#00f5ff",
    iconBg: "rgba(0,245,255,0.08)",
    iconBorder: "1px solid rgba(0,245,255,0.2)",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#00f5ff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .18h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.09-1.09a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
      </svg>
    ),
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-24 px-6 max-w-2xl mx-auto">
      {/* Header */}
      <span className="font-mono text-[11px] text-cyan-400 tracking-[3px] uppercase mb-3 block">
        // 04. contact
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-1px] mb-4 leading-[1.1]">
        Get In Touch
      </h2>
      <div className="w-14 h-0.5 bg-cyan-400 mb-10" />

      <p className="text-slate-400 text-base leading-[1.8] mb-12 max-w-lg">
        Got a project in mind or want to work together?
        Hit me up directly — I usually reply within hours.
      </p>

      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/201069880640// WhatsApp message?text=Hi%20Mohamed!%20I%20saw%20your%20portfolio..."
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center gap-4 w-full py-5 rounded-2xl text-white font-bold text-lg mb-3 no-underline transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "linear-gradient(135deg,#25D366,#128C7E)",
          boxShadow: "0 4px 20px rgba(37,211,102,0.2)",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 16px 40px rgba(37,211,102,0.35)")}
        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.2)")}
      >
        {/* WhatsApp icon */}
        <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 32 32" fill="none">
          <path d="M16 4.5C10.201 4.5 5.5 9.201 5.5 15c0 2.167.648 4.182 1.762 5.862L5.5 26.5l5.78-1.738A10.47 10.47 0 0016 25.5c5.799 0 10.5-4.701 10.5-10.5S21.799 4.5 16 4.5z" fill="white" />
          <path d="M12.5 10.8c-.3-.7-.62-.71-.92-.72h-.75c-.27 0-.7.1-1.07.5-.37.4-1.4 1.37-1.4 3.33s1.43 3.87 1.63 4.13c.2.27 2.77 4.37 6.83 5.97 3.37 1.33 4.07 1.07 4.8 1 .74-.07 2.37-.97 2.7-1.9.34-.93.34-1.73.24-1.9-.1-.17-.37-.27-.77-.47s-2.37-1.17-2.74-1.3c-.37-.13-.63-.2-.9.2-.27.4-1.03 1.3-1.27 1.57-.23.27-.47.3-.87.1-.4-.2-1.67-.62-3.18-1.97-1.18-1.05-1.97-2.34-2.2-2.74-.23-.4-.02-.62.17-.82.18-.17.4-.47.6-.7.2-.23.27-.4.4-.67.13-.27.07-.5-.03-.7-.1-.2-.88-2.12-1.23-2.83z" fill="#25D366" />
        </svg>
        Chat on WhatsApp
      </a>

      <p className="text-center font-mono text-[11px] text-slate-600 mb-12 tracking-widest">
        Usually replies within <span className="text-green-400">1–2 hours</span> ⚡
      </p>

      {/* Divider */}
      <div className="flex items-center gap-4 mb-7">
        <div className="flex-1 h-px" style={{ background: "rgba(0,245,255,0.1)" }} />
        <span className="font-mono text-[11px] text-slate-600 tracking-[2px] uppercase whitespace-nowrap">
          or find me on
        </span>
        <div className="flex-1 h-px" style={{ background: "rgba(0,245,255,0.1)" }} />
      </div>

      {/* Social Grid — 5 cards */}
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {socials.map((s) => (
          <a
            key={s.key}
            href={s.href}
            target={s.key !== "phone" ? "_blank" : undefined}
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-2 py-5 px-2 rounded-2xl no-underline transition-all duration-300 hover:-translate-y-1"
            style={{
              background: "rgba(13,17,23,0.9)",
              border: "1px solid rgba(0,245,255,0.12)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = s.hoverBorder;
              e.currentTarget.style.boxShadow = s.hoverShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(0,245,255,0.12)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{
                background: s.iconBg,
                border: s.iconBorder || "none",
              }}
            >
              {s.icon}
            </div>
            <span
              className="font-mono text-[10px] tracking-widest uppercase"
              style={{ color: s.nameColor }}
            >
              {s.name}
            </span>
            <span className="text-[10px] text-slate-500 text-center leading-tight break-all">
              {s.handle}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
