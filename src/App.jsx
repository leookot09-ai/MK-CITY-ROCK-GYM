import { useState, useEffect } from "react";
import {
  MapPin, Clock, Phone, Shield, Trophy, Users,
  Menu, X, ChevronDown, ChevronUp, ArrowRight,
  Instagram, Facebook, Twitter, Mail, Star, Zap
} from "lucide-react";
import "./styles/global.css";

/* ─────────────────────────── DATA ─────────────────────────── */
const SERVICES = [
  {
    icon: "🧱",
    tag: "No Ropes",
    tagType: "tag-orange",
    title: "Bouldering",
    subtitle: "Raw Power. Pure Movement.",
    description: "Our bouldering cave features 40+ problems refreshed monthly, from beginner-friendly V0 slabs to punishing V8 overhangs. Low walls, crash-pad floors, and zero gear required — just shoes, chalk, and determination.",
    features: ["40+ graded problems", "Problems reset monthly", "Crash-pad flooring", "Chalk & shoe rental available"],
    difficulty: "All Levels"
  },
  {
    icon: "🧗",
    tag: "Beginner Friendly",
    tagType: "tag-cyan",
    title: "Top-Rope Climbing",
    subtitle: "Safe. Supported. Exhilarating.",
    description: "Scale walls up to 12 metres with a rope above you for maximum confidence. Our certified staff supervise every session and offer complimentary orientation for first-timers. The perfect starting point for your climbing journey.",
    features: ["Walls up to 12 metres", "Full harness & belay systems", "Supervised intro sessions", "Certified gym staff on site"],
    difficulty: "Beginner → Intermediate"
  },
  {
    icon: "🏆",
    tag: "Advanced",
    tagType: "tag-green",
    title: "Lead Climbing & Training",
    subtitle: "Train Hard. Climb Higher.",
    description: "Progress into sport climbing with our lead-certified routes, clip-in anchors, and structured coaching programmes. Whether you're prepping for outdoor crags or competing, our coaches tailor a plan around your goals.",
    features: ["Certified lead routes", "Strength & technique coaching", "Hangboard & campus boards", "Monthly comp-style events"],
    difficulty: "Intermediate → Advanced"
  },
];

const DAILY_PASSES = [
  { name: "Day Pass", price: "UGX 25,000", usd: "≈ $6.50", featured: false, perks: ["Full climbing floor access", "Bouldering + top-rope", "Locker room & showers", "Complimentary chalk bag", "Valid 9 AM – close"] },
  { name: "Day Pass + Gear", price: "UGX 38,000", usd: "≈ $10.00", featured: true, perks: ["Everything in Day Pass", "Climbing shoe rental", "Harness & belay device", "Chalk bag included", "Guided orientation session"] },
];

const MONTHLY_PASSES = [
  { name: "Full Access Membership", price: "UGX 180,000", usd: "≈ $47 / month", featured: false, perks: ["Unlimited daily climbing", "Priority lane access", "Free shoe rental all month", "10% off coaching packages", "Member community events"] },
  { name: "Crew Membership", price: "UGX 300,000", usd: "≈ $78 / month", featured: true, perks: ["Everything in Full Access", "Bring 2 guests per month", "Free monthly intro class", "Exclusive route previews", "Dedicated locker (30-day)"] },
];

const HOURS = [
  { day: "Monday", time: "7:30 AM – 10:00 PM" },
  { day: "Tuesday", time: "5:30 AM – 10:00 PM" },
  { day: "Wednesday", time: "7:00 AM – 10:00 PM" },
  { day: "Thursday", time: "7:00 AM – 10:00 PM" },
  { day: "Friday", time: "7:00 AM – 10:00 PM" },
  { day: "Saturday", time: "7:00 AM – 10:00 PM" },
  { day: "Sunday", time: "7:00 AM – 10:00 PM" },
];

