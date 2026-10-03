import React, { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageIncrease } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageIncreaseCalculator({ onSaveHistory, initialV1 = '50', initialV2 = '75' }) {
  const [v1, setV1] = useState(initialV1);
  const [v2, setV2] = useState(initialV2);

  const handleSwap = () => {
    setV1(v2);
    setV2(v1);
  };

  return (
    <GenericCalculator
      title="Prozentuale Steigerung Rechner"
      subtitle="Berechnen Sie den prozentualen Zuwachs oder die Preiserhöhung von einem Startwert zu einem Endwert."
      badge="Steigerung (+%)"
      icon={TrendingUp}
      calculatorName="Prozentuale Steigerung"
      calculateFn={calculatePercentageIncrease}
      onSwap={handleSwap}
      swapLabel="Start- und Endwert tauschen"
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'inc-calc-v1',
          label: 'Ausgangswert (Von)',
          value: v1,
          onChange: setV1,
          placeholder: 'z. B. 50',
          required: true
        },
        {
          id: 'inc-calc-v2',
          label: 'Endwert (Nachher)',
          value: v2,
          onChange: setV2,
          placeholder: 'z. B. 75',
          required: true
        }
      ]}
    />
  );
}
