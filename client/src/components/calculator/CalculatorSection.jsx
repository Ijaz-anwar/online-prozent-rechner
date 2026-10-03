import React from 'react';
import './CalculatorSection.css';

export default function CalculatorSection({
  title,
  subtitle,
  badge,
  icon: Icon,
  actions,
  children
}) {
  return (
    <section className="calculator-section card animate-fade-in">
      {(title || subtitle || actions) && (
        <div className="calc-section-header">
          <div className="calc-section-title-wrap">
            {Icon && (
              <div className="calc-section-icon">
                <Icon size={20} />
              </div>
            )}
            <div>
              <div className="calc-section-headline">
                {title && <h2 className="calc-section-title">{title}</h2>}
                {badge && <span className="badge badge-blue">{badge}</span>}
              </div>
              {subtitle && <p className="calc-section-subtitle">{subtitle}</p>}
            </div>
          </div>
          {actions && <div className="calc-section-actions">{actions}</div>}
        </div>
      )}

      <div className="calc-section-content">
        {children}
      </div>
    </section>
  );
}
