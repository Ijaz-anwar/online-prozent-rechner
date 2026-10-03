/**
 * Safe number formatting with custom decimals and locale support
 */
export function formatNumber(value, decimals = 2) {
  if (value === null || value === undefined || isNaN(value) || value === '') {
    return '0';
  }
  const num = Number(value);
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: decimals
  }).format(num);
}

export function formatPercent(value, decimals = 2) {
  if (value === null || value === undefined || isNaN(value) || value === '') {
    return '0%';
  }
  const formatted = formatNumber(value, decimals);
  return `${formatted}%`;
}

export function formatCurrency(value, currency = 'USD', decimals = 2) {
  if (value === null || value === undefined || isNaN(value) || value === '') {
    return '$0.00';
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(Number(value));
}

/**
 * Clean user string input to float (handles commas, spaces, currency signs)
 */
export function parseCleanNumber(input) {
  if (typeof input === 'number') return isNaN(input) ? null : input;
  if (!input || typeof input !== 'string') return null;

  // Replace commas with dots if used as decimal separator or strip thousand commas
  const cleaned = input.trim().replace(/[^0-9.-]/g, '');
  if (cleaned === '' || cleaned === '-' || cleaned === '.') return null;

  const parsed = parseFloat(cleaned);
  return isNaN(parsed) ? null : parsed;
}

/**
 * Avoid floating point rounding glitches (e.g. 0.1 + 0.2)
 */
export function roundToPrecision(num, decimals = 4) {
  if (isNaN(num)) return 0;
  const factor = Math.pow(10, decimals);
  return Math.round((num + Number.EPSILON) * factor) / factor;
}
