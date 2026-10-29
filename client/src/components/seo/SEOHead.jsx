import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'Prozent Rechner Online – Prozent einfach, schnell und richtig berechnen',
  description = 'Prozent Rechner Online: Prozente einfach, schnell und richtig berechnen – mit Rabatt, Preis, Bruch, Mehrwertsteuer, Dreisatz und Prozentrechnung.',
  keywords = 'prozentrechner, prozent rechner online, prozent berechnen, prozentrechnung, mathe rechner',
  canonicalUrl,
  schemaData
}) {
  const fullTitle = title.includes('Prozent Rechner') ? title : `${title} | Prozent Rechner`;
  const siteUrl = 'https://online-prozent-rechner.de';
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  const schemas = Array.isArray(schemaData) ? schemaData : (schemaData ? [schemaData] : []);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Prozent Rechner Online" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Schema / JSON-LD */}
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
