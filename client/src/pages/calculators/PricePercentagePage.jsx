import React from 'react';
import CalculatorPageTemplate from '../CalculatorPageTemplate.jsx';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';

const config = calculatorsConfig.find(c => c.id === 'price-percentage');

export default function PricePercentagePage({ onSaveHistory }) {
  return <CalculatorPageTemplate config={config} onSaveHistory={onSaveHistory} />;
}
