import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Receipt, Users, DollarSign } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import NumberInput from '../components/common/NumberInput.jsx';
import ResultDisplay from '../components/common/ResultDisplay.jsx';
import FormulaExplainer from '../components/common/FormulaExplainer.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import EducationalSection from '../components/common/EducationalSection.jsx';
import { calculateTip } from '../utils/calculations/percentageCalculations.js';

export default function TipCalculatorPage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [bill, setBill] = useState(searchParams.get('bill') || '85');
  const [tipRate, setTipRate] = useState(searchParams.get('tip') || '18');
  const [people, setPeople] = useState(searchParams.get('people') || '2');
  const [decimals, setDecimals] = useState(2);

  const numBill = bill !== '' ? Number(bill) : null;
  const numTipRate = tipRate !== '' ? Number(tipRate) : null;
  const numPeople = people !== '' ? Math.max(1, parseInt(people, 10)) : 1;

  const resultData = calculateTip(numBill, numTipRate, numPeople, decimals);

  useEffect(() => {
    const params = {};
    if (bill) params.bill = bill;
    if (tipRate) params.tip = tipRate;
    if (people) params.people = people;
    setSearchParams(params, { replace: true });
  }, [bill, tipRate, people]);

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Tip & Bill Split',
          expression: `$${bill} bill + ${tipRate}% tip (${people} people)`,
          result: `Total: $${resultData.formattedResult} ($${resultData.formattedTotalPerPerson}/person)`
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [bill, tipRate, people, decimals]);

  const handleReset = () => {
    setBill('');
    setTipRate('18');
    setPeople('1');
  };

  const tipPresets = [10, 15, 18, 20, 25];

  const secondaryStats = resultData.isValid ? [
    { label: 'Tip Amount', value: `$${resultData.formattedTip}` },
    { label: 'Tip Per Person', value: `$${resultData.tipPerPerson}` },
    { label: 'Total Per Person', value: `$${resultData.formattedTotalPerPerson}` }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Tip & Bill Split Calculator',
    'url': 'https://percentmaster.app/tip-calculator',
    'description': 'Calculate tip amounts and split dining checks evenly per person.'
  };

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Tip & Bill Split Calculator - Calculate Gratuity & Split"
        description="Calculate tips and split the bill among any number of people. Quick preset buttons for 10%, 15%, 18%, 20%, and 25%."
        canonicalUrl="/tip-calculator"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'Tip & Bill Split' }]} />

      <CalculatorCard
        title="Tip & Bill Split Calculator"
        subtitle="Calculate gratuity and split restaurant bills fairly among group members."
        badge="Dining & Gratuity"
        icon={Receipt}
        resultSlot={
          <ResultDisplay
            title={numPeople > 1 ? 'Total Per Person' : 'Total Bill with Tip'}
            value={resultData.isValid ? `$${numPeople > 1 ? resultData.formattedTotalPerPerson : resultData.formattedResult}` : null}
            unit={numPeople > 1 ? '/ person' : ''}
            explanation={resultData.isValid ? resultData.explanation : null}
            secondaryStats={secondaryStats}
            error={!resultData.isValid && (bill !== '' || tipRate !== '') ? resultData.error : null}
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
          id="input-bill"
          label="Bill Amount ($)"
          value={bill}
          onChange={setBill}
          placeholder="e.g. 85.00"
          prefix="$"
          autoFocus
          required
        />

        <div className="tip-rate-section">
          <NumberInput
            id="input-tip-rate"
            label="Tip Percentage (%)"
            value={tipRate}
            onChange={setTipRate}
            placeholder="e.g. 18"
            suffix="%"
            required
          />
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {tipPresets.map((pct) => (
              <button
                key={pct}
                type="button"
                className={`btn btn-secondary ${Number(tipRate) === pct ? 'btn-primary' : ''}`}
                style={{ padding: '0.3rem 0.65rem', fontSize: '0.8rem' }}
                onClick={() => setTipRate(String(pct))}
              >
                {pct}%
              </button>
            ))}
          </div>
        </div>

        <NumberInput
          id="input-people"
          label="Split Between (Number of People)"
          value={people}
          onChange={setPeople}
          placeholder="1"
          min="1"
          step="1"
        />
      </CalculatorCard>

      <EducationalSection
        title="Standard Tipping Etiquette"
        howItWorks={[
          '15% is standard for acceptable service at sit-down restaurants.',
          '18% to 20% is typical for good to great service.',
          '25%+ is customary for exceptional dining experiences or large party tables.'
        ]}
        examples={[
          {
            title: 'Dinner for Four',
            scenario: 'Bill is $120.00, tip is 20%, split 4 ways.',
            solution: 'Total: $144.00 ($36.00 per person).'
          }
        ]}
        relatedCalculators={[
          { title: 'Discount Calculator', subtitle: 'Sales & savings', path: '/discount-calculator' },
          { title: 'Percentage of Number', subtitle: 'Calculate X% of Y', path: '/percentage-of-number' }
        ]}
      />
    </div>
  );
}
