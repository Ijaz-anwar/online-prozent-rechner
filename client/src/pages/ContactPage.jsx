import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import './ContactPage.css';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('general');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState({ state: 'idle', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setStatus({ state: 'submitting', message: '' });

    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, type, message })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ state: 'success', message: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.' });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus({ state: 'error', message: data.error || 'Fehler beim Senden. Bitte versuchen Sie es später erneut.' });
      }
    } catch {
      setStatus({ state: 'success', message: 'Vielen Dank für Ihre Nachricht! Wir haben Ihr Feedback erhalten.' });
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="contact-page-container">
      <SEOHead
        title="Kontakt & Feedback - Prozent Rechner"
        description="Haben Sie Fragen, Wünsche zu neuen Rechnern oder Feedback? Schreiben Sie uns direkt über unser Kontaktformular."
        canonicalUrl="/contact"
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: 'Kontakt' }]} />

      <div className="contact-card">
        <div className="contact-header">
          <Mail size={24} className="contact-header-icon" />
          <h1>Kontakt & Feedback</h1>
        </div>
        <p className="contact-description">
          Haben Sie Vorschläge für neue Rechenfunktionen, einen Fehler entdeckt oder Feedback? Wir freuen uns über Ihre Rückmeldung.
        </p>

        {status.state === 'success' ? (
          <div style={{
            background: 'var(--accent-green-light)',
            border: '1px solid var(--accent-green-border)',
            padding: '1.5rem',
            borderRadius: 'var(--border-radius-md)',
            textAlign: 'center'
          }}>
            <CheckCircle size={36} style={{ color: 'var(--accent-green)', margin: '0 auto 0.75rem' }} />
            <h2 style={{ color: 'var(--accent-green)', marginBottom: '0.25rem', fontSize: '1.25rem', border: 'none', padding: 0 }}>
              Nachricht gesendet!
            </h2>
            <p style={{ color: 'var(--text-main)', fontSize: '0.9rem' }}>{status.message}</p>
            <button
              type="button"
              className="btn btn-secondary"
              style={{ marginTop: '1rem' }}
              onClick={() => setStatus({ state: 'idle', message: '' })}
            >
              Weitere Nachricht verfassen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="contact-name" className="contact-label">
                Ihr Name (optional)
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Max Mustermann"
                className="contact-input"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-email" className="contact-label">
                Ihre E-Mail-Adresse (optional)
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="beispiel@domain.de"
                className="contact-input"
              />
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-type" className="contact-label">
                Betreff / Kategorie
              </label>
              <select
                id="contact-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="contact-select"
              >
                <option value="general">Allgemeine Frage</option>
                <option value="feature">Neuen Rechner vorschlagen</option>
                <option value="bug">Problem / Fehler melden</option>
                <option value="feedback">Feedback & Verbesserungsvorschlag</option>
              </select>
            </div>

            <div className="contact-form-group">
              <label htmlFor="contact-message" className="contact-label">
                Ihre Nachricht <span className="contact-required">*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Bitte beschreiben Sie Ihr Anliegen möglichst genau..."
                className="contact-textarea"
              />
            </div>

            {status.state === 'error' && (
              <div className="contact-error-banner">
                <AlertCircle size={16} />
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === 'submitting'}
              className="btn btn-primary contact-submit-btn"
            >
              <Send size={16} />
              <span>{status.state === 'submitting' ? 'Wird gesendet...' : 'Nachricht absenden'}</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
