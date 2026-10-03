import React, { useState } from 'react';
import { RotateCcw, Share2, Check, SlidersHorizontal } from 'lucide-react';

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
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '0.75rem',
      marginTop: '1.25rem',
      paddingTop: '1rem',
      borderTop: '1px solid var(--border-color)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button
          type="button"
          onClick={onReset}
          className="btn btn-secondary"
          style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          title="Eingaben zurücksetzen"
        >
          <RotateCcw size={15} />
          <span>Zurücksetzen</span>
        </button>

        <button
          type="button"
          onClick={handleShareClick}
          className="btn btn-secondary"
          style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem' }}
          title="Berechnungslink kopieren"
        >
          {copiedLink ? <Check size={15} style={{ color: 'var(--accent-green)' }} /> : <Share2 size={15} />}
          <span>{copiedLink ? 'Link kopiert!' : 'Teilen'}</span>
        </button>
      </div>

      {showDecimals && onDecimalsChange && (
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          <SlidersHorizontal size={14} />
          <span>Nachkommastellen:</span>
          <select
            value={decimals}
            onChange={(e) => onDecimalsChange(Number(e.target.value))}
            style={{
              padding: '0.3rem 0.6rem',
              borderRadius: 'var(--border-radius-sm)',
              border: '1px solid var(--border-color)',
              backgroundColor: 'var(--bg-input)',
              color: 'var(--text-main)',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer'
            }}
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
