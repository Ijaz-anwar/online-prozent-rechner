import React, { useState, useEffect } from 'react';
import { Scale, ArrowRight, Percent, Hash } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculateRuleOfThreePercentage } from '../../../utils/calculations/percentageCalculations.js';

export default function RuleOfThreePercentageCalculator({
  onSaveHistory,
  initialValA = '200',
  initialPctB = '100',
  initialTargetC = '50',
  initialMode = 'find-percentage'
}) {
  const [mode, setMode] = useState(initialMode); // 'find-percentage' | 'find-value'
  const [valA, setValA] = useState(initialValA);
  const [pctB, setPctB] = useState(initialPctB);
  const [targetC, setTargetC] = useState(initialTargetC);
  const [decimals, setDecimals] = useState(2);

  const resultData = calculateRuleOfThreePercentage(valA, pctB, targetC, mode, decimals);

  const handleReset = () => {
    setValA('');
    setPctB('100');
    setTargetC('');
  };

  useEffect(() => {
    if (resultData.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: 'Rule of Three Percentage',
          expression: mode === 'find-percentage'
            ? `${valA} = ${pctB}% → ${targetC} = ?`
            : `${pctB}% = ${valA} → ${targetC}% = ?`,
          result: resultData.formattedResult
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [valA, pctB, targetC, mode, decimals]);

  return (
    <CalculatorCard
      title="Dreisatz Rechner Prozent"
      subtitle="Lösen Sie proportionale Prozentaufgaben Schritt für Schritt mit dem klassischen Dreisatz."
      badge="Dreisatz"
      icon={Scale}
      resultSlot={
        <CalculatorResult
          title={mode === 'find-percentage' ? 'Gesuchter Prozentsatz (%)' : 'Gesuchter Zielwert'}
          value={resultData.isValid ? resultData.formattedResult : null}
          explanation={resultData.isValid ? resultData.explanation : null}
          stats={resultData.isValid ? resultData.stats : []}
          steps={resultData.isValid ? resultData.steps : []}
          error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
          emptyMessage="Geben Sie Ausgangsverhältnis und Zielgröße ein, um den Dreisatz-Rechenweg zu sehen"
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
        {/* Mode Selector Toggle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
          background: 'var(--bg-card-subtle, #f5f7fa)',
          padding: '0.35rem',
          borderRadius: 'var(--border-radius-md, 10px)',
          border: '1px solid var(--border-color, #e0e4ec)'
        }}>
          <button
            type="button"
            className={`btn ${mode === 'find-percentage' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setMode('find-percentage');
              setTargetC('50');
            }}
            style={{ fontSize: '0.85rem', padding: '0.55rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
          >
            <Percent size={15} />
            <span>Prozentsatz suchen (Wert → %)</span>
          </button>
          <button
            type="button"
            className={`btn ${mode === 'find-value' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => {
              setMode('find-value');
              setTargetC('25');
            }}
            style={{ fontSize: '0.85rem', padding: '0.55rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
          >
            <Hash size={15} />
            <span>Zielwert suchen (% → Wert)</span>
          </button>
        </div>

        {/* Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            <CalculatorInput
              id="rot-val-a"
              label={mode === 'find-percentage' ? 'Ausgangswert (A)' : 'Entspricht Wert (A)'}
              value={valA}
              onChange={setValA}
              placeholder="z. B. 200"
              required
            />
            <CalculatorInput
              id="rot-pct-b"
              label={mode === 'find-percentage' ? 'entspricht Prozentsatz (B)' : 'Ausgangs-Prozentsatz (B)'}
              value={pctB}
              onChange={setPctB}
              placeholder="z. B. 100"
              suffix="%"
              required
            />
          </div>

          <CalculatorInput
            id="rot-target-c"
            label={mode === 'find-percentage' ? 'Gesuchter Wert, für den % berechnet werden (C)' : 'Gesuchter Prozentsatz, für den der Wert berechnet wird (C)'}
            value={targetC}
            onChange={setTargetC}
            placeholder={mode === 'find-percentage' ? 'z. B. 50' : 'z. B. 25'}
            suffix={mode === 'find-value' ? '%' : undefined}
            required
          />
        </div>
      </div>
    </CalculatorCard>
  );
}
