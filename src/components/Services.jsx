import { Zap, Star } from "lucide-react";

export default function Services({ services }) {
  return (
    <section id="services" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">What We Offer</span>
          <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)" }}>Three Ways to Train</h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 520, margin: "1rem auto 0" }}>
            From heavy lifting to high-energy group sessions — we have the space, the equipment, and the coaching to match your fitness journey.
          </p>
        </div>
        <div style={{ display: "grid", gap: "1.5rem" }} className="grid-3">
          {services.map((svc, i) => (
            <div key={i} className="service-card card-hover">
              <div className="service-card-accent" />
              <div style={{ padding: "1.75rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "2.4rem" }}>{svc.icon}</span>
                  <span className={`tag ${svc.tagType}`}>{svc.tag}</span>
                </div>
                <p className="display" style={{ fontWeight: 900, fontSize: "1.7rem", textTransform: "uppercase", color: "var(--text)", lineHeight: 1.1, marginBottom: 4 }}>{svc.title}</p>
                <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--orange)", marginBottom: "1rem" }}>{svc.subtitle}</p>
                <p style={{ color: "var(--muted)", lineHeight: 1.72, fontSize: "0.93rem", marginBottom: "1.5rem" }}>{svc.description}</p>
                <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.25rem" }}>
                  <p className="section-label" style={{ marginBottom: 10 }}>Included</p>
                  {svc.features.map((f, j) => (
                    <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6, fontSize: "0.88rem", color: "var(--text)" }}>
                      <Zap size={12} style={{ color: "var(--orange)", flexShrink: 0 }} />{f}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: "1.25rem", padding: "8px 12px", background: "rgba(255,107,43,0.08)", borderRadius: 6, display: "flex", alignItems: "center", gap: 8 }}>
                  <Star size={13} style={{ color: "var(--orange)" }} />
                  <span style={{ fontSize: "0.8rem", color: "var(--orange)", fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, letterSpacing: "0.08em" }}>{svc.difficulty}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}