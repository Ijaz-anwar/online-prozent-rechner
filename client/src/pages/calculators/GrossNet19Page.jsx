import React from 'react';
import CalculatorPageTemplate from '../CalculatorPageTemplate.jsx';
import { calculatorsConfig } from '../../data/calculatorsConfig.js';

const config = calculatorsConfig.find(c => c.id === 'gross-net-19');

export default function GrossNet19Page({ onSaveHistory }) {
  return <CalculatorPageTemplate config={config} onSaveHistory={onSaveHistory} />;
}
