/** @jsxImportSource preact */
export default function SiteJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": ["MedicalOrganization", "MedicalClinic"],
    name: "Young Adult Medicine, PLLC",
    url: "https://www.youngadultmedicine.com/",
    logo: "https://www.youngadultmedicine.com/logo.png",
    image: "https://www.youngadultmedicine.com/logo.png",
    medicalSpecialty: "Pediatrics",
    areaServed: { "@type": "AdministrativeArea", name: "Nevada" },
    address: {
      "@type": "PostalAddress",
      streetAddress: "9330 West Sahara Ave, Suite 230",
      addressLocality: "Las Vegas",
      addressRegion: "NV",
      postalCode: "89117",
      addressCountry: "US",
    },
    telephone: "+1-702-703-4917",
    priceRange: "$$",
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [
      "https://www.instagram.com/askNPCarey",
      "https://www.tiktok.com/@young.adult.medicine",
      "https://www.youtube.com/@AskNPCarey",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "Patient inquiries",
        telephone: "+1-702-703-4917",
        areaServed: "US-NV",
        availableLanguage: ["English", "Spanish"],
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
