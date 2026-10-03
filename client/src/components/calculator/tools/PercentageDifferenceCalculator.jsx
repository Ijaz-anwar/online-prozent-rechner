import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageDifference } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageDifferenceCalculator({ onSaveHistory, initialA = '80', initialB = '100' }) {
  const [valA, setValA] = useState(initialA);
  const [valB, setValB] = useState(initialB);

  const handleSwap = () => {
    setValA(valB);
    setValB(valA);
  };

  return (
    <GenericCalculator
      title="Prozentuale Differenz Rechner"
      subtitle="Vergleichen Sie zwei Werte relativ zu ihrem Mittelwert ohne Richtungspräferenz."
      badge="Differenz (|Δ|%)"
      icon={RefreshCw}
      calculatorName="Prozentuale Differenz"
      calculateFn={calculatePercentageDifference}
      onSwap={handleSwap}
      swapLabel="Wert A und B tauschen"
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'diff-calc-a',
          label: 'Erster Wert (A)',
          value: valA,
          onChange: setValA,
          placeholder: 'z. B. 80',
          required: true
        },
        {
          id: 'diff-calc-b',
          label: 'Zweiter Wert (B)',
          value: valB,
          onChange: setValB,
          placeholder: 'z. B. 100',
          required: true
        }
      ]}
    />
  );
}
