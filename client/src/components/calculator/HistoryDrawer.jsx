import React, { useState } from 'react';
import { X, Trash2, Download, History, ArrowRight, Copy, Check } from 'lucide-react';
import './HistoryDrawer.css';

export default function HistoryDrawer({
  isOpen,
  onClose,
  history = [],
  onClear,
  onRemoveItem
}) {
  const [copiedId, setCopiedId] = useState(null);

  if (!isOpen) return null;

  const handleCopyResult = (id, result) => {
    navigator.clipboard.writeText(String(result));
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleExportCSV = async () => {
    if (history.length === 0) return;

    try {
      const response = await fetch('/api/export/csv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ items: history, title: 'Percentage Calculations History' })
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `calculation-history-${Date.now()}.csv`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
      } else {
        // Fallback to client-side CSV download
        generateClientCSV(history);
      }
    } catch {
      generateClientCSV(history);
    }
  };

  const generateClientCSV = (items) => {
    const headers = ['Date', 'Calculator', 'Expression', 'Result'];
    const rows = items.map(item => [
      `"${new Date(item.timestamp).toLocaleString()}"`,
      `"${(item.calculatorName || 'Percentage Calculator').replace(/"/g, '""')}"`,
      `"${(item.expression || '').replace(/"/g, '""')}"`,
      `"${(item.result || '').replace(/"/g, '""')}"`
    ]);
    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `calculation-history-${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <div className="history-drawer-overlay" onClick={onClose}>
      <aside className="history-drawer-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className="history-drawer-header">
          <div className="history-header-title">
            <History size={20} className="history-icon" />
            <h3>Calculation History</h3>
          </div>
          <button type="button" className="close-drawer-btn" onClick={onClose} aria-label="Close history">
            <X size={20} />
          </button>
        </div>

        {/* Toolbar */}
        {history.length > 0 && (
          <div className="history-drawer-toolbar">
            <button type="button" className="btn-history-tool" onClick={handleExportCSV}>
              <Download size={14} />
              <span>Export CSV</span>
            </button>
            <button type="button" className="btn-history-tool danger" onClick={onClear}>
              <Trash2 size={14} />
              <span>Clear History</span>
            </button>
          </div>
        )}

        {/* List of History Items */}
        <div className="history-items-container">
          {history.length === 0 ? (
            <div className="history-empty-state">
              <History size={36} className="empty-icon" />
              <p className="empty-main">No calculations yet</p>
              <p className="empty-sub">Your recent calculations will be automatically saved here on this device.</p>
            </div>
          ) : (
            <div className="history-list">
              {history.map((item) => (
                <div key={item.id} className="history-item-card">
                  <div className="history-item-top">
                    <span className="history-calc-badge">{item.calculatorName || 'Percentage'}</span>
                    <span className="history-timestamp">
                      {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>

                  <div className="history-item-expression">
                    {item.expression}
                  </div>

                  <div className="history-item-bottom">
                    <div className="history-result-val">
                      <ArrowRight size={14} className="result-arrow" />
                      <strong>{item.result}</strong>
                    </div>

                    <div className="history-item-actions">
                      <button
                        type="button"
                        className="btn-history-action"
                        onClick={() => handleCopyResult(item.id, item.result)}
                        title="Copy result"
                      >
                        {copiedId === item.id ? <Check size={14} color="var(--accent-green)" /> : <Copy size={14} />}
                      </button>
                      <button
                        type="button"
                        className="btn-history-action remove"
                        onClick={() => onRemoveItem(item.id)}
                        title="Remove calculation"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}
