// src/components/Layout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronUpIcon, Mail } from "lucide-react";
import "./Layout.css";

const Layout = ({ children, lang, setLang }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="site-shell">
      {/* HEADER */}
      <header className="site-header">
        <div className="logo-area">
          <span className="logo-wordmark">Arca Law</span>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(true)}
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
          {/* Si más adelante vuelves a usar idiomas, aquí va el switch */}
          <a href="#contact" className="primary-cta">
            Client Portal
          </a>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu-overlay">
          <button
            className="close-mobile-menu"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <nav className="mobile-nav">
            <a href="#top" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#team" onClick={() => setMenuOpen(false)}>Firm</a>
            <a href="#practices" onClick={() => setMenuOpen(false)}>Practice Areas</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      )}

      {/* MAIN CONTENT */}
      <main>{children}</main>

      {/* FLOATING CTA TO CONTACT */}
      <button
        className="floating-cta"
        onClick={() => {
          const contact = document.getElementById("contact");
          if (contact) contact.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="floating-cta-icon">
          <Mail size={20} />
        </span>
      </button>

      {/* FLOATING CTA TO TOP */}
      <button
        className="floating-cta to-top"
        onClick={() => {
          const top = document.getElementById("top");
          if (top) top.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="floating-cta-icon">
          <ChevronUpIcon size={20} />
        </span>
      </button>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-main">
          {/* Left: logo + marca */}
          <div className="footer-left">
            <img
              src="/logo.png" // ajusta ruta si es necesario
              alt="Arca Law Logo"
              className="footer-logo"
            />
            <div className="footer-brand">
              <span className="footer-brand-name">Arca Law</span>
              <span className="footer-brand-copy">
                © {new Date().getFullYear()} Arca Law PA
              </span>
            </div>
          </div>

          {/* Center: navegación secundaria */}
          <div className="footer-center">
            <a href="#top">Home</a>
            <a href="#team">Firm</a>
            <a href="#practices">Practice Areas</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Right: contacto */}
          <div className="footer-right">
            <p>Phone: +1 (305) 523-9040</p>
            <p>Email: victor@arcalawfirm.com</p>
            <p>350 S Miami Avenue Suite 2714, Miami, FL 33130</p>
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
