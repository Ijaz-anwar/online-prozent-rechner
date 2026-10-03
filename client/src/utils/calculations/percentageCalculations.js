import { formatNumber, formatPercent, roundToPrecision } from '../formatters.js';

/**
 * Helper to validate numeric input
 */
function parseNumberInput(val) {
  if (val === '' || val === null || val === undefined) return null;
  const num = typeof val === 'number' ? val : parseFloat(String(val).trim());
  if (isNaN(num) || !isFinite(num)) return NaN;
  return num;
}

/**
 * 1. Percentage Value: "What is P% of Base (B)?"
 * Formula: Value = (P / 100) * B
 */
export function calculatePercentageValue(percentage, base, decimals = 2) {
  const p = parseNumberInput(percentage);
  const b = parseNumberInput(base);

  if (p === null || b === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(p) || isNaN(b)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const raw = (p / 100) * b;
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = formatNumber(rounded, safeDecimals);
  const decimalFactor = roundToPrecision(p / 100, Math.max(4, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    formattedResult: formatted,
    formula: 'Prozentwert = (Prozentsatz / 100) × Grundwert',
    example: `${p} % von ${b} -> (${p} / 100) × ${b} = ${formatted}`,
    steps: [
      `Schritt 1: Prozentsatz in Dezimalzahl umwandeln: ${p} % ÷ 100 = ${decimalFactor}`,
      `Schritt 2: Mit dem Grundwert multiplizieren: ${decimalFactor} × ${b} = ${formatted}`
    ],
    explanation: `${p} % von ${b} ist gleich ${formatted}.`,
    error: null
  };
}

// Alias for backward compatibility
export const calculatePercentageOf = calculatePercentageValue;

/**
 * 2. Percentage Rate: "What percentage rate (P%) is Value (V) of Base (B)?"
 * Formula: P% = (V / B) * 100
 */
export function calculatePercentageRate(value, base, decimals = 2) {
  const v = parseNumberInput(value);
  const b = parseNumberInput(base);

  if (v === null || b === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(v) || isNaN(b)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  if (b === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Base value cannot be zero because dividing by zero is mathematically undefined.'
    };
  }

  const raw = (v / b) * 100;
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = formatPercent(rounded, safeDecimals);
  const ratio = roundToPrecision(v / b, Math.max(6, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    formattedResult: formatted,
    formula: 'Prozentsatz = (Prozentwert / Grundwert) × 100 %',
    example: `${v} von ${b} -> (${v} / ${b}) × 100 % = ${formatted}`,
    steps: [
      `Schritt 1: Prozentwert durch Grundwert teilen: ${v} ÷ ${b} = ${ratio}`,
      `Schritt 2: Mit 100 multiplizieren: ${ratio} × 100 = ${formatted}`
    ],
    explanation: `${v} entspricht ${formatted} von ${b}.`,
    error: null
  };
}

export const calculateWhatPercentageIsXOfY = calculatePercentageRate;

/**
 * 3. Base Value: "Value (V) is P%, what is the original Base Value (B)?"
 * Formula: Base = V / (P / 100)
 */
export function calculateBaseValue(value, percentage, decimals = 2) {
  const v = parseNumberInput(value);
  const p = parseNumberInput(percentage);

  if (v === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(v) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  if (p === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Percentage rate cannot be 0% when finding the base value.'
    };
  }

  const raw = v / (p / 100);
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = formatNumber(rounded, safeDecimals);
  const decimalFactor = roundToPrecision(p / 100, Math.max(4, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    formattedResult: formatted,
    formula: 'Base Value = Value / (Percentage / 100)',
    example: `If ${v} is ${p}%, the base is ${v} ÷ (${p} / 100) = ${formatted}`,
    steps: [
      `Step 1: Convert percentage to decimal: ${p}% ÷ 100 = ${decimalFactor}`,
      `Step 2: Divide value by decimal factor: ${v} ÷ ${decimalFactor} = ${formatted}`
    ],
    explanation: `If ${v} represents ${p}%, then the original base value is ${formatted}.`,
    error: null
  };
}

export const calculateReversePercentage = calculateBaseValue;

/**
 * 4. Percentage Increase: "Calculate % increase from Initial (V1) to Final (V2)"
 * Formula: Increase% = ((V2 - V1) / |V1|) * 100
 */
export function calculatePercentageIncrease(initialVal, finalVal, decimals = 2) {
  const v1 = parseNumberInput(initialVal);
  const v2 = parseNumberInput(finalVal);

  if (v1 === null || v2 === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(v1) || isNaN(v2)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  if (v1 === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Initial starting value cannot be zero (percentage growth from zero is undefined).'
    };
  }

  const diff = v2 - v1;
  const raw = (diff / Math.abs(v1)) * 100;
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = `${rounded >= 0 ? '+' : ''}${formatPercent(rounded, safeDecimals)}`;
  const formattedDiff = formatNumber(roundToPrecision(diff, safeDecimals), safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    difference: roundToPrecision(diff, safeDecimals),
    formattedDifference: formattedDiff,
    formattedResult: formatted,
    formula: 'Prozentuale Veränderung = ((Endwert - Anfangswert) / |Anfangswert|) × 100 %',
    example: `Von ${v1} auf ${v2} -> ((${v2} - ${v1}) / ${Math.abs(v1)}) × 100 = ${formatted}`,
    steps: [
      `Schritt 1: Absolute Differenz berechnen: ${v2} - ${v1} = ${formattedDiff}`,
      `Schritt 2: Durch den Anfangswert teilen: ${formattedDiff} ÷ ${Math.abs(v1)} = ${roundToPrecision(diff / Math.abs(v1), 6)}`,
      `Schritt 3: Mit 100 multiplizieren: ${roundToPrecision(diff / Math.abs(v1), 6)} × 100 = ${formatted}`
    ],
    explanation: `Eine Veränderung von ${v1} auf ${v2} entspricht ${formatted} (Differenz: ${formattedDiff}).`,
    error: null
  };
}

/**
 * 5. Percentage Decrease: "Calculate % decrease from Initial (V1) to Final (V2)"
 * Formula: Decrease% = ((V1 - V2) / |V1|) * 100
 */
export function calculatePercentageDecrease(initialVal, finalVal, decimals = 2) {
  const v1 = parseNumberInput(initialVal);
  const v2 = parseNumberInput(finalVal);

  if (v1 === null || v2 === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(v1) || isNaN(v2)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  if (v1 === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Initial starting value cannot be zero.'
    };
  }

  const drop = v1 - v2;
  const raw = (drop / Math.abs(v1)) * 100;
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = `${rounded >= 0 ? '-' : '+'}${formatPercent(Math.abs(rounded), safeDecimals)}`;
  const formattedDrop = formatNumber(roundToPrecision(drop, safeDecimals), safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    difference: roundToPrecision(drop, safeDecimals),
    formattedDifference: formattedDrop,
    formattedResult: formatted,
    formula: 'Prozentuale Abnahme = ((Anfangswert - Endwert) / |Anfangswert|) × 100 %',
    example: `Von ${v1} auf ${v2} -> ((${v1} - ${v2}) / ${Math.abs(v1)}) × 100 = ${formatted}`,
    steps: [
      `Schritt 1: Differenz berechnen: ${v1} - ${v2} = ${formattedDrop}`,
      `Schritt 2: Durch den Anfangswert teilen: ${formattedDrop} ÷ ${Math.abs(v1)} = ${roundToPrecision(drop / Math.abs(v1), 6)}`,
      `Schritt 3: Mit 100 multiplizieren: ${roundToPrecision(drop / Math.abs(v1), 6)} × 100 = ${formatted}`
    ],
    explanation: `Eine Verringerung von ${v1} auf ${v2} entspricht einer Abnahme um ${formatted} (Differenz: -${formattedDrop}).`,
    error: null
  };
}

export const calculatePercentageChange = calculatePercentageIncrease;

/**
 * 6. Add Percentage: "Add P% to Base (B): Final = B + (B * P / 100)"
 * Formula: Final = B * (1 + P / 100)
 */
export function calculateAddPercentage(base, percentage, decimals = 2) {
  const b = parseNumberInput(base);
  const p = parseNumberInput(percentage);

  if (b === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(b) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const addedAmount = (p / 100) * b;
  const rawFinal = b + addedAmount;
  if (isNaN(rawFinal) || !isFinite(rawFinal)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const roundedFinal = roundToPrecision(rawFinal, safeDecimals);
  const roundedAdded = roundToPrecision(addedAmount, safeDecimals);

  const formattedFinal = formatNumber(roundedFinal, safeDecimals);
  const formattedAdded = formatNumber(roundedAdded, safeDecimals);
  const multiplier = roundToPrecision(1 + p / 100, Math.max(4, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    result: roundedFinal,
    formattedResult: formattedFinal,
    addedAmount: roundedAdded,
    formattedAddedAmount: formattedAdded,
    formula: 'Final Value = Base × (1 + Percentage / 100)',
    example: `${b} + ${p}% -> ${b} × (1 + ${p} / 100) = ${formattedFinal}`,
    steps: [
      `Step 1: Calculate added amount: ${b} × (${p} / 100) = +${formattedAdded}`,
      `Step 2: Add to base value: ${b} + ${formattedAdded} = ${formattedFinal}`
    ],
    explanation: `Adding ${p}% (+${formattedAdded}) to ${b} equals ${formattedFinal}.`,
    error: null
  };
}

/**
 * 7. Subtract Percentage: "Subtract P% from Base (B): Final = B - (B * P / 100)"
 * Formula: Final = B * (1 - P / 100)
 */
export function calculateSubtractPercentage(base, percentage, decimals = 2) {
  const b = parseNumberInput(base);
  const p = parseNumberInput(percentage);

  if (b === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(b) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const subtractedAmount = (p / 100) * b;
  const rawFinal = b - subtractedAmount;
  if (isNaN(rawFinal) || !isFinite(rawFinal)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const roundedFinal = roundToPrecision(rawFinal, safeDecimals);
  const roundedSubtracted = roundToPrecision(subtractedAmount, safeDecimals);

  const formattedFinal = formatNumber(roundedFinal, safeDecimals);
  const formattedSubtracted = formatNumber(roundedSubtracted, safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: roundedFinal,
    formattedResult: formattedFinal,
    subtractedAmount: roundedSubtracted,
    formattedSubtractedAmount: formattedSubtracted,
    formula: 'Final Value = Base × (1 - Percentage / 100)',
    example: `${b} - ${p}% -> ${b} × (1 - ${p} / 100) = ${formattedFinal}`,
    steps: [
      `Step 1: Calculate deducted amount: ${b} × (${p} / 100) = -${formattedSubtracted}`,
      `Step 2: Subtract from base value: ${b} - ${formattedSubtracted} = ${formattedFinal}`
    ],
    explanation: `Subtracting ${p}% (-${formattedSubtracted}) from ${b} equals ${formattedFinal}.`,
    error: null
  };
}

/**
 * 8. Reverse Percentage Increase: "Final Value (F) after +P% increase, find original Initial Base (I)"
 * Formula: Initial = Final / (1 + P / 100)
 */
export function calculateReversePercentageIncrease(finalVal, percentageIncrease, decimals = 2) {
  const f = parseNumberInput(finalVal);
  const p = parseNumberInput(percentageIncrease);

  if (f === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(f) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const divisor = 1 + (p / 100);
  if (divisor === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Percentage rate cannot result in division by zero (-100%).'
    };
  }

  const rawInitial = f / divisor;
  if (isNaN(rawInitial) || !isFinite(rawInitial)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const roundedInitial = roundToPrecision(rawInitial, safeDecimals);
  const formattedInitial = formatNumber(roundedInitial, safeDecimals);
  const growthAmount = roundToPrecision(f - rawInitial, safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: roundedInitial,
    formattedResult: formattedInitial,
    growthAmount,
    formattedGrowthAmount: formatNumber(growthAmount, safeDecimals),
    formula: 'Original Value = Final Value / (1 + Percentage Increase / 100)',
    example: `${f} after +${p}% increase -> ${f} ÷ (1 + ${p}/100) = ${formattedInitial}`,
    steps: [
      `Step 1: Calculate growth factor: 1 + (${p} ÷ 100) = ${roundToPrecision(divisor, 4)}`,
      `Step 2: Divide final value by growth factor: ${f} ÷ ${roundToPrecision(divisor, 4)} = ${formattedInitial}`
    ],
    explanation: `If ${f} is the result after a ${p}% increase, the original base value was ${formattedInitial}.`,
    error: null
  };
}

/**
 * 9. Reverse Percentage Decrease: "Final Value (F) after -P% decrease, find original Initial Base (I)"
 * Formula: Initial = Final / (1 - P / 100)
 */
export function calculateReversePercentageDecrease(finalVal, percentageDecrease, decimals = 2) {
  const f = parseNumberInput(finalVal);
  const p = parseNumberInput(percentageDecrease);

  if (f === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(f) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const divisor = 1 - (p / 100);
  if (divisor === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'Percentage decrease cannot be 100% because the original value before a 100% loss cannot be determined from zero.'
    };
  }

  const rawInitial = f / divisor;
  if (isNaN(rawInitial) || !isFinite(rawInitial)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const roundedInitial = roundToPrecision(rawInitial, safeDecimals);
  const formattedInitial = formatNumber(roundedInitial, safeDecimals);
  const reductionAmount = roundToPrecision(rawInitial - f, safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: roundedInitial,
    formattedResult: formattedInitial,
    reductionAmount,
    formattedReductionAmount: formatNumber(reductionAmount, safeDecimals),
    formula: 'Original Value = Final Value / (1 - Percentage Decrease / 100)',
    example: `${f} after -${p}% discount -> ${f} ÷ (1 - ${p}/100) = ${formattedInitial}`,
    steps: [
      `Step 1: Calculate deduction factor: 1 - (${p} ÷ 100) = ${roundToPrecision(divisor, 4)}`,
      `Step 2: Divide final value by deduction factor: ${f} ÷ ${roundToPrecision(divisor, 4)} = ${formattedInitial}`
    ],
    explanation: `If ${f} is the result after a ${p}% discount/decrease, the original value was ${formattedInitial}.`,
    error: null
  };
}

/**
 * 10. Percentage Difference: "Percentage difference between Value A and Value B"
 * Formula: Diff% = (|A - B| / ((A + B) / 2)) * 100
 */
export function calculatePercentageDifference(valA, valB, decimals = 2) {
  const a = parseNumberInput(valA);
  const b = parseNumberInput(valB);

  if (a === null || b === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(a) || isNaN(b)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const average = (a + b) / 2;
  if (average === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'The average of both values is zero, making percentage difference undefined.'
    };
  }

  const diff = Math.abs(a - b);
  const raw = (diff / Math.abs(average)) * 100;
  if (isNaN(raw) || !isFinite(raw)) return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rounded = roundToPrecision(raw, safeDecimals);
  const formatted = formatPercent(rounded, safeDecimals);

  return {
    isValid: true,
    isEmpty: false,
    result: rounded,
    formattedResult: formatted,
    average: roundToPrecision(average, safeDecimals),
    formattedAverage: formatNumber(roundToPrecision(average, safeDecimals), safeDecimals),
    formula: 'Percentage Difference = (|A - B| / ((A + B) / 2)) × 100%',
    example: `Between ${a} and ${b} -> (|${a} - ${b}| / ((${a} + ${b}) / 2)) × 100 = ${formatted}`,
    steps: [
      `Step 1: Calculate absolute difference: |${a} - ${b}| = ${roundToPrecision(diff, 4)}`,
      `Step 2: Calculate average of both values: (${a} + ${b}) ÷ 2 = ${roundToPrecision(average, 4)}`,
      `Step 3: Divide difference by average: ${roundToPrecision(diff, 4)} ÷ ${roundToPrecision(average, 4)} = ${roundToPrecision(diff / Math.abs(average), 6)}`,
      `Step 4: Multiply by 100: ${roundToPrecision(diff / Math.abs(average), 6)} × 100 = ${formatted}`
    ],
    explanation: `The relative percentage difference between ${a} and ${b} is ${formatted}.`,
    error: null
  };
}

/**
 * Other Specialized Calculators
 */
export function calculateDiscount(price, discountPercent, salesTaxPercent = 0, decimals = 2) {
  const p = parseNumberInput(price);
  const d = parseNumberInput(discountPercent);
  const t = parseNumberInput(salesTaxPercent) || 0;

  if (p === null || d === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(p) || isNaN(d) || isNaN(t)) return { isValid: false, isEmpty: false, error: 'Please enter valid numbers.' };

  const savings = (d / 100) * p;
  const discountedPrice = p - savings;
  const taxAmount = (t / 100) * discountedPrice;
  const finalPrice = discountedPrice + taxAmount;

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));

  return {
    isValid: true,
    isEmpty: false,
    result: roundToPrecision(finalPrice, safeDecimals),
    formattedResult: formatNumber(roundToPrecision(finalPrice, safeDecimals), safeDecimals),
    savings: roundToPrecision(savings, safeDecimals),
    formattedSavings: formatNumber(roundToPrecision(savings, safeDecimals), safeDecimals),
    taxAmount: roundToPrecision(taxAmount, safeDecimals),
    formattedTax: formatNumber(roundToPrecision(taxAmount, safeDecimals), safeDecimals),
    discountedPrice: roundToPrecision(discountedPrice, safeDecimals),
    formula: 'Final Price = (Original Price - Savings) + Sales Tax',
    steps: [
      `Step 1: Calculate savings: ${p} × (${d}% ÷ 100) = ${formatNumber(roundToPrecision(savings, safeDecimals), safeDecimals)}`,
      `Step 2: Subtract discount: ${p} - ${formatNumber(roundToPrecision(savings, safeDecimals), safeDecimals)} = ${formatNumber(roundToPrecision(discountedPrice, safeDecimals), safeDecimals)}`,
      t > 0 ? `Step 3: Add ${t}% sales tax: +${formatNumber(roundToPrecision(taxAmount, safeDecimals), safeDecimals)} = ${formatNumber(roundToPrecision(finalPrice, safeDecimals), safeDecimals)}` : 'Step 3: No sales tax applied.'
    ],
    explanation: `You save ${formatNumber(roundToPrecision(savings, safeDecimals), safeDecimals)} (${d}% off). Final price is ${formatNumber(roundToPrecision(finalPrice, safeDecimals), safeDecimals)}.`
  };
}

export function calculateTip(billAmount, tipPercent, splitCount = 1, decimals = 2) {
  const bill = parseNumberInput(billAmount);
  const tipRate = parseNumberInput(tipPercent);
  const people = Math.max(1, parseInt(splitCount, 10) || 1);

  if (bill === null || tipRate === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(bill) || isNaN(tipRate)) return { isValid: false, isEmpty: false, error: 'Please enter valid numbers.' };

  const tipAmount = (tipRate / 100) * bill;
  const totalBill = bill + tipAmount;
  const tipPerPerson = tipAmount / people;
  const totalPerPerson = totalBill / people;

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));

  return {
    isValid: true,
    isEmpty: false,
    result: roundToPrecision(totalBill, safeDecimals),
    formattedResult: formatNumber(roundToPrecision(totalBill, safeDecimals), safeDecimals),
    tipAmount: roundToPrecision(tipAmount, safeDecimals),
    formattedTip: formatNumber(roundToPrecision(tipAmount, safeDecimals), safeDecimals),
    tipPerPerson: roundToPrecision(tipPerPerson, safeDecimals),
    totalPerPerson: roundToPrecision(totalPerPerson, safeDecimals),
    formattedTotalPerPerson: formatNumber(roundToPrecision(totalPerPerson, safeDecimals), safeDecimals),
    people,
    formula: 'Total = Bill + (Bill × (Tip% / 100))',
    steps: [
      `Step 1: Calculate tip amount: ${bill} × ${tipRate}% = ${formatNumber(roundToPrecision(tipAmount, safeDecimals), safeDecimals)}`,
      `Step 2: Total bill: ${bill} + ${formatNumber(roundToPrecision(tipAmount, safeDecimals), safeDecimals)} = ${formatNumber(roundToPrecision(totalBill, safeDecimals), safeDecimals)}`,
      people > 1 ? `Step 3: Split between ${people} people: ${formatNumber(roundToPrecision(totalBill, safeDecimals), safeDecimals)} ÷ ${people} = ${formatNumber(roundToPrecision(totalPerPerson, safeDecimals), safeDecimals)} per person` : null
    ].filter(Boolean),
    explanation: `Tip is ${formatNumber(roundToPrecision(tipAmount, safeDecimals), safeDecimals)} (${tipRate}%). Total is ${formatNumber(roundToPrecision(totalBill, safeDecimals), safeDecimals)}.`
  };
}

export function calculateMarginMarkup(cost, revenue, decimals = 2) {
  const c = parseNumberInput(cost);
  const r = parseNumberInput(revenue);

  if (c === null || r === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(c) || isNaN(r)) return { isValid: false, isEmpty: false, error: 'Please enter valid numbers.' };

  if (r === 0 || c === 0) {
    return { isValid: false, isEmpty: false, error: 'Cost and Revenue must be greater than zero.' };
  }

  const profit = r - c;
  const marginPercent = (profit / r) * 100;
  const markupPercent = (profit / c) * 100;
  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));

  return {
    isValid: true,
    isEmpty: false,
    result: roundToPrecision(profit, safeDecimals),
    profit: roundToPrecision(profit, safeDecimals),
    formattedProfit: formatNumber(roundToPrecision(profit, safeDecimals), safeDecimals),
    marginPercent: roundToPrecision(marginPercent, safeDecimals),
    formattedMargin: formatPercent(roundToPrecision(marginPercent, safeDecimals), safeDecimals),
    markupPercent: roundToPrecision(markupPercent, safeDecimals),
    formattedMarkup: formatPercent(roundToPrecision(markupPercent, safeDecimals), safeDecimals),
    formula: 'Margin% = (Profit / Revenue) × 100 | Markup% = (Profit / Cost) × 100',
    steps: [
      `Step 1: Calculate gross profit: ${r} - ${c} = ${formatNumber(roundToPrecision(profit, safeDecimals), safeDecimals)}`,
      `Step 2: Profit Margin = (${profit} ÷ ${r}) × 100 = ${formatPercent(roundToPrecision(marginPercent, safeDecimals), safeDecimals)}`,
      `Step 3: Markup Percentage = (${profit} ÷ ${c}) × 100 = ${formatPercent(roundToPrecision(markupPercent, safeDecimals), safeDecimals)}`
    ],
    explanation: `Gross profit is ${formatNumber(roundToPrecision(profit, safeDecimals), safeDecimals)} with a ${formatPercent(roundToPrecision(marginPercent, safeDecimals), safeDecimals)} margin and ${formatPercent(roundToPrecision(markupPercent, safeDecimals), safeDecimals)} markup.`
  };
}

/**
 * Helper GCD for fraction simplification
 */
function gcd(a, b) {
  a = Math.abs(Math.round(a));
  b = Math.abs(Math.round(b));
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a || 1;
}

/**
 * Percentage Euro Calculator: "Calculate P% of a Euro amount"
 * Formula: Euro Value = (P / 100) * Euro Amount
 */
export function calculatePercentageEuro(percentage, euroAmount, decimals = 2) {
  const p = parseNumberInput(percentage);
  const eur = parseNumberInput(euroAmount);

  if (p === null || eur === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(p) || isNaN(eur)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const rawValue = (p / 100) * eur;
  if (isNaN(rawValue) || !isFinite(rawValue)) {
    return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
  }

  const roundedValue = roundToPrecision(rawValue, safeDecimals);
  const formattedVal = `${formatNumber(roundedValue, safeDecimals)} €`;
  const totalPlus = roundToPrecision(eur + roundedValue, safeDecimals);
  const totalMinus = roundToPrecision(eur - roundedValue, safeDecimals);
  const factor = roundToPrecision(p / 100, Math.max(4, safeDecimals + 2));

  return {
    isValid: true,
    isEmpty: false,
    result: roundedValue,
    formattedResult: formattedVal,
    totalPlus,
    totalMinus,
    formattedTotalPlus: `${formatNumber(totalPlus, safeDecimals)} €`,
    formattedTotalMinus: `${formatNumber(totalMinus, safeDecimals)} €`,
    formula: 'Euro-Wert = (Prozentsatz / 100) × Euro-Betrag',
    example: `${p}% von ${eur} € = ${formattedVal}`,
    stats: [
      { label: 'Betrag mit Aufschlag (+)', value: `${formatNumber(totalPlus, safeDecimals)} €` },
      { label: 'Betrag mit Rabatt (-)', value: `${formatNumber(totalMinus, safeDecimals)} €` }
    ],
    steps: [
      `Schritt 1 (Dezimalfaktor berechnen): ${p}% ÷ 100 = ${factor}`,
      `Schritt 2 (Euro-Anteil ermitteln): ${factor} × ${formatNumber(eur, safeDecimals)} € = ${formattedVal}`,
      `Schritt 3 (Gesamtbetrag bei Aufschlag): ${formatNumber(eur, safeDecimals)} € + ${formattedVal} = ${formatNumber(totalPlus, safeDecimals)} €`,
      `Schritt 4 (Restbetrag bei Abzug / Rabatt): ${formatNumber(eur, safeDecimals)} € - ${formattedVal} = ${formatNumber(totalMinus, safeDecimals)} €`
    ],
    explanation: `${p}% von ${formatNumber(eur, safeDecimals)} € ergeben ${formattedVal} (Gesamtwert: ${formatNumber(totalPlus, safeDecimals)} € / nach Abzug: ${formatNumber(totalMinus, safeDecimals)} €).`,
    error: null
  };
}

/**
 * Fraction to Percentage Calculator: "Convert Fraction (Numerator / Denominator) to %"
 * Formula: P% = (Numerator / Denominator) * 100
 */
export function calculateFractionToPercentage(numerator, denominator, decimals = 2) {
  const num = parseNumberInput(numerator);
  const den = parseNumberInput(denominator);

  if (num === null || den === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(num) || isNaN(den)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  if (den === 0) {
    return {
      isValid: false,
      isEmpty: false,
      error: 'The denominator cannot be zero because division by zero is undefined.'
    };
  }

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));
  const decimalVal = num / den;
  const rawPct = decimalVal * 100;
  if (isNaN(rawPct) || !isFinite(rawPct)) {
    return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
  }

  const roundedPct = roundToPrecision(rawPct, safeDecimals);
  const formattedPct = `${formatNumber(roundedPct, safeDecimals)}%`;
  const formattedDec = formatNumber(roundToPrecision(decimalVal, Math.max(4, safeDecimals + 2)), Math.max(4, safeDecimals + 2));

  let simplifiedFraction = `${num} / ${den}`;
  if (Number.isInteger(num) && Number.isInteger(den)) {
    const divisor = gcd(num, den);
    const sNum = num / divisor;
    const sDen = den / divisor;
    simplifiedFraction = `${sNum} / ${sDen}`;
  }

  return {
    isValid: true,
    isEmpty: false,
    result: roundedPct,
    formattedResult: formattedPct,
    decimalValue: decimalVal,
    formattedDecimal: formattedDec,
    simplifiedFraction,
    formula: 'Prozentsatz (%) = (Zähler / Nenner) × 100%',
    example: `${num} / ${den} = ${formattedPct} (Dezimal: ${formattedDec})`,
    stats: [
      { label: 'Dezimalwert', value: formattedDec },
      { label: 'Gekürzter Bruch', value: simplifiedFraction }
    ],
    steps: [
      `Schritt 1 (Bruch in Dezimalzahl umrechnen): ${num} ÷ ${den} = ${formattedDec}`,
      `Schritt 2 (Mit 100 multiplizieren): ${formattedDec} × 100 = ${formattedPct}`
    ],
    explanation: `Der Bruch ${num}/${den} entspricht genau ${formattedPct} bzw. dem Dezimalwert ${formattedDec}.`,
    error: null
  };
}

/**
 * Percentage to Decimal Calculator: "Convert Percentage (P%) to Decimal Number"
 * Formula: Decimal = Percentage / 100
 */
export function calculatePercentageToDecimal(percentage, decimals = 4) {
  const p = parseNumberInput(percentage);

  if (p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter a valid finite number.' };

  const rawDecimal = p / 100;
  if (isNaN(rawDecimal) || !isFinite(rawDecimal)) {
    return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
  }

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 4));
  const roundedDecimal = roundToPrecision(rawDecimal, Math.max(safeDecimals, 4));
  const formattedDecimal = formatNumber(roundedDecimal, Math.max(safeDecimals, 4));

  // Determine simplified fraction equivalent
  let fractionString = null;
  const numPart = Math.round(p * 1000);
  const denPart = 100000;
  const divisor = gcd(numPart, denPart);
  fractionString = `${numPart / divisor} / ${denPart / divisor}`;

  return {
    isValid: true,
    isEmpty: false,
    result: roundedDecimal,
    formattedResult: formattedDecimal,
    fractionEquivalent: fractionString,
    formula: 'Dezimalwert = Prozentsatz ÷ 100',
    example: `${p}% = ${p} ÷ 100 = ${formattedDecimal}`,
    stats: [
      { label: 'Eingegebener Prozentsatz', value: `${formatNumber(p, 2)}%` },
      { label: 'Als Bruch (gekürzt)', value: fractionString }
    ],
    steps: [
      `Schritt 1: Das Prozentzeichen (%) entfernen: ${p}`,
      `Schritt 2: Durch 100 teilen (Komma um 2 Stellen nach links verschieben): ${p} ÷ 100 = ${formattedDecimal}`
    ],
    explanation: `${p}% entspricht als Dezimalzahl genau ${formattedDecimal} (bzw. als Bruch ${fractionString}).`,
    error: null
  };
}

/**
 * Rule of Three Percentage Calculator (Dreisatz Prozentrechnung)
 * Calculates proportional percentage relationships using the classic 3-step method.
 */
export function calculateRuleOfThreePercentage(valA, pctB, targetC, mode = 'find-percentage', decimals = 2) {
  const a = parseNumberInput(valA);
  const b = parseNumberInput(pctB);
  const c = parseNumberInput(targetC);

  if (a === null || b === null || c === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(a) || isNaN(b) || isNaN(c)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 2));

  if (mode === 'find-percentage') {
    // Given: A corresponds to B%. Find: C corresponds to X%
    if (a === 0) {
      return {
        isValid: false,
        isEmpty: false,
        error: 'Starting value (A) cannot be zero because division by zero is undefined.'
      };
    }
    const unitPercent = b / a;
    const rawResult = unitPercent * c;
    if (isNaN(rawResult) || !isFinite(rawResult)) {
      return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
    }
    const roundedResult = roundToPrecision(rawResult, safeDecimals);
    const formattedResult = `${formatNumber(roundedResult, safeDecimals)}%`;
    const formattedUnit = `${formatNumber(roundToPrecision(unitPercent, Math.max(4, safeDecimals + 2)), Math.max(4, safeDecimals + 2))}%`;

    return {
      isValid: true,
      isEmpty: false,
      result: roundedResult,
      formattedResult,
      mode,
      unitValue: unitPercent,
      formula: 'Target % = (Starting % ÷ Starting Value) × Target Value',
      stats: [
        { label: 'Starting Proportion', value: `${formatNumber(a, safeDecimals)} = ${formatNumber(b, safeDecimals)}%` },
        { label: 'Value of 1 Unit', value: formattedUnit },
        { label: 'Target Value', value: `${formatNumber(c, safeDecimals)}` }
      ],
      steps: [
        `Step 1 (Starting proposition): ${formatNumber(a, safeDecimals)} corresponds to ${formatNumber(b, safeDecimals)}%`,
        `Step 2 (Unit step / 1 unit): 1 unit = ${formatNumber(b, safeDecimals)}% ÷ ${formatNumber(a, safeDecimals)} = ${formattedUnit}`,
        `Step 3 (Target result): ${formatNumber(c, safeDecimals)} units = ${formattedUnit} × ${formatNumber(c, safeDecimals)} = ${formattedResult}`
      ],
      explanation: `If ${formatNumber(a, safeDecimals)} corresponds to ${formatNumber(b, safeDecimals)}%, then ${formatNumber(c, safeDecimals)} corresponds to ${formattedResult}.`,
      error: null
    };
  } else {
    // Mode 'find-value': Given B% corresponds to A. Find what value corresponds to C%
    if (b === 0) {
      return {
        isValid: false,
        isEmpty: false,
        error: 'Starting percentage (B) cannot be zero because division by zero is undefined.'
      };
    }
    const unitValue = a / b;
    const rawResult = unitValue * c;
    if (isNaN(rawResult) || !isFinite(rawResult)) {
      return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
    }
    const roundedResult = roundToPrecision(rawResult, safeDecimals);
    const formattedResult = formatNumber(roundedResult, safeDecimals);
    const formattedUnit = formatNumber(roundToPrecision(unitValue, Math.max(4, safeDecimals + 2)), Math.max(4, safeDecimals + 2));

    return {
      isValid: true,
      isEmpty: false,
      result: roundedResult,
      formattedResult,
      mode,
      unitValue,
      formula: 'Target Value = (Starting Value ÷ Starting %) × Target %',
      stats: [
        { label: 'Starting Proportion', value: `${formatNumber(b, safeDecimals)}% = ${formatNumber(a, safeDecimals)}` },
        { label: 'Value of 1%', value: formattedUnit },
        { label: 'Target Percentage', value: `${formatNumber(c, safeDecimals)}%` }
      ],
      steps: [
        `Step 1 (Starting proposition): ${formatNumber(b, safeDecimals)}% corresponds to ${formatNumber(a, safeDecimals)}`,
        `Step 2 (Unit step / 1%): 1% = ${formatNumber(a, safeDecimals)} ÷ ${formatNumber(b, safeDecimals)} = ${formattedUnit}`,
        `Step 3 (Target result): ${formatNumber(c, safeDecimals)}% = ${formattedUnit} × ${formatNumber(c, safeDecimals)} = ${formattedResult}`
      ],
      explanation: `If ${formatNumber(b, safeDecimals)}% corresponds to ${formatNumber(a, safeDecimals)}, then ${formatNumber(c, safeDecimals)}% corresponds to ${formattedResult}.`,
      error: null
    };
  }
}

/**
 * Price Percentage Calculator (Preis-Prozentrechner)
 * Handles price discounts, price increases/surcharges, and price comparisons.
 */
export function calculatePricePercentage(priceA, valueB, mode = 'discount', decimals = 2) {
  const pA = parseNumberInput(priceA);
  const vB = parseNumberInput(valueB);

  if (pA === null || vB === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(pA) || isNaN(vB)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 2));

  if (mode === 'discount') {
    if (pA < 0 || vB < 0) {
      return { isValid: false, isEmpty: false, error: 'Price and discount percentage cannot be negative.' };
    }
    const discountAmount = (vB / 100) * pA;
    const finalPrice = Math.max(0, pA - discountAmount);
    const factor = Math.max(0, 1 - (vB / 100));

    const roundedFinal = roundToPrecision(finalPrice, safeDecimals);
    const roundedSaved = roundToPrecision(discountAmount, safeDecimals);

    return {
      isValid: true,
      isEmpty: false,
      result: roundedFinal,
      formattedResult: formatNumber(roundedFinal, safeDecimals),
      savings: roundedSaved,
      formattedSavings: formatNumber(roundedSaved, safeDecimals),
      factor: roundToPrecision(factor, 4),
      mode,
      formula: 'Final Price = Original Price − (Original Price × Discount% ÷ 100)',
      stats: [
        { label: 'Original Price', value: formatNumber(pA, safeDecimals) },
        { label: `Discount (${formatNumber(vB, 2)}%)`, value: `-${formatNumber(roundedSaved, safeDecimals)}` },
        { label: 'Final Price', value: formatNumber(roundedFinal, safeDecimals) }
      ],
      steps: [
        `Step 1 (Calculate discount): ${formatNumber(pA, safeDecimals)} × (${formatNumber(vB, 2)}% ÷ 100) = ${formatNumber(roundedSaved, safeDecimals)}`,
        `Step 2 (Deduct from original price): ${formatNumber(pA, safeDecimals)} - ${formatNumber(roundedSaved, safeDecimals)} = ${formatNumber(roundedFinal, safeDecimals)}`
      ],
      explanation: `A ${formatNumber(vB, 2)}% discount on ${formatNumber(pA, safeDecimals)} saves ${formatNumber(roundedSaved, safeDecimals)}, giving a final price of ${formatNumber(roundedFinal, safeDecimals)}.`,
      error: null
    };
  } else if (mode === 'increase') {
    if (pA < 0 || vB < 0) {
      return { isValid: false, isEmpty: false, error: 'Price and increase percentage cannot be negative.' };
    }
    const increaseAmount = (vB / 100) * pA;
    const finalPrice = pA + increaseAmount;
    const factor = 1 + (vB / 100);

    const roundedFinal = roundToPrecision(finalPrice, safeDecimals);
    const roundedAdded = roundToPrecision(increaseAmount, safeDecimals);

    return {
      isValid: true,
      isEmpty: false,
      result: roundedFinal,
      formattedResult: formatNumber(roundedFinal, safeDecimals),
      addedAmount: roundedAdded,
      formattedAdded: formatNumber(roundedAdded, safeDecimals),
      factor: roundToPrecision(factor, 4),
      mode,
      formula: 'Final Price = Original Price × (1 + Increase% ÷ 100)',
      stats: [
        { label: 'Original Price', value: formatNumber(pA, safeDecimals) },
        { label: `Increase (+${formatNumber(vB, 2)}%)`, value: `+${formatNumber(roundedAdded, safeDecimals)}` },
        { label: 'Final Price', value: formatNumber(roundedFinal, safeDecimals) }
      ],
      steps: [
        `Step 1 (Calculate surcharge): ${formatNumber(pA, safeDecimals)} × (${formatNumber(vB, 2)}% ÷ 100) = ${formatNumber(roundedAdded, safeDecimals)}`,
        `Step 2 (Add to original price): ${formatNumber(pA, safeDecimals)} + ${formatNumber(roundedAdded, safeDecimals)} = ${formatNumber(roundedFinal, safeDecimals)}`
      ],
      explanation: `A ${formatNumber(vB, 2)}% increase on ${formatNumber(pA, safeDecimals)} adds ${formatNumber(roundedAdded, safeDecimals)}, giving a final price of ${formatNumber(roundedFinal, safeDecimals)}.`,
      error: null
    };
  } else {
    // Mode 'compare' (Old Price vs New Price)
    if (pA <= 0) {
      return { isValid: false, isEmpty: false, error: 'Original starting price must be greater than zero.' };
    }
    const diff = vB - pA;
    const pctChange = (diff / pA) * 100;

    const roundedPct = roundToPrecision(pctChange, safeDecimals);
    const roundedDiff = roundToPrecision(diff, safeDecimals);
    const isGain = diff >= 0;

    return {
      isValid: true,
      isEmpty: false,
      result: roundedPct,
      formattedResult: `${isGain ? '+' : ''}${formatNumber(roundedPct, safeDecimals)}%`,
      priceDifference: roundedDiff,
      formattedDifference: `${isGain ? '+' : ''}${formatNumber(roundedDiff, safeDecimals)}`,
      mode,
      formula: 'Percentage Change = ((New Price - Old Price) ÷ Old Price) × 100%',
      stats: [
        { label: 'Old Price', value: formatNumber(pA, safeDecimals) },
        { label: 'New Price', value: formatNumber(vB, safeDecimals) },
        { label: 'Price Difference', value: `${isGain ? '+' : ''}${formatNumber(roundedDiff, safeDecimals)}` },
        { label: 'Percentage Change', value: `${isGain ? '+' : ''}${formatNumber(roundedPct, safeDecimals)}%` }
      ],
      steps: [
        `Step 1 (Calculate price difference): ${formatNumber(vB, safeDecimals)} - ${formatNumber(pA, safeDecimals)} = ${formatNumber(roundedDiff, safeDecimals)}`,
        `Step 2 (Divide by old price): ${formatNumber(roundedDiff, safeDecimals)} ÷ ${formatNumber(pA, safeDecimals)} = ${formatNumber(diff / pA, 4)}`,
        `Step 3 (Multiply by 100): ${formatNumber(diff / pA, 4)} × 100 = ${isGain ? '+' : ''}${formatNumber(roundedPct, safeDecimals)}%`
      ],
      explanation: `Changing price from ${formatNumber(pA, safeDecimals)} to ${formatNumber(vB, safeDecimals)} represents a ${isGain ? 'price increase' : 'price reduction'} of ${isGain ? '+' : ''}${formatNumber(roundedPct, safeDecimals)}% (${isGain ? '+' : ''}${formatNumber(roundedDiff, safeDecimals)}).`,
      error: null
    };
  }
}

/**
 * 16. Calculate Percentage Backwards (Prozent rückwärts rechnen)
 * Supports 3 common reverse percentage calculation modes:
 * 1. 'discount' (Original value before a percentage discount/reduction):
 *    Original = Final / (1 - Percentage / 100)
 * 2. 'increase' (Original value before a percentage markup/tax/increase):
 *    Original = Final / (1 + Percentage / 100)
 * 3. 'share' (Original base total when a value is P% of the base):
 *    Base = Value / (Percentage / 100)
 *
 * @param {number|string} value - The known final value or part value
 * @param {number|string} percentage - The percentage rate
 * @param {'discount'|'increase'|'share'} mode - Calculation mode
 * @param {number} decimals - Precision decimal places
 */
export function calculatePercentageBackwards(value, percentage, mode = 'discount', decimals = 2) {
  const v = parseNumberInput(value);
  const p = parseNumberInput(percentage);

  if (v === null || p === null) return { isValid: false, isEmpty: true, error: null };
  if (isNaN(v) || isNaN(p)) return { isValid: false, isEmpty: false, error: 'Please enter valid finite numbers.' };

  const safeDecimals = Math.max(0, Math.min(10, parseInt(decimals, 10) || 0));

  if (mode === 'discount') {
    if (p >= 100) {
      return {
        isValid: false,
        isEmpty: false,
        error: 'Discount percentage cannot be 100% or greater when calculating original price backwards.'
      };
    }
    const divisor = 1 - (p / 100);
    const rawOriginal = v / divisor;
    if (isNaN(rawOriginal) || !isFinite(rawOriginal)) {
      return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
    }
    const roundedOriginal = roundToPrecision(rawOriginal, safeDecimals);
    const formattedOriginal = formatNumber(roundedOriginal, safeDecimals);
    const discountAmount = roundToPrecision(rawOriginal - v, safeDecimals);
    const formattedDiscount = formatNumber(discountAmount, safeDecimals);

    return {
      isValid: true,
      isEmpty: false,
      result: roundedOriginal,
      formattedResult: formattedOriginal,
      adjustmentAmount: discountAmount,
      formattedAdjustment: formattedDiscount,
      factor: roundToPrecision(divisor, 4),
      mode,
      formula: 'Original Value = Final Value ÷ (1 − Discount% ÷ 100)',
      stats: [
        { label: 'Final Value (after discount)', value: formatNumber(v, safeDecimals) },
        { label: `Discount Applied (-${formatNumber(p, 2)}%)`, value: `-${formattedDiscount}` },
        { label: 'Original Value (before discount)', value: formattedOriginal }
      ],
      steps: [
        `Step 1: Calculate deduction factor: 1 - (${formatNumber(p, 2)}% ÷ 100) = ${roundToPrecision(divisor, 4)}`,
        `Step 2: Divide final value by deduction factor: ${formatNumber(v, safeDecimals)} ÷ ${roundToPrecision(divisor, 4)} = ${formattedOriginal}`,
        `Step 3: Difference (discount saved): ${formattedOriginal} - ${formatNumber(v, safeDecimals)} = ${formattedDiscount}`
      ],
      explanation: `If ${formatNumber(v, safeDecimals)} is the price after a ${formatNumber(p, 2)}% discount, the original starting price was ${formattedOriginal} (saving ${formattedDiscount}).`,
      error: null
    };
  } else if (mode === 'increase') {
    if (p <= -100) {
      return {
        isValid: false,
        isEmpty: false,
        error: 'Percentage increase cannot be -100% or lower.'
      };
    }
    const divisor = 1 + (p / 100);
    if (divisor === 0) {
      return { isValid: false, isEmpty: false, error: 'Divisor cannot be zero.' };
    }
    const rawOriginal = v / divisor;
    if (isNaN(rawOriginal) || !isFinite(rawOriginal)) {
      return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
    }
    const roundedOriginal = roundToPrecision(rawOriginal, safeDecimals);
    const formattedOriginal = formatNumber(roundedOriginal, safeDecimals);
    const markupAmount = roundToPrecision(v - rawOriginal, safeDecimals);
    const formattedMarkup = formatNumber(markupAmount, safeDecimals);

    return {
      isValid: true,
      isEmpty: false,
      result: roundedOriginal,
      formattedResult: formattedOriginal,
      adjustmentAmount: markupAmount,
      formattedAdjustment: formattedMarkup,
      factor: roundToPrecision(divisor, 4),
      mode,
      formula: 'Original Value = Final Value ÷ (1 + Increase% ÷ 100)',
      stats: [
        { label: 'Final Value (after increase)', value: formatNumber(v, safeDecimals) },
        { label: `Increase Applied (+${formatNumber(p, 2)}%)`, value: `+${formattedMarkup}` },
        { label: 'Original Value (before increase)', value: formattedOriginal }
      ],
      steps: [
        `Step 1: Calculate increase factor: 1 + (${formatNumber(p, 2)}% ÷ 100) = ${roundToPrecision(divisor, 4)}`,
        `Step 2: Divide final value by increase factor: ${formatNumber(v, safeDecimals)} ÷ ${roundToPrecision(divisor, 4)} = ${formattedOriginal}`,
        `Step 3: Difference (surcharge added): ${formatNumber(v, safeDecimals)} - ${formattedOriginal} = ${formattedMarkup}`
      ],
      explanation: `If ${formatNumber(v, safeDecimals)} is the total after a ${formatNumber(p, 2)}% increase/markup, the original starting value was ${formattedOriginal} (surcharge of ${formattedMarkup}).`,
      error: null
    };
  } else {
    // Mode 'share' (Base value from percentage share: V is P%, what is 100%?)
    if (p === 0) {
      return {
        isValid: false,
        isEmpty: false,
        error: 'Percentage rate cannot be 0% when finding the original base value.'
      };
    }
    const rawBase = (v * 100) / p;
    if (isNaN(rawBase) || !isFinite(rawBase)) {
      return { isValid: false, isEmpty: false, error: 'Calculation resulted in an invalid number.' };
    }
    const roundedBase = roundToPrecision(rawBase, safeDecimals);
    const formattedBase = formatNumber(roundedBase, safeDecimals);
    const decimalFactor = roundToPrecision(p / 100, Math.max(4, safeDecimals + 2));

    return {
      isValid: true,
      isEmpty: false,
      result: roundedBase,
      formattedResult: formattedBase,
      mode,
      formula: 'Base Value (100%) = (Value × 100) ÷ Percentage',
      stats: [
        { label: 'Given Value', value: formatNumber(v, safeDecimals) },
        { label: 'Percentage Share', value: `${formatNumber(p, 2)}%` },
        { label: 'Total Base Value (100%)', value: formattedBase }
      ],
      steps: [
        `Step 1: Convert percentage to decimal: ${formatNumber(p, 2)}% ÷ 100 = ${decimalFactor}`,
        `Step 2: Divide given value by decimal factor: ${formatNumber(v, safeDecimals)} ÷ ${decimalFactor} = ${formattedBase}`
      ],
      explanation: `If ${formatNumber(v, safeDecimals)} corresponds to ${formatNumber(p, 2)}%, then the complete 100% base value is ${formattedBase}.`,
      error: null
    };
  }
}



