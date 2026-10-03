import React, { useState } from 'react';
import { Copy, Check, Sparkles } from 'lucide-react';
import './ResultDisplay.css';

export default function ResultDisplay({
  title = 'Calculated Result',
  value,
  secondaryStats = [],
  explanation,
  unit = '',
  highlight = false,
  error
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(String(value).trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (error) {
    return (
      <div className="result-card error-state animate-fade-in" role="alert">
        <p className="error-title">Unable to calculate</p>
        <p className="error-desc">{error}</p>
      </div>
    );
  }

  if (value === null || value === undefined || value === '') {
    return (
      <div className="result-card empty-state">
        <div className="empty-pulse-icon">
          <Sparkles size={24} />
        </div>
        <p className="empty-title">Enter your numbers above</p>
        <p className="empty-desc">The calculation and step-by-step math will appear here automatically.</p>
      </div>
    );
  }

  return (
    <div className={`result-card active-state animate-fade-in ${highlight ? 'highlight-pulse' : ''}`} aria-live="polite">
      <div className="result-header">
        <span className="result-label">{title}</span>
        <button
          type="button"
          className={`copy-btn ${copied ? 'copied' : ''}`}
          onClick={handleCopy}
          title="Copy result to clipboard"
          aria-label="Copy result"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
          <span>{copied ? 'Copied!' : 'Copy'}</span>
        </button>
      </div>

      <div className="result-primary-value">
        <span className="main-number">{value}</span>
        {unit && <span className="unit-label">{unit}</span>}
      </div>

      {explanation && (
        <p className="result-explanation">
          {explanation}
        </p>
      )}

      {secondaryStats && secondaryStats.length > 0 && (
        <div className="secondary-stats-grid">
          {secondaryStats.map((stat, idx) => (
            <div key={idx} className="stat-pill">
              <span className="stat-label">{stat.label}:</span>
              <strong className="stat-value">{stat.value}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
