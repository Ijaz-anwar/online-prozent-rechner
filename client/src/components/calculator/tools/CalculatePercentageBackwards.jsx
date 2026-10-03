import React, { useState, useEffect } from 'react';
import { Undo2, TrendingDown, TrendingUp, PieChart, Euro, DollarSign } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculatePercentageBackwards } from '../../../utils/calculations/percentageCalculations.js';

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Mode Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.35rem',
            background: 'var(--bg-card-subtle, #f5f7fa)',
            padding: '0.35rem',
            borderRadius: 'var(--border-radius-md, 10px)',
            border: '1px solid var(--border-color, #e0e4ec)',
            flex: 1
          }}>
            <button
              type="button"
              onClick={() => { setMode('discount'); if (!pct) setPct('25'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: mode === 'discount' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: mode === 'discount' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
            >
              <TrendingDown size={14} />
              <span>Nach Rabatt (-%)</span>
            </button>

            <button
              type="button"
              onClick={() => { setMode('increase'); if (!pct) setPct('20'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: mode === 'increase' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: mode === 'increase' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
            >
              <TrendingUp size={14} />
              <span>Nach Erhöhung (+%)</span>
            </button>

            <button
              type="button"
              onClick={() => { setMode('share'); if (!pct) setPct('20'); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.85rem',
                fontSize: '0.85rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                background: mode === 'share' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: mode === 'share' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
            >
              <PieChart size={14} />
              <span>Aus Anteil (Grundwert)</span>
            </button>
          </div>

          {/* Currency Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem', border: '1px solid var(--border-color, #e0e4ec)', padding: '0.25rem', borderRadius: '8px' }}>
            <button
              type="button"
              onClick={() => setCurrency('€')}
              style={{
                padding: '0.35rem 0.65rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: currency === '€' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: currency === '€' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
              title="Euro Währung"
            >
              €
            </button>
            <button
              type="button"
              onClick={() => setCurrency('$')}
              style={{
                padding: '0.35rem 0.65rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: currency === '$' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: currency === '$' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
              title="Dollar Währung"
            >
              $
            </button>
            <button
              type="button"
              onClick={() => setCurrency('')}
              style={{
                padding: '0.35rem 0.65rem',
                fontSize: '0.82rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: 'none',
                cursor: 'pointer',
                background: currency === '' ? 'var(--color-primary, #2563eb)' : 'transparent',
                color: currency === '' ? '#ffffff' : 'var(--text-secondary, #4b5563)'
              }}
              title="Reine Zahl"
            >
              #
            </button>
          </div>
        </div>

        {/* Dynamic Mode Helper Context */}
        <div style={{
          fontSize: '0.88rem',
          color: 'var(--text-secondary, #4b5563)',
          background: 'var(--bg-card-subtle, #f8fafc)',
          padding: '0.65rem 0.85rem',
          borderRadius: '8px',
          borderLeft: '3px solid var(--color-primary, #2563eb)'
        }}>
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
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
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
