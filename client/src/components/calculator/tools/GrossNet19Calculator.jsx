import React, { useState } from 'react';
import { Receipt, PlusCircle, MinusCircle } from 'lucide-react';
import CalculatorCard from '../CalculatorCard.jsx';
import CalculatorInput from '../CalculatorInput.jsx';
import CalculatorResult from '../CalculatorResult.jsx';
import ActionToolbar from '../../common/ActionToolbar.jsx';
import { calculateVatValues, formatEuro } from '../../../utils/calculations/vatCalculation.js';

export default function GrossNet19Calculator({ onSaveHistory, initialAmount = '100', initialMode = 'net-to-gross' }) {
  const [amount, setAmount] = useState(initialAmount);
  const [mode, setMode] = useState(initialMode); // 'net-to-gross' | 'gross-to-net'
  const [decimals, setDecimals] = useState(2);

  const numAmount = amount !== '' ? parseFloat(amount) : null;
  const resultData = calculateVatValues(numAmount, 19, mode, decimals);

  const handleReset = () => {
    setAmount('');
  };

  const stats = resultData.isValid ? [
    { label: 'Nettobetrag (ohne MwSt)', value: resultData.formattedNet },
    { label: '19 % Mehrwertsteuer', value: resultData.formattedVat },
    { label: 'Bruttobetrag (inkl. 19 % MwSt)', value: resultData.formattedGross }
  ] : [];

  return (
    <CalculatorCard
      title="Brutto Netto Rechner 19 %"
      subtitle="Berechnen Sie Brutto aus Netto oder Netto aus Brutto mit dem regulären Steuersatz von 19 % MwSt."
      badge="19 % MwSt"
      icon={Receipt}
      resultSlot={
        <CalculatorResult
          title={mode === 'net-to-gross' ? 'Bruttobetrag (inkl. 19 % MwSt)' : 'Nettobetrag (exkl. 19 % MwSt)'}
          value={resultData.isValid ? resultData.primaryFormattedResult : null}
          explanation={resultData.isValid ? resultData.explanation : null}
          stats={stats}
          steps={resultData.isValid ? resultData.steps : []}
          error={!resultData.isValid && !resultData.isEmpty ? resultData.error : null}
          emptyMessage="Geben Sie einen Betrag ein, um das Ergebnis zu berechnen"
        />
      }
      footerSlot={
        <ActionToolbar
          onReset={handleReset}
          onShare={() => window.location.href}
          decimals={decimals}
          onDecimalsChange={setDecimals}
        />
      }
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Mode Selector Toggle */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0.5rem',
          background: 'var(--bg-card-subtle, #f5f7fa)',
          padding: '0.35rem',
          borderRadius: 'var(--border-radius-md, 10px)',
          border: '1px solid var(--border-color, #e0e4ec)'
        }}>
          <button
            type="button"
            className={`btn ${mode === 'net-to-gross' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMode('net-to-gross')}
            style={{ fontSize: '0.85rem', padding: '0.55rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
          >
            <PlusCircle size={15} />
            <span>Netto → Brutto (+19 %)</span>
          </button>
          <button
            type="button"
            className={`btn ${mode === 'gross-to-net' ? 'btn-primary' : 'btn-secondary'}`}
            onClick={() => setMode('gross-to-net')}
            style={{ fontSize: '0.85rem', padding: '0.55rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}
          >
            <MinusCircle size={15} />
            <span>Brutto → Netto (÷ 1,19)</span>
          </button>
        </div>

        <div>
          <CalculatorInput
            id="gn19-amount"
            label={mode === 'net-to-gross' ? 'Nettobetrag (€)' : 'Bruttobetrag (€)'}
            value={amount}
            onChange={setAmount}
            placeholder={mode === 'net-to-gross' ? 'z. B. 100,00' : 'z. B. 119,00'}
            suffix="€"
            required
          />

          {/* Quick presets */}
          <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            {[50, 100, 119, 200, 500, 1000].map((preset) => (
              <button
                key={preset}
                type="button"
                className={`btn btn-secondary ${Number(amount) === preset ? 'btn-primary' : ''}`}
                style={{ padding: '0.2rem 0.55rem', fontSize: '0.75rem' }}
                onClick={() => setAmount(String(preset))}
              >
                {preset} €
              </button>
            ))}
          </div>
        </div>
      </div>
    </CalculatorCard>
  );
}
