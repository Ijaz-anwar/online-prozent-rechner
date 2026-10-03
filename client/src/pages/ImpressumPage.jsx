import React from 'react';
import { ShieldAlert, Mail, MapPin, Scale, Info } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';

export default function ImpressumPage() {
  return (
    <div style={{ maxWidth: '840px', margin: '0 auto', padding: '1rem 0 3rem' }}>
      <SEOHead
        title="Impressum (Rechtliche Angaben) – Prozent Rechner"
        description="Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 MStV."
        canonicalUrl="/impressum"
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: 'Impressum' }]} />

      <div className="card" style={{ padding: '2rem 2.25rem', marginTop: '1.25rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
          <Scale size={28} style={{ color: 'var(--primary, #2563eb)' }} />
          <h1 style={{ fontSize: '1.85rem', fontWeight: 800, margin: 0, color: 'var(--text-main)' }}>
            Impressum
          </h1>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '0.95rem' }}>
          Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG) und § 18 Abs. 2 Medienstaatsvertrag (MStV)
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', lineHeight: 1.7, color: 'var(--text-main)' }}>
          {/* Diensteanbieter */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              1. Diensteanbieter / Betreiber
            </h2>
            <div style={{ background: 'var(--bg-subtle, #f8fafc)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border-color, #e2e8f0)' }}>
              <p style={{ margin: '0 0 0.5rem', fontWeight: 600 }}>Prozent Rechner Online</p>
              <p style={{ margin: '0 0 0.5rem' }}>Musterstraße 123</p>
              <p style={{ margin: '0 0 0.5rem' }}>10115 Berlin, Deutschland</p>
              <p style={{ margin: '0.75rem 0 0', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Mail size={16} /> <strong>E-Mail:</strong> kontakt@prozentrechner.online
              </p>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <em>Hinweis: Wenn Sie dieses Projekt im Produktivbetrieb einsetzen, tragen Sie hier Ihren vollständigen Namen bzw. Firmennamen und die ladungsfähige Anschrift ein.</em>
            </p>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              2. Verantwortlich für journalistisch-redaktionelle Inhalte (§ 18 Abs. 2 MStV)
            </h2>
            <p>
              Redaktion Prozent Rechner<br />
              Musterstraße 123, 10115 Berlin, Deutschland
            </p>
          </section>

          {/* Keine Steuerberatung */}
          <section style={{ background: 'rgba(37, 99, 235, 0.05)', border: '1px solid rgba(37, 99, 235, 0.2)', padding: '1.25rem', borderRadius: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <Info size={20} style={{ color: 'var(--primary, #2563eb)' }} />
              <h2 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--primary-dark, #1d4ed8)' }}>
                Wichtiger Hinweis: Keine Steuer- oder Rechtsberatung
              </h2>
            </div>
            <p style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text-main)' }}>
              Die auf dieser Website angebotenen Online-Rechner (insbesondere der Mehrwertsteuerrechner, Brutto-Netto-Rechner und Rabattrechner) dienen ausschließlich der unverbindlichen mathematischen Orientierung und Information. Sie stellen ausdrücklich <strong>keine Steuerberatung im Sinne des Steuerberatungsgesetzes (StBerG)</strong> und keine Rechtsberatung dar. Für verbindliche Berechnungen wenden Sie sich bitte an eine(n) qualifizierte(n) Steuerberater(in).
            </p>
          </section>

          {/* Haftung für Inhalte */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              3. Haftung für Inhalte (§ 7 Abs. 1 DDG)
            </h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>
          </section>

          {/* Haftung für Links */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              4. Haftung für externe Links
            </h2>
            <p>
              Unser Angebot enthält unter Umständen Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          {/* Urheberrecht */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              5. Urheberrecht (Copyright)
            </h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

          {/* Streitbeilegung */}
          <section>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-main)' }}>
              6. EU-Streitschlichtung & Verbraucherstreitbeilegung
            </h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)' }}>
                https://ec.europa.eu/consumers/odr/
              </a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
