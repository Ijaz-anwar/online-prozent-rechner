import React, { useState } from 'react';
import { PlusCircle } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculateAddPercentage } from '../../../utils/calculations/percentageCalculations.js';

export default function AddPercentageCalculator({ onSaveHistory, initialB = '100', initialP = '20' }) {
  const [base, setBase] = useState(initialB);
  const [percentage, setPercentage] = useState(initialP);

  return (
    <GenericCalculator
      title="Add Percentage Calculator"
      subtitle="Add a percentage rate on top of a starting base amount."
      badge="Add (+%)"
      icon={PlusCircle}
      calculatorName="Add Percentage"
      calculateFn={calculateAddPercentage}
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'add-calc-b',
          label: 'Starting Base Number (B)',
          value: base,
          onChange: setBase,
          placeholder: 'e.g. 100',
          required: true
        },
        {
          id: 'add-calc-p',
          label: 'Percentage to Add (%)',
          value: percentage,
          onChange: setPercentage,
          placeholder: 'e.g. 20',
          suffix: '%',
          presets: [5, 10, 15, 19, 20, 25],
          required: true
        }
      ]}
    />
  );
}
