// src/components/Layout.jsx
import React from "react";
import { useLocation } from "react-router-dom";
import { ChevronUpIcon, Mail } from "lucide-react";
import "./Layout.css";

const Layout = ({ children }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    // Cierra overlay si cambia la ruta/hash
    setMenuOpen(false);
  }, [location?.hash, location?.pathname]);

  React.useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="logo-area">
          <span className="logo-wordmark">Law Firm</span>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={menuOpen ? "true" : "false"}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className="main-nav">
          <a href="#top">Home</a>
          <a href="#team">Firm</a>
          <a href="#practices">Practice Areas</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href="#contact" className="primary-cta">
            Client Portal
          </a>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div
          className="mobile-menu-overlay"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => {
            // click fuera del panel -> cierra
            if (e.target.classList.contains("mobile-menu-overlay")) {
              setMenuOpen(false);
            }
          }}
        >
          <div className="mobile-menu-panel">
            <button
              className="close-mobile-menu"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>

            <nav className="mobile-nav">
              <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
              <a href="#team" onClick={() => setMenuOpen(false)}>Firm</a>
              <a href="#practices" onClick={() => setMenuOpen(false)}>Practice Areas</a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
            </nav>

            <a href="#contact" className="mobile-primary-cta" onClick={() => setMenuOpen(false)}>
              Client Portal
            </a>
          </div>
        </div>
      )}

      <main>{children}</main>

      {/* FLOATING CTA TO CONTACT */}
      <button
        className="floating-cta"
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Contact"
      >
        <span className="floating-cta-icon">
          <Mail size={20} />
        </span>
      </button>

      {/* FLOATING CTA TO TOP */}
      <button
        className="floating-cta to-top"
        onClick={() => document.getElementById("top")?.scrollIntoView({ behavior: "smooth" })}
        aria-label="Back to top"
      >
        <span className="floating-cta-icon">
          <ChevronUpIcon size={20} />
        </span>
      </button>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          <div className="footer-left">
            <img src="/logo.png" alt="Arca Law Logo" className="footer-logo" />
            <div className="footer-brand">
              <span className="footer-brand-name">Law Firm</span>
              <span className="footer-brand-copy">
                © {new Date().getFullYear()} Law Firm
              </span>
            </div>
          </div>

          <div className="footer-center">
            <a href="#top">Home</a>
            <a href="#team">Firm</a>
            <a href="#practices">Practice Areas</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-right">
            <p>Phone: +1 (305) 333-9000</p>
            <p>Email: emilio@lawfirm.com</p>
            <p>102 S Miami Avenue Suite 520, Miami, FL 33130</p>
          </div>
        </div>

        <div className="footer-bottom">
          <span>Miami · Cross-border practice</span>
          <span>All rights reserved</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
