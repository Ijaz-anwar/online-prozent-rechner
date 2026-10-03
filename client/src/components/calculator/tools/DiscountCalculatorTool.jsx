import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculateDiscountPrice, CURRENCY_SYMBOLS } from '../../../utils/calculations/discountCalculation.js';

export default function DiscountCalculatorTool({ onSaveHistory, initialPrice = '100', initialDiscount = '20' }) {
  const [price, setPrice] = useState(initialPrice);
  const [discount, setDiscount] = useState(initialDiscount);
  const [currency, setCurrency] = useState('EUR');
  const [decimals, setDecimals] = useState(2);

  const discountPresets = [5, 10, 15, 20, 25, 30, 40, 50, 70];
  const currencyOptions = [
    { code: 'EUR', symbol: '€', label: 'EUR (€)' },
    { code: 'USD', symbol: '$', label: 'USD ($)' },
    { code: 'GBP', symbol: '£', label: 'GBP (£)' }
  ];

  const currentSymbol = CURRENCY_SYMBOLS[currency] || '€';
  const resultData = calculateDiscountPrice(price, discount, currency, decimals);

  const handleReset = () => {
    setPrice('');
    setDiscount('');
  };

  const stats = resultData.isValid ? [
    { label: 'Originalpreis', value: resultData.formattedOriginal },
    { label: 'Ersparnis (Rabatt)', value: resultData.formattedSavings },
    { label: 'Reduzierter Endpreis', value: resultData.formattedFinal }
  ] : [];

  return (
    <CalculatorCard
      title="Prozent Rabatt Rechner"
      subtitle="Berechnen Sie reduzierte Angebotspreise, prozentuale Rabatte und Ihre tatsächliche Ersparnis."
      badge="Rabatt (-%)"
      icon={Tag}
      resultSlot={
        <CalculatorResult
          title="Endpreis nach Rabatt"
          value={resultData.isValid ? resultData.formattedFinal : null}
          explanation={resultData.isValid ? resultData.explanation : null}
          stats={stats}
          steps={resultData.isValid ? resultData.steps : []}
          error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
          emptyMessage="Geben Sie Preis und Rabatt ein, um den reduzierten Preis zu berechnen"
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
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Currency Selector */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>Währung:</span>
          <div style={{ display: 'flex', gap: '0.35rem' }}>
            {currencyOptions.map((opt) => (
              <button
                key={opt.code}
                type="button"
                className={`btn btn-secondary ${currency === opt.code ? 'btn-primary' : ''}`}
                style={{ padding: '0.25rem 0.6rem', fontSize: '0.78rem' }}
                onClick={() => setCurrency(opt.code)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Original Price */}
        <CalculatorInput
          id="disc-tool-price"
          label={`Ursprünglicher Preis (${currentSymbol})`}
          value={price}
          onChange={setPrice}
          placeholder="z. B. 100"
          prefix={currentSymbol}
          required
        />

        {/* Discount Rate */}
        <div>
          <CalculatorInput
            id="disc-tool-rate"
            label="Rabattsatz (%)"
            value={discount}
            onChange={setDiscount}
            placeholder="z. B. 20"
            suffix="%"
            required
          />

          {/* Quick presets */}
          <div style={{ display: 'flex', gap: '0.35rem', marginTop: '0.45rem', flexWrap: 'wrap' }}>
            {discountPresets.map((preset) => (
              <button
                key={preset}
                type="button"
                className={`btn btn-secondary ${Number(discount) === preset ? 'btn-primary' : ''}`}
                style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                onClick={() => setDiscount(String(preset))}
              >
                {preset}%
              </button>
            ))}
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
}
