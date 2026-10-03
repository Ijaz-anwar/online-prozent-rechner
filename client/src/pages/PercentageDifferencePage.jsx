import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { RefreshCw } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import NumberInput from '../components/common/NumberInput.jsx';
import ResultDisplay from '../components/common/ResultDisplay.jsx';
import FormulaExplainer from '../components/common/FormulaExplainer.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import EducationalSection from '../components/common/EducationalSection.jsx';
import { calculatePercentageDifference } from '../utils/calculations/percentageCalculations.js';

export default function PercentageDifferencePage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [valA, setValA] = useState(searchParams.get('a') || '80');
  const [valB, setValB] = useState(searchParams.get('b') || '100');
  const [decimals, setDecimals] = useState(2);

  const numA = valA !== '' ? Number(valA) : null;
  const numB = valB !== '' ? Number(valB) : null;

  const resultData = calculatePercentageDifference(numA, numB, decimals);

  useEffect(() => {
    const params = {};
    if (valA) params.a = valA;
    if (valB) params.b = valB;
    setSearchParams(params, { replace: true });
  }, [valA, valB]);

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Percentage Difference',
          expression: `Between ${valA} and ${valB}`,
          result: resultData.formattedResult
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [valA, valB, decimals]);

  const handleReset = () => {
    setValA('');
    setValB('');
  };

  const secondaryStats = resultData.isValid ? [
    { label: 'Average of Values', value: resultData.average },
    { label: 'Absolute Difference', value: Math.abs(numA - numB) }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Percentage Difference Calculator',
    'url': 'https://percentmaster.app/percentage-difference',
    'description': 'Calculate relative percentage difference between two quantities using their mathematical average.'
  };

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Percentage Difference Calculator - Compare Two Numbers"
        description="Free percentage difference calculator. Compare two numbers relative to their average with step-by-step formula breakdown."
        canonicalUrl="/percentage-difference"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'Percentage Difference' }]} />

      <CalculatorCard
        title="Percentage Difference Calculator"
        subtitle="Compare two numbers relative to their average value (order-independent comparison)."
        badge="Statistical Comparison"
        icon={RefreshCw}
        resultSlot={
          <ResultDisplay
            title="Percentage Difference"
            value={resultData.isValid ? resultData.formattedResult : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            secondaryStats={secondaryStats}
            error={!resultData.isValid && (valA !== '' || valB !== '') ? resultData.error : null}
          />
        }
        formulaSlot={
          <FormulaExplainer
            formula={resultData.formula}
            steps={resultData.steps}
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
        <NumberInput
          id="input-val-a"
          label="First Number (Value A)"
          value={valA}
          onChange={setValA}
          placeholder="e.g. 80"
          autoFocus
          required
        />

        <NumberInput
          id="input-val-b"
          label="Second Number (Value B)"
          value={valB}
          onChange={setValB}
          placeholder="e.g. 100"
          required
        />
      </CalculatorCard>

      <EducationalSection
        title="Understanding Percentage Difference"
        howItWorks={[
          'Calculate the absolute difference between the two numbers: |A - B|.',
          'Calculate the average of the two numbers: (A + B) / 2.',
          'Divide the absolute difference by the average, then multiply by 100.',
          'Formula: Percentage Difference = (|A - B| / ((A + B) / 2)) × 100%'
        ]}
        examples={[
          {
            title: 'Comparing Gas Station Prices',
            scenario: 'Station 1 charges $3.20/gal while Station 2 charges $3.60/gal.',
            solution: 'Difference = |3.20 - 3.60| / 3.40 = 11.76% difference.'
          },
          {
            title: 'Scientific Lab Measurements',
            scenario: 'Two sensors measure temperatures of 24.5°C and 25.8°C.',
            solution: 'Difference = |24.5 - 25.8| / 25.15 = 5.17% difference.'
          }
        ]}
        faqs={[
          {
            q: 'When should I use Percentage Difference instead of Percentage Change?',
            a: 'Use Percentage Change when you have a clear starting point in time (like an old price vs a new price). Use Percentage Difference when comparing two independent values (like two cars or two competing prices) where neither is the starting point.'
          }
        ]}
        relatedCalculators={[
          { title: 'Percentage Change', subtitle: 'Time-based growth or reduction', path: '/percentage-increase-decrease' },
          { title: 'What % is X of Y?', subtitle: 'Calculate proportions', path: '/what-percentage-is-x-of-y' }
        ]}
      />
    </div>
  );
}
