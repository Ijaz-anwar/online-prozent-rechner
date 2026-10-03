import React from 'react';
import { BookOpen, CheckCircle2, Lightbulb, Calculator } from 'lucide-react';
import FAQ from '../common/FAQ.jsx';
import './SEOContent.css';

export default function SEOContent({
  headline,
  description,
  formula,
  steps = [],
  examples = [],
  faqs = [],
  children
}) {
  return (
    <article className="seo-content-container">
      {/* Overview & Intro */}
      {(headline || description) && (
        <section className="seo-overview-card card">
          {headline && <h2 className="seo-heading">{headline}</h2>}
          {description && <p className="seo-text">{description}</p>}
        </section>
      )}

      {/* Formula & Rule explanation */}
      {formula && (
        <section className="seo-formula-card card">
          <div className="seo-section-title-wrap">
            <BookOpen size={20} className="icon-accent" />
            <h3>Formula & Mathematical Rule</h3>
          </div>
          <div className="seo-formula-badge-box">
            <span className="formula-tag">Formula</span>
            <code className="formula-equation">{formula}</code>
          </div>
          {steps && steps.length > 0 && (
            <div className="seo-steps-grid">
              {steps.map((step, idx) => (
                <div key={idx} className="seo-step-item">
                  <CheckCircle2 size={16} className="step-check" />
                  <span>{step}</span>
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Worked Examples */}
      {examples && examples.length > 0 && (
        <section className="seo-examples-card card">
          <div className="seo-section-title-wrap">
            <Lightbulb size={20} className="icon-accent amber" />
            <h3>Step-by-Step Worked Examples</h3>
          </div>
          <div className="seo-examples-grid">
            {examples.map((ex, idx) => (
              <div key={idx} className="seo-example-box">
                <h4 className="example-title">{ex.title}</h4>
                <p className="example-scenario">{ex.scenario}</p>
                <div className="example-solution-pill">
                  <strong>Solution:</strong> {ex.solution}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Custom children slots */}
      {children}

      {/* FAQ Section */}
      {faqs && faqs.length > 0 && (
        <FAQ items={faqs} />
      )}
    </article>
  );
}
