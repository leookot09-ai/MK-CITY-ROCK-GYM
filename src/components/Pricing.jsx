import { useState } from "react";
import PricingCard from "./PricingCard";

export default function Pricing({ dailyPasses, monthlyPasses }) {
  const [tab, setTab] = useState("daily");
  const passes = tab === "daily" ? dailyPasses : monthlyPasses;

  return (
    <section id="pricing" className="section" style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <span className="section-label">Transparent Pricing</span>
          <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)", marginBottom: "1.5rem" }}>Pick Your Pass</h2>
          <div className="toggle-pill">
            <button className={`toggle-btn ${tab === "daily" ? "active" : ""}`} onClick={() => setTab("daily")} type="button">Daily Passes</button>
            <button className={`toggle-btn ${tab === "monthly" ? "active" : ""}`} onClick={() => setTab("monthly")} type="button">Monthly</button>
          </div>
        </div>
        <div style={{ display: "grid", gap: "1.5rem", maxWidth: 720, margin: "0 auto" }} className="grid-pricing">
          {passes.map((card, i) => <PricingCard key={i} card={card} />)}
        </div>
        <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "var(--muted)" }}>
          All prices include VAT. Membership auto-renews monthly — cancel anytime. <span style={{ color: "var(--orange)" }}>Group discounts available.</span>
        </p>
      </div>
    </section>
  );
}