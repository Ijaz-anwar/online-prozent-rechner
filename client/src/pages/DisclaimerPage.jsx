import React from 'react';
import { ShieldAlert, AlertTriangle, FileText, CheckCircle2 } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';

export default function DisclaimerPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '1rem 0 3rem' }}>
      <SEOHead
        title="Haftungsausschluss & Rechtliche Hinweise – Prozent Rechner"
        description="Rechtlicher Haftungsausschluss für mathematische Online-Rechner: Keine Gewähr für Rechenergebnisse, keine Steuer- oder Finanzberatung."
        canonicalUrl="/haftungsausschluss"
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: 'Haftungsausschluss' }]} />

      <div className="card" style={{ padding: '2rem 2.25rem', marginTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <ShieldAlert size={28} style={{ color: 'var(--primary, #2563eb)' }} />
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
            Haftungsausschluss (Disclaimer)
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Rechtliche Nutzungsbedingungen und Hinweise zu den mathematischen Berechnungsergebnissen
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem', lineHeight: 1.7, color: 'var(--text-main)' }}>
          {/* 1. Keine Gewähr für Rechenergebnisse */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              1. Keine Gewähr für Richtigkeit und Vollständigkeit
            </h2>
            <p>
              Alle auf dieser Website bereitgestellten Rechenfunktionen, Formeln und Algorithmen wurden mit größtmöglicher Sorgfalt programmiert und getestet. Dennoch übernimmt der Betreiber <strong>keinerlei Gewähr für die ständige Richtigkeit, Aktualität, Vollständigkeit oder mathematische Fehlerfreiheit</strong> der generierten Rechenergebnisse.
            </p>
            <p>
              Die Nutzung der Rechner erfolgt auf eigene Gefahr und Verantwortung des Nutzers. Jegliche Haftung für materielle oder ideelle Schäden, die durch die Nutzung oder Nichtnutzung der dargebotenen Berechnungswerte entstehen, ist grundsätzlich ausgeschlossen, sofern seitens des Betreibers kein nachweislich vorsätzliches oder grob fahrlässiges Verschulden vorliegt.
            </p>
          </section>

          {/* 2. Keine Steuerberatung */}
          <section style={{ background: 'var(--bg-subtle, #f8fafc)', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--border-color, #e2e8f0)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <AlertTriangle size={20} style={{ color: '#ea580c' }} />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--text-main)' }}>
                2. Keine Steuer-, Rechts- oder Finanzberatung (StBerG)
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem' }}>
              Die angebotenen Finanz- und Steuerberechnungen (z. B. 19% MwSt-Rechner, Brutto-Netto-Rechner, Rabattrechner) stellen <strong>keine Steuerberatung im Sinne des Steuerberatungsgesetzes (StBerG)</strong> und keine Rechtsberatung im Sinne des Rechtsdienstleistungsgesetzes (RDG) dar. Sie ersetzen zu keinem Zeitpunkt die professionelle Beratung durch eine(n) Steuerberater(in), Wirtschaftsprüfer(in) oder Rechtsanwalt/Rechtsanwältin.
            </p>
          </section>

          {/* 3. Client-Side Datenschutz */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              3. Client-seitige Datenverarbeitung
            </h2>
            <p>
              Die Rechenoperationen werden lokal in Ihrem Webbrowser mittels JavaScript ausgeführt. Ihre Eingabezahlen werden nicht an externe Server übertragen oder gespeichert.
            </p>
          </section>

          {/* 4. Rundungsdifferenzen */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              4. Rundungsdifferenzen im kaufmännischen Zahlungsverkehr
            </h2>
            <p>
              Aufgrund von Rundungsverfahren (kaufmännische Rundung nach DIN 1333) und Gleitkomma-Arithmetik in Browsern können in Ausnahmefällen minimale Rundungsdifferenzen im Cent-Bereich auftreten. Für Buchhaltungs- und Rechnungslegungszwecke sind stets die gesetzlichen Bestimmungen der GoBD und des HGB maßgeblich.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
