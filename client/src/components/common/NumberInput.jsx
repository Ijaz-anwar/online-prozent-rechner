import React from 'react';
import { X, AlertCircle } from 'lucide-react';
import './NumberInput.css';

export default function NumberInput({
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
  required = false
}) {
  const handleClear = () => {
    onChange('');
  };

  return (
    <div className={`number-input-group ${error ? 'has-error' : ''}`}>
      {label && (
        <label htmlFor={id} className="number-input-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}

      <div className="input-wrapper">
        {prefix && <span className="input-affix prefix">{prefix}</span>}
        <input
          id={id}
          type="number"
          inputMode="decimal"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          step={step}
          autoFocus={autoFocus}
          className={`custom-number-input ${prefix ? 'has-prefix' : ''} ${suffix ? 'has-suffix' : ''}`}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-help` : undefined}
        />
        {value !== '' && value !== undefined && value !== null && (
          <button
            type="button"
            className="clear-input-btn"
            onClick={handleClear}
            title="Clear field"
            aria-label="Clear value"
          >
            <X size={14} />
          </button>
        )}
        {suffix && <span className="input-affix suffix">{suffix}</span>}
      </div>

      {error ? (
        <p id={`${id}-error`} className="input-error-msg animate-fade-in" role="alert">
          <AlertCircle size={14} />
          <span>{error}</span>
        </p>
      ) : helperText ? (
        <p id={`${id}-help`} className="input-helper-msg">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}
