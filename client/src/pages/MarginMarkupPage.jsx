import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DollarSign, TrendingUp } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import NumberInput from '../components/common/NumberInput.jsx';
import ResultDisplay from '../components/common/ResultDisplay.jsx';
import FormulaExplainer from '../components/common/FormulaExplainer.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import EducationalSection from '../components/common/EducationalSection.jsx';
import { calculateMarginMarkup } from '../utils/calculations/percentageCalculations.js';

export default function MarginMarkupPage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const [cost, setCost] = useState(searchParams.get('cost') || '60');
  const [revenue, setRevenue] = useState(searchParams.get('revenue') || '100');
  const [decimals, setDecimals] = useState(2);

  const numCost = cost !== '' ? Number(cost) : null;
  const numRevenue = revenue !== '' ? Number(revenue) : null;

  const resultData = calculateMarginMarkup(numCost, numRevenue, decimals);

  useEffect(() => {
    const params = {};
    if (cost) params.cost = cost;
    if (revenue) params.revenue = revenue;
    setSearchParams(params, { replace: true });
  }, [cost, revenue]);

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Margin & Markup',
          expression: `Cost $${cost} | Selling $${revenue}`,
          result: `Margin: ${resultData.formattedMargin} | Markup: ${resultData.formattedMarkup}`
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [cost, revenue, decimals]);

  const handleReset = () => {
    setCost('');
    setRevenue('');
  };

  const secondaryStats = resultData.isValid ? [
    { label: 'Gross Profit ($)', value: `$${resultData.formattedProfit}` },
    { label: 'Profit Margin (%)', value: resultData.formattedMargin },
    { label: 'Markup Percentage (%)', value: resultData.formattedMarkup }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Profit Margin & Markup Calculator',
    'url': 'https://percentmaster.app/margin-markup-calculator',
    'description': 'Calculate profit margin percentage, markup rate, and gross cash profit from cost and revenue.'
  };

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Profit Margin & Markup Calculator - Business Financial Tool"
        description="Calculate profit margin vs markup percentage instantly. Understand how cost, price, and profits interrelate in retail and business."
        canonicalUrl="/margin-markup-calculator"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'Margin & Markup' }]} />

      <CalculatorCard
        title="Profit Margin & Markup Calculator"
        subtitle="Compare your gross profit margin percentage against your markup percentage."
        badge="Business & Finance"
        icon={DollarSign}
        resultSlot={
          <ResultDisplay
            title="Profit Margin"
            value={resultData.isValid ? resultData.formattedMargin : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            secondaryStats={secondaryStats}
            error={!resultData.isValid && (cost !== '' || revenue !== '') ? resultData.error : null}
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
          id="input-cost"
          label="Item Cost (COGS - Cost of Goods Sold)"
          value={cost}
          onChange={setCost}
          placeholder="e.g. 60.00"
          prefix="$"
          autoFocus
          required
        />

        <NumberInput
          id="input-revenue"
          label="Selling Price (Revenue)"
          value={revenue}
          onChange={setRevenue}
          placeholder="e.g. 100.00"
          prefix="$"
          required
        />
      </CalculatorCard>

      <EducationalSection
        title="Margin vs Markup: What Is the Difference?"
        howItWorks={[
          'Gross Profit = Revenue - Cost.',
          'Margin (%) = (Gross Profit / Revenue) × 100% -> Shows what percentage of the selling price is profit.',
          'Markup (%) = (Gross Profit / Cost) × 100% -> Shows what percentage is added on top of the cost.'
        ]}
        examples={[
          {
            title: 'Retail Wholesale Example',
            scenario: 'You buy a product for $50 and sell it for $100.',
            solution: 'Profit = $50. Margin = 50.00%. Markup = 100.00%.'
          }
        ]}
        faqs={[
          {
            q: 'Can margin ever exceed 100%?',
            a: 'No, profit margin cannot exceed 100% (unless costs are negative). However, markup can easily exceed 100%, 200%, or more.'
          }
        ]}
        relatedCalculators={[
          { title: 'Discount Calculator', subtitle: 'Retail pricing reductions', path: '/discount-calculator' },
          { title: 'Percentage Increase', subtitle: 'General growth rates', path: '/percentage-increase-decrease' }
        ]}
      />
    </div>
  );
}
