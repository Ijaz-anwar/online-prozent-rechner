import React, { useState } from 'react';
import { Euro } from 'lucide-react';
import GenericCalculator from '../GenericCalculator.jsx';
import { calculatePercentageEuro } from '../../../utils/calculations/percentageCalculations.js';

export default function PercentageEuroCalculator({ onSaveHistory, initialP = '19', initialEur = '100' }) {
  const [percentage, setPercentage] = useState(initialP);
  const [euroAmount, setEuroAmount] = useState(initialEur);

  return (
    <GenericCalculator
      title="Prozent Euro Rechner"
      subtitle="Berechnen Sie den Prozentanteil von jedem Euro-Betrag (€) sofort mit Aufschlag- und Rabattsummen."
      badge="Euro (€)"
      icon={Euro}
      calculatorName="Prozent Euro Rechner"
      calculateFn={calculatePercentageEuro}
      onSaveHistory={onSaveHistory}
      inputs={[
        {
          id: 'euro-calc-p',
          label: 'Prozentsatz (%)',
          value: percentage,
          onChange: setPercentage,
          placeholder: 'z. B. 19',
          suffix: '%',
          presets: [5, 7, 10, 15, 19, 20, 25],
          required: true
        },
        {
          id: 'euro-calc-amount',
          label: 'Euro-Betrag (€)',
          value: euroAmount,
          onChange: setEuroAmount,
          placeholder: 'z. B. 100',
          suffix: '€',
          required: true
        }
      ]}
    />
  );
}
