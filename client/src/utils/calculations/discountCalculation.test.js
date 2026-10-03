import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateDiscountPrice, formatCurrencyAmount } from './discountCalculation.js';

describe('Discount Calculator: calculateDiscountPrice', () => {
  it('calculates standard discount in EUR (€100 with 20% discount = €80, savings €20)', () => {
    const res = calculateDiscountPrice(100, 20, 'EUR', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.finalPrice, 80);
    assert.equal(res.savings, 20);
    assert.equal(res.formattedFinal, '€80');
    assert.equal(res.formattedSavings, '€20');
    assert.equal(res.symbol, '€');
  });

  it('handles USD currency selector ($250 with 15% discount)', () => {
    const res = calculateDiscountPrice(250, 15, 'USD', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.finalPrice, 212.5);
    assert.equal(res.savings, 37.5);
    assert.equal(res.formattedFinal, '$212.5');
    assert.equal(res.formattedSavings, '$37.5');
    assert.equal(res.symbol, '$');
  });

  it('handles GBP currency selector (£89.99 with 30% discount)', () => {
    const res = calculateDiscountPrice(89.99, 30, 'GBP', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.savings, 27);
    assert.equal(res.finalPrice, 62.99);
    assert.equal(res.symbol, '£');
  });

  it('handles zero discount (0% off €150 = €150 final, €0 savings)', () => {
    const res = calculateDiscountPrice(150, 0, 'EUR');
    assert.equal(res.isValid, true);
    assert.equal(res.finalPrice, 150);
    assert.equal(res.savings, 0);
  });

  it('handles zero price (€0 with 25% discount = €0)', () => {
    const res = calculateDiscountPrice(0, 25, 'EUR');
    assert.equal(res.isValid, true);
    assert.equal(res.finalPrice, 0);
    assert.equal(res.savings, 0);
  });

  it('handles 100% discount (100% off €500 = €0 final price)', () => {
    const res = calculateDiscountPrice(500, 100, 'EUR');
    assert.equal(res.isValid, true);
    assert.equal(res.finalPrice, 0);
    assert.equal(res.savings, 500);
  });

  it('handles decimal price and percentage values accurately (€79.95 with 12.5% discount)', () => {
    const res = calculateDiscountPrice(79.95, 12.5, 'EUR', 2);
    assert.equal(res.isValid, true);
    assert.equal(res.savings, 9.99);
    assert.equal(res.finalPrice, 69.96);
  });

  it('handles empty inputs gracefully', () => {
    const res = calculateDiscountPrice('', 20);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, true);
  });

  it('rejects negative prices and negative discounts safely', () => {
    const resNegPrice = calculateDiscountPrice(-100, 20);
    assert.equal(resNegPrice.isValid, false);
    assert.match(resNegPrice.error, /negative/i);

    const resNegDisc = calculateDiscountPrice(100, -20);
    assert.equal(resNegDisc.isValid, false);
    assert.match(resNegDisc.error, /negative/i);
  });

  it('prevents NaN and invalid string inputs', () => {
    const res = calculateDiscountPrice('invalid', 20);
    assert.equal(res.isValid, false);
    assert.equal(res.isEmpty, false);
  });

  it('generates step-by-step arithmetic steps', () => {
    const res = calculateDiscountPrice(100, 20, 'EUR');
    assert.equal(res.isValid, true);
    assert.equal(res.steps.length, 2);
  });
});
