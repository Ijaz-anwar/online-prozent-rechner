import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Percent, 
  ChevronDown, 
  Menu, 
  X, 
  Sun, 
  Moon, 
  Home,
  Calculator, 
  BookOpen,
  Mail,
  Shield,
  Scale,
  FileText
} from 'lucide-react';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';
import './Header.css';

export default function Header({ theme = 'light', toggleTheme }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreToolsOpen, setIsMoreToolsOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(true);

  const moreToolsDropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const hamburgerBtnRef = useRef(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMoreToolsOpen(false);
  }, [location.pathname]);

  // Handle outside clicks to close desktop dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        moreToolsDropdownRef.current && 
        !moreToolsDropdownRef.current.contains(event.target)
      ) {
        setIsMoreToolsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle Escape key to close open menus (Accessibility)
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        if (isMoreToolsOpen) {
          setIsMoreToolsOpen(false);
        }
        if (isMobileMenuOpen) {
          setIsMobileMenuOpen(false);
          hamburgerBtnRef.current?.focus();
        }
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMoreToolsOpen, isMobileMenuOpen]);

  // Lock background body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Navigate & smooth-scroll to homepage tool
  const handleToolNavigate = (toolId, e) => {
    setIsMoreToolsOpen(false);
    setIsMobileMenuOpen(false);

    if (window.location.pathname === '/') {
      if (e) e.preventDefault();
      const targetElementId = toolId ? `tool-${toolId}` : 'all-tools';
      const el = document.getElementById(targetElementId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `/#${targetElementId}`);
      }
    }
  };

  return (
    <header className="site-header-sticky" role="banner">
      <div className="header-wrapper">
        {/* Logo Section */}
        <Link 
          to="/" 
          className="header-brand-logo" 
          aria-label="Prozent Rechner Startseite – Kostenloser Online-Prozentrechner"
          onClick={() => {
            if (window.location.pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <div className="brand-icon-box" aria-hidden="true">
            <Percent size={20} strokeWidth={2.5} />
          </div>
          <div className="brand-text-block">
            <span className="brand-title-text">Prozent<strong>Rechner</strong></span>
            <span className="brand-subtitle-text">Kostenlos & Schnell</span>
          </div>
        </Link>

        {/* Desktop Main Navigation */}
        <nav className="header-desktop-nav" aria-label="Hauptnavigation">
          <Link 
            to="/" 
            className="nav-item-link"
            onClick={() => {
              if (window.location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            <Home size={16} aria-hidden="true" />
            <span>Startseite</span>
          </Link>

          {/* Calculators Dropdown */}
          <div className="nav-dropdown-wrapper" ref={moreToolsDropdownRef}>
            <button
              type="button"
              className={`nav-dropdown-trigger ${isMoreToolsOpen ? 'open' : ''}`}
              onClick={() => setIsMoreToolsOpen(!isMoreToolsOpen)}
              aria-expanded={isMoreToolsOpen}
              aria-haspopup="true"
              aria-controls="more-tools-menu"
            >
              <Calculator size={15} aria-hidden="true" />
              <span>Alle Rechner</span>
              <ChevronDown size={15} className={`dropdown-chevron ${isMoreToolsOpen ? 'rotate' : ''}`} aria-hidden="true" />
            </button>

            {isMoreToolsOpen && (
              <div 
                id="more-tools-menu" 
                className="desktop-dropdown-card" 
                role="menu"
                aria-label="Prozentrechner Übersicht"
              >
                <div className="dropdown-grid">
                  {calculatorsConfig.map((tool) => {
                    const ToolIcon = tool.icon;
                    return (
                      <a
                        key={tool.id}
                        href={`/#tool-${tool.id}`}
                        className="dropdown-menu-item"
                        role="menuitem"
                        onClick={(e) => handleToolNavigate(tool.id, e)}
                      >
                        <div className="menu-item-icon-box" aria-hidden="true">
                          <ToolIcon size={17} />
                        </div>
                        <div className="menu-item-text">
                          <span className="menu-item-name">{tool.shortName}</span>
                          <span className="menu-item-desc">{tool.badge || tool.category}</span>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Blog Nav Link */}
          <NavLink 
            to="/blog" 
            className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          >
            <BookOpen size={16} aria-hidden="true" />
            <span>Ratgeber & Blog</span>
          </NavLink>

          {/* Contact Us Nav Link */}
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
          >
            <Mail size={16} aria-hidden="true" />
            <span>Kontakt</span>
          </NavLink>
        </nav>

        {/* Right Actions: Theme Toggle + Mobile Menu Trigger */}
        <div className="header-right-actions">
          {toggleTheme && (
            <button
              type="button"
              onClick={toggleTheme}
              className="theme-switch-btn"
              aria-label={`Zu ${theme === 'dark' ? 'hellem' : 'dunklem'} Design wechseln`}
              title={`Zu ${theme === 'dark' ? 'hellem' : 'dunklem'} Design wechseln`}
            >
              {theme === 'dark' ? (
                <Sun size={18} className="theme-sun-icon" aria-hidden="true" />
              ) : (
                <Moon size={18} className="theme-moon-icon" aria-hidden="true" />
              )}
            </button>
          )}

          {/* Mobile Hamburger Button */}
          <button
            ref={hamburgerBtnRef}
            type="button"
            className="hamburger-menu-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div 
          id="mobile-navigation-drawer" 
          className="mobile-drawer-overlay" 
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            ref={mobileMenuRef}
            className="mobile-drawer-content" 
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="mobile-drawer-header">
              <div className="mobile-drawer-logo">
                <div className="brand-icon-box small">
                  <Percent size={16} />
                </div>
                <span>Prozent<strong>Rechner</strong></span>
              </div>
              <button
                type="button"
                className="close-drawer-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Menü schließen"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="mobile-nav-links" aria-label="Mobile Navigation">
              <Link 
                to="/" 
                className="mobile-nav-link"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  if (window.location.pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
              >
                <Home size={18} aria-hidden="true" />
                <span>Startseite</span>
              </Link>

              {/* Mobile Calculators Submenu */}
              <div className="mobile-submenu-group">
                <button
                  type="button"
                  className="mobile-submenu-toggle"
                  onClick={() => setIsMobileMoreOpen(!isMobileMoreOpen)}
                  aria-expanded={isMobileMoreOpen}
                >
                  <span className="submenu-title">Alle Rechner ({calculatorsConfig.length})</span>
                  <ChevronDown size={16} className={`submenu-arrow ${isMobileMoreOpen ? 'rotate' : ''}`} />
                </button>

                {isMobileMoreOpen && (
                  <div className="mobile-submenu-items">
                    {calculatorsConfig.map((tool) => {
                      const SubIcon = tool.icon;
                      return (
                        <a
                          key={tool.id}
                          href={`/#tool-${tool.id}`}
                          className="mobile-sub-link"
                          onClick={(e) => handleToolNavigate(tool.id, e)}
                        >
                          <SubIcon size={16} aria-hidden="true" />
                          <span>{tool.shortName}</span>
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>

              <div className="mobile-drawer-divider" />

              <NavLink 
                to="/blog" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <BookOpen size={18} aria-hidden="true" />
                <span>Ratgeber & Blog</span>
              </NavLink>

              <NavLink 
                to="/contact" 
                className={({ isActive }) => `mobile-nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Mail size={18} aria-hidden="true" />
                <span>Kontakt</span>
              </NavLink>

              <div className="mobile-drawer-divider" />

              <Link 
                to="/impressum" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Scale size={18} aria-hidden="true" />
                <span>Impressum (§ 5 DDG)</span>
              </Link>

              <Link 
                to="/datenschutz" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield size={18} aria-hidden="true" />
                <span>Datenschutzerklärung (DSGVO)</span>
              </Link>

              <Link 
                to="/haftungsausschluss" 
                className="mobile-nav-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FileText size={18} aria-hidden="true" />
                <span>Haftungsausschluss</span>
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
