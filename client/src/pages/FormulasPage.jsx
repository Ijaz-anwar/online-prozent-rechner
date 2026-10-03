import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight, Printer } from 'lucide-react';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';

export default function FormulasPage() {
  const handlePrint = () => {
    window.print();
  };

  const formulas = [
    {
      title: '1. Basic Percentage of a Number',
      description: 'Finds the amount that corresponds to P% of a total number V.',
      formula: 'Result = (P / 100) × V',
      example: 'What is 15% of 200? -> (15 / 100) × 200 = 30',
      calcLink: '/percentage-of-number'
    },
    {
      title: '2. Percentage Proportion (What % is X of Y)',
      description: 'Calculates the percentage that a partial amount X represents of a total Y.',
      formula: 'Percentage = (X / Y) × 100%',
      example: 'What % is 25 of 100? -> (25 / 100) × 100 = 25%',
      calcLink: '/what-percentage-is-x-of-y'
    },
    {
      title: '3. Percentage Increase / Growth',
      description: 'Measures the rate of increase from an initial value V1 to a final value V2.',
      formula: 'Increase % = ((V₂ - V₁) / V₁) × 100%',
      example: 'From $50 to $75 -> ((75 - 50) / 50) × 100 = +50%',
      calcLink: '/percentage-increase-decrease'
    },
    {
      title: '4. Percentage Decrease / Reduction',
      description: 'Measures the rate of drop from an initial value V1 down to a final value V2.',
      formula: 'Decrease % = ((V₁ - V₂) / V₁) × 100%',
      example: 'From $80 down to $60 -> ((80 - 60) / 80) × 100 = -25%',
      calcLink: '/percentage-increase-decrease'
    },
    {
      title: '5. Percentage Difference',
      description: 'Compares two independent values relative to their arithmetic mean without direction bias.',
      formula: 'Difference % = (|A - B| / ((A + B) / 2)) × 100%',
      example: 'Between 80 and 100 -> (|80 - 100| / 90) × 100 = 22.22%',
      calcLink: '/percentage-difference'
    },
    {
      title: '6. Reverse Percentage (Find Original 100%)',
      description: 'Determines the starting 100% base quantity before a percentage was taken.',
      formula: 'Total = Part / (Percentage / 100)',
      example: 'If 30 is 15%, what was the total? -> 30 / 0.15 = 200',
      calcLink: '/reverse-percentage'
    },
    {
      title: '7. Discounted Price',
      description: 'Calculates the final sale price after applying a percentage discount.',
      formula: 'Final Price = Original Price × (1 - (Discount% / 100))',
      example: '$100 with 20% off -> $100 × (1 - 0.20) = $80.00',
      calcLink: '/discount-calculator'
    },
    {
      title: '8. Profit Margin vs Markup',
      description: 'Relates cost, selling price, gross profit, margin %, and markup %.',
      formula: 'Margin% = (Profit / Revenue) × 100 | Markup% = (Profit / Cost) × 100',
      example: 'Cost $40, Selling $50 -> Profit = $10, Margin = 20%, Markup = 25%',
      calcLink: '/margin-markup-calculator'
    }
  ];

  return (
    <div className="formulas-page-container">
      <SEOHead
        title="Complete Percentage Formulas & Mathematical Cheat Sheet"
        description="Comprehensive percentage formulas reference guide. Step-by-step mathematical definitions, examples, and mental math shortcuts."
        canonicalUrl="/percentage-formulas"
      />

      <Breadcrumbs items={[{ label: 'Home', path: '/' }, { label: 'Formulas & Cheat Sheet' }]} />

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--primary)', marginBottom: '0.25rem' }}>
            <BookOpen size={24} />
            <span className="badge badge-blue">Math Guide</span>
          </div>
          <h1>Percentage Formulas & Cheat Sheet</h1>
          <p>The definitive guide to every percentage formula with step-by-step examples.</p>
        </div>

        <button type="button" onClick={handlePrint} className="btn btn-secondary">
          <Printer size={16} />
          <span>Print Guide</span>
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
        {formulas.map((item, idx) => (
          <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '1.15rem', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>{item.description}</p>
            
            <div style={{
              background: 'var(--bg-card-subtle)',
              padding: '0.75rem 1rem',
              borderRadius: 'var(--border-radius-md)',
              borderLeft: '4px solid var(--primary)',
              marginBottom: '1rem'
            }}>
              <code style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-main)' }}>{item.formula}</code>
            </div>

            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem', flex: 1 }}>
              <strong>Example:</strong> {item.example}
            </div>

            <Link to={item.calcLink} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.45rem 0.85rem' }}>
              <span>Open Calculator</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
