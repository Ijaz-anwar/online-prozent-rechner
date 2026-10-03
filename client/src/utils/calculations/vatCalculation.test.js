import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { calculateVatValues } from './vatCalculation.js';

describe('VAT Calculator: calculateVatValues', () => {
  describe('Mode 1: Net to Gross (Add VAT)', () => {
    it('calculates standard 19% German VAT (€100 Net -> €119 Gross, €19 VAT)', () => {
      const res = calculateVatValues(100, 19, 'net-to-gross', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.netAmount, 100);
      assert.equal(res.grossAmount, 119);
      assert.equal(res.vatAmount, 19);
      assert.equal(res.formattedGross, '119 €');
      assert.equal(res.formattedVat, '19 €');
    });

    it('calculates reduced 7% German VAT (€100 Net -> €107 Gross, €7 VAT)', () => {
      const res = calculateVatValues(100, 7, 'net-to-gross', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.grossAmount, 107);
      assert.equal(res.vatAmount, 7);
    });

    it('handles custom VAT rate (e.g. 20% on €250 Net)', () => {
      const res = calculateVatValues(250, 20, 'net-to-gross', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.grossAmount, 300);
      assert.equal(res.vatAmount, 50);
    });

    it('handles decimal amounts with 19% VAT (€84.50 Net)', () => {
      const res = calculateVatValues(84.50, 19, 'net-to-gross', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.vatAmount, 16.06);
      assert.equal(res.grossAmount, 100.56);
    });
  });

  describe('Mode 2: Gross to Net (Extract / Remove VAT)', () => {
    it('extracts net and VAT from €119 Gross at 19% VAT (€100 Net, €19 VAT)', () => {
      const res = calculateVatValues(119, 19, 'gross-to-net', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.netAmount, 100);
      assert.equal(res.grossAmount, 119);
      assert.equal(res.vatAmount, 19);
      assert.equal(res.formattedNet, '100 €');
      assert.equal(res.formattedVat, '19 €');
    });

    it('extracts net and VAT from €107 Gross at 7% VAT (€100 Net, €7 VAT)', () => {
      const res = calculateVatValues(107, 7, 'gross-to-net', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.netAmount, 100);
      assert.equal(res.vatAmount, 7);
    });

    it('handles custom decimal VAT rates in Gross to Net mode (€120 Gross at 8.5% tax)', () => {
      const res = calculateVatValues(120, 8.5, 'gross-to-net', 2);
      assert.equal(res.isValid, true);
      assert.equal(res.netAmount, 110.6);
      assert.equal(res.vatAmount, 9.4);
    });
  });

  describe('Edge Cases & Safety Guards', () => {
    it('handles zero amount safely (€0 -> €0 Gross, €0 Net, €0 VAT)', () => {
      const res = calculateVatValues(0, 19, 'net-to-gross');
      assert.equal(res.isValid, true);
      assert.equal(res.grossAmount, 0);
      assert.equal(res.vatAmount, 0);
    });

    it('handles zero VAT rate (0% -> Net equals Gross)', () => {
      const res = calculateVatValues(150, 0, 'net-to-gross');
      assert.equal(res.isValid, true);
      assert.equal(res.grossAmount, 150);
      assert.equal(res.vatAmount, 0);
    });

    it('handles empty inputs without throwing errors', () => {
      const resEmpty = calculateVatValues('', 19);
      assert.equal(resEmpty.isValid, false);
      assert.equal(resEmpty.isEmpty, true);
    });

    it('rejects negative amount and negative VAT rates', () => {
      const resNeg = calculateVatValues(-100, 19);
      assert.equal(resNeg.isValid, false);
      assert.match(resNeg.error, /negative/i);
    });
  });
});
