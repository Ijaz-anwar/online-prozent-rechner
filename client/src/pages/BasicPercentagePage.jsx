import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Percent, ArrowRightLeft } from 'lucide-react';

import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import CalculatorInput from '../components/calculator/CalculatorInput.jsx';
import CalculatorResult from '../components/calculator/CalculatorResult.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';
import { calculatePercentageOf } from '../utils/calculations/percentageCalculations.js';

export default function BasicPercentagePage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Inputs: X (Percentage) and Y (Total Number)
  const [percentage, setPercentage] = useState(searchParams.get('p') || '25');
  const [total, setTotal] = useState(searchParams.get('total') || '200');
  const [decimals, setDecimals] = useState(2);

  const percentagePresets = [5, 10, 15, 20, 25, 33.33, 50, 75];

  // Pure mathematical calculation
  const resultData = calculatePercentageOf(percentage, total, decimals);

  // Sync to URL search params for bookmarking and sharing
  useEffect(() => {
    const params = {};
    if (percentage !== '') params.p = percentage;
    if (total !== '') params.total = total;
    setSearchParams(params, { replace: true });
  }, [percentage, total]);

  // Auto record valid calculations into local history
  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Percentage of Number',
          expression: `${percentage}% of ${total}`,
          result: resultData.formattedResult
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [percentage, total, decimals]);

  const handleReset = () => {
    setPercentage('');
    setTotal('');
  };

  const handleSwap = () => {
    setPercentage(total);
    setTotal(percentage);
  };

  // Secondary statistical breakdown chips
  const secondaryStats = resultData.isValid ? [
    { label: 'Expression', value: `${percentage}% × ${total}` },
    { label: 'Decimal Factor', value: (Number(percentage) / 100).toString() }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Percentage of Number Calculator - What is X% of Y?',
    'url': 'https://percentmaster.app/percentage-of-number',
    'description': 'Calculate what X percent of any number Y equals with instant reactive math and step-by-step formula breakdown.'
  };

  const faqs = [
    {
      q: 'How do you calculate a percentage of a number?',
      a: 'To calculate a percentage of any number, divide the percentage by 100 to convert it into a decimal fraction, and then multiply that decimal by the total number. For example: 25% of 200 = (25 ÷ 100) × 200 = 0.25 × 200 = 50.'
    },
    {
      q: 'Does swapping the numbers change the result (Is X% of Y equal to Y% of X)?',
      a: 'Yes! Mathematically, X% of Y is always equal to Y% of X because multiplication is commutative: (X / 100) * Y = (Y / 100) * X. For example, 8% of 50 is 4, and 50% of 8 is also 4.'
    },
    {
      q: 'Can percentage calculations handle negative numbers or decimals?',
      a: 'Yes. For instance, -15% of 200 = -30, and 12.5% of 80 = 10. All negative and decimal calculations are handled safely with exact precision.'
    }
  ];

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Percentage of Number Calculator - What is X% of Y?"
        description="Calculate what X% of Y is instantly. Free, reactive percentage calculator with step-by-step solution, formula explainer, and presets."
        canonicalUrl="/percentage-of-number"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'What is X% of Y?' }]} />

      <CalculatorCard
        title="What is X% of Y?"
        subtitle="Calculate the exact percentage share of any base number in real time."
        badge="Instant Calculation"
        icon={Percent}
        resultSlot={
          <CalculatorResult
            title="Calculated Answer"
            value={resultData.isValid ? resultData.formattedResult : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            stats={secondaryStats}
            steps={resultData.isValid ? resultData.steps : []}
            error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
            emptyMessage="Enter percentage and number to calculate"
          />
        }
        footerSlot={
          <ActionToolbar
            onReset={handleReset}
            onShare={() => window.location.href}
            decimals={decimals}
            onDecimalsChange={setDecimals}
          />
        }
      >
        {/* Percentage Input (X) */}
        <div className="calc-input-row-group">
          <CalculatorInput
            id="input-percentage"
            label="Percentage (X)"
            value={percentage}
            onChange={setPercentage}
            placeholder="e.g. 25"
            suffix="%"
            autoFocus
            required
          />

          {/* Quick Preset Buttons */}
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.45rem' }}>
            {percentagePresets.map((pct) => (
              <button
                key={pct}
                type="button"
                className={`btn btn-secondary ${Number(percentage) === pct ? 'btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem' }}
                onClick={() => setPercentage(String(pct))}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        {/* Swap Control */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '-0.25rem 0' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSwap}
            style={{ padding: '0.3rem 0.75rem', fontSize: '0.8rem', gap: '0.35rem' }}
            title="Swap Percentage (X) and Number (Y)"
          >
            <ArrowRightLeft size={14} />
            <span>Swap X and Y</span>
          </button>
        </div>

        {/* Number Input (Y) */}
        <CalculatorInput
          id="input-total"
          label="Total Number (Y)"
          value={total}
          onChange={setTotal}
          placeholder="e.g. 200"
          required
        />
      </CalculatorCard>

      {/* SEO & Educational Section */}
      <SEOContent
        headline="Understanding 'What is X% of Y?'"
        description="The percentage calculation 'What is X% of Y?' determines the specific quantitative portion of a whole amount based on a rate per hundred."
        formula="Result = (Percentage / 100) × Total Number"
        steps={[
          'Step 1: Divide the percentage by 100 to convert to a decimal multiplier (P / 100).',
          'Step 2: Multiply the decimal multiplier by the base quantity (Y).',
          'Step 3: Round the resulting value to your desired decimal precision.'
        ]}
        examples={[
          {
            title: 'Example: 25% of 200',
            scenario: 'Find 25% of 200.',
            solution: '(25 ÷ 100) × 200 = 0.25 × 200 = 50.'
          },
          {
            title: 'Example: 15% Tip on $80.00',
            scenario: 'Calculate a 15% tip on an $80.00 restaurant bill.',
            solution: '(15 ÷ 100) × 80 = 0.15 × 80 = $12.00 tip.'
          },
          {
            title: 'Example: 8.5% Sales Tax on $150',
            scenario: 'Calculate sales tax of 8.5% on a $150 item.',
            solution: '(8.5 ÷ 100) × 150 = 0.085 × 150 = $12.75 tax.'
          }
        ]}
        faqs={faqs}
      />
    </div>
  );
}
