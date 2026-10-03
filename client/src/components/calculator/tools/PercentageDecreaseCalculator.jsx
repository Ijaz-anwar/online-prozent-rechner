import React, { useState } from 'react';
import { TrendingDown } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageDecrease } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageDecreaseCalculator({ onSaveHistory, initialV1 = '100', initialV2 = '75' }) {
  const [v1, setV1] = useState(initialV1);
  const [v2, setV2] = useState(initialV2);

  const handleSwap = () => {
    setV1(v2);
    setV2(v1);
  };

  return (
    <GenericCalculator
      title="Prozentuale Senkung Rechner"
      subtitle="Berechnen Sie den prozentualen Rückgang, Rabatt oder Verlust zwischen zwei Werten."
      badge="Senkung (-%)"
      icon={TrendingDown}
      calculatorName="Prozentuale Senkung"
      calculateFn={calculatePercentageDecrease}
      onSwap={handleSwap}
      swapLabel="Start- und Endwert tauschen"
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'dec-calc-v1',
          label: 'Ausgangswert (Vorher)',
          value: v1,
          onChange: setV1,
          placeholder: 'z. B. 100',
          required: true
        },
        {
          id: 'dec-calc-v2',
          label: 'Reduzierter Wert (Nachher)',
          value: v2,
          onChange: setV2,
          placeholder: 'z. B. 75',
          required: true
        }
      ]}
    />
  );
}
