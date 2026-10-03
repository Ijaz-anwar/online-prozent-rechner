import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { 
  calculatePercentageValue,
  calculatePercentageRate,
  calculateBaseValue,
  calculatePercentageIncrease,
  calculatePercentageDecrease,
  calculateAddPercentage,
  calculateSubtractPercentage,
  calculateReversePercentageIncrease,
  calculateReversePercentageDecrease,
  calculatePercentageDifference,
  calculatePercentageEuro,
  calculateFractionToPercentage,
  calculatePercentageToDecimal,
  calculateRuleOfThreePercentage,
  calculatePricePercentage,
  calculatePercentageBackwards
} from './percentageCalculations.js';

describe('Calculator 1: Percentage Value ("What is P% of Base?")', () => {
  it('calculates standard percentage value (25% of 200 = 50)', () => {
    const res = calculatePercentageValue(25, 200, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 50);
    assert.equal(res.formattedResult, '50');
  });

  it('handles zero base and zero percentage', () => {
    assert.equal(calculatePercentageValue(0, 200).result, 0);
    assert.equal(calculatePercentageValue(25, 0).result, 0);
    assert.equal(calculatePercentageValue(0, 0).result, 0);
  });

  it('handles negative inputs safely', () => {
    assert.equal(calculatePercentageValue(-25, 200).result, -50);
    assert.equal(calculatePercentageValue(25, -200).result, -50);
    assert.equal(calculatePercentageValue(-25, -200).result, 50);
  });

  it('handles decimals correctly (12.5% of 80.4 = 10.05)', () => {
    assert.equal(calculatePercentageValue(12.5, 80.4, 2).result, 10.05);
  });

  it('handles empty & invalid inputs gracefully', () => {
    assert.equal(calculatePercentageValue('', 100).isValid, false);
    assert.equal(calculatePercentageValue('abc', 100).isValid, false);
  });
});

describe('Calculator 2: Percentage Rate ("What % is Value of Base?")', () => {
  it('calculates standard percentage rate (30 of 120 = 25%)', () => {
    const res = calculatePercentageRate(30, 120, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 25);
    assert.equal(res.formattedResult, '25%');
  });

  it('safely handles division by zero (Base = 0)', () => {
    const res = calculatePercentageRate(50, 0);
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });

  it('handles zero value (0 of 500 = 0%)', () => {
    const res = calculatePercentageRate(0, 500);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0);
    assert.equal(res.formattedResult, '0%');
  });

  it('handles rate over 100% (150 of 100 = 150%)', () => {
    assert.equal(calculatePercentageRate(150, 100).result, 150);
  });

  it('handles decimals in rate (2.5 of 10 = 25%)', () => {
    assert.equal(calculatePercentageRate(2.5, 10).result, 25);
  });
});

describe('Calculator 3: Base Value ("Value is P%, find Base 100%")', () => {
  it('calculates standard base value (45 is 30%, base = 150)', () => {
    const res = calculateBaseValue(45, 30, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 150);
    assert.equal(res.formattedResult, '150');
  });

  it('safely handles zero percentage (P = 0%)', () => {
    const res = calculateBaseValue(50, 0);
    assert.equal(res.isValid, false);
    assert.match(res.error, /0%/i);
  });

  it('handles decimals (10.5 is 25%, base = 42)', () => {
    assert.equal(calculateBaseValue(10.5, 25).result, 42);
  });
});

describe('Calculator 4: Percentage Increase ("From V1 to V2")', () => {
  it('calculates standard increase (50 to 75 = +50%)', () => {
    const res = calculatePercentageIncrease(50, 75, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 50);
    assert.equal(res.formattedResult, '+50%');
  });

  it('safely handles zero starting value (Initial = 0)', () => {
    const res = calculatePercentageIncrease(0, 100);
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });

  it('handles negative starting numbers safely (-100 to -50 = +50%)', () => {
    const res = calculatePercentageIncrease(-100, -50);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 50);
  });
});

describe('Calculator 5: Percentage Decrease ("From V1 down to V2")', () => {
  it('calculates standard decrease (100 down to 75 = -25%)', () => {
    const res = calculatePercentageDecrease(100, 75, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 25);
    assert.equal(res.formattedResult, '-25%');
  });

  it('safely handles zero initial value', () => {
    assert.equal(calculatePercentageDecrease(0, 50).isValid, false);
  });
});

