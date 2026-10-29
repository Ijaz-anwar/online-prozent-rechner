import React from 'react';
import CalculatorPageTemplate from '../CalculatorPageTemplate.jsx';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';

const config = calculatorsConfig.find(c => c.id === 'discount-calculator');

export default function DiscountCalculatorPage({ onSaveHistory }) {
  return <CalculatorPageTemplate config={config} onSaveHistory={onSaveHistory} />;
}
