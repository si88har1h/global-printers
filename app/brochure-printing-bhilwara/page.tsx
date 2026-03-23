import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Brochure Printing in Bhilwara — Tri-fold, Bi-fold & Custom",
  description:
    "High-quality brochure printing in Bhilwara by Global Printers. Tri-fold, bi-fold, and z-fold on 130–170 GSM paper with matte or gloss finish. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/brochure-printing-bhilwara",
  },
  openGraph: {
    title: "Brochure Printing in Bhilwara — Global Printers",
    description:
      "Tri-fold, bi-fold, and z-fold brochures printed in Bhilwara. 130–170 GSM coated paper, crisp color, matte or gloss. 72hr turnaround. Est. 1996.",
    url: "https://globalprinters.in/brochure-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Brochure Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Brochure Printing — Bhilwara",
  provider: {
    "@type": "LocalBusiness",
    name: "Global Printers",
    "@id": "https://globalprinters.in",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Shop No. 16, Arihant Complex, Rajendra Marg, Opp. Hotel La Abode, Bhopal Ganj",
      addressLocality: "Bhilwara",
      addressRegion: "Rajasthan",
      postalCode: "311001",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Bhilwara" },
    { "@type": "State", name: "Rajasthan" },
  ],
  description:
    "Brochure and pamphlet printing in Bhilwara — tri-fold, bi-fold, and z-fold formats on high-GSM coated paper with matte or gloss lamination.",
  url: "https://globalprinters.in/brochure-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-01", "faq-03", "faq-04", "faq-06"].includes(f.id)
);

const brochurePortfolio = portfolioItems.filter(
  (item) => item.category === "Brochures & Pamphlets" || item.category === "Catalogues"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Brochures & Pamphlets" && item.category !== "Catalogues"
);
const pagePortfolio = [...brochurePortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Offset Printing Services", href: "/offset-printing-services-bhilwara" },
  { title: "Book & Report Printing", href: "/book-report-printing-bhilwara" },
];

export default function BrochurePrintingBhilwaraPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            serviceSchema,
            {
              "@type": "FAQPage",
              mainEntity: pageFaqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
              })),
            },
          ],
        }) }}
      />
      <ServicePageLayout
        h1="Brochure Printing in Bhilwara"
        subheadline="Crisp, vibrant brochures and pamphlets printed at our Bhilwara press — tri-fold, bi-fold, and z-fold on premium coated paper with matte or gloss finish."
        intro="A well-designed brochure puts your business in someone's hands long after the conversation ends. At our Bhilwara offset press, we print brochures with precision fold registration, vibrant color reproduction, and finishes that make your brand look polished and professional — at any quantity."
        features={[
          { label: "Tri-fold, Bi-fold & Z-fold", detail: "All standard fold formats available. We'll advise on the fold type that best suits your content and distribution method." },
          { label: "130–170 GSM Coated Art Paper", detail: "Premium coated paper provides a smooth surface for vibrant color and sharp text — ideal for photography-heavy brochures." },
          { label: "Matte & Gloss Lamination", detail: "Lamination protects your brochure and enhances its look. Matte for a premium feel; gloss for bright, vivid color." },
          { label: "Crisp Color Reproduction", detail: "Offset printing ensures accurate CMYK color reproduction — your brand colors will match your brand guidelines." },
          { label: "Custom Sizes", detail: "A4, A5, DL (⅓ A4), square, and custom sizes available. We can accommodate non-standard formats on request." },
          { label: "Bulk Pricing for Large Runs", detail: "Cost per piece drops significantly at 500+, 1,000+, and 5,000+ quantities. Bhilwara delivery or pan-India shipping available." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
      />
    </>
  );
}
