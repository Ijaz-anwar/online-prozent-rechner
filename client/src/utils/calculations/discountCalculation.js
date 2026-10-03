import { formatNumber, roundToPrecision } from '../formatters.js';

export const CURRENCY_SYMBOLS = {
  EUR: '€',
  USD: '$',
  GBP: '£'
};

/**
 * Format currency with selected currency code
 */
export function formatCurrencyAmount(amount, currency = 'EUR', decimals = 2) {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return `${CURRENCY_SYMBOLS[currency] || '€'}0.00`;
  }
  const symbol = CURRENCY_SYMBOLS[currency] || '€';
  const formatted = formatNumber(amount, decimals);
  return `${symbol}${formatted}`;
}

/**
 * Pure Discount Calculation Logic
 * 
 * Formula:
 * Discount Amount (Savings) = Original Price × (Discount Rate / 100)
 * Final Price = Original Price - Discount Amount
 */
export function calculateDiscountPrice(originalPrice, discountPercentage, currency = 'EUR', decimals = 2) {
  // Empty input check
  if (
    originalPrice === '' || 
    originalPrice === null || 
    originalPrice === undefined || 
    discountPercentage === '' || 
    discountPercentage === null || 
    discountPercentage === undefined
  ) {
    return {
      isValid: false,
      isEmpty: true,
      error: null
    };
  }

  const p = typeof originalPrice === 'number' ? originalPrice : parseFloat(String(originalPrice).trim());
  const d = typeof discountPercentage === 'number' ? discountPercentage : parseFloat(String(discountPercentage).trim());

  if (isNaN(p) || isNaN(d) || !isFinite(p) || !isFinite(d)) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Please enter valid finite numbers for price and discount.'
    };
  }

  if (p < 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Original price cannot be negative.'
    };
  }

  if (d < 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Discount percentage cannot be negative.'
    };
  }

  const symbol = CURRENCY_SYMBOLS[currency] || '€';
  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));

  const savingsRaw = (d / 100) * p;
  const finalPriceRaw = p - savingsRaw;

  const roundedSavings = roundToPrecision(savingsRaw, safeDecimals);
  const roundedFinal = roundToPrecision(Math.max(0, finalPriceRaw), safeDecimals);

  const formattedSavings = formatCurrencyAmount(roundedSavings, currency, safeDecimals);
  const formattedFinal = formatCurrencyAmount(roundedFinal, currency, safeDecimals);
  const formattedOriginal = formatCurrencyAmount(p, currency, safeDecimals);

  const decimalFactor = roundToPrecision(d / 100, Math.max(4, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    originalPrice: p,
    discountPercentage: d,
    currency,
    symbol,
    savings: roundedSavings,
    formattedSavings,
    finalPrice: roundedFinal,
    formattedFinal,
    formattedOriginal,
    formula: 'Final Price = Original Price × (1 - Discount% / 100)',
    steps: [
      `Step 1: Calculate savings: ${formattedOriginal} × (${d}% ÷ 100) = ${formattedSavings}`,
      `Step 2: Subtract savings from original price: ${formattedOriginal} - ${formattedSavings} = ${formattedFinal}`
    ],
    explanation: `A ${d}% discount on ${formattedOriginal} saves you ${formattedSavings}, giving a final sale price of ${formattedFinal}.`,
    error: null
  };
}