describe('Calculator 6: Add Percentage ("Base + P%")', () => {
  it('calculates adding percentage (100 + 20% = 120)', () => {
    const res = calculateAddPercentage(100, 20, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 120);
    assert.equal(res.formattedResult, '120');
    assert.equal(res.addedAmount, 20);
  });

  it('handles adding 0% (100 + 0% = 100)', () => {
    const res = calculateAddPercentage(100, 0);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 100);
  });

  it('handles decimal base and percentages (80.50 + 7.5% = 86.54)', () => {
    const res = calculateAddPercentage(80.5, 7.5, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 86.54);
  });
});

describe('Calculator 7: Subtract Percentage ("Base - P%")', () => {
  it('calculates subtracting percentage (100 - 20% = 80)', () => {
    const res = calculateSubtractPercentage(100, 20, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 80);
    assert.equal(res.formattedResult, '80');
    assert.equal(res.subtractedAmount, 20);
  });

  it('handles 100% discount (500 - 100% = 0)', () => {
    const res = calculateSubtractPercentage(500, 100);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0);
  });
});

describe('Calculator 8: Reverse Percentage Increase ("Final after +P%")', () => {
  it('calculates original base before increase (120 after +20% -> 100)', () => {
    const res = calculateReversePercentageIncrease(120, 20, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 100);
    assert.equal(res.formattedResult, '100');
  });

  it('safely handles -100% rate (division by zero guard)', () => {
    const res = calculateReversePercentageIncrease(100, -100);
    assert.equal(res.isValid, false);
    assert.match(res.error, /division by zero/i);
  });
});

describe('Calculator 9: Reverse Percentage Decrease ("Final after -P%")', () => {
  it('calculates original base before discount (80 after -20% -> 100)', () => {
    const res = calculateReversePercentageDecrease(80, 20, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 100);
    assert.equal(res.formattedResult, '100');
  });

  it('safely handles 100% loss guard', () => {
    const res = calculateReversePercentageDecrease(0, 100);
    assert.equal(res.isValid, false);
    assert.match(res.error, /100%/i);
  });
});

describe('Calculator 10: Percentage Difference ("Between A and B")', () => {
  it('calculates percentage difference (between 80 and 100 = 22.22%)', () => {
    const res = calculatePercentageDifference(80, 100, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 22.22);
    assert.equal(res.formattedResult, '22.22%');
    assert.equal(res.average, 90);
  });

  it('is order independent (between 100 and 80 = 22.22%)', () => {
    const res1 = calculatePercentageDifference(80, 100);
    const res2 = calculatePercentageDifference(100, 80);
    assert.equal(res1.result, res2.result);
  });

  it('safely handles both values being zero (average = 0)', () => {
    const res = calculatePercentageDifference(0, 0);
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });
});

