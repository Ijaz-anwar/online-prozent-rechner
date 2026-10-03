import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import TableOfContents from '../components/common/TableOfContents.jsx';

// Import modular calculator components
import PercentageValueCalculator from '../components/calculator/tools/PercentageValueCalculator.jsx';
import PercentageRateCalculator from '../components/calculator/tools/PercentageRateCalculator.jsx';
import PercentageIncreaseCalculator from '../components/calculator/tools/PercentageIncreaseCalculator.jsx';
import PercentageDecreaseCalculator from '../components/calculator/tools/PercentageDecreaseCalculator.jsx';
import CalculatePercentageBackwards from '../components/calculator/tools/CalculatePercentageBackwards.jsx';
import PercentageDifferenceCalculator from '../components/calculator/tools/PercentageDifferenceCalculator.jsx';
import PercentageEuroCalculator from '../components/calculator/tools/PercentageEuroCalculator.jsx';
import FractionToPercentageCalculator from '../components/calculator/tools/FractionToPercentageCalculator.jsx';
import PercentageToDecimalCalculator from '../components/calculator/tools/PercentageToDecimalCalculator.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';

export default function PercentageSuitePage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentTab = searchParams.get('tool') || 'value';

  const setTab = (toolKey) => {
    setSearchParams({ tool: toolKey });
  };

  const tabs = [
    { key: 'value', label: '1. % Value (P% of Base)', component: PercentageValueCalculator },
    { key: 'rate', label: '2. % Rate (What % is V of B)', component: PercentageRateCalculator },
    { key: 'euro', label: '3. % Euro Calculator (€)', component: PercentageEuroCalculator },
    { key: 'fraction', label: '4. Fraction to % (Numerator/Denominator)', component: FractionToPercentageCalculator },
    { key: 'decimal', label: '5. % to Decimal (% → 0.xx)', component: PercentageToDecimalCalculator },
    { key: 'increase', label: '6. % Increase (From V1 to V2)', component: PercentageIncreaseCalculator },
    { key: 'decrease', label: '7. % Decrease (From V1 to V2)', component: PercentageDecreaseCalculator },
    { key: 'backwards', label: '8. % Backwards (Reverse Calc)', component: CalculatePercentageBackwards },
    { key: 'diff', label: '9. % Difference (|A - B|)', component: PercentageDifferenceCalculator }
  ];

  const activeTabObj = tabs.find(t => t.key === currentTab) || tabs[0];
  const ActiveCalculatorComponent = activeTabObj.component;

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Complete Percentage Calculator Suite',
    'url': 'https://percentmaster.app/all-percentage-calculators',
    'description': 'Comprehensive percentage calculator suite covering percentage value, rate, percentage increase, decrease, add, subtract, and difference.'
  };

  return (
    <div className="calc-suite-page-container">
      <SEOHead
        title="Complete Percentage Calculator Suite"
        description="Calculate percentage values, percentage rates, percentage increase and decrease, add/subtract percentage, and difference."
        canonicalUrl="/all-percentage-calculators"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: '10-in-1 Calculator Suite' }]} />

      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Complete Percentage Calculator Suite</h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Select any of the 10 percentage formulas below to run instant, real-time calculations:
        </p>

        {/* Horizontal Navigation Pills */}
        <div style={{
          display: 'flex',
          gap: '0.4rem',
          flexWrap: 'wrap',
          marginTop: '1.25rem',
          background: 'var(--bg-card)',
          padding: '0.5rem',
          borderRadius: 'var(--border-radius-lg)',
          border: '1px solid var(--border-color)'
        }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`btn ${currentTab === tab.key ? 'btn-primary' : 'btn-secondary'}`}
              style={{ padding: '0.4rem 0.75rem', fontSize: '0.825rem', borderRadius: 'var(--border-radius-sm)' }}
              onClick={() => setTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Render Active Reusable Calculator */}
      <div className="active-calculator-slot animate-fade-in" key={currentTab}>
        <ActiveCalculatorComponent onSaveHistory={onSaveHistory} />
      </div>

      <SEOContent
        headline="Complete Percentage Mathematical Reference"
        description="Percentage math is structured around the fundamental relationship: Value = (Percentage Rate / 100) × Base Value. By rearranging this core equation, all 10 percentage variations are systematically derived."
        formula="P% / 100 = Value / Base"
        steps={[
          '1. Percentage Value: Multiply base by (Rate / 100).',
          '2. Percentage Rate: Divide part value by base, then multiply by 100.',
          '3. Base Value: Divide part value by (Rate / 100).',
          '4. Percentage Change: (Final - Initial) / |Initial| × 100.',
          '5. Reverse Growth: Final / (1 + Rate / 100).'
        ]}
        faqs={[
          {
            q: 'Which calculator should I use to calculate a sale discount?',
            a: 'Use Calculator 7 (Subtract Percentage) or Calculator 9 (Reverse Percentage Decrease if you want to find the original price before the discount).'
          },
          {
            q: 'How does reverse percentage work?',
            a: 'Reverse percentage undoes a change. If a price rose by 20% to $120, dividing $120 by 1.20 brings you back to the exact starting value of $100.'
          }
        ]}
      />
    </div>
  );
}
