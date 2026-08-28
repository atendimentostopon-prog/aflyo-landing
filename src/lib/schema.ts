import { PLANS, SITE } from "./constants";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/logo.png`,
    description: SITE.description,
    sameAs: [],
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: SITE.url,
    description: SITE.description,
    offers: PLANS.map((plan) => ({
      "@type": "Offer",
      name: `Plano ${plan.name}`,
      price: plan.monthlyPrice.toFixed(2),
      priceCurrency: "BRL",
      url: SITE.signupUrl,
    })),
  };
}
