import React, { useState } from 'react';
import { Copy, Check, Sparkles, BookOpen } from 'lucide-react';
import './CalculatorResult.css';

export default function CalculatorResult({
  title = 'Berechnetes Ergebnis',
  value,
  unit = '',
  explanation,
  steps = [],
  stats = [],
  error,
  emptyMessage = 'Geben Sie oben Zahlen ein, um das Ergebnis zu sehen'
}) {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(String(value).trim());
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  if (error) {
    return (
      <div className="calculator-result-box error-box" role="alert">
        <h2 className="box-title">Hinweis zur Berechnung</h2>
        <p className="box-desc">{error}</p>
      </div>
    );
  }

  if (value === null || value === undefined || value === '') {
    return (
      <div className="calculator-result-box empty-box">
        <div className="empty-sparkle">
          <Sparkles size={22} />
        </div>
        <h2 className="empty-heading">{emptyMessage}</h2>
        <p className="empty-subtext">Das Ergebnis und der ausführliche Rechenweg werden hier in Echtzeit angezeigt.</p>
      </div>
    );
  }

  return (
    <div className="calculator-result-box active-box" aria-live="polite">
      <div className="result-top-bar">
        <span className="result-title-label">{title}</span>
        <button
          type="button"
          onClick={handleCopy}
          className={`btn-copy-result ${isCopied ? 'copied' : ''}`}
          title="Ergebnis in die Zwischenablage kopieren"
          aria-label="Ergebnis kopieren"
        >
          {isCopied ? <Check size={15} /> : <Copy size={15} />}
          <span>{isCopied ? 'Kopiert!' : 'Kopieren'}</span>
        </button>
      </div>

      <div className="result-number-container">
        <span className="result-main-value">{value}</span>
        {unit && <span className="result-unit-tag">{unit}</span>}
      </div>

      {explanation && (
        <p className="result-explanation-text">
          {explanation}
        </p>
      )}

      {stats && stats.length > 0 && (
        <div className="result-stats-row">
          {stats.map((stat, idx) => (
            <div key={idx} className="result-stat-chip">
              <span className="stat-name">{stat.label}:</span>
              <strong className="stat-data">{stat.value}</strong>
            </div>
          ))}
        </div>
      )}

      {steps && steps.length > 0 && (
        <div className="result-steps-section">
          <div className="steps-header">
            <BookOpen size={14} className="steps-icon" />
            <span>Schritt-für-Schritt Rechenweg:</span>
          </div>
          <ol className="steps-ordered-list">
            {steps.map((step, idx) => (
              <li key={idx} className="step-point">{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
