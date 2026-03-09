import Script from "next/script";

export default function SeoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SFlow",
    url: "https://sflow.uz",
    description:
      "Social media automation platform for scheduling posts, analytics and account management.",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    creator: {
      "@type": "Organization",
      name: "SFlow",
    },
  };

  return (
    <Script
      id="schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
