import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Layout & Core UI Shell
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';

// Pages (Homepage, Informational & German Compliance)
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PrivacyPage from './pages/PrivacyPage.jsx';
import ImpressumPage from './pages/ImpressumPage.jsx';
import DisclaimerPage from './pages/DisclaimerPage.jsx';
import BlogPage from './pages/BlogPage.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import CalculatorPageTemplate from './pages/CalculatorPageTemplate.jsx';

// Individual Calculator Pages
import {
  PercentageValuePage,
  PercentageRatePage,
  PercentageIncreasePage,
  PercentageDecreasePage,
  PercentageBackwardsPage,
  PercentageDifferencePage,
  PercentageEuroPage,
  FractionToPercentagePage,
  GrossNet19Page,
  DiscountCalculatorPage,
  PercentageToDecimalPage,
  RuleOfThreePage,
  PricePercentagePage
} from './pages/calculators/index.js';

// Custom Hooks
import { useTheme } from './hooks/useTheme.js';
import { useHistory } from './hooks/useHistory.js';

/**
 * Helper component to ensure smooth scrolling to top or hash anchors across router transitions.
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
    } else {
      window.scrollTo(0, 0);
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
          {/* Core Homepage with all calculators open and ready to use */}
          <Route path="/" element={<HomePage onSaveHistory={addHistoryItem} />} />

          {/* 1. Prozentwert Rechner */}
          <Route path="/percentage-calculator" element={<PercentageValuePage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozentwert-rechner" element={<PercentageValuePage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozentrechner" element={<PercentageValuePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-of-number" element={<PercentageValuePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-value" element={<PercentageValuePage onSaveHistory={addHistoryItem} />} />

          {/* 2. Prozentsatz Rechner */}
          <Route path="/prozentsatz" element={<PercentageRatePage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozentsatz-rechner" element={<PercentageRatePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-rate" element={<PercentageRatePage onSaveHistory={addHistoryItem} />} />
          <Route path="/what-percentage-is-x-of-y" element={<PercentageRatePage onSaveHistory={addHistoryItem} />} />
          <Route path="/what-percent-is" element={<PercentageRatePage onSaveHistory={addHistoryItem} />} />

          {/* 3. Prozentuale Steigerung Rechner */}
          <Route path="/prozentuale-zunahme" element={<PercentageIncreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozentuale-steigerung" element={<PercentageIncreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-increase" element={<PercentageIncreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-growth" element={<PercentageIncreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-increase-decrease" element={<PercentageIncreasePage onSaveHistory={addHistoryItem} />} />

          {/* 4. Prozentuale Senkung Rechner */}
          <Route path="/prozentuale-abnahme" element={<PercentageDecreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozentuale-senkung" element={<PercentageDecreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-decrease" element={<PercentageDecreasePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-drop" element={<PercentageDecreasePage onSaveHistory={addHistoryItem} />} />

          {/* 5. Prozent rückwärts rechnen */}
          <Route path="/prozent-rueckwaerts-rechnen" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozent-rueckwaerts" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozent-rueckwaerts-rechner" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />
          <Route path="/calculate-percentage-backwards" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />
          <Route path="/reverse-percentage-calculator" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />
          <Route path="/reverse-percentage" element={<PercentageBackwardsPage onSaveHistory={addHistoryItem} />} />

          {/* 6. Prozentuale Differenz Rechner */}
          <Route path="/prozentuale-differenz" element={<PercentageDifferencePage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-difference" element={<PercentageDifferencePage onSaveHistory={addHistoryItem} />} />
          <Route path="/difference-calculator" element={<PercentageDifferencePage onSaveHistory={addHistoryItem} />} />

          {/* 7. Prozent Euro Rechner */}
          <Route path="/prozent-euro-rechner" element={<PercentageEuroPage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozent-euro" element={<PercentageEuroPage onSaveHistory={addHistoryItem} />} />
          <Route path="/euro-percentage" element={<PercentageEuroPage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-euro-calculator" element={<PercentageEuroPage onSaveHistory={addHistoryItem} />} />

          {/* 8. Bruch in Prozent Rechner */}
          <Route path="/bruch-in-prozent" element={<FractionToPercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/bruch-in-prozent-umrechnen" element={<FractionToPercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/fraction-to-percentage" element={<FractionToPercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/fraction-calculator" element={<FractionToPercentagePage onSaveHistory={addHistoryItem} />} />

          {/* 9. Brutto Netto Rechner 19 % */}
          <Route path="/brutto-netto-rechner-19" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/brutto-netto-19" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/netto-brutto-19" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/19-mwst-rechner" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/mwst-rechner" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/vat-calculator" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />
          <Route path="/gross-net-calculator-19" element={<GrossNet19Page onSaveHistory={addHistoryItem} />} />

          {/* 10. Prozent Rabatt Rechner */}
          <Route path="/rabatt-rechner" element={<DiscountCalculatorPage onSaveHistory={addHistoryItem} />} />
          <Route path="/rabattrechner" element={<DiscountCalculatorPage onSaveHistory={addHistoryItem} />} />
          <Route path="/discount-calculator" element={<DiscountCalculatorPage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-discount-calculator" element={<DiscountCalculatorPage onSaveHistory={addHistoryItem} />} />
          <Route path="/discount-calc" element={<DiscountCalculatorPage onSaveHistory={addHistoryItem} />} />

          {/* 11. Prozent in Dezimalzahl Rechner */}
          <Route path="/prozent-in-dezimal" element={<PercentageToDecimalPage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozent-in-dezimalzahl" element={<PercentageToDecimalPage onSaveHistory={addHistoryItem} />} />
          <Route path="/percentage-to-decimal" element={<PercentageToDecimalPage onSaveHistory={addHistoryItem} />} />
          <Route path="/percent-to-decimal" element={<PercentageToDecimalPage onSaveHistory={addHistoryItem} />} />
          <Route path="/prozent-in-kommazahl" element={<PercentageToDecimalPage onSaveHistory={addHistoryItem} />} />

          {/* 12. Dreisatz Rechner Prozent */}
          <Route path="/dreisatz-prozentrechner" element={<RuleOfThreePage onSaveHistory={addHistoryItem} />} />
          <Route path="/dreisatz-rechner" element={<RuleOfThreePage onSaveHistory={addHistoryItem} />} />
          <Route path="/dreisatz-prozent" element={<RuleOfThreePage onSaveHistory={addHistoryItem} />} />
          <Route path="/rule-of-three" element={<RuleOfThreePage onSaveHistory={addHistoryItem} />} />
          <Route path="/rule-of-three-percentage-calculator" element={<RuleOfThreePage onSaveHistory={addHistoryItem} />} />

          {/* 13. Preis Prozent Rechner */}
          <Route path="/preis-prozentrechner" element={<PricePercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/preisrechner-prozent" element={<PricePercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/price-percentage" element={<PricePercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/price-percentage-calculator" element={<PricePercentagePage onSaveHistory={addHistoryItem} />} />
          <Route path="/price-calculator" element={<PricePercentagePage onSaveHistory={addHistoryItem} />} />

          {/* Dynamic route fallback for any calculator slug */}
          <Route path="/rechner/:slug" element={<CalculatorPageTemplate onSaveHistory={addHistoryItem} />} />

          {/* Legacy & Convenience Aliases */}
          <Route path="/tip-calculator" element={<Navigate to="/percentage-calculator" replace />} />
          <Route path="/margin-markup-calculator" element={<Navigate to="/preis-prozentrechner" replace />} />
          <Route path="/percentage-formulas" element={<Navigate to="/blog" replace />} />
          <Route path="/all-percentage-calculators" element={<Navigate to="/#all-tools" replace />} />
          <Route path="/add-percentage" element={<Navigate to="/prozentuale-zunahme" replace />} />
          <Route path="/subtract-percentage" element={<Navigate to="/prozentuale-abnahme" replace />} />
          <Route path="/prozent-dazu-rechnen" element={<Navigate to="/prozentuale-zunahme" replace />} />
          <Route path="/prozent-abziehen" element={<Navigate to="/prozentuale-abnahme" replace />} />

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
