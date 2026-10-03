import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageRate } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageRateCalculator({ onSaveHistory, initialV = '30', initialB = '120' }) {
  const [value, setValue] = useState(initialV);
  const [base, setBase] = useState(initialB);

  return (
    <GenericCalculator
      title="Prozentsatz Rechner"
      subtitle="Ermitteln Sie, wie viel Prozent ein Anteil vom gesamten Grundwert ausmacht."
      badge="Prozentsatz (p %)"
      icon={Calculator}
      calculatorName="Prozentsatz Rechner"
      calculateFn={calculatePercentageRate}
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'rate-calc-v',
          label: 'Prozentwert / Teilwert (W)',
          value: value,
          onChange: setValue,
          placeholder: 'z. B. 30',
          required: true
        },
        {
          id: 'rate-calc-b',
          label: 'Gesamter Grundwert (G)',
          value: base,
          onChange: setBase,
          placeholder: 'z. B. 120',
          required: true
        }
      ]}
    />
  );
}
