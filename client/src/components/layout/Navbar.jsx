import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { 
  Percent, 
  Sun, 
  Moon, 
  History, 
  Menu, 
  X, 
  BookOpen, 
  Calculator, 
  Sparkles,
  TrendingUp,
  PercentSquare
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ theme, toggleTheme, onOpenHistory, historyCount = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Brand Logo */}
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          <div className="logo-icon-wrap">
            <Percent className="logo-icon" size={24} strokeWidth={2.5} />
          </div>
          <div className="logo-text">
            <span className="brand-name">Percent<strong>Master</strong></span>
            <span className="brand-tagline">Pro Calculator Suite</span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="desktop-nav">
          <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <Calculator size={18} />
            <span>All Calculators</span>
          </NavLink>
          <NavLink to="/percentage-increase-decrease" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <TrendingUp size={18} />
            <span>% Change</span>
          </NavLink>
          <NavLink to="/discount-calculator" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <PercentSquare size={18} />
            <span>Discounts</span>
          </NavLink>
          <NavLink to="/percentage-formulas" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <BookOpen size={18} />
            <span>Formulas & Cheat Sheet</span>
          </NavLink>
        </nav>

        {/* Action Controls */}
        <div className="header-actions">
          <button 
            type="button" 
            className="action-btn history-btn" 
            onClick={onOpenHistory}
            title="View Calculation History"
            aria-label="View Calculation History"
          >
            <History size={20} />
            {historyCount > 0 && <span className="history-badge">{historyCount}</span>}
          </button>

          <button 
            type="button" 
            className="action-btn theme-toggle-btn" 
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === 'dark' ? <Sun size={20} className="sun-icon" /> : <Moon size={20} className="moon-icon" />}
          </button>

          {/* Mobile hamburger */}
          <button 
            type="button" 
            className="mobile-menu-toggle" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer animate-fade-in">
          <div className="mobile-nav-links">
            <NavLink to="/" end className="mobile-nav-item" onClick={closeMenu}>
              <Calculator size={20} />
              <span>All Calculators</span>
            </NavLink>
            <NavLink to="/percentage-of-number" className="mobile-nav-item" onClick={closeMenu}>
              <Sparkles size={20} />
              <span>Percentage of Number</span>
            </NavLink>
            <NavLink to="/percentage-increase-decrease" className="mobile-nav-item" onClick={closeMenu}>
              <TrendingUp size={20} />
              <span>Percentage Increase / Decrease</span>
            </NavLink>
            <NavLink to="/percentage-difference" className="mobile-nav-item" onClick={closeMenu}>
              <Percent size={20} />
              <span>Percentage Difference</span>
            </NavLink>
            <NavLink to="/reverse-percentage" className="mobile-nav-item" onClick={closeMenu}>
              <Percent size={20} />
              <span>Reverse Percentage</span>
            </NavLink>
            <NavLink to="/discount-calculator" className="mobile-nav-item" onClick={closeMenu}>
              <PercentSquare size={20} />
              <span>Discount & Sales Tax</span>
            </NavLink>
            <NavLink to="/tip-calculator" className="mobile-nav-item" onClick={closeMenu}>
              <Calculator size={20} />
              <span>Tip & Bill Split</span>
            </NavLink>
            <NavLink to="/margin-markup-calculator" className="mobile-nav-item" onClick={closeMenu}>
              <TrendingUp size={20} />
              <span>Margin & Markup</span>
            </NavLink>
            <NavLink to="/percentage-formulas" className="mobile-nav-item" onClick={closeMenu}>
              <BookOpen size={20} />
              <span>Formulas & Cheat Sheet</span>
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
