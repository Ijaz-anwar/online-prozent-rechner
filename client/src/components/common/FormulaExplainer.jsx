import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, BookOpen } from 'lucide-react';
import './FormulaExplainer.css';

export default function FormulaExplainer({
  formula,
  steps = [],
  defaultOpen = true
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  if (!formula && (!steps || steps.length === 0)) return null;

  return (
    <div className="formula-explainer-card">
      <button
        type="button"
        className="formula-header-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="formula-header-title">
          <BookOpen size={18} className="formula-icon" />
          <span>Formula & Step-by-Step Solution</span>
        </div>
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>

      {isOpen && (
        <div className="formula-body animate-fade-in">
          {formula && (
            <div className="formula-box">
              <span className="formula-badge">Formula:</span>
              <code className="formula-code">{formula}</code>
            </div>
          )}

          {steps && steps.length > 0 && (
            <div className="calculation-steps-list">
              <span className="steps-title">Calculation Steps:</span>
              <ol className="steps-ol">
                {steps.map((step, idx) => (
                  <li key={idx} className="step-item">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
