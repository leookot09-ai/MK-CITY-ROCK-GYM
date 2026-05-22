import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ scrolled, onNav }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    onNav(id);
  };

  return (
    <>
      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button 
          onClick={() => setMenuOpen(false)} 
          className="show-mobile-only" 
          aria-label="Close menu" 
          type="button"
          style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", cursor: "pointer", color: "var(--text)" }}
        >
          <X size={28} />
        </button>
        {["services", "pricing", "hours", "faq", "contact"].map(id => (
          <a 
            key={id} 
            href={`#${id}`} 
            className="mobile-nav-link" 
            onClick={e => handleNav(e, id)}
          >
            {id === "faq" ? "FAQ" : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button 
          className="btn-primary" 
          onClick={e => handleNav(e, "contact")} 
          type="button"
        >
          Book a Session <ArrowRight size={16} />
        </button>
      </div>

      {/* Desktop Navbar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 1.5rem",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 38, height: 38, borderRadius: 8,
              background: "var(--orange)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem", flexShrink: 0,
            }}>🧗</div>
            <div>
              <span className="display" style={{ fontWeight: 900, fontSize: "1.25rem", textTransform: "uppercase" }}>Mk City Rock</span>
              <span className="display" style={{ fontWeight: 400, fontSize: "0.7rem", display: "block", color: "var(--orange)", marginTop: -3 }}>Gym · Kampala</span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {[["services", "Services"],["pricing", "Pricing"],["hours", "Hours"],["contact", "Booking"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav-link" onClick={e => handleNav(e, id)}>{label}</a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="btn-primary hide-mobile" onClick={e => handleNav(e, "contact")} type="button">Book a Session</button>
            <button
              className="show-mobile-only"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              type="button"
              style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 4 }}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}