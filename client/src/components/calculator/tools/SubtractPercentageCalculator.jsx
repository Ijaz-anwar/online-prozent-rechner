import React, { useState } from 'react';
import { MinusCircle } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculateSubtractPercentage } from '../../../utils/calculations/percentageCalculations.js';

export default function SubtractPercentageCalculator({ onSaveHistory, initialB = '100', initialP = '20' }) {
  const [base, setBase] = useState(initialB);
  const [percentage, setPercentage] = useState(initialP);

  return (
    <GenericCalculator
      title="Subtract Percentage Calculator"
      subtitle="Subtract a percentage reduction from an initial base amount."
      badge="Subtract (-%)"
      icon={MinusCircle}
      calculatorName="Subtract Percentage"
      calculateFn={calculateSubtractPercentage}
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'sub-calc-b',
          label: 'Starting Base Number (B)',
          value: base,
          onChange: setBase,
          placeholder: 'e.g. 100',
          required: true
        },
        {
          id: 'sub-calc-p',
          label: 'Percentage to Deduct (%)',
          value: percentage,
          onChange: setPercentage,
          placeholder: 'e.g. 20',
          suffix: '%',
          presets: [5, 10, 15, 20, 25, 30, 50],
          required: true
        }
      ]}
    />
  );
}
