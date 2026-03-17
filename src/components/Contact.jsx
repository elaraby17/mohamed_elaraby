import { useState } from "react";

const contactItems = [
  { icon: "✉", text: "elaraby98123@email.com" , href: "mailto:elaraby98123@email.com"},
  { icon: "📍", text: "Suez ,Egypt" },
  { icon: "in", text: "linkedin.com/in/elaraby", href: "https://www.linkedin.com/in/mohamed-el-araby-a1a098301/"},
  { icon: "⌥", text: "github.com/elaraby", href: "https://github.com/elaraby17"},
  { icon: "📱", text: "20:01069880640" },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="relative z-10 py-24 px-6 max-w-5xl mx-auto">
      <span className="font-mono text-[11px] text-cyan-400 tracking-[3px] uppercase mb-3 block">
        // 04. contact
      </span>
      <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-1px] mb-4 leading-[1.1]">
        Get In Touch
      </h2>
      <div className="w-14 h-0.5 bg-cyan-400 mb-12" />

      <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">
        {/* Left info */}
        <div>
          <h3 className="text-xl font-semibold text-slate-200 mb-4">
            Let's build something amazing together.
          </h3>
          <p className="text-slate-400 leading-[1.8] mb-8 text-sm">
            Whether you have a project in mind, want to collaborate, or just want
            to say hello — my inbox is always open.
          </p>
          <div className="space-y-4">
            {contactItems.map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-slate-400 text-sm">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-cyan-400 text-sm font-mono flex-shrink-0 border"
                  style={{
                    background: "rgba(0,245,255,0.08)",
                    borderColor: "rgba(0,245,255,0.15)",
                  }}
                >
                  {item.icon}
                </div>
                <a href={item.href} target="_blank">{item.text}</a>
              </div>
            ))}
          </div>
        </div>

        {/* Right form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {[
              { key: "name", label: "Name", placeholder: "Your name", type: "text" },
              { key: "email", label: "Email", placeholder: "your@email.com", type: "email" },
            ].map((field) => (
              <div key={field.key} className="flex flex-col gap-2">
                <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  value={form[field.key]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="px-4 py-3 rounded-lg text-slate-200 text-sm font-sans outline-none transition-all duration-300 placeholder:text-slate-600"
                  style={{
                    background: "rgba(13,17,23,0.8)",
                    border: "1px solid rgba(0,245,255,0.12)",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#00f5ff")}
                  onBlur={(e) => (e.target.style.borderColor = "rgba(0,245,255,0.12)")}
                  required
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
              Subject
            </label>
            <input
              type="text"
              placeholder="Project idea..."
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className="px-4 py-3 rounded-lg text-slate-200 text-sm outline-none transition-all duration-300 placeholder:text-slate-600"
              style={{
                background: "rgba(13,17,23,0.8)",
                border: "1px solid rgba(0,245,255,0.12)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00f5ff")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(0,245,255,0.12)")}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="font-mono text-[11px] text-slate-500 tracking-widest uppercase">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="px-4 py-3 rounded-lg text-slate-200 text-sm outline-none transition-all duration-300 placeholder:text-slate-600 resize-none"
              style={{
                background: "rgba(13,17,23,0.8)",
                border: "1px solid rgba(0,245,255,0.12)",
              }}
              onFocus={(e) => (e.target.style.borderColor = "#00f5ff")}
              onBlur={(e) => (e.target.style.borderColor = "rgba(0,245,255,0.12)")}
              required
            />
          </div>

          <button
            type="submit"
            className="px-8 py-3 bg-cyan-400 text-black font-semibold rounded-lg text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,245,255,0.3)] cursor-pointer"
          >
            {sent ? "Message sent! ✓" : "Send message →"}
          </button>
        </form>
      </div>
    </section>
  );
}
