import { useState } from "react";
import { Shield, ArrowRight } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", experience: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSent, setFormSent] = useState(false);

  const handleChange = e => setFormData(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async e => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(res => setTimeout(res, 1500)); // Simulate loading
    setIsSubmitting(false);
    setFormSent(true);
    setFormData({ name: "", email: "", phone: "", experience: "", message: "" });
    setTimeout(() => setFormSent(false), 5000);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span className="section-label">Get In Touch</span>
          <div style={{ marginTop: 8, marginBottom: 12 }}><span className="divider-line" /></div>
          <h2 className="section-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.5rem)", color: "var(--text)" }}>Book a Session</h2>
          <p style={{ color: "var(--muted)", marginTop: "1rem", maxWidth: 500, margin: "1rem auto 0" }}>Reserve your spot, ask about group packages, or just say hello. We respond within 4 hours.</p>
        </div>
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          {formSent ? (
            <div style={{ background: "rgba(46,160,67,0.1)", border: "1px solid rgba(46,160,67,0.35)", borderRadius: 12, padding: "2.5rem", textAlign: "center" }}>
              <div style={{ fontSize: "3rem", marginBottom: 16 }}>🎉</div>
              <p className="display" style={{ fontWeight: 900, fontSize: "1.8rem", textTransform: "uppercase", color: "#3fb950", marginBottom: 8 }}>You're on your way!</p>
              <p style={{ color: "var(--muted)" }}>Thanks for reaching out. Our team will be in touch within 4 hours. Get ready to train!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ background: "var(--slate2)", border: "1px solid var(--border)", borderRadius: 12, padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gap: "1.25rem" }} className="grid-2">
                <div><label htmlFor="name" className="form-label">Full Name *</label><input id="name" required name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="e.g. Amara Nakato" /></div>
                <div><label htmlFor="email" className="form-label">Email Address *</label><input id="email" required type="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="you@example.com" /></div>
              </div>
              <div style={{ display: "grid", gap: "1.25rem" }} className="grid-2">
                <div><label htmlFor="phone" className="form-label">Phone Number</label><input id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="+256 7XX XXX XXX" /></div>
                <div>
                  <label htmlFor="experience" className="form-label">Fitness Experience *</label>
                  <select id="experience" required name="experience" value={formData.experience} onChange={handleChange} className="form-input">
                    <option value="" disabled>Select your level</option>
                    <option value="none">Complete Beginner — Never Trained</option>
                    <option value="casual">Casual — Less Than 6 Months</option>
                    <option value="intermediate">Intermediate — 6 Months to 2 Years</option>
                    <option value="advanced">Experienced — 2+ Years</option>
                  </select>
                </div>
              </div>
              <div><label htmlFor="message" className="form-label">Message / Booking Details</label><textarea id="message" name="message" value={formData.message} onChange={handleChange} className="form-input" rows={4} placeholder="Tell us what you're looking for..." style={{ resize: "vertical" }} /></div>
              <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "0.85rem 1rem", background: "rgba(0,212,255,0.05)", borderRadius: 8, border: "1px solid rgba(0,212,255,0.12)" }}>
                <Shield size={15} style={{ color: "var(--cyan)", flexShrink: 0 }} />
                <p style={{ fontSize: "0.8rem", color: "var(--muted)" }}>By submitting, you agree to our gym liability waiver. Signed on your first visit.</p>
              </div>
              <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", fontSize: "1.05rem", padding: "1rem" }} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message & Book Session"} <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}