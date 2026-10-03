import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';

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
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      <SEOHead
        title="Kontakt & Feedback - Prozent Rechner"
        description="Haben Sie Fragen, Wünsche zu neuen Rechnern oder Feedback? Schreiben Sie uns direkt über unser Kontaktformular."
        canonicalUrl="/contact"
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: 'Kontakt' }]} />

      <div className="card">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Mail size={24} style={{ color: 'var(--primary)' }} />
          <h1>Kontakt & Feedback</h1>
        </div>
        <p style={{ marginBottom: '1.75rem', color: 'var(--text-muted)' }}>
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
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Ihr Name (optional)
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Max Mustermann"
                className="custom-number-input"
                style={{ height: '44px', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Ihre E-Mail-Adresse (optional)
              </label>
              <input
                id="contact-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="beispiel@domain.de"
                className="custom-number-input"
                style={{ height: '44px', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label htmlFor="contact-type" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Betreff / Kategorie
              </label>
              <select
                id="contact-type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                style={{
                  width: '100%',
                  height: '44px',
                  padding: '0 0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: 'var(--bg-input)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem',
                  fontWeight: 600
                }}
              >
                <option value="general">Allgemeine Frage</option>
                <option value="feature">Neuen Rechner vorschlagen</option>
                <option value="bug">Problem / Fehler melden</option>
                <option value="feedback">Feedback & Verbesserungsvorschlag</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.9rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                Ihre Nachricht <span style={{ color: 'var(--accent-rose)' }}>*</span>
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Bitte beschreiben Sie Ihr Anliegen möglichst genau..."
                style={{
                  width: '100%',
                  padding: '0.85rem',
                  borderRadius: 'var(--border-radius-md)',
                  border: '1.5px solid var(--border-color)',
                  backgroundColor: 'var(--bg-input)',
                  color: 'var(--text-main)',
                  fontSize: '0.95rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
            </div>

            {status.state === 'error' && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-rose)', fontSize: '0.9rem' }}>
                <AlertCircle size={16} />
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={status.state === 'submitting'}
              className="btn btn-primary"
              style={{ width: '100%', padding: '0.85rem' }}
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
