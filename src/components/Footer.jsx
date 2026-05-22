import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer({ onNav }) {
  const handleNav = (e, id) => {
    e.preventDefault();
    onNav(id);
  };

  return (
    <footer style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)", padding: "3rem 1.5rem 2rem" }}>
      <div className="container">
        <div style={{ display: "grid", gap: "2.5rem", marginBottom: "2.5rem" }} className="grid-3">
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
              <div style={{ width: 34, height: 34, borderRadius: 7, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>💪</div>
              <span className="display" style={{ fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Mk City Gym</span>
            </div>
            <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>Kampala's home for modern fitness since 2022. Built for beginners. Loved by athletes. Open to all.</p>
            <div style={{ display: "flex", gap: 10 }}>
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social Link" style={{ width: 36, height: 36, borderRadius: 8, background: "var(--slate3)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--orange)"; e.currentTarget.style.background = "rgba(255,107,43,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.background = "var(--slate3)"; }}
                >
                  <Icon size={16} style={{ color: "var(--muted)" }} />
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Quick Links</p>
            {[["services", "Fitness Programs"], ["pricing", "Pricing & Passes"], ["hours", "Opening Hours"], ["faq", "First-Timer FAQ"], ["contact", "Book a Session"]].map(([id, label]) => (
              <div key={id} style={{ marginBottom: 8 }}>
                <a href={`#${id}`} className="footer-link" onClick={e => handleNav(e, id)}>{label}</a>
              </div>
            ))}
          </div>
          <div>
            <p className="section-label" style={{ marginBottom: "1rem" }}>Visit Us</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}>
              <div style={{ display: "flex", gap: 10 }}>
                <MapPin size={15} style={{ color: "var(--orange)", flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>Hanlon Road, Kampala <br />Central Region, Uganda</p>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone size={15} style={{ color: "var(--orange)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>+256 700 123 456</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Mail size={15} style={{ color: "var(--orange)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>hello@mkcitygym.ug</span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Clock size={15} style={{ color: "var(--orange)", flexShrink: 0 }} />
                <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>Open daily from 5:30 AM</span>
              </div>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
          <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>© {new Date().getFullYear()} Mk City Gym. All rights reserved.</p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Privacy Policy", "Terms of Use", "Gym Waiver"].map(t => (
              <span key={t} style={{ fontSize: "0.82rem", color: "var(--muted)", cursor: "pointer", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}