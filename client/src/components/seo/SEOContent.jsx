import React from 'react';
import { BookOpen, CheckCircle2, Lightbulb, Zap, AlertTriangle, Layers, Table as TableIcon } from 'lucide-react';
import FAQ from '../common/FAQ.jsx';
import './SEOContent.css';

export default function SEOContent({
  headline,
  description,
  formula,
  formulaExplanation,
  steps = [],
  tips = [],
  sections = [],
  useCases = [],
  mistakes = [],
  table,
  examples = [],
  faqs = [],
  children
}) {
  return (
    <article className="seo-content-container">
      {/* Overview & Educational Intro */}
      {(headline || description) && (
        <section className="seo-overview-card card">
          {headline && <h2 className="seo-heading">{headline}</h2>}
          {description && <p className="seo-text">{description}</p>}
        </section>
      )}

      {/* In-depth Editorial Content Sections */}
      {sections && sections.length > 0 && sections.map((sec, idx) => (
        <section key={idx} className="seo-overview-card card">
          <div className="seo-section-title-wrap">
            <Layers size={20} className="icon-accent" />
            <h3>{sec.title}</h3>
          </div>
          {sec.text && <p className="seo-text" style={{ whiteSpace: 'pre-line' }}>{sec.text}</p>}
          {sec.bullets && sec.bullets.length > 0 && (
            <ul className="seo-bullet-list">
              {sec.bullets.map((b, bIdx) => (
                <li key={bIdx}>{b}</li>
              ))}
            </ul>
          )}
          {sec.callout && (
            <div className="seo-callout-box">
              <strong>Hinweis:</strong> {sec.callout}
            </div>
          )}
        </section>
      ))}

      {/* Formula & Rule Explanation */}
      {formula && (
        <section className="seo-formula-card card">
          <div className="seo-section-title-wrap">
            <BookOpen size={20} className="icon-accent" />
            <h3>Formel & mathematische Regel</h3>
          </div>
          <div className="seo-formula-badge-box">
            <span className="formula-tag">Formel</span>
            <code className="formula-equation">{formula}</code>
          </div>
          {formulaExplanation && (
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginTop: '-0.5rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
              <strong>Variablen:</strong> {formulaExplanation}
            </p>
          )}
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

      {/* Comparison Table / Reference Values */}
      {table && table.headers && table.rows && (
        <section className="seo-overview-card card">
          <div className="seo-section-title-wrap">
            <TableIcon size={20} className="icon-accent" />
            <h3>{table.title || 'Schnellübersicht & Referenztabelle'}</h3>
          </div>
          <div className="seo-table-responsive">
            <table className="seo-reference-table">
              <thead>
                <tr>
                  {table.headers.map((h, hIdx) => (
                    <th key={hIdx}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, rIdx) => (
                  <tr key={rIdx}>
                    {row.map((cell, cIdx) => (
                      <td key={cIdx}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* Practical Use Cases */}
      {useCases && useCases.length > 0 && (
        <section className="seo-overview-card card">
          <div className="seo-section-title-wrap">
            <Layers size={20} className="icon-accent" />
            <h3>Typische Anwendungsbereiche in der Praxis</h3>
          </div>
          <div className="seo-usecases-grid">
            {useCases.map((uc, idx) => (
              <div key={idx} className="seo-usecase-item">
                <h4 className="usecase-title">{uc.title}</h4>
                <p className="usecase-desc">{uc.description}</p>
                {uc.example && (
                  <div className="usecase-example">
                    <strong>Beispiel:</strong> {uc.example}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes & Pitfalls */}
      {mistakes && mistakes.length > 0 && (
        <section className="seo-overview-card card" style={{ borderLeft: '4px solid #ef4444' }}>
          <div className="seo-section-title-wrap">
            <AlertTriangle size={20} style={{ color: '#ef4444' }} />
            <h3>Häufige Fehler und typische Stolperfallen</h3>
          </div>
          <div className="seo-mistakes-list">
            {mistakes.map((m, idx) => (
              <div key={idx} className="seo-mistake-box">
                <strong style={{ color: '#ef4444' }}>Fehler:</strong> {m.mistake}
                <div style={{ marginTop: '0.35rem', color: 'var(--text-main)' }}>
                  <strong>Richtig:</strong> {m.correction}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Practical Tips & Mental Math Shortcuts */}
      {tips && tips.length > 0 && (
        <section className="seo-overview-card card" style={{ borderLeft: '4px solid var(--accent-amber, #f59e0b)', background: 'var(--bg-card)' }}>
          <div className="seo-section-title-wrap">
            <Zap size={20} style={{ color: 'var(--accent-amber, #f59e0b)' }} />
            <h3>Praktische Tipps & Kopfrechentricks</h3>
          </div>
          <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.7', color: 'var(--text-main, #334155)', margin: 0 }}>
            {tips.map((tip, idx) => (
              <li key={idx} style={{ marginBottom: '0.4rem' }}>{tip}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Worked Examples */}
      {examples && examples.length > 0 && (
        <section className="seo-examples-card card">
          <div className="seo-section-title-wrap">
            <Lightbulb size={20} className="icon-accent amber" />
            <h3>Schritt-für-Schritt Rechenbeispiele</h3>
          </div>
          <div className="seo-examples-grid">
            {examples.map((ex, idx) => (
              <div key={idx} className="seo-example-box">
                <h4 className="example-title">{ex.title}</h4>
                <p className="example-scenario">{ex.scenario}</p>
                <div className="example-solution-pill">
                  <strong>Lösung:</strong> {ex.solution}
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
