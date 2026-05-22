import { Users, Shield, Trophy } from "lucide-react";
import FAQItem from "./FAQItem";

export default function FAQ({ faqs }) {
  return (
    <section id="faq" className="section" style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)" }}>
      <div className="container">
        <div style={{ display: "grid", gap: "4rem", alignItems: "flex-start" }} className="grid-2">
          <div>
            <span className="section-label">Beginner's Corner</span>
            <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
            <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)", marginBottom: "1.5rem" }}>First-Timer FAQ</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: "2rem" }}>Everyone starts somewhere. We designed Mk City Gym to be an inclusive, zero-judgement space where beginners feel just as celebrated as veterans. Here are the questions we hear most.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[{ Icon: Users, text: "Community of 800+ members" }, { Icon: Shield, text: "Certified fitness professionals" }, { Icon: Trophy, text: "Monthly fitness challenges" }].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <div style={{ width: 38, height: 38, borderRadius: 8, background: "rgba(255,107,43,0.1)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon size={17} style={{ color: "var(--orange)" }} />
                  </div>
                  <span style={{ fontSize: "0.93rem", color: "var(--text)" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} />)}
          </div>
        </div>
      </div>
    </section>
  );
}