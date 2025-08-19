/** @jsxImportSource preact */

export default function FAQJsonLd({
  faqs,
  canonical,
}: {
  faqs: { q: string; a: string }[];
  canonical: string;
}) {
  const json = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
    url: canonical,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
