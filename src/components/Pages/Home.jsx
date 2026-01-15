// src/pages/Home.jsx
import React, { useEffect, useMemo, useState } from "react";
import { homeCopy } from "../../content/homeContent";
import {
  ArrowUpRight,
  Briefcase,
  Scale,
  ShieldCheck,
  Building2,
} from "lucide-react";
import "./Home.css";
import founderUrl from "../../assets/founder.png";

const personas = [
  { id: "corporate", label: "Corporate" },
  { id: "family", label: "Family Office" },
  { id: "private", label: "Private Client" },
];

export default function Home({ lang }) {
  const [activePersona, setActivePersona] = useState("corporate");
  const t = homeCopy[lang];

  const practices = useMemo(
    () => [
      {
        title: "Complex Litigation",
        text: "Disputes involving high financial exposure, regulatory risk and multi-jurisdictional aspects.",
        icon: <Scale size={22} />,
      },
      {
        title: "Mergers & Acquisitions",
        text: "Deal structuring, negotiations and regulatory clearance in US transactions.",
        icon: <Building2 size={22} />,
      },
      {
        title: "Regulatory & Compliance",
        text: "Design and implementation of robust compliance frameworks for global operations.",
        icon: <ShieldCheck size={22} />,
      },
      {
        title: "Private Wealth & Structuring",
        text: "Asset protection, governance and succession planning for high-net-worth families.",
        icon: <Briefcase size={22} />,
      },
    ],
    []
  );

  // Reveal + stagger (sin librerías)
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.classList.add("is-in");
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -10% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="home-page">
      {/* HERO */}
      <section className="hero" id="top">
        <div className="hero-bg" />
        <div className="hero-velvet" />
        <div className="hero-grain" />

        <div className="hero-content">
          <div className="hero-personas reveal" data-stagger="1">
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

          <h1 className="reveal" data-stagger="2">{t.heroTitle}</h1>
          <p className="hero-subtitle reveal" data-stagger="3">{t.heroSubtitle}</p>

          <div className="hero-ctas reveal" data-stagger="4">
            <a href="#contact" className="primary-cta">{t.ctaPrimary}</a>
            <a href="#cases" className="secondary-cta">{t.ctaSecondary}</a>
          </div>

          <div className="trust-bar reveal" data-stagger="5">
            <span>20+ years cross-border experience</span>
            <span>US qualified attorneys</span>
            <span>Tier 1 Litigation Rankings</span>
          </div>
        </div>
      </section>

      {/* PRACTICES */}
      <section className="section section-practices" id="practices">
        <div className="section-inner">
          <div className="section-rail" aria-hidden="true" />

          <div className="section-header reveal" data-stagger="1">
            <h2>Practice Areas</h2>
            <p>
              High-stakes litigation, cross-border transactions and strategic advisory
              for complex business decisions.
            </p>
          </div>

          <div className="cards-grid">
            {practices.map((item, idx) => (
              <article
                key={item.title}
                className="practice-card glass reveal"
                data-stagger={idx + 2}
              >
                <div className="card-top">
                  <div className="practice-icon" aria-hidden="true">
                    {item.icon}
                  </div>

                  <button className="ghost-link" type="button">
                    View details <ArrowUpRight size={16} />
                  </button>
                </div>

                <h3>{item.title}</h3>
                <p>{item.text}</p>

                <div className="card-shine" aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="section section-sectors" id="sectors">
        <div className="section-inner">
          <div className="section-rail" aria-hidden="true" />

          <div className="section-header reveal" data-stagger="1">
            <h2>Sectors</h2>
            <p>
              We advise clients across key industries where regulatory scrutiny
              and cross-border dynamics demand precision.
            </p>
          </div>

          <div className="chips-row reveal" data-stagger="2">
            {[
              "Technology & Fintech",
              "Real Estate & Hospitality",
              "Energy & Infrastructure",
              "Luxury & Retail",
              "Family Offices",
            ].map((s, i) => (
              <span key={s} className="sector-chip" style={{ animationDelay: `${i * 60}ms` }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section className="section section-cases" id="cases">
        <div className="section-inner">
          <div className="section-rail" aria-hidden="true" />

          <div className="section-header reveal" data-stagger="1">
            <h2>Representative Cases</h2>
            <p>Selected matters illustrating the depth of our cross-border and high-stakes work.</p>
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
            ].map((c, i) => (
              <div key={c.title} className="timeline-item reveal" data-stagger={i + 2}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <span className="timeline-year">{c.year}</span>
                  <h3>{c.title}</h3>
                  <p>{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section-partners" id="team">
        <div className="section-inner">
          <div className="section-rail" aria-hidden="true" />

          <div className="section-header reveal" data-stagger="1">
            <h2>Partners</h2>
            <p>Senior-led teams with cross-border depth and executive-level discretion.</p>
          </div>

          <div className="partners-grid">
            {/* Founder highlight */}
            <article className="founder-card glass reveal" data-stagger="2">
              <div className="founder-media">
                <div className="founder-ambient" aria-hidden="true" />
                <img
                  className="founder-photo"
                  src={founderUrl}
                  alt="Victor Arca — Founder Attorney"
                  loading="lazy"
                />
                <div className="founder-halo" aria-hidden="true" />
              </div>

              <div className="founder-body">
                <div className="founder-kicker">Founder Attorney</div>
                <h3 className="founder-name">Victor Arca</h3>
                <p className="founder-role">Corporate & Litigation</p>

                <p className="founder-desc">
                  Partner-led counsel for complex disputes, cross-border strategy,
                  and sophisticated corporate matters. Trusted by executives and
                  high-net-worth principals.
                </p>

                <div className="founder-actions">
                  <a className="primary-cta" href="#contact">Request a consultation</a>
                  <a className="secondary-cta" href="#practices">Explore practice areas</a>
                </div>
              </div>
            </article>

            {/* Secondary partner */}
            <article className="partner-mini glass reveal" data-stagger="3">
              <div className="avatar-placeholder" />
              <h3>M</h3>
              <p className="partner-role">Partner – Corporate</p>
              <p>Corporate</p>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="section-rail" aria-hidden="true" />

          <div className="section-header reveal" data-stagger="1">
            <h2>Contact & VIP Intake</h2>
            <p>Share a brief summary of your matter. Our team will respond with proposed next steps.</p>
          </div>

          <form className="contact-form glass reveal" data-stagger="2">
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

            <textarea rows={5} placeholder="Briefly describe your matter, including timelines and jurisdictions involved." />
            <button type="submit" className="primary-cta full-width">
              Submit Matter Summary
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
