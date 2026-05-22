import { MapPin, Clock, Phone, Mail, Shield } from "lucide-react";

export default function HoursLocation({ hours, todayIdx }) {
  return (
    <section id="hours" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Plan Your Visit</span>
          <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)" }}>Find Us & Open Hours</h2>
        </div>
        <div style={{ display: "grid", gap: "2rem" }} className="grid-2">
          <div style={{ background: "var(--slate2)", border: "1px solid var(--border)", borderRadius: 12, padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Location</p>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(255,107,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <MapPin size={20} style={{ color: "var(--orange)" }} />
                </div>
                <div>
                  <p className="display" style={{ fontWeight: 800, fontSize: "1.3rem", textTransform: "uppercase" }}>Mk City Gym</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.93rem", marginTop: 2 }}>Hanlon Road, Kampala</p>
                  <p style={{ color: "var(--muted)", fontSize: "0.93rem" }}>Central Region, Uganda</p>
                </div>
              </div>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Contact</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[{ Icon: Phone, text: "+256 700 123 456" }, { Icon: Mail, text: "hello@mkcitygym.ug" }].map(({ Icon, text }, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                    <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,107,43,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <Icon size={16} style={{ color: "var(--orange)" }} />
                    </div>
                    <span style={{ fontSize: "0.95rem", color: "var(--text)" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: "rgba(0,212,255,0.06)", border: "1px solid rgba(0,212,255,0.15)", borderRadius: 10, padding: "1rem", display: "flex", gap: 10, alignItems: "center" }}>
              <Shield size={18} style={{ color: "var(--cyan)", flexShrink: 0 }} />
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>All floor staff are certified in CPR, First Aid & Exercise Science. Safety and proper form are our first priority, always.</p>
            </div>
            <div>
              <p className="section-label" style={{ marginBottom: 12 }}>Facilities</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {["Free Parking", "Changing Rooms", "Showers", "Pro Shop", "Café Corner", "Wifi"].map(f => (
                  <div key={f} style={{ display: "flex", gap: 7, alignItems: "center", fontSize: "0.88rem", color: "var(--muted)" }}><span style={{ color: "var(--orange)" }}>✓</span> {f}</div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ background: "var(--slate2)", border: "1px solid var(--border)", borderRadius: 12, padding: "2rem" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: "1.5rem" }}>
              <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(255,107,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Clock size={20} style={{ color: "var(--orange)" }} />
              </div>
              <div>
                <p className="section-label">Opening Hours</p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>Kampala Time (EAT, UTC+3)</p>
              </div>
            </div>
            {hours.map((h, i) => (
              <div key={i} className={`hours-row ${i === todayIdx ? "today" : ""}`}>
                <span className="display" style={{ fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {h.day}
                  {i === todayIdx && (
                    <span style={{ marginLeft: 8, fontSize: "0.65rem", background: "var(--orange)", color: "white", padding: "2px 7px", borderRadius: 20, letterSpacing: "0.15em", fontWeight: 800, verticalAlign: "middle" }}>TODAY</span>
                  )}
                </span>
                <span style={{ fontSize: "0.92rem" }}>{h.time}</span>
              </div>
            ))}
            <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,107,43,0.07)", borderRadius: 10, border: "1px solid rgba(255,107,43,0.15)" }}>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>🎉 <strong style={{ color: "var(--orange)" }}>Public Holiday Alert:</strong> Hours may vary on Ugandan public holidays. Check our Instagram or WhatsApp channel for live updates before visiting.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}