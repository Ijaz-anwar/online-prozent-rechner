import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import './FAQ.css';

export default function FAQ({
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions regarding percentage formulas and math rules.',
  items = [],
  defaultOpenIndex = 0
}) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  if (!items || items.length === 0) return null;

  const toggleItem = (idx) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section className="faq-section card">
      {title && (
        <div className="faq-header">
          <div className="faq-title-row">
            <HelpCircle size={22} className="faq-icon" />
            <h2 className="faq-title">{title}</h2>
          </div>
          {subtitle && <p className="faq-subtitle">{subtitle}</p>}
        </div>
      )}

      <div className="faq-accordion-list">
        {items.map((item, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className={`faq-accordion-item ${isOpen ? 'open' : ''}`}>
              <button
                type="button"
                className="faq-question-btn"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
              >
                <span className="faq-question-text">{item.q || item.question}</span>
                {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </button>

              {isOpen && (
                <div className="faq-answer-pane animate-fade-in">
                  <p>{item.a || item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
