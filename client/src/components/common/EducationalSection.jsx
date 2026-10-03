import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Lightbulb, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EducationalSection({
  title,
  howItWorks = [],
  examples = [],
  faqs = [],
  relatedCalculators = []
}) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenFaqIndex(prev => (prev === index ? null : index));
  };

  return (
    <div className="educational-container" style={{ marginTop: '3rem' }}>
      {/* How it works */}
      {howItWorks && howItWorks.length > 0 && (
        <section className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <Lightbulb size={22} style={{ color: 'var(--accent-amber)' }} />
            <h2 style={{ fontSize: '1.35rem' }}>How It Works</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {howItWorks.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <CheckCircle2 size={18} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '0.2rem' }} />
                <p style={{ color: 'var(--text-main)', fontSize: '0.95rem' }}>{item}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practical Examples */}
      {examples && examples.length > 0 && (
        <section className="card" style={{ marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>Real-World Examples</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem'
          }}>
            {examples.map((ex, idx) => (
              <div key={idx} style={{
                background: 'var(--bg-card-subtle)',
                padding: '1.25rem',
                borderRadius: 'var(--border-radius-md)',
                border: '1px solid var(--border-color)'
              }}>
                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{ex.title}</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '0.75rem' }}>{ex.scenario}</p>
                <div style={{
                  background: 'var(--bg-card)',
                  padding: '0.5rem 0.75rem',
                  borderRadius: 'var(--border-radius-sm)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  border: '1px solid var(--border-color)'
                }}>
                  <strong>Result:</strong> {ex.solution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Frequently Asked Questions */}
      {faqs && faqs.length > 0 && (
        <section className="card" style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
            <HelpCircle size={22} style={{ color: 'var(--primary)' }} />
            <h2 style={{ fontSize: '1.35rem' }}>Frequently Asked Questions</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid var(--border-color)',
                    borderRadius: 'var(--border-radius-md)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(idx)}
                    style={{
                      width: '100%',
                      padding: '1rem 1.25rem',
                      background: isOpen ? 'var(--bg-card-subtle)' : 'var(--bg-card)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontSize: '0.95rem',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      fontFamily: 'inherit'
                    }}
                  >
                    <span>{faq.q}</span>
                    {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '1rem 1.25rem',
                      background: 'var(--bg-card)',
                      fontSize: '0.9rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--border-color)'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Related Calculators */}
      {relatedCalculators && relatedCalculators.length > 0 && (
        <section style={{ marginTop: '2.5rem' }}>
          <h3 style={{ fontSize: '1.15rem', marginBottom: '1rem' }}>Other Percentage Tools</h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem'
          }}>
            {relatedCalculators.map((calc, idx) => (
              <Link
                key={idx}
                to={calc.path}
                className="card"
                style={{
                  padding: '1rem 1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  textDecoration: 'none',
                  color: 'var(--text-main)'
                }}
              >
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>{calc.title}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{calc.subtitle}</p>
                </div>
                <ArrowRight size={16} style={{ color: 'var(--primary)', flexShrink: 0 }} />
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
