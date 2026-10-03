import React, { useState } from 'react';
import { Binary } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageToDecimal } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageToDecimalCalculator({ onSaveHistory, initialP = '25' }) {
  const [percentage, setPercentage] = useState(initialP);

  return (
    <GenericCalculator
      title="Prozent in Dezimalzahl Rechner"
      subtitle="Wandeln Sie jeden Prozentsatz sofort in seine exakte Dezimalzahl und den gekürzten Bruch um."
      badge="Prozent → Dezimal"
      icon={Binary}
      calculatorName="Prozent in Dezimalzahl"
      calculateFn={calculatePercentageToDecimal}
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'pct-to-dec-val',
          label: 'Prozentsatz (%)',
          value: percentage,
          onChange: setPercentage,
          placeholder: 'z. B. 25',
          suffix: '%',
          presets: [0.5, 1, 5, 7.5, 10, 15, 20, 25, 50, 75, 100],
          required: true
        }
      ]}
    />
  );
}
