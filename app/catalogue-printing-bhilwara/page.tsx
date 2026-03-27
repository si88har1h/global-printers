import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Catalogue Printing in Bhilwara — Product Catalogues & Lookbooks",
  description:
    "Professional catalogue printing in Bhilwara by Global Printers. Saddle-stitch & perfect-bound catalogues for fashion, textile, and D2C brands. 300–400 GSM. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/catalogue-printing-bhilwara",
  },
  openGraph: {
    title: "Catalogue Printing in Bhilwara — Global Printers",
    description:
      "Multi-page product catalogues and seasonal lookbooks printed in Bhilwara. Saddle-stitch or perfect binding, high-GSM paper, consistent color. Est. 1996.",
    url: "https://globalprinters.in/catalogue-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Catalogue Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Catalogue Printing — Bhilwara",
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
    { "@type": "Country", name: "India" },
  ],
  description:
    "Product catalogue printing in Bhilwara — saddle-stitch and perfect-bound multi-page catalogues for fashion, textile, and retail brands.",
  url: "https://globalprinters.in/catalogue-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-03", "faq-04", "faq-06", "faq-08"].includes(f.id)
);

const cataloguePortfolio = portfolioItems.filter(
  (item) => item.category === "Catalogues" || item.category === "Books & Reports"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Catalogues" && item.category !== "Books & Reports"
);
const pagePortfolio = [...cataloguePortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  { title: "Sticker & Label Printing", href: "/sticker-label-printing-bhilwara" },
  { title: "Garment Tags", href: "/garment-tags-printing" },
];

export default function CataloguePrintingBhilwaraPage() {
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
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: "https://globalprinters.in" },
                { "@type": "ListItem", position: 2, name: "Catalogue Printing", item: "https://globalprinters.in/catalogue-printing-bhilwara" },
              ],
            },
          ],
        }) }}
      />
      <ServicePageLayout
        h1="Catalogue Printing in Bhilwara"
        subheadline="Multi-page product catalogues and seasonal lookbooks printed in Bhilwara — premium GSM paper, consistent color, and professional binding for fashion, textile, and retail brands."
        intro="A great catalogue sells your products before your sales team does. At our Bhilwara press, we print catalogues with the precision and consistency that high-volume orders demand — saddle-stitch for thin editions, perfect binding for thick volumes. Ideal for Bhilwara's textile industry and pan-India D2C brands."
        features={[
          { label: "Saddle-Stitch & Perfect Binding", detail: "Both binding styles available in Bhilwara. Choose saddle-stitch for 8–48 pages or perfect binding for 50+ page volumes." },
          { label: "High-GSM Art Paper", detail: "130–170 GSM coated art paper for pages; 300 GSM board cover with lamination for a premium look and feel." },
          { label: "Consistent Color Across Long Runs", detail: "Offset printing guarantees color consistency from page 1 to page 10,000 — critical for brand integrity in product catalogues." },
          { label: "Textile & Fashion Expertise", detail: "Based in Bhilwara — India's textile hub — we understand the exact quality standards garment and fashion brands require." },
          { label: "Custom Sizes Available", detail: "A4, A5, square (210×210mm), and custom dimensions. We'll advise on the size that best fits your product photography." },
          { label: "72hr Turnaround", detail: "Most catalogue jobs — including saddle-stitch and perfect-bound editions — leave our Bhilwara press within 72 hours of artwork approval. Rush timelines available on request." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
        whyChooseUsHeading="Catalogues that sell your products before your sales team does."
        ctaHeading="Ready to print your catalogue? Message us on WhatsApp."
        ctaBody="Share your page count, binding style, size, and quantity — we'll send a detailed quote within the hour."
      />
    </>
  );
}
