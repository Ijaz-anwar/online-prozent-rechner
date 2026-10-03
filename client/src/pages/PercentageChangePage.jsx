import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import NumberInput from '../components/common/NumberInput.jsx';
import ResultDisplay from '../components/common/ResultDisplay.jsx';
import FormulaExplainer from '../components/common/FormulaExplainer.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import EducationalSection from '../components/common/EducationalSection.jsx';
import { calculatePercentageChange } from '../utils/calculations/percentageCalculations.js';

export default function PercentageChangePage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [initialVal, setInitialVal] = useState(searchParams.get('from') || '50');
  const [finalVal, setFinalVal] = useState(searchParams.get('to') || '75');
  const [decimals, setDecimals] = useState(2);

  const numInitial = initialVal !== '' ? Number(initialVal) : null;
  const numFinal = finalVal !== '' ? Number(finalVal) : null;

  const resultData = calculatePercentageChange(numInitial, numFinal, decimals);

  useEffect(() => {
    const params = {};
    if (initialVal) params.from = initialVal;
    if (finalVal) params.to = finalVal;
    setSearchParams(params, { replace: true });
  }, [initialVal, finalVal]);

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Percentage Change',
          expression: `From ${initialVal} to ${finalVal}`,
          result: resultData.formattedResult
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [initialVal, finalVal, decimals]);

  const handleReset = () => {
    setInitialVal('');
    setFinalVal('');
  };

  const handleSwap = () => {
    setInitialVal(finalVal);
    setFinalVal(initialVal);
  };

  const secondaryStats = resultData.isValid ? [
    { label: 'Absolute Difference', value: resultData.formattedDifference },
    { label: 'Trend', value: resultData.isIncrease ? '📈 Growth / Increase' : resultData.isDecrease ? '📉 Drop / Decrease' : 'No Change' }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Percentage Increase & Decrease Calculator',
    'url': 'https://percentmaster.app/percentage-increase-decrease',
    'description': 'Calculate percentage growth, price jumps, stock changes, and reductions from an initial value to a final value.'
  };

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Percentage Increase / Decrease Calculator - Calculate % Change"
        description="Calculate percentage change, growth rate, or reduction between any two numbers. Includes step-by-step formula and difference calculations."
        canonicalUrl="/percentage-increase-decrease"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'Percentage Change' }]} />

      <CalculatorCard
        title="Percentage Increase / Decrease Calculator"
        subtitle="Calculate the percentage change and growth rate from an initial number to a new number."
        badge="Growth & Trends"
        icon={TrendingUp}
        resultSlot={
          <ResultDisplay
            title={resultData.isIncrease ? 'Percentage Increase' : resultData.isDecrease ? 'Percentage Decrease' : 'Percentage Change'}
            value={resultData.isValid ? resultData.formattedResult : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            secondaryStats={secondaryStats}
            error={!resultData.isValid && (initialVal !== '' || finalVal !== '') ? resultData.error : null}
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
          id="input-from"
          label="Initial Starting Value (From)"
          value={initialVal}
          onChange={setInitialVal}
          placeholder="e.g. 50"
          autoFocus
          required
        />

        <div style={{ display: 'flex', justifyContent: 'center', margin: '-0.5rem 0' }}>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={handleSwap}
            style={{ padding: '0.35rem 0.75rem', fontSize: '0.8rem' }}
            title="Swap values"
          >
            ⇅ Swap Initial & Final
          </button>
        </div>

        <NumberInput
          id="input-to"
          label="Final Ending Value (To)"
          value={finalVal}
          onChange={setFinalVal}
          placeholder="e.g. 75"
          required
        />
      </CalculatorCard>

      <EducationalSection
        title="How Percentage Change Works"
        howItWorks={[
          'Subtract the initial starting value from the final ending value to find the absolute difference: Difference = Final - Initial.',
          'Divide that difference by the absolute value of the initial starting value.',
          'Multiply by 100 to express the result as a percentage.',
          'Formula: Percentage Change = ((Final - Initial) / |Initial|) × 100%'
        ]}
        examples={[
          {
            title: 'Price Hike on Groceries',
            scenario: 'An item priced at $4.00 increases to $5.00.',
            solution: 'Change = (($5 - $4) / $4) × 100 = +25.00% increase.'
          },
          {
            title: 'Weight Loss Progress',
            scenario: 'Starting weight was 180 lbs and is now 165 lbs.',
            solution: 'Change = ((165 - 180) / 180) × 100 = -8.33% decrease.'
          }
        ]}
        faqs={[
          {
            q: 'Why can the initial value not be 0 in percentage change?',
            a: 'Mathematically, division by zero is undefined. An increase from 0 to any positive number represents an infinite or undefined percentage growth.'
          },
          {
            q: 'What is the difference between a 100% increase and a 200% increase?',
            a: 'A 100% increase means the value has doubled (from $50 to $100). A 200% increase means the value has tripled (from $50 to $150).'
          }
        ]}
        relatedCalculators={[
          { title: 'Percentage Difference', subtitle: 'Unbiased comparison between 2 numbers', path: '/percentage-difference' },
          { title: 'Percentage of Number', subtitle: 'Find X% of Y', path: '/percentage-of-number' },
          { title: 'Discount Calculator', subtitle: 'Calculate price drops & sales', path: '/discount-calculator' }
        ]}
      />
    </div>
  );
}
