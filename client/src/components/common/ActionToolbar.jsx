import React, { useState } from 'react';
import { RotateCcw, Share2, Check, SlidersHorizontal } from 'lucide-react';
import './ActionToolbar.css';

export default function ActionToolbar({
  onReset,
  onShare,
  decimals = 2,
  onDecimalsChange,
  showDecimals = true
}) {
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShareClick = async () => {
    if (onShare) {
      const url = await onShare();
      if (url) {
        navigator.clipboard.writeText(url);
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  return (
    <div className="action-toolbar">
      <div className="action-toolbar-buttons">
        <button
          type="button"
          onClick={onReset}
          className="btn btn-secondary"
          title="Eingaben zurücksetzen"
        >
          <RotateCcw size={15} />
          <span>Zurücksetzen</span>
        </button>

        <button
          type="button"
          onClick={handleShareClick}
          className="btn btn-secondary"
          title="Berechnungslink kopieren"
        >
          {copiedLink ? <Check size={15} style={{ color: 'var(--accent-green)' }} /> : <Share2 size={15} />}
          <span>{copiedLink ? 'Link kopiert!' : 'Teilen'}</span>
        </button>
      </div>

      {showDecimals && onDecimalsChange && (
        <div className="action-toolbar-decimals">
          <span className="action-toolbar-label">
            <SlidersHorizontal size={14} />
            <span>Nachkommastellen:</span>
          </span>
          <select
            value={decimals}
            onChange={(e) => onDecimalsChange(Number(e.target.value))}
            className="action-toolbar-select"
            aria-label="Anzahl Nachkommastellen wählen"
          >
            <option value={0}>0 (Ganze Zahlen)</option>
            <option value={1}>1 Dezimalstelle (0,1)</option>
            <option value={2}>2 Dezimalstellen (0,01)</option>
            <option value={3}>3 Dezimalstellen (0,001)</option>
            <option value={4}>4 Dezimalstellen (0,0001)</option>
          </select>
        </div>
      )}
    </div>
  );
}
