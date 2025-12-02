// src/pages/Home.jsx
import React, { useState } from "react";
import { homeCopy } from "../../content/homeContent";
import { Gavel, Building2, BadgeCheck, ShieldCheck } from "lucide-react";
import "./Home.css";

const personas = [
  { id: "corporate", label: "Corporate" },
  { id: "family", label: "Family Office" },
  { id: "private", label: "Private Client" },
];

const practiceIcons = {
  "Complex Litigation": <Gavel size={32} strokeWidth={1.5} />,
  "Mergers & Acquisitions": <Building2 size={32} strokeWidth={1.5} />,
  "Regulatory & Compliance": <BadgeCheck size={32} strokeWidth={1.5} />,
  "Private Wealth & Structuring": <ShieldCheck size={32} strokeWidth={1.5} />,
};

const Home = ({ lang }) => {
  const [activePersona, setActivePersona] = useState("corporate");
  const t = homeCopy[lang];

  return (
    <div className="home-page">
      
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-velvet-layer" />

        <div className="hero-content">
          <div className="hero-personas">
            {personas.map((p) => (
              <button
                key={p.id}
                className={activePersona === p.id ? "persona-tab active" : "persona-tab"}
                onClick={() => setActivePersona(p.id)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <h1>{t.heroTitle}</h1>
          <p className="hero-subtitle">{t.heroSubtitle}</p>

          <div className="hero-ctas">
            <a href="#contact" className="primary-cta">{t.ctaPrimary}</a>
            <a href="#cases" className="secondary-cta">{t.ctaSecondary}</a>
          </div>

          <div className="trust-bar">
            <span>20+ years cross-border experience</span>
            <span>US qualified attorneys</span>
            <span>Tier 1 Litigation Rankings</span>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="section" id="team">
        <div className="section-header">
          <h2>Partners</h2>
          <p>Senior-led teams with deep capabilities.</p>
        </div>

        <div className="cards-grid">
          {[
            { name: "Victor Arca", role: "Attorney & Founder", desc: "Corporate & Litigation", imgSrc: "./public/victor.jpg" },
            { name: "M", role: "Partner – Corporate", desc: "Corporate" },
          ].map((p) => (
            <article key={p.name} className="partner-card glass">
              <img className="avatar-placeholder" src={p.imgSrc} />
              <h3>{p.name}</h3>
              <p className="partner-role">{p.role}</p>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* PRACTICES */}
      <section className="section" id="practices">
        <div className="section-header">
          <h2>Practice Areas</h2>
          <p>
            High-stakes litigation, cross-border transactions and strategic advisory for complex business decisions.
          </p>
        </div>

        <div className="cards-grid">
          {[
            "Complex Litigation",
            "Mergers & Acquisitions",
            "Regulatory & Compliance",
            "Private Wealth & Structuring",
          ].map((title) => (
            <article key={title} className="practice-card glass">
              <div className="practice-icon">{practiceIcons[title]}</div>
              <h3>{title}</h3>
              <p>
                {title === "Complex Litigation" && "Disputes involving high financial exposure, regulatory risk and multi-jurisdictional aspects."}
                {title === "Mergers & Acquisitions" && "Deal structuring, negotiations and regulatory clearance in US transactions."}
                {title === "Regulatory & Compliance" && "Design and implementation of robust compliance frameworks for global operations."}
                {title === "Private Wealth & Structuring" && "Asset protection, governance and succession planning for high-net-worth families."}
              </p>
              <button className="ghost-link">View details</button>
            </article>
          ))}
        </div>
      </section>


      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-header">
          <h2>Contact & VIP Intake</h2>
          <p>Share a brief summary of your matter. Our team will respond with proposed next steps.</p>
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

          <textarea rows={5} placeholder="Briefly describe your matter..." />

          <button type="submit" className="primary-cta full-width">
            Submit Matter Summary
          </button>
        </form>
      </section>
    </div>
  );
};

export default Home;
