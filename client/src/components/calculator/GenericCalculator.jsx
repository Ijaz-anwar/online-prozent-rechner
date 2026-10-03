import React, { useState, useEffect } from 'react';
import { Percent, ArrowRightLeft } from 'lucide-react';
import CalculatorCard from './CalculatorCard.jsx';
import CalculatorInput from './CalculatorInput.jsx';
import CalculatorResult from './CalculatorResult.jsx';
import ActionToolbar from '../common/ActionToolbar.jsx';

export default function GenericCalculator({
  title,
  subtitle,
  badge = 'Prozentrechnung',
  icon: Icon = Percent,
  inputs = [],
  calculateFn,
  calculatorName,
  stats = [],
  onSwap,
  swapLabel = 'Werte tauschen',
  onSaveHistory
}) {
  const [decimals, setDecimals] = useState(2);

  // Compute live calculation
  const inputValues = inputs.map(inp => inp.value);
  const resultData = calculateFn(...inputValues, decimals);

  // Auto-record calculation into history if valid
  useEffect(() => {
    if (resultData && resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        const expr = inputs.map(i => `${i.label || 'Val'}: ${i.value}${i.suffix || ''}`).join(' | ');
        onSaveHistory({
          calculatorName: calculatorName || title,
          expression: expr,
          result: resultData.formattedResult
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [...inputValues, decimals]);

  const handleReset = () => {
    inputs.forEach(inp => {
      if (inp.onChange) inp.onChange('');
    });
  };

  const dynamicStats = [
    ...(resultData?.example ? [{ label: 'Beispiel', value: resultData.example }] : []),
    ...(stats || [])
  ];

  return (
    <CalculatorCard
      title={title}
      subtitle={subtitle}
      badge={badge}
      icon={Icon}
      resultSlot={
        <CalculatorResult
          title="Berechnetes Ergebnis"
          value={resultData?.isValid ? resultData.formattedResult : null}
          explanation={resultData?.isValid ? resultData.explanation : null}
          stats={dynamicStats}
          steps={resultData?.isValid ? resultData.steps : []}
          error={!resultData?.isValid && !resultData?.isEmpty ? resultData?.error : null}
          emptyMessage="Geben Sie Zahlen ein, um das Ergebnis zu berechnen"
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
        {inputs.map((inp, idx) => (
          <div key={inp.id || idx}>
            <CalculatorInput
              id={inp.id}
              label={inp.label}
              value={inp.value}
              onChange={inp.onChange}
              placeholder={inp.placeholder}
              prefix={inp.prefix}
              suffix={inp.suffix}
              helperText={inp.helperText}
              autoFocus={inp.autoFocus}
              required={inp.required}
            />

            {inp.presets && inp.presets.length > 0 && (
              <div style={{ display: 'flex', gap: '0.35rem', flexWrap: 'wrap', marginTop: '0.45rem' }}>
                {inp.presets.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`btn btn-secondary ${Number(inp.value) === preset ? 'btn-primary' : ''}`}
                    style={{ padding: '0.2rem 0.5rem', fontSize: '0.75rem' }}
                    onClick={() => inp.onChange(String(preset))}
                  >
                    {preset}{inp.suffix || ''}
                  </button>
                ))}
              </div>
            )}

            {/* Render Swap Button between input 1 and 2 if onSwap is provided */}
            {idx === 0 && onSwap && inputs.length > 1 && (
              <div style={{ display: 'flex', justifyContent: 'center', margin: '0.65rem 0 -0.25rem' }}>
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onSwap}
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.75rem', gap: '0.35rem' }}
                  title={swapLabel}
                >
                  <ArrowRightLeft size={13} />
                  <span>{swapLabel}</span>
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </CalculatorCard>
  );
}
