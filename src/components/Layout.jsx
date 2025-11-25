// src/components/Layout.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Layout.css";

const Layout = ({ children, lang, setLang }) => {
  const location = useLocation();

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="logo-area">
          <span className="logo-wordmark">Arca Law</span>
        </div>

        <nav className="main-nav">
          <a href="#top">Home</a>
          <a href="#firm">Firm</a>
          <a href="#practices">Practice Areas</a>
          <a href="#sectors">Sectors</a>
          <a href="#cases">Cases</a>
          <a href="#team">Team</a>
          {/* <Link to="/insights">Insights</Link> */}
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <div className="lang-switcher">
            {["en", "pt", "es"].map((code) => (
              <button
                key={code}
                className={lang === code ? "lang-btn active" : "lang-btn"}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <a href="#contact" className="primary-cta">
            Client Portal
          </a>
        </div>
      </header>

      <main>{children}</main>

      <button
        className="floating-cta"
        onClick={() => {
          const contact = document.getElementById("contact");
          if (contact) contact.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="floating-cta-icon">💼</span>
      </button>

      <footer className="site-footer">
        <div className="footer-left">
          <img
            src="/logo.png"
            alt="Arca Law Logo"
            className="footer-logo"
          />
          <span>© {new Date().getFullYear()} Arca Law PA</span>
        </div>
        <div className="footer-right">
          <a>Phone: +1 (305) 523-9040</a>
          <br />
          <a>Email: victor@arcalawfirm.com</a>
          <br />
          <a>350 S Miami Avenue Suite 2714, Miami, FL 33130</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
