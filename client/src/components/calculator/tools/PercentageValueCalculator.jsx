import React, { useState } from 'react';
import { Percent } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageValue } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageValueCalculator({ onSaveHistory, initialP = '25', initialB = '200' }) {
  const [percentage, setPercentage] = useState(initialP);
  const [base, setBase] = useState(initialB);

  const handleSwap = () => {
    setPercentage(base);
    setBase(percentage);
  };

  return (
    <GenericCalculator
      title="Prozentwert Rechner"
      subtitle="Ermitteln Sie den Betrag, der p % eines Ausgangswertes (Grundwert) entspricht."
      badge="Prozentwert (W)"
      icon={Percent}
      calculatorName="Prozentwert Rechner"
      calculateFn={calculatePercentageValue}
      onSwap={handleSwap}
      swapLabel="p% und Grundwert tauschen"
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'val-calc-p',
          label: 'Prozentsatz (p)',
          value: percentage,
          onChange: setPercentage,
          placeholder: 'z. B. 25',
          suffix: '%',
          presets: [5, 10, 15, 20, 25, 50, 75],
          required: true
        },
        {
          id: 'val-calc-b',
          label: 'Grundwert (G)',
          value: base,
          onChange: setBase,
          placeholder: 'z. B. 200',
          required: true
        }
      ]}
    />
  );
}
