import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import './CalculatorInput.css';

export default function CalculatorInput({
  id,
  label,
  value,
  onChange,
  placeholder = '0',
  prefix,
  suffix,
  helperText,
  error,
  min,
  max,
  step = 'any',
  autoFocus = false,
  required = false,
  readOnly = false
}) {
  const handleClear = () => {
    if (onChange) onChange('');
  };

  return (
    <div className={`calculator-input-field ${error ? 'has-error' : ''}`}>
      {label && (
        <label htmlFor={id} className="calc-input-label">
          <span>{label}</span>
          {required && <span className="req-dot">*</span>}
        </label>
      )}

      <div className="calc-input-box">
        {prefix && <span className="input-affix prefix-tag">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange && onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          autoFocus={autoFocus}
          readOnly={readOnly}
          className={`calc-native-input ${prefix ? 'with-prefix' : ''} ${suffix ? 'with-suffix' : ''}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-desc` : undefined}
        />

        {value !== '' && value !== undefined && value !== null && !readOnly && (
          <button
            type="button"
            className="btn-clear-value"
            onClick={handleClear}
            title="Clear value"
            aria-label="Clear field value"
          >
            <X size={14} />
          </button>
        )}

        {suffix && <span className="input-affix suffix-tag">{suffix}</span>}
      </div>

      {error ? (
        <p id={`${id}-error`} className="calc-input-error" role="alert">
          <AlertCircle size={14} />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={`${id}-desc`} className="calc-input-help">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
