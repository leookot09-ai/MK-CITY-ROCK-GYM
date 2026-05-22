import { ArrowRight } from "lucide-react";

export default function Hero({ onNav, stats }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    onNav(id);
  };

  return (
    <section className="hero-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: "70px" }}>
      <div className="hero-accent" />
      <div className="hero-accent2" />
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
      <div className="container" style={{ position: "relative", zIndex: 2, padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 740 }}>
          <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
            <span className="section-label">Kampala's Premier Modern Fitness Destination</span>
            <span style={{ width: 40, height: 1, background: "var(--orange)", display: "inline-block" }} />
          </div>
          <h1 className="display section-title animate-fade-up-1" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "var(--text)", marginBottom: "1.5rem" }}>
            Build Your <br />
            <span style={{ WebkitTextStroke: "2px var(--orange)", WebkitTextFillColor: "transparent", display: "inline-block" }}>Strongest Self</span>{" "}
            in Kampala
          </h1>
          <p className="animate-fade-up-2" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: "2.5rem" }}>
            Whether you're lifting for the first time or training for a marathon, Mk City Gym is East Africa's most modern, inclusive fitness community. All levels. All goals. All welcome.
          </p>
          <div className="animate-fade-up-3" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: "3rem" }}>
            <button className="btn-primary pulse" onClick={e => handleNav(e, "pricing")} type="button">
              View Day Passes <ArrowRight size={18} />
            </button>
            <button className="btn-ghost" onClick={e => handleNav(e, "faq")} type="button">
              First-Timer Guide
            </button>
          </div>
          <div className="animate-fade-up-4" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", borderRadius: 12, overflow: "hidden", maxWidth: 560 }}>
            {stats.map((s, i) => (
              <div key={i} className="stat-block">
                <p className="display" style={{ fontWeight: 900, fontSize: "1.8rem", color: "var(--orange)", lineHeight: 1 }}>{s.value}</p>
                <p style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 4, letterSpacing: "0.08em" }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", width: "clamp(200px, 38%, 480px)", aspectRatio: "3/4", borderRadius: 16, background: "linear-gradient(135deg, var(--slate3) 0%, var(--slate2) 100%)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, overflow: "hidden" }} className="hide-mobile">
          <div style={{ fontSize: "5rem", animation: "drift 8s ease-in-out infinite" }}>🏋️‍♂️</div>
          <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,107,43,0.04) 40px, rgba(255,107,43,0.04) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,107,43,0.04) 40px, rgba(255,107,43,0.04) 41px)" }} />
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(13,17,23,0.95) 0%, transparent 100%)" }}>
            <p className="display" style={{ fontWeight: 900, fontSize: "1.4rem", textTransform: "uppercase" }}>20+ Weekly Classes</p>
            <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Led by certified trainers</p>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <div className="scroll-dot" />
      </div>
    </section>
  );
}