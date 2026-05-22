import { useState, useEffect } from "react";
import { SERVICES, DAILY_PASSES, MONTHLY_PASSES, HOURS, FAQS, STATS } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import HoursLocation from "./components/HoursLocation";
import FAQ from "./components/FAQ";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import "./styles/global.css";

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const todayIdx = new Date().getDay() === 0 ? 6 : new Date().getDay() - 1;

  return (
    <>
      <Navbar scrolled={scrolled} onNav={handleNav} />
      <Hero onNav={handleNav} stats={STATS} />
      <Services services={SERVICES} />
      <Pricing dailyPasses={DAILY_PASSES} monthlyPasses={MONTHLY_PASSES} />
      <HoursLocation hours={HOURS} todayIdx={todayIdx} />
      <FAQ faqs={FAQS} />
      <ContactForm />
      <Footer onNav={handleNav} />
    </>
  );
}