import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  BookOpen,
} from 'lucide-react';

import SEOHead from '../components/seo/SEOHead.jsx';
import CalculatorInput from '../components/calculator/CalculatorInput.jsx';
import FAQ from '../components/common/FAQ.jsx';

import {
  calculatePercentageOf,
  calculateWhatPercentageIsXOfY,
  calculatePercentageChange,
} from '../utils/calculations/percentageCalculations.js';

import { calculatorsConfig } from '../data/calculatorsConfig.js';
import GermanPercentageGuide from '../components/home/GermanPercentageGuide.jsx';

import './HomePage.css';

const REFERENCE_ROWS = [
  { fraction: '1/2', decimal: '0,5', percent: '50 %', tip: 'Durch 2 teilen' },
  { fraction: '1/3', decimal: '0,333…', percent: '33,33 %', tip: 'Durch 3 teilen' },
  { fraction: '1/4', decimal: '0,25', percent: '25 %', tip: 'Durch 4 teilen' },
  { fraction: '1/5', decimal: '0,2', percent: '20 %', tip: 'Durch 5 teilen' },
  { fraction: '1/8', decimal: '0,125', percent: '12,5 %', tip: 'Hälfte von 25 %' },
  { fraction: '1/10', decimal: '0,1', percent: '10 %', tip: 'Komma 1 Stelle nach links' },
  { fraction: '3/4', decimal: '0,75', percent: '75 %', tip: '50 % + 25 %' },
  { fraction: '2/3', decimal: '0,667…', percent: '66,67 %', tip: 'Das Doppelte von 1/3' },
];

const WORKED_EXAMPLES = [
  {
    label: 'Rabatt',
    title: 'Endpreis nach 30 % Rabatt',
    input: 'Originalpreis: 120 €, Rabatt: 30 %',
    step1: 'Rabattbetrag = 120 € × 0,30 = 36 €',
    step2: 'Endpreis = 120 € − 36 € = 84 €',
    result: '84,00 €',
    color: 'purple',
  },
  {
    label: 'Gehaltserhöhung',
    title: 'Gehaltssteigerung um 15 %',
    input: 'Bisheriges Gehalt: 40.000 €, Erhöhung: 15 %',
    step1: 'Zuwachsbetrag = 40.000 € × 0,15 = 6.000 €',
    step2: 'Neues Gehalt = 40.000 € + 6.000 € = 46.000 €',
    result: '46.000,00 €',
    color: 'green',
  },
  {
    label: 'Mehrwertsteuer',
    title: 'Netto zu Brutto mit 19 % MwSt',
    input: 'Nettopreis: 100 €, Steuersatz: 19 %',
    step1: 'MwSt-Betrag = 100 € × 0,19 = 19 €',
    step2: 'Bruttogesamtbetrag = 100 € + 19 € = 119 €',
    result: '119,00 €',
    color: 'blue',
  },
];

const FAQS = [
  {
    q: 'Wie berechnet man Prozentwerte einfach im Kopf?',
    a: '10 % = Komma um eine Stelle nach links verschieben. 5 % = die Hälfte von 10 %. 20 % = das Doppelte von 10 %. Kombinieren Sie diese Schritte für jeden Wert (z. B. 15 % = 10 % + 5 %).',
  },
  {
    q: 'Was ist der Unterschied zwischen prozentualer Veränderung und prozentualer Differenz?',
    a: 'Die prozentuale Veränderung bezieht sich auf einen festen Ausgangswert (die Richtung von Alt zu Neu ist entscheidend). Die prozentuale Differenz vergleicht zwei Zahlen symmetrisch anhand ihres Durchschnitts.',
  },
  {
    q: 'Wie ermittelt man den ursprünglichen Preis vor einem Rabatt (Prozent rückwärts)?',
    a: 'Teilen Sie den reduzierten Preis durch (1 − Rabattsatz / 100). Beispiel: Kostet ein Artikel nach 15 % Rabatt 85 €: 85 € ÷ 0,85 = 100 € ursprünglicher Normalpreis.',
  },
  {
    q: 'Werden meine eingegebenen Daten auf einem Server gespeichert?',
    a: 'Nein. Alle Berechnungen laufen zu 100 % lokal (client-side) in Ihrem Browser mittels JavaScript. Es werden keinerlei Eingaben an Server übertragen oder gespeichert.',
  },
  {
    q: 'Wie geht der Rechner mit Kommazahlen und Nullwerten um?',
    a: 'Der Rechner unterstützt beliebige Dezimalzahlen mit bis zu 4 Nachkommastellen. Divisionen durch null werden mathematisch sauber abgefangen und führen zu einem verständlichen Hinweis statt zu Fehlern.',
  },
];