describe('Calculator 11: Percentage Euro Calculator', () => {
  it('calculates 19% of 100 € correctly (19,00 €)', () => {
    const res = calculatePercentageEuro(19, 100, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 19);
    assert.equal(res.formattedResult, '19 €');
    assert.equal(res.totalPlus, 119);
    assert.equal(res.totalMinus, 81);
  });

  it('handles decimal percentage and decimal euro amount (12.5% of 80.50 €)', () => {
    const res = calculatePercentageEuro(12.5, 80.5, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 10.06);
    assert.equal(res.totalPlus, 90.56);
  });

  it('handles zero percentage and zero euro safely', () => {
    const res = calculatePercentageEuro(0, 250);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculatePercentageEuro('', 100);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});

describe('Calculator 12: Fraction to Percentage Calculator', () => {
  it('converts standard fractions (3/4 = 75%)', () => {
    const res = calculateFractionToPercentage(3, 4, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 75);
    assert.equal(res.formattedResult, '75%');
    assert.equal(res.simplifiedFraction, '3 / 4');
  });

  it('simplifies fractions (6/8 -> 3/4 = 75%)', () => {
    const res = calculateFractionToPercentage(6, 8, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 75);
    assert.equal(res.simplifiedFraction, '3 / 4');
  });

  it('handles repeating fractions with decimals (1/3 = 33.33%)', () => {
    const res = calculateFractionToPercentage(1, 3, 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 33.33);
    assert.equal(res.formattedResult, '33.33%');
  });

  it('safely handles zero denominator (division by zero)', () => {
    const res = calculateFractionToPercentage(5, 0);
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });

  it('handles empty inputs without throwing errors', () => {
    const res = calculateFractionToPercentage('', 4);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});

describe('Calculator 13: Percentage to Decimal Calculator', () => {
  it('converts standard percentage to decimal (25% = 0.25)', () => {
    const res = calculatePercentageToDecimal(25, 4);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0.25);
    assert.equal(res.formattedResult, '0.25');
    assert.equal(res.fractionEquivalent, '1 / 4');
  });

  it('converts decimal percentage (7.5% = 0.075)', () => {
    const res = calculatePercentageToDecimal(7.5, 4);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0.075);
    assert.equal(res.formattedResult, '0.075');
  });

  it('converts percentage over 100% (150% = 1.5)', () => {
    const res = calculatePercentageToDecimal(150, 4);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 1.5);
  });

  it('handles zero percentage (0% = 0)', () => {
    const res = calculatePercentageToDecimal(0, 4);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 0);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculatePercentageToDecimal('');
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});

describe('Calculator 14: Rule of Three Percentage Calculator', () => {
  it('calculates target percentage in find-percentage mode (200 = 100%, 50 = 25%)', () => {
    const res = calculateRuleOfThreePercentage(200, 100, 50, 'find-percentage', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 25);
    assert.equal(res.formattedResult, '25%');
    assert.equal(res.unitValue, 0.5);
  });

  it('calculates target value in find-value mode (100% = 200, 25% = 50)', () => {
    const res = calculateRuleOfThreePercentage(200, 100, 25, 'find-value', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 50);
    assert.equal(res.formattedResult, '50');
    assert.equal(res.unitValue, 2);
  });

  it('safely handles zero starting value in find-percentage mode (division by zero guard)', () => {
    const res = calculateRuleOfThreePercentage(0, 100, 50, 'find-percentage');
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });

  it('safely handles zero starting percentage in find-value mode', () => {
    const res = calculateRuleOfThreePercentage(200, 0, 25, 'find-value');
    assert.equal(res.isValid, false);
    assert.match(res.error, /zero/i);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculateRuleOfThreePercentage('', 100, 50);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});

describe('Calculator 15: Price Percentage Calculator', () => {
  it('calculates discount price correctly (100 with 20% discount = 80, saved 20)', () => {
    const res = calculatePricePercentage(100, 20, 'discount', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 80);
    assert.equal(res.formattedResult, '80');
    assert.equal(res.savings, 20);
    assert.equal(res.factor, 0.8);
  });

  it('calculates price increase / markup correctly (100 with 20% increase = 120, added 20)', () => {
    const res = calculatePricePercentage(100, 20, 'increase', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 120);
    assert.equal(res.formattedResult, '120');
    assert.equal(res.addedAmount, 20);
    assert.equal(res.factor, 1.2);
  });

  it('compares two prices correctly (Old 80, New 100 = +25% change, +20 diff)', () => {
    const res = calculatePricePercentage(80, 100, 'compare', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 25);
    assert.equal(res.formattedResult, '+25%');
    assert.equal(res.priceDifference, 20);
  });

  it('rejects negative prices and negative percentages safely', () => {
    const res = calculatePricePercentage(-100, 20, 'discount');
    assert.equal(res.isValid, false);
    assert.match(res.error, /negative/i);
  });

  it('safely handles zero old price in compare mode', () => {
    const res = calculatePricePercentage(0, 100, 'compare');
    assert.equal(res.isValid, false);
    assert.match(res.error, /greater than zero/i);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculatePricePercentage('', 20);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});

describe('Calculator 16: Calculate Percentage Backwards ("Prozent rückwärts rechnen")', () => {
  it('calculates original price after discount (75 after -25% -> 100, saved 25)', () => {
    const res = calculatePercentageBackwards(75, 25, 'discount', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 100);
    assert.equal(res.formattedResult, '100');
    assert.equal(res.adjustmentAmount, 25);
  });

  it('calculates original price after increase (240 after +20% -> 200, added 40)', () => {
    const res = calculatePercentageBackwards(240, 20, 'increase', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 200);
    assert.equal(res.formattedResult, '200');
    assert.equal(res.adjustmentAmount, 40);
  });

  it('calculates base value from percentage share (40 is 20% -> 200)', () => {
    const res = calculatePercentageBackwards(40, 20, 'share', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.result, 200);
    assert.equal(res.formattedResult, '200');
  });

  it('safely guards against 100% or greater discount in backwards calculation', () => {
    const res = calculatePercentageBackwards(50, 100, 'discount');
    assert.equal(res.isValid, false);
    assert.match(res.error, /100% or greater/i);
  });

  it('safely guards against 0% share in share mode', () => {
    const res = calculatePercentageBackwards(50, 0, 'share');
    assert.equal(res.isValid, false);
    assert.match(res.error, /0%/i);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculatePercentageBackwards('', 20, 'discount');
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });
});



