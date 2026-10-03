import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Tag, DollarSign, Percent, ArrowRight } from 'lucide-react';

import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import CalculatorInput from '../components/calculator/CalculatorInput.jsx';
import CalculatorResult from '../components/calculator/CalculatorResult.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';
import { calculateDiscountPrice, CURRENCY_SYMBOLS } from '../utils/calculations/discountCalculation.js';

export default function DiscountCalculatorPage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // State
  const [price, setPrice] = useState(searchParams.get('price') || '100');
  const [discount, setDiscount] = useState(searchParams.get('discount') || '20');
  const [currency, setCurrency] = useState(searchParams.get('currency') || 'EUR');
  const [decimals, setDecimals] = useState(2);

  const discountPresets = [5, 10, 15, 20, 25, 30, 40, 50, 70];
  const currencyOptions = [
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)' }
  ];

  const currentSymbol = CURRENCY_SYMBOLS[currency] || '€';

  // Pure Calculation
  const resultData = calculateDiscountPrice(price, discount, currency, decimals);

  // Sync to URL search params
  useEffect(() => {
    const params = {};
    if (price !== '') params.price = price;
    if (discount !== '') params.discount = discount;
    if (currency !== 'EUR') params.currency = currency;
    setSearchParams(params, { replace: true });
  }, [price, discount, currency]);

  // Record valid calculations in history
  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Discount Calculator',
          expression: `${currentSymbol}${price} with ${discount}% off`,
          result: `Final: ${resultData.formattedFinal} (Saved: ${resultData.formattedSavings})`
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [price, discount, currency, decimals]);

  const handleReset = () => {
    setPrice('');
    setDiscount('');
  };

  const secondaryStats = resultData.isValid ? [
    { label: 'Original Price', value: resultData.formattedOriginal },
    { label: 'You Save', value: resultData.formattedSavings },
    { label: 'Discount Rate', value: `${discount}%` }
  ] : [];

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': 'Rabattrechner & Discount Calculator',
    'url': 'https://percentmaster.app/rabattrechner',
    'applicationCategory': 'FinancialApplication',
    'description': 'Calculate discounted sale prices, cash savings, and final costs instantly with currency selector.'
  };

  const faqs = [
    {
      q: 'How do you calculate a discount percentage?',
      a: 'To calculate the discount amount, multiply the original price by the discount percentage divided by 100. Then subtract this savings amount from the original price to determine the final sale price. (Example: €100 with 20% discount = €100 - (€100 × 0.20) = €80).'
    },
    {
      q: 'How do I quickly calculate a 20% discount in my head?',
      a: 'To find 20% of any price, divide the price by 10 to find 10%, and then double that number. Subtract that amount from the original price (or directly multiply by 0.80).'
    },
    {
      q: 'Does this calculator support decimal numbers and various currencies?',
      a: 'Yes. You can enter precise decimal numbers (e.g. €79.95 with 12.5% discount) and switch between EUR (€), USD ($), and GBP (£) seamlessly.'
    }
  ];

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="Rabattrechner - Rabatt und Endpreis sofort berechnen"
        description="Kostenloser Rabattrechner: Berechnen Sie den reduzierten Endpreis, die Ersparnis in Euro, Dollar oder Pfund und den Rabattsatz in Echtzeit."
        canonicalUrl="/rabattrechner"
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: 'Rabattrechner (Discount Calculator)' }]} />

      <CalculatorCard
        title="Discount Calculator (Rabattrechner)"
        subtitle="Calculate your final sale price and total cash savings instantly with customizable currency."
        badge="Shopping & Retail"
        icon={Tag}
        resultSlot={
          <CalculatorResult
            title="Final Reduced Price"
            value={resultData.isValid ? resultData.formattedFinal : null}
            explanation={resultData.isValid ? resultData.explanation : null}
            stats={secondaryStats}
            steps={resultData.isValid ? resultData.steps : []}
            error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
            emptyMessage="Enter original price and discount percentage"
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
        {/* Currency Selector */}
        <div style={{ marginBottom: '-0.25rem' }}>
          <label htmlFor="currency-select" style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem', color: 'var(--text-main)' }}>
            Selected Currency
          </label>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {currencyOptions.map((curr) => (
              <button
                key={curr.code}
                type="button"
                className={`btn ${currency === curr.code ? 'btn-primary' : 'btn-secondary'}`}
                style={{ flex: 1, padding: '0.45rem', fontSize: '0.85rem' }}
                onClick={() => setCurrency(curr.code)}
              >
                {curr.label}
              </button>
            ))}
          </div>
        </div>

        {/* Original Price Input */}
        <CalculatorInput
          id="input-original-price"
          label="Original Price"
          value={price}
          onChange={setPrice}
          placeholder="e.g. 100.00"
          prefix={currentSymbol}
          autoFocus
          required
        />

        {/* Discount Percentage Input with Presets */}
        <div className="calc-input-row-group">
          <CalculatorInput
            id="input-discount-percent"
            label="Discount Percentage"
            value={discount}
            onChange={setDiscount}
            placeholder="e.g. 20"
            suffix="%"
            required
          />

          {/* Quick Preset Buttons */}
          <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.45rem' }}>
            {discountPresets.map((pct) => (
              <button
                key={pct}
                type="button"
                className={`btn btn-secondary ${Number(discount) === pct ? 'btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.55rem', fontSize: '0.75rem' }}
                onClick={() => setDiscount(String(pct))}
              >
                {pct}% OFF
              </button>
            ))}
          </div>
        </div>
      </CalculatorCard>

      {/* SEO & Educational Section */}
      <SEOContent
        headline="So funktioniert die Rabattberechnung (How Discount Calculation Works)"
        description="Ein Rabatt ist ein prozentualer oder absoluter Preisnachlass auf den ursprünglichen Verkaufspreis einer Ware oder Dienstleistung."
        formula="Endpreis = Ursprünglicher Preis × (1 - Rabatt% / 100)"
        steps={[
          'Schritt 1: Ersparnis berechnen = Ursprünglicher Preis × (Rabatt% ÷ 100).',
          'Schritt 2: Endpreis ermitteln = Ursprünglicher Preis - Ersparnis.',
          'Formel: Endpreis = Preis × (1 - Rabatt / 100).'
        ]}
        examples={[
          {
            title: 'Beispiel 1: 20% Rabatt auf €100',
            scenario: 'Ein Artikel kostet regulär €100 und ist um 20% reduziert.',
            solution: 'Ersparnis: €20,00 | Neuer Endpreis: €80,00.'
          },
          {
            title: 'Beispiel 2: 15% Rabatt auf $250',
            scenario: 'Ein elektronisches Gerät kostet $250 mit einem 15% Aktionsrabatt.',
            solution: 'Ersparnis: $37,50 | Neuer Endpreis: $212,50.'
          },
          {
            title: 'Beispiel 3: 30% Rabatt auf £89.99',
            scenario: 'Ein Kleidungsstück für £89.99 wird im Sale um 30% herabgesetzt.',
            solution: 'Ersparnis: £27.00 | Neuer Endpreis: £62.99.'
          }
        ]}
        faqs={faqs}
      />
    </div>
  );
}
