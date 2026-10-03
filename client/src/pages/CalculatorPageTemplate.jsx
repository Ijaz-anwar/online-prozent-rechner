import React from 'react';
import { useLocation, useParams, Navigate } from 'react-router-dom';
import SEOHead from '../components/seo/SEOHead.jsx';
import Breadcrumbs from '../components/layout/Breadcrumbs.jsx';
import SEOContent from '../components/seo/SEOContent.jsx';
import ToolCard from '../components/common/ToolCard.jsx';
import { getCalculatorBySlug, calculatorsConfig } from '../data/calculatorsConfig.js';

export default function CalculatorPageTemplate({ config, onSaveHistory }) {
  const location = useLocation();
  const params = useParams();

  // If config is directly passed, use it. Otherwise, lookup by URL path or slug param.
  const activeConfig = config || getCalculatorBySlug(params.slug) || getCalculatorBySlug(location.pathname);

  if (!activeConfig) {
    return <Navigate to="/404" replace />;
  }

  const ActiveComponent = activeConfig.component;

  // Filter related tools (exclude the current one)
  const relatedTools = calculatorsConfig
    .filter(c => c.id !== activeConfig.id)
    .slice(0, 3);

  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    'name': `${activeConfig.name} - Free Online Calculator`,
    'url': `https://percentmaster.app/${activeConfig.slug}`,
    'applicationCategory': 'EducationalApplication',
    'description': activeConfig.description
  };

  return (
    <div className="calc-template-page">
      <SEOHead
        title={`${activeConfig.name} - Free Instant Calculator`}
        description={activeConfig.description}
        canonicalUrl={`/${activeConfig.slug}`}
        schemaData={schemaData}
      />

      <Breadcrumbs items={[{ label: 'Calculators', path: '/' }, { label: activeConfig.shortName || activeConfig.name }]} />

      {/* Render the specific active calculator component */}
      <div className="calculator-mount-slot">
        <ActiveComponent onSaveHistory={onSaveHistory} />
      </div>

      {/* Structured SEO & Educational Section */}
      <SEOContent
        headline={`How ${activeConfig.name} Works`}
        description={activeConfig.description}
        formula={activeConfig.formula}
        steps={activeConfig.howItWorks}
        examples={activeConfig.examples}
        faqs={activeConfig.faqs}
      >
        {/* Related Calculators Grid */}
        <section style={{ marginTop: '2rem' }}>
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1rem' }}>
            Related Percentage Calculators
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1rem'
          }}>
            {relatedTools.map((tool) => (
              <ToolCard
                key={tool.id}
                title={tool.name}
                subtitle={tool.shortName}
                description={tool.description}
                path={`/${tool.slug}`}
                badge={tool.badge}
                icon={tool.icon}
                tag="Calculator"
              />
            ))}
          </div>
        </section>
      </SEOContent>
    </div>
  );
}
