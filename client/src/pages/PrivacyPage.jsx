import React from 'react';
import { Shield, Lock, EyeOff, Server, CheckCircle2, Scale } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';

export default function PrivacyPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '1rem 0 3rem' }}>
      <SEOHead
        title="Datenschutzerklärung (DSGVO) – Prozent Rechner"
        description="Datenschutzerklärung gemäß Datenschutz-Grundverordnung (DSGVO): 100% client-seitige Berechnungen, keine Cookies, keine Tracker."
        canonicalUrl="/datenschutz"
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: 'Datenschutz' }]} />

      <div className="card" style={{ padding: '2rem 2.25rem', marginTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
          <Shield size={28} style={{ color: 'var(--primary, #2563eb)' }} />
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
            Datenschutzerklärung (DSGVO)
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Informationen über die Verarbeitung personenbezogener Daten nach Art. 13 und 14 DSGVO
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--text-main)' }}>
          {/* 1. Datenschutz auf einen Blick */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              1. Datenschutz auf einen Blick
            </h2>
            <div style={{ background: 'var(--bg-subtle, #f8fafc)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
              <ul style={{ margin: 0, paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><strong>Keine Cookies:</strong> Wir setzen keine Marketing-, Tracking- oder Profiling-Cookies ein.</li>
                <li><strong>100% Client-Side:</strong> Ihre Berechnungen und Finanzzahlen werden lokal im Browser verarbeitet und niemals an unsere Server gesendet.</li>
                <li><strong>Keine Benutzerkonten:</strong> Für die Nutzung der Rechner ist keine Registrierung und keine Angabe von persönlichen Daten erforderlich.</li>
                <li><strong>DSGVO-konform:</strong> Höchste Standards des europäischen Datenschutzrechts werden eingehalten.</li>
              </ul>
            </div>
          </section>

          {/* 2. Verantwortliche Stelle */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              2. Name und Anschrift des Verantwortlichen
            </h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) und anderer nationaler Datenschutzgesetze ist:
            </p>
            <p style={{ background: 'var(--bg-subtle, #f8fafc)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border-color, #e2e8f0)' }}>
              <strong>Prozent Rechner Online</strong><br />
              Musterstraße 123<br />
              10115 Berlin, Deutschland<br />
              E-Mail: datenschutz@prozentrechner.online
            </p>
          </section>

          {/* 3. Server-Log-Dateien */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              3. Bereitstellung der Website und Server-Logfiles
            </h2>
            <p>
              Beim Aufrufen unserer Website erfasst der Webserver automatisch technische Daten, die Ihr Browser übermittelt (Server-Logfiles). Hierzu gehören:
            </p>
            <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0' }}>
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (die zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners / anonymisierte IP-Adresse</li>
              <li>Uhrzeit der Serveranfrage</li>
            </ul>
            <p>
              Die Rechtsgrundlage für diese Datenverarbeitung ist <strong>Art. 6 Abs. 1 lit. f DSGVO</strong>. Unser berechtigtes Interesse liegt in der technisch fehlerfreien Bereitstellung, Systemsicherheit und Stabilität unserer Webanwendung. Die Daten werden nach kurzer Zeit automatisch gelöscht.
            </p>
          </section>

          {/* 4. Lokaler Speicher (LocalStorage) */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              4. Lokaler Browserspeicher (LocalStorage)
            </h2>
            <p>
              Unsere Anwendung speichert bestimmte Einstellungen (z. B. Hell-/Dunkelmodus und auf Ihren Wunsch hin den Rechenverlauf) im sogenannten <code>localStorage</code> Ihres Webbrowsers.
            </p>
            <p>
              Diese Daten verbleiben ausschließlich auf Ihrem lokalen Endgerät und werden zu keinem Zeitpunkt an uns übertragen. Sie können diesen Verlauf jederzeit über den Button "Verlauf löschen" im Seitenmenü oder über die Einstellungen Ihres Browsers leeren. Rechtsgrundlage: § 25 Abs. 2 Nr. 2 TDDDG (technisch erforderlich zur Bereitstellung der vom Nutzer gewünschten Funktion).
            </p>
          </section>

          {/* 5. Betroffenenrechte */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              5. Ihre Rechte als betroffene Person
            </h2>
            <p>
              Nach der Datenschutz-Grundverordnung (DSGVO) stehen Ihnen folgende gesetzliche Rechte zu:
            </p>
            <ul style={{ paddingLeft: '1.25rem', margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong>Recht auf Auskunft (Art. 15 DSGVO):</strong> Sie können Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Sie können die Berichtigung unrichtiger Daten verlangen.</li>
              <li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Sie können die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten verlangen.</li>
              <li><strong>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</strong></li>
              <li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</strong></li>
              <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit gegen die Verarbeitung Widerspruch einzulegen.</li>
            </ul>
          </section>

          {/* 6. Beschwerderecht */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              6. Beschwerderecht bei einer Aufsichtsbehörde
            </h2>
            <p>
              Gemäß Art. 77 DSGVO haben Sie das Recht auf Beschwerde bei einer Datenschutz-Aufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen die DSGVO verstößt. In der Regel können Sie sich hierfür an die Aufsichtsbehörde Ihres üblichen Aufenthaltsortes oder unseres Unternehmenssitzes wenden.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
