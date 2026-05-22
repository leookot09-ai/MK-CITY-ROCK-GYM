import { ArrowRight } from "lucide-react";

export default function PricingCard({ card }) {
  return (
    <div className={`pricing-card ${card.featured ? "featured" : ""} card-hover`}>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>
          {card.name}
        </p>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.6rem", lineHeight: 1, color: card.featured ? "var(--orange)" : "var(--text)" }}>
          {card.price}
        </p>
        <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 4 }}>{card.usd}</p>
      </div>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem", marginBottom: "1.5rem" }}>
        {card.perks.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.45rem 0", fontSize: "0.9rem", color: "var(--text)" }}>
            <span style={{ color: "var(--orange)", fontSize: "1.1rem", flexShrink: 0 }}>✓</span> {p}
          </div>
        ))}
      </div>
      <button className={`btn-primary ${card.featured ? "pulse" : ""}`} style={{ width: "100%", justifyContent: "center" }} type="button">
        Choose Plan <ArrowRight size={16} />
      </button>
    </div>
  );
}