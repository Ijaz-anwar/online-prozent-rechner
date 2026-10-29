import React from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';
import ToolCard from '../components/common/ToolCard.jsx';
import { getCalculatorBySlug, calculatorsConfig } from '../data/calculatorsConfig.js';
import './CalculatorPageTemplate.css';

export default function CalculatorPageTemplate({ config, onSaveHistory }) {
  const location = useLocation();
  const params = useParams();

  // If config is directly passed, use it. Otherwise, lookup by URL path or slug param.
  const activeConfig = config || getCalculatorBySlug(params.slug) || getCalculatorBySlug(location.pathname);

  if (!activeConfig) {
    return <Navigate to="/404" replace />;
  }

  const ActiveComponent = activeConfig.component;
  const ActiveIcon = activeConfig.icon;

  // Filter related tools (exclude the current one)
  const relatedTools = calculatorsConfig
    .filter(c => c.id !== activeConfig.id)
    .slice(0, 3);

  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebApplication',
      'name': activeConfig.seoTitle || `${activeConfig.name} – Kostenloser Online-Rechner`,
      'url': `https://online-prozent-rechner.de/${activeConfig.slug}`,
      'applicationCategory': 'EducationalApplication',
      'operatingSystem': 'All',
      'description': activeConfig.metaDescription || activeConfig.description
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Startseite',
          'item': 'https://online-prozent-rechner.de/'
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': activeConfig.name,
          'item': `https://online-prozent-rechner.de/${activeConfig.slug}`
        }
      ]
    },
    activeConfig.faqs && activeConfig.faqs.length > 0 ? {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      'mainEntity': activeConfig.faqs.map(faq => ({
        '@type': 'Question',
        'name': faq.question,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': faq.answer
        }
      }))
    } : null
  ].filter(Boolean);

  return (
    <div className="calc-template-page">
      <SEOHead
        title={activeConfig.seoTitle || `${activeConfig.name} – Online berechnen | Prozent Rechner`}
        description={activeConfig.metaDescription || activeConfig.description}
        keywords={activeConfig.keywords}
        canonicalUrl={`/${activeConfig.slug}`}
        schemaData={schemas}
      />

      <Breadcrumbs items={[{ label: 'Startseite', path: '/' }, { label: activeConfig.name }]} />

      {/* Page Header */}
      <div className="calc-page-header">
        <div className="calc-page-header-top">
          {ActiveIcon && (
            <div className="calc-page-icon-wrap" aria-hidden="true">
              <ActiveIcon size={26} />
            </div>
          )}
          <div>
            <div className="calc-page-title-group">
              <h1 className="calc-page-title">{activeConfig.name}</h1>
              {activeConfig.badge && (
                <span className="calc-page-badge">{activeConfig.badge}</span>
              )}
            </div>
            <p className="calc-page-lead">{activeConfig.description}</p>
          </div>
        </div>
      </div>

      {/* Render the specific active calculator component */}
      <div className="calculator-mount-slot">
        <ActiveComponent onSaveHistory={onSaveHistory} />
      </div>

      {/* Structured SEO & Educational Section */}
      <SEOContent
        headline={activeConfig.guideTitle || `So funktioniert der ${activeConfig.name}`}
        description={activeConfig.guideText || activeConfig.description}
        formula={activeConfig.formula}
        formulaExplanation={activeConfig.formulaExplanation}
        steps={activeConfig.howItWorks}
        tips={activeConfig.tips}
        sections={activeConfig.sections}
        useCases={activeConfig.useCases}
        mistakes={activeConfig.mistakes}
        table={activeConfig.table}
        examples={activeConfig.examples}
        faqs={activeConfig.faqs}
      >
        {/* Related Calculators Grid */}
        <section className="calc-related-section">
          <h2 className="calc-related-title">
            Weitere nützliche Prozentrechner
          </h2>
          <div className="calc-related-grid">
            {relatedTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.name}
                subtitle={tool.shortName}
                description={tool.description}
                path={`/${tool.slug}`}
                badge={tool.badge}
                icon={tool.icon}
                tag="Rechner"
              />
            ))}
          </div>
        </section>
      </SEOContent>
    </div>
  );
}
