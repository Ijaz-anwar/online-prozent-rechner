import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Calculator } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';

export default function NotFoundPage() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem', maxWidth: '600px', margin: '0 auto' }}>
      <SEOHead
        title="Seite nicht gefunden (404) - Prozent Rechner"
        description="Die angeforderte Seite konnte leider nicht gefunden werden."
      />

      <div style={{
        fontSize: '5rem',
        fontWeight: 800,
        color: 'var(--primary)',
        lineHeight: 1,
        marginBottom: '1rem'
      }}>
        404
      </div>

      <h1 style={{ fontSize: '1.75rem', marginBottom: '0.75rem' }}>Seite nicht gefunden</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        Die von Ihnen gesuchte Seite oder der Rechner existiert leider nicht oder wurde an eine andere Stelle verschoben.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/" className="btn btn-primary">
          <Home size={16} />
          <span>Zur Startseite</span>
        </Link>
        <Link to="/#tools" className="btn btn-secondary">
          <Calculator size={16} />
          <span>Zu den Rechnern</span>
        </Link>
      </div>
    </div>
  );
}