/* ════════════════════════════════════════════════════════
   MAIN CALCULATOR TABS CONFIG
   ════════════════════════════════════════════════════════ */
const TABS = [
  {
    id: 'of',
    label: 'P% vom Grundwert',
    shortLabel: 'P% von Wert',
    question: 'Wie viel sind _ % von _ ?',
    label1: 'Prozentsatz (p)',
    placeholder1: 'z. B. 25',
    suffix1: '%',
    label2: 'Grundwert (G)',
    placeholder2: 'z. B. 200',
    suffix2: '',
    resultTitle: 'Berechneter Prozentwert (W)',
    defaultA: '25',
    defaultB: '200',
  },
  {
    id: 'is',
    label: 'Wie viel % sind X von Y?',
    shortLabel: 'X von Y in %',
    question: 'Wie viel Prozent sind _ von _ ?',
    label1: 'Prozentwert / Teil (W)',
    placeholder1: 'z. B. 30',
    suffix1: '',
    label2: 'Gesamter Grundwert (G)',
    placeholder2: 'z. B. 120',
    suffix2: '',
    resultTitle: 'Berechneter Prozentsatz (p)',
    defaultA: '30',
    defaultB: '120',
  },
  {
    id: 'change',
    label: '% Veränderung',
    shortLabel: '% Veränderung',
    question: 'Prozentuale Veränderung von _ auf _ ?',
    label1: 'Ausgangswert (Vorher)',
    placeholder1: 'z. B. 80',
    suffix1: '',
    label2: 'Endwert (Nachher)',
    placeholder2: 'z. B. 100',
    suffix2: '',
    resultTitle: 'Prozentuale Steigerung / Senkung',
    defaultA: '80',
    defaultB: '100',
  },
];

/* ════════════════════════════════════════════════════════
   COMPONENT
   ════════════════════════════════════════════════════════ */
