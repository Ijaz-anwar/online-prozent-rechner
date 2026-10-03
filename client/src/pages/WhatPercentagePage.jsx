import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calculator } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import NumberInput from '../components/common/NumberInput.jsx';
import ResultDisplay from '../components/common/ResultDisplay.jsx';
import FormulaExplainer from '../components/common/FormulaExplainer.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import EducationalSection from '../components/common/EducationalSection.jsx';
import { calculateWhatPercentageIsXOfY } from '../utils/calculations/percentageCalculations.js';

export default function WhatPercentagePage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [partVal, setPartVal] = useState(searchParams.get('x') || '35');
  const [totalVal, setTotalVal] = useState(searchParams.get('y') || '140');
  const [decimals, setDecimals] = useState(2);

  const numPart = partVal !== '' ? Number(partVal) : null;
  const numTotal = totalVal !== '' ? Number(totalVal) : null;

  const resultData = calculateWhatPercentageIsXOfY(numPart, numTotal, decimals);

  useEffect(() => {
    const params = {};
    if (partVal) params.x = partVal;
    if (totalVal) params.y = totalVal;
    setSearchParams(params, { replace: true });
  }, [partVal, totalVal]);

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'What % is X of Y',
          expression: `${partVal} of ${totalVal}`,
          result: resultData.formattedResult
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [partVal, totalVal, decimals]);

  const handleReset = () => {
    setPartVal('');
    setTotalVal('');
  };

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'What Percentage is X of Y Calculator',
    'url': 'https://percentmaster.app/what-percentage-is-x-of-y',
    'description': 'Find what percentage one number is of another number with detailed step-by-step formula.'
  };

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="What Percentage is X of Y? - Ratio & Proportion Calculator"
        description="Calculate what percentage one number represents of another. Instant proportion calculator with detailed formulas."
        canonicalUrl="/what-percentage-is-x-of-y"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'What % is X of Y' }]} />

      <CalculatorCard
        title="What Percentage is X of Y?"
        subtitle="Determine what percentage one value represents in relation to a total."
        badge="Proportion & Ratio"
        icon={Calculator}
        resultSlot={
          <ResultDisplay
            title="Percentage Proportion"
            value={resultData.isValid ? resultData.formattedResult : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            error={!resultData.isValid && (partVal !== '' || totalVal !== '') ? resultData.error : null}
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
          id="input-part-x"
          label="Part Value (X)"
          value={partVal}
          onChange={setPartVal}
          placeholder="e.g. 35"
          autoFocus
          required
        />

        <NumberInput
          id="input-total-y"
          label="Total Value (Y)"
          value={totalVal}
          onChange={setTotalVal}
          placeholder="e.g. 140"
          required
        />
      </CalculatorCard>

      <EducationalSection
        title="How to Find What Percentage X is of Y"
        howItWorks={[
          'Divide the partial amount X by the total amount Y to find the decimal proportion.',
          'Multiply this decimal proportion by 100 to get the percentage.',
          'Formula: Percentage = (X / Y) × 100%'
        ]}
        examples={[
          {
            title: 'Test Score Percentage',
            scenario: 'You scored 42 points out of 50 on an exam.',
            solution: '(42 ÷ 50) × 100 = 84.00% score.'
          },
          {
            title: 'Fundraising Goal Progress',
            scenario: 'You have raised $7,500 toward a $25,000 campaign goal.',
            solution: 'Progress = ($7,500 ÷ $25,000) × 100 = 30.00% of goal achieved.'
          }
        ]}
        faqs={[
          {
            q: 'Can X be larger than Y?',
            a: 'Yes. If X is 200 and Y is 100, then X is 200% of Y.'
          }
        ]}
        relatedCalculators={[
          { title: 'Percentage of Number', subtitle: 'Find X% of Y', path: '/percentage-of-number' },
          { title: 'Percentage Increase / Decrease', subtitle: 'Calculate growth', path: '/percentage-increase-decrease' }
        ]}
      />
    </div>
  );
}
