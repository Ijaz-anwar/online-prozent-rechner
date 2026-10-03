import { formatNumber, roundToPrecision } from '../formatters.js';

/**
 * Format Euro currency
 */
export function formatEuro(amount, decimals = 2) {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return '0,00 €';
  }
  const formatted = formatNumber(amount, decimals);
  return `${formatted} €`;
}

/**
 * Pure VAT / Mehrwertsteuer Calculation Engine
 * 
 * Mode 'net-to-gross' (Netto -> Brutto / Add VAT):
 * Gross = Net × (1 + Rate / 100)
 * VAT Amount = Net × (Rate / 100)
 * 
 * Mode 'gross-to-net' (Brutto -> Netto / Remove VAT):
 * Net = Gross / (1 + Rate / 100)
 * VAT Amount = Gross - Net
 */
export function calculateVatValues(inputAmount, vatRatePercentage, mode = 'net-to-gross', decimals = 2) {
  // Empty input check
  if (
    inputAmount === '' || 
    inputAmount === null || 
    inputAmount === undefined || 
    vatRatePercentage === '' || 
    vatRatePercentage === null || 
    vatRatePercentage === undefined
  ) {
    return {
      isValid: false,
      isEmpty: true,
      error: null
    };
  }

  const amount = typeof inputAmount === 'number' ? inputAmount : parseFloat(String(inputAmount).trim());
  const rate = typeof vatRatePercentage === 'number' ? vatRatePercentage : parseFloat(String(vatRatePercentage).trim());

  if (isNaN(amount) || isNaN(rate) || !isFinite(amount) || !isFinite(rate)) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Please enter valid finite numbers for price and VAT rate.'
    };
  }

  if (amount < 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Price amount cannot be negative.'
    };
  }

  if (rate < 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'VAT rate cannot be negative.'
    };
  }

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  let net = 0;
  let gross = 0;
  let vatAmount = 0;
  let formula = '';
  let steps = [];

  if (mode === 'net-to-gross') {
    // Adding VAT to Net amount
    net = amount;
    vatAmount = net * (rate / 100);
    gross = net + vatAmount;
    formula = 'Bruttobetrag = Nettobetrag × (1 + MwSt% / 100)';
    steps = [
      `Schritt 1 (MwSt berechnen): ${formatEuro(net, safeDecimals)} × (${rate}% ÷ 100) = ${formatEuro(roundToPrecision(vatAmount, safeDecimals), safeDecimals)}`,
      `Schritt 2 (Bruttobetrag): ${formatEuro(net, safeDecimals)} + ${formatEuro(roundToPrecision(vatAmount, safeDecimals), safeDecimals)} = ${formatEuro(roundToPrecision(gross, safeDecimals), safeDecimals)}`
    ];
  } else {
    // Extracting Net from Gross amount
    gross = amount;
    const factor = 1 + (rate / 100);
    net = factor !== 0 ? gross / factor : 0;
    vatAmount = gross - net;
    formula = 'Nettobetrag = Bruttobetrag / (1 + MwSt% / 100)';
    steps = [
      `Schritt 1 (Teilungsfaktor): 1 + (${rate}% ÷ 100) = ${roundToPrecision(factor, 4)}`,
      `Schritt 2 (Nettobetrag): ${formatEuro(gross, safeDecimals)} ÷ ${roundToPrecision(factor, 4)} = ${formatEuro(roundToPrecision(net, safeDecimals), safeDecimals)}`,
      `Schritt 3 (Enthaltene MwSt): ${formatEuro(gross, safeDecimals)} - ${formatEuro(roundToPrecision(net, safeDecimals), safeDecimals)} = ${formatEuro(roundToPrecision(vatAmount, safeDecimals), safeDecimals)}`
    ];
  }

  const roundedNet = roundToPrecision(net, safeDecimals);
  const roundedGross = roundToPrecision(gross, safeDecimals);
  const roundedVat = roundToPrecision(vatAmount, safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    mode,
    vatRate: rate,
    netAmount: roundedNet,
    grossAmount: roundedGross,
    vatAmount: roundedVat,
    formattedNet: formatEuro(roundedNet, safeDecimals),
    formattedGross: formatEuro(roundedGross, safeDecimals),
    formattedVat: formatEuro(roundedVat, safeDecimals),
    primaryFormattedResult: mode === 'net-to-gross' ? formatEuro(roundedGross, safeDecimals) : formatEuro(roundedNet, safeDecimals),
    formula,
    steps,
    explanation: mode === 'net-to-gross'
      ? `Aus einem Nettobetrag von ${formatEuro(roundedNet, safeDecimals)} ergibt sich bei ${rate}% MwSt ein Bruttogesamtbetrag von ${formatEuro(roundedGross, safeDecimals)} (MwSt: ${formatEuro(roundedVat, safeDecimals)}).`
      : `Aus einem Bruttobetrag von ${formatEuro(roundedGross, safeDecimals)} ergibt sich bei ${rate}% MwSt ein Nettobetrag von ${formatEuro(roundedNet, safeDecimals)} (enthaltene MwSt: ${formatEuro(roundedVat, safeDecimals)}).`,
    error: null
  };
}

export const calculateVAT = calculateVatValues;
