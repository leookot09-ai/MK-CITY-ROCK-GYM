import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${faq.q.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, '')}`;

  return (
    <div className="faq-item">
      <button 
        className="faq-btn" 
        aria-expanded={open} 
        aria-controls={id} 
        onClick={() => setOpen(!open)} 
        type="button"
      >
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "1.02rem" }}>{faq.q}</span>
        <span style={{ flexShrink: 0, color: open ? "var(--orange)" : "var(--muted)", transition: "color 0.2s" }}>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div id={id} className={`faq-answer ${open ? "open" : ""}`}>
        <p style={{ paddingBottom: "1.2rem", color: "var(--muted)", lineHeight: 1.75, fontSize: "0.95rem" }}>
          {faq.a}
        </p>
      </div>
    </div>
  );
}