export default function HomePage({ onSaveHistory }) {
  const [activeTabId, setActiveTabId] = useState('of');
  const [valA, setValA] = useState('25');
  const [valB, setValB] = useState('200');

  const activeTab = TABS.find((t) => t.id === activeTabId);

  /* Run calculation */
  let calcResult = null;
  const numA = valA !== '' ? Number(valA) : null;
  const numB = valB !== '' ? Number(valB) : null;

  if (activeTabId === 'of')     calcResult = calculatePercentageOf(numA, numB, 2);
  if (activeTabId === 'is')     calcResult = calculateWhatPercentageIsXOfY(numA, numB, 2);
  if (activeTabId === 'change') calcResult = calculatePercentageChange(numA, numB, 2);

  /* Switch tabs — reset inputs to defaults */
  const handleTabSwitch = (tab) => {
    setActiveTabId(tab.id);
    setValA(tab.defaultA);
    setValB(tab.defaultB);
  };

  /* Save history */
  useEffect(() => {
    if (calcResult?.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: activeTab.label,
          expression: `${valA} / ${valB}`,
          result: calcResult.formattedResult,
        });
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [valA, valB, activeTabId]);

  /* SEO schema */
  const schemaData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      name: 'Prozent Rechner – Kostenloser Online-Prozentrechner',
      url: 'https://prozentrechner.online/',
      applicationCategory: 'EducationalApplication',
      operatingSystem: 'All',
      browserRequirements: 'Requires JavaScript. Requires HTML5.',
      offers: {
        '@type': 'Offer',
        price: '0',
        priceCurrency: 'EUR'
      },
      description:
        'Kostenlose Online-Prozentrechner: Prozentwert, Prozentsatz, Grundwert, Dreisatz, 19% MwSt, Rabatt und Prozent rückwärts rechnen mit sofortigem Rechenweg.'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQS.map(faq => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a
        }
      }))
    }
  ];

  return (
    <div className="hp">
      <SEOHead
        title="Prozent Rechner Online – Prozent einfach, schnell und richtig berechnen"
        description="Prozent Rechner Online: Prozente einfach, schnell und richtig berechnen – mit Rabatt, Preis, Bruch, Mehrwertsteuer, Dreisatz und Prozentrechnung."
        canonicalUrl="/"
        schemaData={schemaData}
      />

      {/* ── 1. HERO ───────────────────────────────────────── */}
      <section className="hp-hero" aria-label="Hero">
        <div className="hp-hero__inner">
          <span className="hp-hero__eyebrow">
            <Zap size={14} aria-hidden="true" />
            Kostenloses Online-Tool
          </span>
          <h1 className="hp-hero__title">Prozent Rechner Online</h1>
          <p className="hp-hero__sub">
            Prozent Rechner Online – schnell, einfach und präzise Prozente berechnen.<br className="hp-hero__br" />
            Sofortige Ergebnisse · Schritt-für-Schritt Rechenweg · Ohne Anmeldung.
          </p>
          <div className="hp-hero__badges">
            <span className="hp-chip"><CheckCircle2 size={13} /> Sofortige Ergebnisse</span>
            <span className="hp-chip"><CheckCircle2 size={13} /> Mobil optimiert</span>
            <span className="hp-chip"><CheckCircle2 size={13} /> 100 % Kostenlos</span>
          </div>
        </div>
      </section>

      {/* ── 2. MAIN PERCENTAGE CALCULATOR ────────────────── */}
      <section className="hp-section hp-calculator-section" id="calculator" aria-label="Haupt-Prozentrechner">
        <div className="hp-container">
          <div className="hp-calc-card">
            {/* Tab selector */}
            <div className="hp-calc-tabs" role="tablist" aria-label="Rechnertyp">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={activeTabId === tab.id}
                  className={`hp-calc-tab${activeTabId === tab.id ? ' hp-calc-tab--active' : ''}`}
                  onClick={() => handleTabSwitch(tab)}
                >
                  <span className="hp-tab-full">{tab.label}</span>
                  <span className="hp-tab-short">{tab.shortLabel}</span>
                </button>
              ))}
            </div>

            {/* Question display */}
            <div className="hp-calc-question" aria-live="polite">
              {activeTab.question}
            </div>

            {/* Inputs */}
            <div className="hp-calc-inputs">
              <CalculatorInput
                id="hp-val-a"
                label={activeTab.label1}
                value={valA}
                onChange={setValA}
                placeholder={activeTab.placeholder1}
                suffix={activeTab.suffix1 || undefined}
                autoFocus
                required
              />
              <CalculatorInput
                id="hp-val-b"
                label={activeTab.label2}
                value={valB}
                onChange={setValB}
                placeholder={activeTab.placeholder2}
                suffix={activeTab.suffix2 || undefined}
                required
              />
            </div>

            {/* Result area */}
            <div className="hp-calc-result" aria-live="polite" aria-label="Rechenergebnis">
              {calcResult?.isValid ? (
                <>
                  <div className="hp-calc-result__label">{activeTab.resultTitle}</div>
                  <div className="hp-calc-result__value">{calcResult.formattedResult}</div>
                  {calcResult.explanation && (
                    <p className="hp-calc-result__explanation">{calcResult.explanation}</p>
                  )}
                  {calcResult.steps?.length > 0 && (
                    <ol className="hp-calc-result__steps">
                      {calcResult.steps.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ol>
                  )}
                </>
              ) : calcResult && !calcResult.isEmpty && calcResult.error ? (
                <p className="hp-calc-result__error" role="alert">{calcResult.error}</p>
              ) : (
                <p className="hp-calc-result__placeholder">
                  Geben Sie oben Werte ein, um das Ergebnis zu sehen.
                </p>
              )}
            </div>

            {/* Link to all calculators */}
            <div className="hp-calc-footer">
              <a href="#all-tools" className="hp-calc-link">
                Alle Prozentrechner unten anzeigen <ArrowRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. ALL CALCULATORS — FULLY OPEN & READY TO USE ── */}
      <section className="hp-section" id="all-tools" aria-label="Alle Prozentrechner">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2 className="hp-section-title">Alle Prozentrechner</h2>
            <p className="hp-section-sub">
              Jeder Rechner ist sofort einsatzbereit – einfach nach unten scrollen und Werte direkt eingeben.
            </p>
          </div>

          {/* Quick Jump Navigation */}
          <nav className="hp-tools-quick-nav" aria-label="Schnellzugriff auf Rechner">
            {calculatorsConfig.map((calc) => (
              <a
                key={calc.id}
                href={`#tool-${calc.id}`}
                className="hp-quick-nav-pill"
              >
                {calc.shortName}
              </a>
            ))}
          </nav>

          {/* All tools rendered completely open */}
          <div className="hp-open-tools-stack">
            {calculatorsConfig.map((calc) => {
              const ToolComponent = calc.component;
              return (
                <div key={calc.id} id={`tool-${calc.id}`} className="hp-open-tool-card">
                  {calc.formula && (
                    <div className="hp-open-tool-formula-bar">
                      <span className="hp-open-tool-formula-label">Formel:</span>
                      <code>{calc.formula}</code>
                    </div>
                  )}
                  <ToolComponent onSaveHistory={onSaveHistory} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. HOW PERCENTAGE CALCULATION WORKS ──────────── */}
      <section className="hp-section" id="how-it-works" aria-label="Funktionsweise der Prozentrechnung">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2 className="hp-section-title">So funktioniert die Prozentrechnung</h2>
            <p className="hp-section-sub">
              Ein Prozent drückt einen Anteil als Bruch von Hundert aus. Das Wort „Prozent“ leitet sich aus dem Lateinischen „per centum“ ab und bedeutet wörtlich „von Hundert“.
            </p>
          </div>
          <div className="hp-steps-grid">
            <div className="hp-step">
              <span className="hp-step__num">1</span>
              <div>
                <strong>Bekannte Werte erfassen.</strong>
                <p>Starten Sie mit zwei der drei Grundgrößen: dem Prozentsatz (p), dem Prozentwert (W) oder dem Grundwert (G).</p>
              </div>
            </div>
            <div className="hp-step">
              <span className="hp-step__num">2</span>
              <div>
                <strong>Die passende Formel wählen.</strong>
                <p>Nutzen Sie die Formel für Ihre gesuchte Unbekannte: Prozentwert, Prozentsatz oder Grundwert.</p>
              </div>
            </div>
            <div className="hp-step">
              <span className="hp-step__num">3</span>
              <div>
                <strong>Einsetzen und berechnen.</strong>
                <p>Bekannte Zahlen einsetzen und ausrechnen. Unsere Online-Rechner zeigen jeden einzelnen Rechenschritt verständlich an.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. FORMULA EXPLANATION ───────────────────────── */}
      <section className="hp-section hp-section--alt" id="formulas" aria-label="Grundformeln der Prozentrechnung">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2 className="hp-section-title">Grundformeln der Prozentrechnung</h2>
            <p className="hp-section-sub">Drei elementare mathematische Formeln decken jede typische Prozentaufgabe ab.</p>
          </div>
          <div className="hp-formula-grid">
            <div className="hp-formula-card">
              <div className="hp-formula-card__label">Prozentwert berechnen (W)</div>
              <div className="hp-formula-card__formula">
                W&nbsp;=&nbsp;<em>(p ÷ 100)</em>&nbsp;×&nbsp;G
              </div>
              <p className="hp-formula-card__desc">
                Wird verwendet, wenn Prozentsatz und Grundwert bekannt sind und der konkrete Anteil gesucht ist.
              </p>
              <div className="hp-formula-card__example">
                Beispiel: 25 % von 200 = (25 ÷ 100) × 200 = <strong>50</strong>
              </div>
            </div>
            <div className="hp-formula-card">
              <div className="hp-formula-card__label">Prozentsatz berechnen (p)</div>
              <div className="hp-formula-card__formula">
                p&nbsp;=&nbsp;<em>(W ÷ G)</em>&nbsp;×&nbsp;100 %
              </div>
              <p className="hp-formula-card__desc">
                Wird verwendet, wenn Teilwert und Gesamtwert bekannt sind und der Prozentsatz gesucht ist.
              </p>
              <div className="hp-formula-card__example">
                Beispiel: 30 von 120 = (30 ÷ 120) × 100 = <strong>25 %</strong>
              </div>
            </div>
            <div className="hp-formula-card">
              <div className="hp-formula-card__label">Prozentuale Veränderung</div>
              <div className="hp-formula-card__formula">
                Δ %&nbsp;=&nbsp;<em>((Neu − Alt) ÷ Alt)</em>&nbsp;×&nbsp;100 %
              </div>
              <p className="hp-formula-card__desc">
                Dient zur Ermittlung von prozentualem Wachstum, Steigerungen oder Preissenkungen.
              </p>
              <div className="hp-formula-card__example">
                Beispiel: von 80 auf 100 = ((100 − 80) ÷ 80) × 100 = <strong>+25 %</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. WORKED EXAMPLES ───────────────────────────── */}
      <section className="hp-section" id="examples" aria-label="Praxisbeispiele">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2 className="hp-section-title">Praxisbeispiele mit Rechenweg</h2>
            <p className="hp-section-sub">
              Erleben Sie, wie Prozentrechnung in alltäglichen Situationen konkret angewendet wird.
            </p>
          </div>
          <div className="hp-examples-grid">
            {WORKED_EXAMPLES.map((ex, i) => (
              <div key={i} className={`hp-example-card hp-example-card--${ex.color}`}>
                <span className={`hp-example-label hp-example-label--${ex.color}`}>{ex.label}</span>
                <h2 className="hp-example-title">{ex.title}</h2>
                <p className="hp-example-input"><strong>Gegeben:</strong> {ex.input}</p>
                <ol className="hp-example-steps">
                  <li>{ex.step1}</li>
                  <li>{ex.step2}</li>
                </ol>
                <div className={`hp-example-result hp-example-result--${ex.color}`}>
                  Ergebnis: <strong>{ex.result}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. REFERENCE CHART ───────────────────────────── */}
      <section className="hp-section hp-section--alt" id="reference" aria-label="Übersichtstabelle">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2 className="hp-section-title">Schnelle Umrechnungstabelle & Spickzettel</h2>
            <p className="hp-section-sub">
              Wichtige Brüche, ihre Dezimalwerte und praktische Kopfrechentricks im Überblick.
            </p>
          </div>
          <div className="hp-table-wrap">
            <table className="hp-table">
              <thead>
                <tr>
                  <th scope="col">Bruch</th>
                  <th scope="col">Dezimalzahl</th>
                  <th scope="col">Prozentsatz</th>
                  <th scope="col">Kopfrechentrick</th>
                </tr>
              </thead>
              <tbody>
                {REFERENCE_ROWS.map((row, i) => (
                  <tr key={i}>
                    <td><strong>{row.fraction}</strong></td>
                    <td>{row.decimal}</td>
                    <td><span className="hp-pct-badge">{row.percent}</span></td>
                    <td>{row.tip}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── 9. EDUCATIONAL CONTENT ───────────────────────── */}
      <section className="hp-section" id="guide" aria-label="Wissenswertes über Prozentrechnung">
        <div className="hp-container hp-edu">
          <div className="hp-edu__text">
            <span className="hp-edu__eyebrow">
              <BookOpen size={14} aria-hidden="true" /> Wissen
            </span>
            <h2 className="hp-section-title">Grundlagen der Prozentrechnung</h2>
            <p>
              Ein <strong>Prozent</strong> ist ein dimensionsloses Größenverhältnis bezogen auf 100.
              Es wird in Finanzen, Statistik, Wissenschaft und im alltäglichen Leben verwendet, um Verhältnisse und Anteile in einem universellen, leicht vergleichbaren Format anzugeben.
            </p>
            <p>
              Das Prozentzeichen <strong>%</strong> entstand aus dem italienischen <em>per cento</em> („von Hundert“),
              das bereits im 15. Jahrhundert in kaufmännischen Handschriften auftauchte. Heute sind Prozente die
              weltweit gebräuchlichste Form, um relative Veränderungen, Anteile und Zuwachsraten zu beschreiben.
            </p>
            <h2 className="hp-edu__subheading" style={{ fontSize: '1.25rem', fontWeight: 700, margin: '1.5rem 0 0.75rem 0' }}>
              Wann begegnet uns Prozentrechnung im Alltag?
            </h2>
            <ul className="hp-edu__list">
              <li><CheckCircle2 size={15} aria-hidden="true" /> Rabatte und Sonderangebote beim Einkaufen vergleichen</li>
              <li><CheckCircle2 size={15} aria-hidden="true" /> Zinsen bei Krediten, Festgeld und Sparplänen ermitteln</li>
              <li><CheckCircle2 size={15} aria-hidden="true" /> Geschäftswachstum, Margen und Renditen analysieren</li>
              <li><CheckCircle2 size={15} aria-hidden="true" /> Prüfungsergebnisse, Schulnoten und Notenspiegel auswerten</li>
              <li><CheckCircle2 size={15} aria-hidden="true" /> Mehrwertsteuer (19 % / 7 %) auf Rechnungen und Quittungen ausrechnen</li>
              <li><CheckCircle2 size={15} aria-hidden="true" /> Nährwerttabellen und Tagesbedarfsangaben (% RDA) verstehen</li>
            </ul>
          </div>
          <div className="hp-edu__aside">
            <div className="hp-tip-card">
              <div className="hp-tip-card__icon"><Zap size={20} /></div>
              <h2 className="hp-tip-card__title">Kopfrechentricks</h2>
              <ul className="hp-tip-card__list">
                <li><span className="hp-tip-badge">10 %</span> Komma 1 Stelle nach links schieben</li>
                <li><span className="hp-tip-badge">5 %</span> Hälfte von 10 %</li>
                <li><span className="hp-tip-badge">20 %</span> Das Doppelte von 10 %</li>
                <li><span className="hp-tip-badge">25 %</span> Durch 4 teilen</li>
                <li><span className="hp-tip-badge">50 %</span> Durch 2 teilen (Halbieren)</li>
                <li><span className="hp-tip-badge">1 %</span> Komma 2 Stellen nach links schieben</li>
                <li><span className="hp-tip-badge">15 %</span> 10 % + 5 % addieren</li>
                <li><span className="hp-tip-badge">33 %</span> Durch 3 teilen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 9. COMPREHENSIVE PERCENTAGE EDUCATIONAL GUIDE ── */}
      <GermanPercentageGuide />

      {/* ── 10. FAQ ──────────────────────────────────────── */}
      <section className="hp-section hp-section--alt" id="faq" aria-label="Häufig gestellte Fragen">
        <div className="hp-container hp-faq-wrap">
          <div className="hp-section-header">
            <h2 className="hp-section-title">Häufig gestellte Fragen (FAQ)</h2>
            <p className="hp-section-sub">Antworten auf die wichtigsten Fragen rund um die Prozentrechnung.</p>
          </div>
          <FAQ items={FAQS} title="" subtitle="" />
        </div>
      </section>
    </div>
  );
}
