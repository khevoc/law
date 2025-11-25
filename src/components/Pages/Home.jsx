// src/pages/Home.jsx
import React, { useState } from "react";
import { homeCopy } from "../../content/homeContent";
import "./Home.css";

const personas = [
  { id: "corporate", label: "Corporate" },
  { id: "family", label: "Family Office" },
  { id: "private", label: "Private Client" },
];

const Home = ({ lang }) => {
  const [activePersona, setActivePersona] = useState("corporate");
  const t = homeCopy[lang];

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-personas">
            {personas.map((p) => (
              <button
                key={p.id}
                className={
                  activePersona === p.id ? "persona-tab active" : "persona-tab"
                }
                onClick={() => setActivePersona(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>

          <div className="hero-ctas">
            <a href="#contact" className="primary-cta">
              {t.ctaPrimary}
            </a>
            <a href="#cases" className="secondary-cta">
              {t.ctaSecondary}
            </a>
          </div>

          <div className="trust-bar">
            <span>20+ years cross-border experience</span>
            <span>US qualified attorneys</span>
            <span>Tier 1 Litigation Rankings</span>
          </div>
        </div>
      </section>

      {/* PRÁCTICAS */}
      <section className="section" id="practices">
        <div className="section-header">
          <h2>Practice Areas</h2>
          <p>
            High-stakes litigation, cross-border transactions and strategic
            advisory for complex business decisions.
          </p>
        </div>
        <div className="cards-grid">
          {[
            {
              title: "Complex Litigation",
              text: "Disputes involving high financial exposure, regulatory risk and multi-jurisdictional aspects.",
            },
            {
              title: "Mergers & Acquisitions",
              text: "Deal structuring, negotiations and regulatory clearance in US transactions.",
            },
            {
              title: "Regulatory & Compliance",
              text: "Design and implementation of robust compliance frameworks for global operations.",
            },
            {
              title: "Private Wealth & Structuring",
              text: "Asset protection, governance and succession planning for high-net-worth families.",
            },
          ].map((item) => (
            <article key={item.title} className="practice-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <button className="ghost-link">View details</button>
            </article>
          ))}
        </div>
      </section>

      {/* SECTORES */}
      <section className="section" id="sectors">
        <div className="section-header">
          <h2>Sectors</h2>
          <p>
            We advise clients across key industries where regulatory scrutiny
            and cross-border dynamics demand precision.
          </p>
        </div>
        <div className="chips-row">
          {[
            "Technology & Fintech",
            "Real Estate & Hospitality",
            "Energy & Infrastructure",
            "Luxury & Retail",
            "Family Offices",
          ].map((s) => (
            <span key={s} className="sector-chip">
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CASOS REPRESENTATIVOS */}
      <section className="section" id="cases">
        <div className="section-header">
          <h2>Representative Cases</h2>
          <p>
            Selected matters illustrating the depth of our cross-border and
            high-stakes work.
          </p>
        </div>
        <div className="timeline">
          {[
            {
              year: "2024",
              title: "Cross-border M&A – USD 420M+",
              detail:
                "Advised a industrial group in the acquisition of a US-listed company with operations in 4 jurisdictions.",
            },
            {
              year: "2023",
              title: "Multi-jurisdictional litigation",
              detail:
                "Representation of a multinational in parallel proceedings involving complex regulatory allegations.",
            },
            {
              year: "2022",
              title: "Wealth & Governance Structure",
              detail:
                "Designed asset holding and governance structure for a multi-generational family office with assets in US, LatAm and Europe.",
            },
          ].map((c) => (
            <div key={c.title} className="timeline-item">
              <div className="timeline-dot" />
              <div className="timeline-content">
                <span className="timeline-year">{c.year}</span>
                <h3>{c.title}</h3>
                <p>{c.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* EQUIPO (breve) */}
      <section className="section" id="team">
        <div className="section-header">
          <h2>Partners</h2>
          <p>Senior-led teams with deep capabilities.</p>
        </div>
        <div className="cards-grid">
          {[
            {
              name: "Victor Arca",
              role: "Attorney & Founder",
              desc: "Corporate & Litigation",
            },
            {
              name: "M",
              role: "Partner – Corporate",
              desc: "Corporate",
            },
          ].map((p) => (
            <article key={p.name} className="partner-card">
              <div className="avatar-placeholder" />
              <h3>{p.name}</h3>
              <p className="partner-role">{p.role}</p>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section contact-section" id="contact">
        <div className="section-header">
          <h2>Contact & VIP Intake</h2>
          <p>
            Share a brief summary of your matter. Our team will respond with
            proposed next steps.
          </p>
        </div>
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="Full name" required />
            <input type="text" placeholder="Company / Family Office" />
          </div>
          <div className="form-row">
            <select>
              <option>Corporate</option>
              <option>Family Office</option>
              <option>Private Client</option>
            </select>
            <select>
              <option>Jurisdiction: US</option>
              <option>Jurisdiction: Spain</option>
              <option>US & Spain</option>
              <option>Other</option>
            </select>
          </div>
          <textarea
            rows={5}
            placeholder="Briefly describe your matter, including timelines and jurisdictions involved."
          />
          <button type="submit" className="primary-cta full-width">
            Submit Matter Summary
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
