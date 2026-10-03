import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function SEOHead({
  title = 'Prozent Rechner – Kostenloser Online-Prozentrechner',
  description = 'Kostenloser Online-Prozentrechner: Prozentwert, Prozentsatz, Grundwert, Dreisatz, 19% MwSt, Rabatt und Prozent rückwärts rechnen mit sofortigem Rechenweg.',
  canonicalUrl,
  schemaData
}) {
  const fullTitle = title.includes('Prozent Rechner') ? title : `${title} | Prozent Rechner`;
  const siteUrl = 'https://prozentrechner.online';
  const fullCanonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content="Prozent Rechner" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      {/* Structured Schema / JSON-LD */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
}
