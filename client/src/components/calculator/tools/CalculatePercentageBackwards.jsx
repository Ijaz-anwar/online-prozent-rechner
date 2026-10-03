import React, { useState, useEffect } from 'react';
import { Undo2, TrendingDown, TrendingUp, PieChart, Euro, DollarSign } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculatePercentageBackwards } from '../../../utils/calculations/percentageCalculations.js';
import './CalculatorTools.css';

export default function CalculatePercentageBackwards({
  onSaveHistory,
  initialValue = '75',
  initialPercentage = '25',
  initialMode = 'discount'
}) {
  const [mode, setMode] = useState(initialMode); // 'discount' | 'increase' | 'share'
  const [currency, setCurrency] = useState('€');
  const [val, setVal] = useState(initialValue);
  const [pct, setPct] = useState(initialPercentage);
  const [decimals, setDecimals] = useState(2);

  const resultData = calculatePercentageBackwards(val, pct, mode, decimals);

  const handleReset = () => {
    setVal('');
    setPct('');
  };

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Calculate Percentage Backwards',
          expression: mode === 'discount'
            ? `${val}${currency ? ` ${currency}` : ''} after -${pct}% discount`
            : mode === 'increase'
            ? `${val}${currency ? ` ${currency}` : ''} after +${pct}% markup`
            : `${val}${currency ? ` ${currency}` : ''} is ${pct}% of total`,
          result: `${resultData.formattedResult}${currency ? ` ${currency}` : ''}`
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [val, pct, mode, currency, decimals]);

  // Format stats with selected currency symbol if appropriate
  const formattedStats = resultData.isValid ? resultData.stats.map(s => {
    if (currency && !s.value.includes('%') && (s.label.includes('Value') || s.label.includes('Discount') || s.label.includes('Increase'))) {
      return {
        label: s.label,
        value: `${s.value} ${currency}`
      };
    }
    return s;
  }) : [];

  const primaryValue = resultData.isValid
    ? `${resultData.formattedResult}${currency ? ` ${currency}` : ''}`
    : null;

  const resultTitle = mode === 'discount'
    ? 'Ursprünglicher Wert (Vor Rabatt)'
    : mode === 'increase'
    ? 'Ursprünglicher Wert (Vor Aufschlag)'
    : 'Gesamter Grundwert (100 %)';

  return (
    <CalculatorCard
      title="Prozent rückwärts rechnen"
      subtitle="Ermitteln Sie den ursprünglichen Ausgangswert vor Rabatten, Aufschlägen oder den 100 % Grundwert aus einem bekannten Prozentanteil."
      badge="Prozent rückwärts"
      icon={Undo2}
      resultSlot={
        <CalculatorResult
          title={resultTitle}
          value={primaryValue}
          explanation={resultData.isValid ? resultData.explanation : null}
          stats={formattedStats}
          steps={resultData.isValid ? resultData.steps : []}
          error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
          emptyMessage="Geben Sie den Endwert und Prozentsatz ein, um rückwärts zu rechnen"
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
        {/* Mode Selector and Currency Bar */}
        <div className="calc-mode-toolbar">
          {/* Mode Tabs */}
          <div className="calc-mode-tabs">
            <button
              type="button"
              onClick={() => { setMode('discount'); if (!pct) setPct('25'); }}
              className={`calc-mode-btn ${mode === 'discount' ? 'active' : ''}`}
            >
              <TrendingDown size={14} />
              <span>Nach Rabatt (-%)</span>
            </button>

            <button
              type="button"
              onClick={() => { setMode('increase'); if (!pct) setPct('20'); }}
              className={`calc-mode-btn ${mode === 'increase' ? 'active' : ''}`}
            >
              <TrendingUp size={14} />
              <span>Nach Erhöhung (+%)</span>
            </button>

            <button
              type="button"
              onClick={() => { setMode('share'); if (!pct) setPct('20'); }}
              className={`calc-mode-btn ${mode === 'share' ? 'active' : ''}`}
            >
              <PieChart size={14} />
              <span>Aus Anteil (Grundwert)</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div className="calc-currency-bar">
            <button
              type="button"
              onClick={() => setCurrency('€')}
              className={`calc-currency-btn ${currency === '€' ? 'active' : ''}`}
              title="Euro Währung"
            >
              €
            </button>
            <button
              type="button"
              onClick={() => setCurrency('$')}
              className={`calc-currency-btn ${currency === '$' ? 'active' : ''}`}
              title="Dollar Währung"
            >
              $
            </button>
            <button
              type="button"
              onClick={() => setCurrency('')}
              className={`calc-currency-btn ${currency === '' ? 'active' : ''}`}
              title="Reine Zahl"
            >
              #
            </button>
          </div>
        </div>

        {/* Dynamic Mode Helper Context */}
        <div className="calc-callout-box">
          {mode === 'discount' && (
            <span>💡 <strong>Nach Rabatt:</strong> Geben Sie den reduzierten Endpreis und den Rabattsatz ein. Formel: <code>Grundwert = Endpreis ÷ (1 − Rabatt % ÷ 100)</code>.</span>
          )}
          {mode === 'increase' && (
            <span>💡 <strong>Nach Erhöhung:</strong> Geben Sie den Endpreis nach Steuer/Aufschlag ein. Formel: <code>Grundwert = Endpreis ÷ (1 + Erhöhung % ÷ 100)</code>.</span>
          )}
          {mode === 'share' && (
            <span>💡 <strong>Aus Anteil:</strong> Geben Sie den bekannten Teilwert und dessen Prozentsatz ein. Formel: <code>Grundwert = (Wert × 100) ÷ Prozentsatz</code>.</span>
          )}
        </div>

        {/* Inputs */}
        <div className="calc-inputs-grid">
          <CalculatorInput
            id="backwards-value"
            label={
              mode === 'discount'
                ? 'Reduzierter Preis / Endwert'
                : mode === 'increase'
                ? 'Preis nach Erhöhung / Endwert'
                : 'Bekannter Teilwert'
            }
            value={val}
            onChange={setVal}
            placeholder="z. B. 75"
            suffix={currency || undefined}
            required
            tooltip="Der bekannte Endwert oder Anteil nach der prozentualen Anpassung."
          />

          <CalculatorInput
            id="backwards-percentage"
            label={
              mode === 'discount'
                ? 'Rabattsatz in Prozent'
                : mode === 'increase'
                ? 'Erhöhungssatz in Prozent'
                : 'Prozentualer Anteil'
            }
            value={pct}
            onChange={setPct}
            placeholder="z. B. 25"
            suffix="%"
            required
            tooltip="Der Prozentsatz, der abgezogen, aufgeschlagen oder dargestellt wurde."
          />
        </div>
      </div>
    </CalculatorCard>
  );
}
