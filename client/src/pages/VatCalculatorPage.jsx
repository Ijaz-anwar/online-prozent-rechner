import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Receipt, PlusCircle, MinusCircle, AlertCircle } from 'lucide-react';

import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import CalculatorCard from '../components/calculator/CalculatorCard.jsx';
import CalculatorInput from '../components/calculator/CalculatorInput.jsx';
import ActionToolbar from '../components/common/ActionToolbar.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';
import { calculateVatValues } from '../utils/calculations/vatCalculation.js';

import './VatCalculatorPage.css';

/* ─────────────────────────────────────────────
   VAT rate presets for Germany
   ───────────────────────────────────────────── */
const VAT_PRESETS = [
  { id: '19', label: '19% Standard', rate: '19', description: 'Regelsteuersatz' },
  { id: '7',  label: '7% Ermäßigt',  rate: '7',  description: 'Ermäßigter Steuersatz' },
  { id: 'custom', label: 'Individuell', rate: null, description: 'Eigenen Satz eingeben' },
];

export default function VatCalculatorPage({ onSaveHistory }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // Mode: net-to-gross = Netto → Brutto | gross-to-net = Brutto → Netto
  const [mode, setMode]             = useState(searchParams.get('mode') || 'net-to-gross');
  const [amount, setAmount]         = useState(searchParams.get('amount') || '');
  const [vatPreset, setVatPreset]   = useState(searchParams.get('preset') || '19');
  const [customRate, setCustomRate] = useState(searchParams.get('custom') || '');
  const [decimals, setDecimals]     = useState(2);

  // Resolve the active VAT rate string
  const activeRate = vatPreset === 'custom' ? customRate : vatPreset;

  // Parse inputs
  const numAmount = amount !== '' ? parseFloat(amount) : null;
  const numRate   = activeRate !== '' ? parseFloat(activeRate) : null;

  // Run calculation
  const result = calculateVatValues(numAmount, numRate, mode, decimals);

  // Sync URL params
  useEffect(() => {
    const params = {};
    if (amount)    params.amount = amount;
    if (mode)      params.mode   = mode;
    if (vatPreset) params.preset = vatPreset;
    if (vatPreset === 'custom' && customRate) params.custom = customRate;
    setSearchParams(params, { replace: true });
  }, [amount, mode, vatPreset, customRate]);

  // Save to history
  useEffect(() => {
    if (result.isValid && onSaveHistory) {
      const timer = setTimeout(() => {
        onSaveHistory({
          calculatorName: mode === 'net-to-gross' ? 'MwSt hinzufügen' : 'MwSt herausrechnen',
          expression: `${mode === 'net-to-gross' ? 'Netto' : 'Brutto'} ${amount} € bei ${activeRate}% MwSt`,
          result: result.primaryFormattedResult,
        });
      }, 1200);
      return () => clearTimeout(timer);
    }
  }, [amount, activeRate, mode, decimals]);

  const handleReset = () => {
    setAmount('');
    setVatPreset('19');
    setCustomRate('');
  };

  /* ── Derived UI labels ── */
  const inputLabel  = mode === 'net-to-gross' ? 'Nettobetrag (ohne MwSt)' : 'Bruttobetrag (inkl. MwSt)';
  const inputPlaceholder = mode === 'net-to-gross' ? 'z.B. 100.00' : 'z.B. 119.00';

  /* ── Schema.org ── */
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'MwSt-Rechner – Mehrwertsteuer berechnen',
    url: 'https://example.com/mwst-rechner',
    description:
      'Kostenloser Online-MwSt-Rechner: Mehrwertsteuer zum Nettobetrag hinzufügen oder aus dem Bruttobetrag herausrechnen. Mit 19%, 7% und individuellem MwSt-Satz.',
    applicationCategory: 'UtilitiesApplication',
  };

  /* ── FAQ content ── */
  const faqs = [
    {
      q: 'Was ist der Unterschied zwischen Netto- und Bruttobetrag?',
      a: 'Der Nettobetrag ist der Preis ohne Mehrwertsteuer. Der Bruttobetrag enthält die Mehrwertsteuer und ist der Preis, den der Verbraucher tatsächlich zahlt.',
    },
    {
      q: 'Wie rechnet man die MwSt zum Nettobetrag hinzu?',
      a: 'Nettobetrag × (1 + MwSt% / 100). Beispiel: 100 € × 1,19 = 119 € Brutto bei 19% MwSt.',
    },
    {
      q: 'Wie rechnet man die MwSt aus dem Bruttobetrag heraus?',
      a: 'Bruttobetrag ÷ (1 + MwSt% / 100). Beispiel: 119 € ÷ 1,19 = 100 € Netto.',
    },
    {
      q: 'Was ist der Regelsteuersatz in Deutschland?',
      a: 'Der allgemeine Mehrwertsteuersatz in Deutschland beträgt 19%. Für bestimmte Waren und Dienstleistungen gilt der ermäßigte Steuersatz von 7%, z.B. für Lebensmittel und Bücher.',
    },
    {
      q: 'Kann ich diesen Rechner für Steuererkärungen verwenden?',
      a: 'Dieser Rechner dient ausschließlich mathematischen Berechnungszwecken. Für steuerliche Entscheidungen wenden Sie sich bitte an einen qualifizierten Steuerberater.',
    },
  ];

  return (
    <div className="calc-page-wrapper">
      <SEOHead
        title="MwSt-Rechner – Mehrwertsteuer online berechnen"
        description="Kostenloser MwSt-Rechner: Mehrwertsteuer berechnen, Netto in Brutto umrechnen oder MwSt aus Bruttobetrag herausrechnen. Sätze 19%, 7% und individuell."
        canonicalUrl="/mwst-rechner"
        schemaData={schemaData}
      />

      <Breadcrumbs
        items={[
          { label: 'Startseite', path: '/' },
          { label: 'MwSt-Rechner' },
        ]}
      />

      <CalculatorCard
        title="MwSt-Rechner"
        subtitle="Mehrwertsteuer berechnen – Netto zu Brutto oder Brutto zu Netto umrechnen."
        badge="Steuer & Finanzen"
        icon={Receipt}
        resultSlot={<VatResultDisplay result={result} mode={mode} />}
        footerSlot={
          <ActionToolbar
            onReset={handleReset}
            onShare={() => window.location.href}
            decimals={decimals}
            onDecimalsChange={setDecimals}
          />
        }
      >
        {/* ── Mode toggle ── */}
        <div className="vat-mode-toggle" role="group" aria-label="Berechnungsmodus wählen">
          <button
            type="button"
            className={`vat-mode-btn${mode === 'net-to-gross' ? ' vat-mode-btn--active' : ''}`}
            onClick={() => setMode('net-to-gross')}
            aria-pressed={mode === 'net-to-gross'}
          >
            <PlusCircle size={16} aria-hidden="true" />
            <span>Netto → Brutto</span>
            <small>MwSt hinzufügen</small>
          </button>
          <button
            type="button"
            className={`vat-mode-btn${mode === 'gross-to-net' ? ' vat-mode-btn--active' : ''}`}
            onClick={() => setMode('gross-to-net')}
            aria-pressed={mode === 'gross-to-net'}
          >
            <MinusCircle size={16} aria-hidden="true" />
            <span>Brutto → Netto</span>
            <small>MwSt herausrechnen</small>
          </button>
        </div>

        {/* ── Amount input ── */}
        <CalculatorInput
          id="vat-amount"
          label={inputLabel}
          value={amount}
          onChange={setAmount}
          placeholder={inputPlaceholder}
          suffix="€"
          autoFocus
          required
        />

        {/* ── VAT rate selector ── */}
        <fieldset className="vat-rate-fieldset">
          <legend className="vat-rate-legend">MwSt-Satz</legend>
          <div className="vat-rate-presets">
            {VAT_PRESETS.map((preset) => (
              <button
                key={preset.id}
                type="button"
                className={`vat-preset-btn${vatPreset === preset.id ? ' vat-preset-btn--active' : ''}`}
                onClick={() => setVatPreset(preset.id)}
                aria-pressed={vatPreset === preset.id}
              >
                <strong>{preset.label}</strong>
                <span>{preset.description}</span>
              </button>
            ))}
          </div>

          {vatPreset === 'custom' && (
            <div className="vat-custom-input">
              <CalculatorInput
                id="vat-custom-rate"
                label="Individueller MwSt-Satz"
                value={customRate}
                onChange={setCustomRate}
                placeholder="z.B. 10"
                suffix="%"
                required
                autoFocus
              />
            </div>
          )}
        </fieldset>

        {/* ── Formula preview (visible when result is ready) ── */}
        {result.isValid && (
          <div className="vat-formula-preview" aria-label="Berechnungsformel">
            <code>{result.formula}</code>
          </div>
        )}

        {/* ── Disclaimer ── */}
        <div className="vat-disclaimer" role="note" aria-label="Hinweis">
          <AlertCircle size={15} aria-hidden="true" />
          <p>
            <strong>Hinweis:</strong> Dieser Rechner dient ausschließlich mathematischen
            Berechnungszwecken und stellt keine Steuerberatung dar. Für verbindliche
            steuerliche Auskünfte wenden Sie sich bitte an einen zugelassenen Steuerberater.
          </p>
        </div>
      </CalculatorCard>

      {/* ── Calculation steps (shown below the card when result exists) ── */}
      {result.isValid && result.steps?.length > 0 && (
        <section className="vat-steps-section" aria-label="Rechenweg">
          <h2 className="vat-steps-heading">Rechenweg</h2>
          <ol className="vat-steps-list">
            {result.steps.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
      )}

      <SEOContent
        headline="MwSt-Rechner – Mehrwertsteuer einfach berechnen"
        description="Mit unserem kostenlosen MwSt-Rechner können Sie die Mehrwertsteuer schnell und einfach berechnen. Rechnen Sie Netto- in Bruttobeträge um oder ermitteln Sie den Nettopreis aus einem Bruttobetrag."
        formula={
          mode === 'net-to-gross'
            ? 'Bruttobetrag = Nettobetrag × (1 + MwSt% / 100)'
            : 'Nettobetrag = Bruttobetrag / (1 + MwSt% / 100)'
        }
        steps={[
          'MwSt hinzufügen: Nettobetrag × (1 + MwSt% / 100) = Bruttobetrag.',
          'MwSt herausrechnen: Bruttobetrag ÷ (1 + MwSt% / 100) = Nettobetrag.',
          'MwSt-Betrag ermitteln: Bruttobetrag − Nettobetrag.',
          'Deutschland: 19% Regelsteuersatz, 7% ermäßigter Steuersatz.',
        ]}
        examples={[
          {
            title: '19% MwSt auf 100 € Netto',
            scenario: 'Eine Rechnung über 100 € netto mit 19% MwSt.',
            solution: '100 € × 1,19 = 119 € Brutto (MwSt-Anteil: 19 €).',
          },
          {
            title: 'MwSt aus 119 € Brutto herausrechnen',
            scenario: 'Ein Kassenbon über 119 € enthält 19% MwSt.',
            solution: '119 € ÷ 1,19 = 100 € Netto (enthaltene MwSt: 19 €).',
          },
          {
            title: '7% MwSt auf 50 € (Lebensmittel)',
            scenario: 'Lebensmittel im Wert von 50 € netto mit 7% ermäßigter MwSt.',
            solution: '50 € × 1,07 = 53,50 € Brutto (MwSt-Anteil: 3,50 €).',
          },
        ]}
        faqs={faqs}
      />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Triple result display — Net / VAT / Gross
   ───────────────────────────────────────────── */
function VatResultDisplay({ result, mode }) {
  if (!result.isValid && result.isEmpty) {
    return (
      <div className="vat-result-empty">
        <Receipt size={36} className="vat-result-empty__icon" aria-hidden="true" />
        <p>Betrag und MwSt-Satz eingeben, um das Ergebnis zu sehen.</p>
      </div>
    );
  }

  if (!result.isValid && !result.isEmpty) {
    return (
      <div className="vat-result-error" role="alert">
        <AlertCircle size={18} aria-hidden="true" />
        <p>{result.error}</p>
      </div>
    );
  }

  const cards = [
    {
      id: 'net',
      label: 'Nettobetrag',
      sublabel: 'ohne MwSt',
      value: result.formattedNet,
      highlight: mode === 'gross-to-net',
    },
    {
      id: 'vat',
      label: 'MwSt-Betrag',
      sublabel: `${result.vatRate}% Mehrwertsteuer`,
      value: result.formattedVat,
      highlight: false,
    },
    {
      id: 'gross',
      label: 'Bruttobetrag',
      sublabel: 'inkl. MwSt',
      value: result.formattedGross,
      highlight: mode === 'net-to-gross',
    },
  ];

  return (
    <div className="vat-result-grid" aria-label="Berechnungsergebnis" aria-live="polite">
      {cards.map((card) => (
        <div
          key={card.id}
          className={`vat-result-card${card.highlight ? ' vat-result-card--primary' : ''}`}
        >
          <span className="vat-result-card__label">{card.label}</span>
          <span className="vat-result-card__value">{card.value}</span>
          <span className="vat-result-card__sub">{card.sublabel}</span>
        </div>
      ))}
      {result.explanation && (
        <p className="vat-result-explanation">{result.explanation}</p>
      )}
    </div>
  );
}
