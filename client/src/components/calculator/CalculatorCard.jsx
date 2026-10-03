import React from 'react';
import './CalculatorCard.css';

export default function CalculatorCard({
  title,
  subtitle,
  badge,
  icon: Icon,
  children,
  resultSlot,
  formulaSlot,
  footerSlot
}) {
  return (
    <section className="calculator-workspace card animate-fade-in">
      {/* Header */}
      <div className="calc-card-header">
        <div className="calc-title-group">
          {Icon && (
            <div className="calc-icon-wrapper">
              <Icon size={22} />
            </div>
          )}
          <div>
            <div className="calc-title-row">
              <h2 className="calc-title">{title}</h2>
              {badge && <span className="badge badge-blue">{badge}</span>}
            </div>
            {subtitle && <p className="calc-subtitle">{subtitle}</p>}
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs Form & Live Result */}
      <div className="calc-grid">
        <div className="calc-form-pane">
          {children}
        </div>

        <div className="calc-result-pane">
          {resultSlot}
        </div>
      </div>

      {/* Formula & Step by Step */}
      {formulaSlot && (
        <div className="calc-formula-pane">
          {formulaSlot}
        </div>
      )}

      {/* Action Footer */}
      {footerSlot && (
        <div className="calc-footer-pane">
          {footerSlot}
        </div>
      )}
    </section>
  );
}