const FAQS = [
  { q: "Do I need prior climbing experience?", a: "Not at all! The majority of our members started as complete beginners. Every new visitor receives a free orientation with one of our certified staff who'll walk you through safety basics, how to use the equipment, and suggest routes that match your fitness level. You'll be on the wall within 20 minutes of arrival." },
  { q: "What should I wear to a session?", a: "Wear comfortable, form-fitting athletic clothing that allows a full range of motion — think leggings, athletic shorts, or joggers. Avoid loose jeans or anything baggy that might catch on holds. Climbing shoes are available to rent at the gym (highly recommended), but clean trainers work for your very first visit." },
  { q: "Is rental gear available, and is it clean?", a: "Yes. We maintain a full fleet of climbing shoes (sizes UK 2–14), harnesses, belay devices, and chalk bags. All rental shoes are sanitized after every session using UV treatment and antibacterial spray. We replace worn equipment on a strict rotation schedule." },
  { q: "Is Mk City Rock Gym safe for children?", a: "Absolutely. We welcome climbers from age 6 upward. Children under 16 must be accompanied by a consenting adult. Our bouldering area features thick foam crash pads, and our top-rope section uses auto-belay devices specifically rated for lighter loads. Junior programmes and school group packages are available — contact us for details." },
  { q: "Can I come alone, or do I need a partner?", a: "Our bouldering area is perfect for solo sessions — no partner required. For top-rope and lead climbing, you'll either need a belay-certified partner or book a session with one of our staff belayers (available as an add-on). Auto-belay devices on several of our top-rope routes also allow solo climbing at height." },
  { q: "Do you offer group bookings or corporate packages?", a: "Yes — group and corporate sessions are one of our specialties. Whether it's a team-building afternoon, a birthday party, or a school excursion, we offer exclusive gym hire slots, dedicated instructors, and catering coordination. Reach out via the contact form below or call us to discuss a custom package." },
];

const STATS = [
  { value: "450+", label: "Active Members" },
  { value: "60+", label: "Climbing Routes" },
  { value: "12 m", label: "Tallest Wall" },
  { value: "3 yrs", label: "Open in Kampala" },
];

