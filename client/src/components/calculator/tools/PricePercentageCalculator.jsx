import React, { useState, useEffect } from 'react';
import { Tag, TrendingUp, TrendingDown, ArrowLeftRight, Euro, DollarSign } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculatePricePercentage } from '../../../utils/calculations/percentageCalculations.js';
import './CalculatorTools.css';

export default function PricePercentageCalculator({
  onSaveHistory,
  initialPrice = '100',
  initialValue = '20',
  initialMode = 'discount'
}) {
  const [mode, setMode] = useState(initialMode); // 'discount' | 'increase' | 'compare'
  const [currency, setCurrency] = useState('€');
  const [priceA, setPriceA] = useState(initialPrice);
  const [valueB, setValueB] = useState(initialValue);
  const [decimals, setDecimals] = useState(2);

  const resultData = calculatePricePercentage(priceA, valueB, mode, decimals);

  const handleReset = () => {
    setPriceA('');
    setValueB(mode === 'compare' ? '' : '20');
  };

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Price Percentage Calculator',
          expression: mode === 'discount'
            ? `${priceA}${currency} - ${valueB}%`
            : mode === 'increase'
            ? `${priceA}${currency} + ${valueB}%`
            : `Old: ${priceA}${currency} → New: ${valueB}${currency}`,
          result: `${resultData.formattedResult}${mode === 'compare' ? '' : ` ${currency}`}`
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [priceA, valueB, mode, currency, decimals]);

  // Format stats with selected currency symbol
  const formattedStats = resultData.isValid ? resultData.stats.map(s => {
    if (s.label.includes('Price') || s.label.includes('Discount') || s.label.includes('Increase') || s.label.includes('Difference')) {
      return {
        label: s.label,
        value: s.value.includes('%') ? s.value : `${s.value} ${currency}`
      };
    }
    return s;
  }) : [];

  const primaryValue = resultData.isValid
    ? (mode === 'compare' ? resultData.formattedResult : `${resultData.formattedResult} ${currency}`)
    : null;

  return (
    <CalculatorCard
      title="Preis Prozent Rechner"
      subtitle="Berechnen Sie reduzierte Verkaufspreise, Preisnachlässe, Preiserhöhungen und prozentuale Preisänderungen sofort."
      badge="Preis & %"
      icon={Tag}
      resultSlot={
        <CalculatorResult
          title={mode === 'discount' ? 'Endpreis nach Rabatt' : mode === 'increase' ? 'Endpreis nach Aufschlag' : 'Prozentuale Preisänderung'}
          value={primaryValue}
          explanation={resultData.isValid ? resultData.explanation : null}
          stats={formattedStats}
          steps={resultData.isValid ? resultData.steps : []}
          error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
          emptyMessage="Geben Sie Preise und Prozentsätze ein, um die Berechnung zu starten"
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
        {/* Mode Selector and Currency */}
        <div className="calc-mode-toolbar">
          {/* Mode Tabs */}
          <div className="calc-mode-tabs">
            <button
              type="button"
              className={`calc-mode-btn ${mode === 'discount' ? 'active' : ''}`}
              onClick={() => {
                setMode('discount');
                setValueB('20');
              }}
            >
              <TrendingDown size={14} />
              <span>Rabatt (-%)</span>
            </button>
            <button
              type="button"
              className={`calc-mode-btn ${mode === 'increase' ? 'active' : ''}`}
              onClick={() => {
                setMode('increase');
                setValueB('19');
              }}
            >
              <TrendingUp size={14} />
              <span>Preiserhöhung (+%)</span>
            </button>
            <button
              type="button"
              className={`calc-mode-btn ${mode === 'compare' ? 'active' : ''}`}
              onClick={() => {
                setMode('compare');
                setValueB('120');
              }}
            >
              <ArrowLeftRight size={14} />
              <span>2 Preise vergleichen</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="calc-currency-bar">
            {['€', '$', '£'].map((curr) => (
              <button
                key={curr}
                type="button"
                className={`calc-currency-btn ${currency === curr ? 'active' : ''}`}
                onClick={() => setCurrency(curr)}
                aria-label={`Währung ${curr} auswählen`}
              >
                {curr}
              </button>
            ))}
          </div>
        </div>

        {/* Inputs */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <CalculatorInput
            id="price-val-a"
            label={mode === 'compare' ? 'Alter Preis (Vorher)' : 'Ursprünglicher Preis'}
            value={priceA}
            onChange={setPriceA}
            placeholder="z. B. 100"
            suffix={currency}
            required
          />

          <CalculatorInput
            id="price-val-b"
            label={
              mode === 'discount'
                ? 'Rabattsatz in %'
                : mode === 'increase'
                ? 'Preiserhöhung / Steuer in %'
                : 'Neuer Preis (Nachher)'
            }
            value={valueB}
            onChange={setValueB}
            placeholder={mode === 'compare' ? 'z. B. 120' : 'z. B. 20'}
            suffix={mode === 'compare' ? currency : '%'}
            presets={mode === 'compare' ? undefined : [5, 10, 15, 20, 25, 30, 50, 70]}
            required
          />
        </div>
      </div>
    </CalculatorCard>
  );
}
