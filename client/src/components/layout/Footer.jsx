import React from 'react';
import { Link } from 'react-router-dom';
import { Percent, Shield, Scale, Mail, FileText, BookOpen } from 'lucide-react';
import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleToolClick = (toolId) => {
    if (window.location.pathname === '/') {
      const el = document.getElementById(`tool-${toolId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `/#tool-${toolId}`);
      }
    }
  };

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Col 1: Brand & Overview */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <div className="footer-logo-wrap" aria-hidden="true">
                <Percent size={20} />
              </div>
              <span className="footer-brand-title">Prozent<strong>Rechner</strong></span>
            </div>
            <p className="footer-desc">
              Schnelle, präzise und mathematisch exakte Prozentrechner. Alle Berechnungen laufen direkt in Ihrem Browser (Client-Side) – absolut datenschutzkonform und ohne Registrierung.
            </p>
            <div className="footer-badge-tag">
              <span>🛡️ 100% Kostenlos & Ohne Anmeldung</span>
            </div>
          </div>

          {/* Col 2: Core Calculators (Linked to Homepage) */}
          <div className="footer-col">
            <h2 className="footer-heading">Wichtigste Rechner</h2>
            <ul className="footer-links">
              <li>
                <Link to="/#tool-percentage-value" onClick={() => handleToolClick('percentage-value')}>
                  Prozentwert (P% vom Grundwert)
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-rate" onClick={() => handleToolClick('percentage-rate')}>
                  Prozentsatz (Wie viel % ist X von Y)
                </Link>
              </li>
              <li>
                <Link to="/#tool-rule-of-three" onClick={() => handleToolClick('rule-of-three')}>
                  Dreisatz Rechner Prozent
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-to-decimal" onClick={() => handleToolClick('percentage-to-decimal')}>
                  Prozent in Dezimalzahl
                </Link>
              </li>
              <li>
                <Link to="/#tool-fraction-to-percentage" onClick={() => handleToolClick('fraction-to-percentage')}>
                  Bruch in Prozent
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-increase" onClick={() => handleToolClick('percentage-increase')}>
                  Prozentuale Steigerung (+%)
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-decrease" onClick={() => handleToolClick('percentage-decrease')}>
                  Prozentuale Senkung (-%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Finance & Practical (Linked to Homepage) */}
          <div className="footer-col">
            <h2 className="footer-heading">Finanzen & Praxis</h2>
            <ul className="footer-links">
              <li>
                <Link to="/#tool-price-percentage" onClick={() => handleToolClick('price-percentage')}>
                  Preis Prozent Rechner
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-euro" onClick={() => handleToolClick('percentage-euro')}>
                  Prozent Euro Rechner (€)
                </Link>
              </li>
              <li>
                <Link to="/#tool-gross-net-19" onClick={() => handleToolClick('gross-net-19')}>
                  Brutto Netto Rechner 19% MwSt
                </Link>
              </li>
              <li>
                <Link to="/#tool-discount-calculator" onClick={() => handleToolClick('discount-calculator')}>
                  Prozent Rabatt Rechner
                </Link>
              </li>
              <li>
                <Link to="/#tool-calculate-percentage-backwards" onClick={() => handleToolClick('calculate-percentage-backwards')}>
                  Prozent rückwärts rechnen
                </Link>
              </li>
              <li>
                <Link to="/#tool-percentage-difference" onClick={() => handleToolClick('percentage-difference')}>
                  Prozentuale Differenz (|Δ|%)
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Resources & Legal */}
          <div className="footer-col">
            <h2 className="footer-heading">Ratgeber & Rechtliches</h2>
            <ul className="footer-links">
              <li>
                <Link to="/blog">
                  <BookOpen size={14} className="inline-icon" aria-hidden="true" /> Ratgeber & Blog
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Mail size={14} className="inline-icon" aria-hidden="true" /> Kontakt
                </Link>
              </li>
              <li>
                <Link to="/impressum">
                  <Scale size={14} className="inline-icon" aria-hidden="true" /> Impressum (§ 5 DDG)
                </Link>
              </li>
              <li>
                <Link to="/datenschutz">
                  <Shield size={14} className="inline-icon" aria-hidden="true" /> Datenschutzerklärung (DSGVO)
                </Link>
              </li>
              <li>
                <Link to="/haftungsausschluss">
                  <FileText size={14} className="inline-icon" aria-hidden="true" /> Haftungsausschluss
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer Notice */}
        <div className="footer-compliance-notice" role="note" aria-label="Rechtlicher Hinweis">
          <strong>Rechtlicher Hinweis:</strong> Alle auf dieser Website bereitgestellten Rechenwerkzeuge, Formeln und numerischen Ergebnisse dienen ausschließlich Informations- und Bildungszwecken. Sämtliche Berechnungen erfolgen ohne Gewähr auf Richtigkeit und Vollständigkeit. Die Ergebnisse stellen keine Steuerberatung im Sinne des Steuerberatungsgesetzes (StBerG), Finanzberatung oder Rechtsberatung dar.
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>© {currentYear} Prozent Rechner. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
