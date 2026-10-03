import React, { useState } from 'react';
import { Divide } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculateFractionToPercentage } from '../../../utils/calculations/percentageCalculations.js';

export default function FractionToPercentageCalculator({ onSaveHistory, initialNum = '3', initialDen = '4' }) {
  const [numerator, setNumerator] = useState(initialNum);
  const [denominator, setDenominator] = useState(initialDen);

  const handleSwap = () => {
    setNumerator(denominator);
    setDenominator(numerator);
  };

  return (
    <GenericCalculator
      title="Bruch in Prozent Rechner"
      subtitle="Wandeln Sie jeden Bruch in seinen exakten Prozentsatz und die entsprechende Dezimalzahl um."
      badge="Bruch in %"
      icon={Divide}
      calculatorName="Bruch in Prozent"
      calculateFn={calculateFractionToPercentage}
      onSwap={handleSwap}
      swapLabel="Zähler und Nenner tauschen"
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'frac-calc-num',
          label: 'Zähler (Obere Zahl)',
          value: numerator,
          onChange: setNumerator,
          placeholder: 'z. B. 3',
          required: true
        },
        {
          id: 'frac-calc-den',
          label: 'Nenner (Untere Zahl)',
          value: denominator,
          onChange: setDenominator,
          placeholder: 'z. B. 4',
          required: true
        }
      ]}
    />
  );
}
