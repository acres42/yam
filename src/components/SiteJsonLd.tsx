/** @jsxImportSource preact */
export default function SiteJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Young Adult Medicine, PLLC",
    url: "https://youngadultmedicine.com",
    logo: "https://youngadultmedicine.com/logo.png", // replace if different
    sameAs: [
      "https://www.instagram.com/askNPCarey", // add other official profiles as needed
    ],
    areaServed: { "@type": "AdministrativeArea", name: "Nevada" },
    medicalSpecialty: "AdolescentMedicine",
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
