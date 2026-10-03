import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout & Core UI Shell
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Pages (Homepage & German Compliance)
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ImpressumPage from './pages/ImpressumPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

// Config Data for dynamic redirects to homepage tool anchors
import { calculatorsConfig } from './data/calculatorsConfig.js';

// Custom Hooks
import { useTheme } from './hooks/useTheme.js';
import { useHistory } from './hooks/useHistory.js';

/**
 * Helper component to ensure smooth scrolling to hash anchors (e.g. #tool-xyz, #all-tools)
 * across router transitions or direct deep links.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const elementId = hash.replace('#', '');
      const timer = setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const { history, addHistoryItem } = useHistory();

  return (
    <div className="app-container">
      {/* Hash Anchor Auto-Scroller */}
      <ScrollToHash />

      {/* App Header */}
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Main Routed Content */}
      <main className="main-content">
        <Routes>
          {/* Single Core Homepage containing all 12 calculators open and functional */}
          <Route path="/" element={<HomePage onSaveHistory={addHistoryItem} />} />

          {/* Dynamic Redirects: Route all calculator slugs directly to their homepage tool anchor */}
          {calculatorsConfig.map((calc) => (
            <React.Fragment key={calc.id}>
              {/* Primary Slug Route -> Redirect to homepage anchor */}
              <Route
                path={`/${calc.slug}`}
                element={<Navigate to={`/#tool-${calc.id}`} replace />}
              />
              {/* Alias Routes -> Redirect to homepage anchor */}
              {calc.aliases && calc.aliases.map((alias) => {
                const cleanAlias = alias.startsWith('/') ? alias.slice(1) : alias;
                return (
                  <Route
                    key={alias}
                    path={`/${cleanAlias}`}
                    element={<Navigate to={`/#tool-${calc.id}`} replace />}
                  />
                );
              })}
            </React.Fragment>
          ))}

          {/* Legacy standalone calculator routes redirecting to homepage tools */}
          <Route path="/percentage-of-number" element={<Navigate to="/#tool-percentage-value" replace />} />
          <Route path="/discount-calculator" element={<Navigate to="/#tool-discount-calculator" replace />} />
          <Route path="/rabattrechner" element={<Navigate to="/#tool-discount-calculator" replace />} />
          <Route path="/vat-calculator" element={<Navigate to="/#tool-gross-net-19" replace />} />
          <Route path="/mwst-rechner" element={<Navigate to="/#tool-gross-net-19" replace />} />
          <Route path="/tip-calculator" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/margin-markup-calculator" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/percentage-formulas" element={<Navigate to="/#formulas" replace />} />
          <Route path="/all-percentage-calculators" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/add-percentage" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/subtract-percentage" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/prozent-dazu-rechnen" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/prozent-abziehen" element={<Navigate to="/#all-tools" replace />} />

          {/* Blog & Educational Guides */}
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/ratgeber" element={<BlogPage />} />

          {/* Legal & Informational (German Compliance: DDG, DSGVO, StBerG) */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/datenschutz" element={<PrivacyPage />} />
          <Route path="/impressum" element={<ImpressumPage />} />
          <Route path="/imprint" element={<ImpressumPage />} />
          <Route path="/haftungsausschluss" element={<DisclaimerPage />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {/* App Footer */}
      <Footer />
    </div>
  );
}
