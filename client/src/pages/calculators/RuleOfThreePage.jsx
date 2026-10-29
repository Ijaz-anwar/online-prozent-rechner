import React from 'react';
import CalculatorPageTemplate from '../CalculatorPageTemplate.jsx';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';

const config = calculatorsConfig.find(c => c.id === 'rule-of-three');

export default function RuleOfThreePage({ onSaveHistory }) {
  return <CalculatorPageTemplate config={config} onSaveHistory={onSaveHistory} />;
}