/* ─────────────────────────── SUB-COMPONENTS ─────────────────────────── */
function PricingCard({ card }) {
  return (
    <div className={`pricing-card ${card.featured ? "featured" : ""} card-hover`}>
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.1rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)", marginBottom: 4 }}>{card.name}</p>
        <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "2.6rem", lineHeight: 1, color: card.featured ? "var(--orange)" : "var(--text)" }}>{card.price}</p>
        <p style={{ fontSize: "0.82rem", color: "var(--muted)", marginTop: 4 }}>{card.usd}</p>
      </div>
      <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.2rem", marginBottom: "1.5rem" }}>
        {card.perks.map((p, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.45rem 0", fontSize: "0.9rem", color: "var(--text)" }}>
            <span style={{ color: "var(--orange)", fontSize: "1.1rem", flexShrink: 0 }}>✓</span> {p}
          </div>
        ))}
      </div>
      <button className={`btn-primary ${card.featured ? "pulse" : ""}`} type="button" style={{ width: "100%", justifyContent: "center" }}>
        Choose Plan <ArrowRight size={16} />
      </button>
    </div>
  );
}

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);
  const id = `faq-${faq.q.replace(/\s+/g, '-').toLowerCase().replace(/[^\w-]/g, '')}`;
  return (
    <div className="faq-item">
      <button className="faq-btn" type="button" aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        <span style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 500, fontSize: "1.02rem" }}>{faq.q}</span>
        <span style={{ flexShrink: 0, color: open ? "var(--orange)" : "var(--muted)", transition: "color 0.2s" }}>
          {open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </span>
      </button>
      <div id={id} className={`faq-answer ${open ? "open" : ""}`}>
        <p style={{ paddingBottom: "1.2rem", color: "var(--muted)", lineHeight: 1.75, fontSize: "0.95rem" }}>{faq.a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── MAIN APP ─────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pricingTab, setPricingTab] = useState("daily");
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", message: "" });
  const [formSent, setFormSent] = useState(false);

  const todayIndex = new Date().getDay();
  const dayMap = [6, 0, 1, 2, 3, 4, 5];
  const todayHoursIdx = dayMap[todayIndex];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNav = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleFormChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));
  const handleFormSubmit = e => {
    e.preventDefault();
    setFormSent(true);
    setTimeout(() => setFormSent(false), 5000);
    setFormData({ name: "", email: "", phone: "", experience: "", message: "" });
  };

  const passes = pricingTab === "daily" ? DAILY_PASSES : MONTHLY_PASSES;

  return (
    <>
      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "1.5rem", background: "none", border: "none", cursor: "pointer", color: "var(--text)" }} aria-label="Close menu" type="button">
          <X size={28} />
        </button>
        {["services", "pricing", "hours", "faq", "contact"].map(id => (
          <a key={id} href={`#${id}`} className="mobile-nav-link" onClick={e => handleNav(e, id)}>
            {id === "faq" ? "FAQ" : id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        <button className="btn-primary" onClick={e => handleNav(e, "contact")} type="button">
          Book a Session <ArrowRight size={16} />
        </button>
      </div>

      {/* Navbar */}
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(13,17,23,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "all 0.4s ease",
        padding: "0 1.5rem",
      }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{ width: 38, height: 38, borderRadius: 8, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.2rem", flexShrink: 0 }}>🧗</div>
            <div>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.25rem", letterSpacing: "0.04em", textTransform: "uppercase", color: "var(--text)" }}>Mk City Rock</span>
              <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 400, fontSize: "0.7rem", display: "block", letterSpacing: "0.25em", color: "var(--orange)", textTransform: "uppercase", marginTop: -3 }}>Gym · Kampala</span>
            </div>
          </div>
          <nav className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
            {[["services", "Services"],["pricing", "Pricing"],["hours", "Hours"],["contact", "Booking"]].map(([id, label]) => (
              <a key={id} href={`#${id}`} className="nav-link" onClick={e => handleNav(e, id)}>{label}</a>
            ))}
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="btn-primary hide-mobile" style={{ padding: "0.6rem 1.2rem", fontSize: "0.82rem" }} onClick={e => handleNav(e, "contact")} type="button">Book a Session</button>
            <button className="show-mobile-only" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 4 }} aria-label="Open navigation menu" type="button">
              <Menu size={26} />
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="hero-bg" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", position: "relative", overflow: "hidden", paddingTop: "70px" }}>
        <div className="hero-accent" />
        <div className="hero-accent2" />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "40px 40px", pointerEvents: "none" }} />
        <div className="container" style={{ position: "relative", zIndex: 2, padding: "4rem 1.5rem" }}>
          <div style={{ maxWidth: 740 }}>
            <div className="animate-fade-up" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1.5rem" }}>
              <span className="section-label">Kampala's Premier Indoor Climbing Destination</span>
              <span style={{ width: 40, height: 1, background: "var(--orange)", display: "inline-block" }} />
            </div>
            <h1 className="display section-title animate-fade-up-1" style={{ fontSize: "clamp(3.5rem, 9vw, 7rem)", color: "var(--text)", marginBottom: "1.5rem" }}>
              Conquer New <br />
              <span style={{ WebkitTextStroke: "2px var(--orange)", WebkitTextFillColor: "transparent", display: "inline-block" }}>Heights</span>{" "}
              in Kampala
            </h1>
            <p className="animate-fade-up-2" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--muted)", lineHeight: 1.75, maxWidth: 560, marginBottom: "2.5rem" }}>
              Whether you've never touched a wall or you're training for the crag, Mk City Rock Gym is East Africa's most vibrant indoor climbing community. All skill levels. All are welcome.
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
              {STATS.map((s, i) => (
                <div key={i} className="stat-block">
                  <p className="display" style={{ fontWeight: 900, fontSize: "1.8rem", color: "var(--orange)", lineHeight: 1 }}>{s.value}</p>
                  <p style={{ fontSize: "0.7rem", color: "var(--muted)", marginTop: 4, letterSpacing: "0.08em" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <div style={{ position: "absolute", right: "3%", top: "50%", transform: "translateY(-50%)", width: "clamp(200px, 38%, 480px)", aspectRatio: "3/4", borderRadius: 16, background: "linear-gradient(135deg, var(--slate3) 0%, var(--slate2) 100%)", border: "1px solid var(--border)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 16, overflow: "hidden" }} className="hide-mobile">
            <div style={{ fontSize: "5rem", animation: "drift 8s ease-in-out infinite" }}>🧗</div>
            <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(255,107,43,0.04) 40px, rgba(255,107,43,0.04) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(255,107,43,0.04) 40px, rgba(255,107,43,0.04) 41px)" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1.5rem", background: "linear-gradient(to top, rgba(13,17,23,0.95) 0%, transparent 100%)" }}>
              <p className="display" style={{ fontWeight: 900, fontSize: "1.4rem", textTransform: "uppercase" }}>45+ Routes</p>
              <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>Refreshed every month</p>
            </div>
          </div>
        </div>
        <div className="scroll-cue">
          <span style={{ fontSize: "0.65rem", color: "var(--muted)", letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
          <div className="scroll-dot" />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="section" style={{ background: "var(--slate)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">What We Offer</span>
            <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
            <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)" }}>Three Ways to Climb</h2>
            <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 520, margin: "1rem auto 0" }}>
              From floor-level power moves to heart-pounding lead routes — we have the discipline, the gear, and the community to match where you are today.
            </p>
          </div>
          <div style={{ display: "grid", gap: "1.5rem" }} className="grid-3">
            {SERVICES.map((svc, i) => (
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

      {/* Pricing */}
      <section id="pricing" className="section" style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Transparent Pricing</span>
            <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
            <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)", marginBottom: "1.5rem" }}>Pick Your Pass</h2>
            <div className="toggle-pill">
              <button className={`toggle-btn ${pricingTab === "daily" ? "active" : ""}`} onClick={() => setPricingTab("daily")} type="button">Daily Passes</button>
              <button className={`toggle-btn ${pricingTab === "monthly" ? "active" : ""}`} onClick={() => setPricingTab("monthly")} type="button">Monthly</button>
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

      {/* Hours + Location */}
      <section id="hours" className="section" style={{ background: "var(--slate)" }}>
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
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: "rgba(255,107,43,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={20} style={{ color: "var(--orange)" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 800, fontSize: "1.3rem", textTransform: "uppercase" }}>Mk City Rock Gym</p>
                    <p style={{ color: "var(--muted)", fontSize: "0.93rem", marginTop: 2 }}>Hanlon Road, Kampala</p>
                    <p style={{ color: "var(--muted)", fontSize: "0.93rem" }}>Central Region, Uganda</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="section-label" style={{ marginBottom: 12 }}>Contact</p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {[{ Icon: Phone, text: "+256 700 123 456" }, { Icon: Mail, text: "hello@mkcityrock.ug" }].map(({ Icon, text }, i) => (
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
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.5 }}>All staff are certified by the Uganda Mountaineering & Climbing Association (UMCA). Safety is our first route, always.</p>
              </div>
              <div>
                <p className="section-label" style={{ marginBottom: 12 }}>Facilities</p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                  {["Free Parking", "Changing Rooms", "Showers", "Gear Shop", "Café Corner", "Wifi"].map(f => (
                    <div key={f} style={{ display: "flex", gap: 7, alignItems: "center", fontSize: "0.88rem", color: "var(--muted)" }}>
                      <span style={{ color: "var(--orange)" }}>✓</span> {f}
                    </div>
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
              {HOURS.map((h, i) => (
                <div key={i} className={`hours-row ${i === todayHoursIdx ? "today" : ""}`}>
                  <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {h.day}
                    {/* ✅ FIXED: && instead of & & */}
                    {i === todayHoursIdx && (
                      <span style={{ marginLeft: 8, fontSize: "0.65rem", background: "var(--orange)", color: "white", padding: "2px 7px", borderRadius: 20, letterSpacing: "0.15em", fontWeight: 800, verticalAlign: "middle" }}>TODAY</span>
                    )}
                  </span>
                  <span style={{ fontSize: "0.92rem" }}>{h.time}</span>
                </div>
              ))}
              <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,107,43,0.07)", borderRadius: 10, border: "1px solid rgba(255,107,43,0.15)" }}>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.6 }}>
                  🎉 <strong style={{ color: "var(--orange)" }}>Public Holiday Alert:</strong> Hours may vary on Ugandan public holidays. Check our Instagram or WhatsApp channel for live updates before visiting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section" style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gap: "4rem", alignItems: "flex-start" }} className="grid-2">
            <div>
              <span className="section-label">Beginner's Corner</span>
              <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
              <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)", marginBottom: "1.5rem" }}>First-Timer FAQ</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.75, marginBottom: "2rem" }}>
                Everyone starts somewhere. We designed Mk City Rock Gym to be an inclusive, zero-judgement space where beginners feel just as celebrated as veterans. Here are the questions we hear most.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[{ Icon: Users, text: "Community of 450+ climbers" }, { Icon: Shield, text: "UMCA-certified safety programme" }, { Icon: Trophy, text: "Monthly beginners' challenges" }].map(({ Icon, text }, i) => (
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
              {FAQS.map((faq, i) => <FAQItem key={i} faq={faq} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section" style={{ background: "var(--slate)" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <span className="section-label">Get In Touch</span>
            <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
            <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)" }}>Book a Session or Drop Us a Line</h2>
            <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>
              Reserve your spot, ask about group packages, or just say hello. We respond to all enquiries within 4 working hours.
            </p>
          </div>
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            {formSent ? (
              <div style={{ background: "rgba(46,160,67,0.1)", border: "1px solid rgba(46,160,67,0.35)", borderRadius: 12, padding: "2.5rem", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
                <p className="display" style={{ fontWeight: 900, fontSize: "1.8rem", textTransform: "uppercase", color: "#3fb950", marginBottom: 8 }}>You're on the wall!</p>
                <p style={{ color: "var(--muted)" }}>Thanks for reaching out. Our team will be in touch within 4 hours. Get ready to climb!</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} style={{ background: "var(--slate2)", border: "1px solid var(--border)", borderRadius: 12, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gap: "1.25rem" }} className="grid-2">
                  <div>
                    <label htmlFor="name" className="form-label">Full Name *</label>
                    <input id="name" required name="name" value={formData.name} onChange={handleFormChange} className="form-input" placeholder="e.g. Amara Nakato" />
                  </div>
                  <div>
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input id="email" required type="email" name="email" value={formData.email} onChange={handleFormChange} className="form-input" placeholder="you@example.com" />
                  </div>
                </div>
                <div style={{ display: "grid", gap: "1.25rem" }} className="grid-2">
                  <div>
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleFormChange} className="form-input" placeholder="+256 7XX XXX XXX" />
                  </div>
                  <div>
                    <label htmlFor="experience" className="form-label">Climbing Experience *</label>
                    <select id="experience" required name="experience" value={formData.experience} onChange={handleFormChange} className="form-input">
                      <option value="" disabled>Select your level</option>
                      <option value="none">Complete Beginner — Never Climbed</option>
                      <option value="casual">Casual Climber — Less Than 6 Months</option>
                      <option value="intermediate">Intermediate — 6 Months to 2 Years</option>
                      <option value="advanced">Experienced — 2+ Years</option>
                      <option value="competitive">Competitive / Lead Certified</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="form-label">Message / Booking Details</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleFormChange} className="form-input" rows={4} placeholder="Tell us what you're looking for..." style={{ resize: "vertical" }} />
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.85rem 1rem", background: "rgba(0,212,255,0.05)", borderRadius: 8, border: "1px solid rgba(0,212,255,0.12)" }}>
                  <Shield size={15} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                  <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>By submitting this form, you agree to our liability waiver policy. Full waiver is signed on your first in-person visit.</p>
                </div>
                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "1rem" }}>
                  Send Message & Book Session <ArrowRight size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: "var(--slate2)", borderTop: "1px solid var(--border)", padding: "3rem 1.5rem 2rem" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <div style={{ display: "grid", gap: "2.5rem", marginBottom: "2.5rem" }} className="grid-3">
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "1rem" }}>
                <div style={{ width: 34, height: 34, borderRadius: 7, background: "var(--orange)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem" }}>🧗</div>
                <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 900, fontSize: "1.1rem", textTransform: "uppercase", letterSpacing: "0.06em" }}>Mk City Rock Gym</span>
              </div>
              <p style={{ color: "var(--muted)", fontSize: "0.88rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Kampala's home for indoor climbing since 2022. Built for beginners. Loved by veterans. Open to all.
              </p>
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
              {[["services", "Climbing Services"],["pricing", "Pricing & Passes"],["hours", "Opening Hours"],["faq", "First-Timer FAQ"],["contact", "Book a Session"]].map(([id, label]) => (
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
                  <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>hello@mkcityrock.ug</span>
                </div>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  <Clock size={15} style={{ color: "var(--orange)", flexShrink: 0 }} />
                  <span style={{ fontSize: "0.88rem", color: "var(--muted)" }}>Open daily from 5:30 AM</span>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid var(--border)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
            <p style={{ fontSize: "0.82rem", color: "var(--muted)" }}>© {new Date().getFullYear()} Mk City Rock Gym. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              {["Privacy Policy", "Terms of Use", "Safety Waiver"].map(t => (
                <span key={t} style={{ fontSize: "0.82rem", color: "var(--muted)", cursor: "pointer", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--orange)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                >{t}</span>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}