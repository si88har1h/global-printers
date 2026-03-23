import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Offset Printing Services in Bhilwara — Bulk Commercial Printing",
  description:
    "Commercial offset printing services in Bhilwara by Global Printers. High-volume runs, consistent colour, 70–400 GSM paper. Brochures, catalogues, visiting cards, packaging. 30+ years. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/offset-printing-services-bhilwara",
  },
  openGraph: {
    title: "Offset Printing Services in Bhilwara — Global Printers",
    description:
      "Bulk offset printing in Bhilwara. 70–400 GSM, all finishes, pan-India delivery. 30+ years experience. B2B and corporate printing. Est. 1996.",
    url: "https://globalprinters.in/offset-printing-services-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Offset Printing Services in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Offset Printing Services — Bhilwara",
  provider: {
    "@type": "LocalBusiness",
    name: "Global Printers",
    "@id": "https://globalprinters.in",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bhilwara",
      addressRegion: "Rajasthan",
      addressCountry: "IN",
    },
  },
  areaServed: [
    { "@type": "City", name: "Bhilwara" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  description:
    "Commercial offset printing services in Bhilwara for businesses and corporates. High-volume consistent-colour runs on 70–400 GSM paper. Brochures, catalogues, visiting cards, and all commercial print work.",
  url: "https://globalprinters.in/offset-printing-services-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-offset-01", "faq-offset-02", "faq-offset-03", "faq-04"].includes(f.id)
);

const pagePortfolio = portfolioItems.filter(
  (item) =>
    item.category === "Brochures & Pamphlets" ||
    item.category === "Catalogues" ||
    item.category === "Books & Reports" ||
    item.category === "Letterheads"
).slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  { title: "Book & Report Printing", href: "/book-report-printing-bhilwara" },
];

export default function OffsetPrintingServicesBhilwaraPage() {
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
        h1="Offset Printing Services in Bhilwara"
        subheadline="High-volume commercial offset printing in Bhilwara — consistent colour across large runs on 70–400 GSM paper, with all standard finishes and pan-India delivery."
        intro="Global Printers is a full-service offset printing press in Bhilwara, Rajasthan, established in 1996. Offset printing is the most cost-effective method for quantities above 500 units — it produces sharper detail, more accurate colour, and a more consistent result than digital printing at scale. We serve businesses in Bhilwara, corporates across Rajasthan, and D2C brands pan-India with a complete range of commercial offset printing services."
        features={[
          { label: "All Commercial Print Products", detail: "Brochures, pamphlets, catalogues, visiting cards, letterheads, billbooks, stickers, labels, wedding cards, garment tags, books, and annual reports — all produced on our offset press in Bhilwara." },
          { label: "70–400 GSM Paper Range", detail: "From 70 GSM for leaflets and inserts, through 130 GSM art paper for brochures, to 400 GSM board for visiting cards and packaging. Art paper, matte paper, kraft, and textured stocks all available." },
          { label: "Consistent Colour at Scale", detail: "Offset printing maintains CMYK colour consistency across runs of 500 to 100,000 units. No colour drift between the first copy and the last — critical for brand-colour-sensitive corporate print work." },
          { label: "All Finishes Available", detail: "Matte lamination, gloss lamination, soft-touch matte, spot UV, foil stamping (gold/silver), embossing, and aqueous coating. Mix finishes across covers and inner pages for brochures and catalogues." },
          { label: "B2B & Bulk Pricing", detail: "Our pricing structure rewards volume. Offset printing becomes progressively more cost-effective per unit from 500 to 100,000 copies. We provide detailed, transparent quotes with per-unit breakdowns at different quantities." },
          { label: "72hr Turnaround, Pan-India Delivery", detail: "Standard turnaround is 72 hours from artwork approval for most products. Pan-India courier delivery for bulk orders. Our Bhilwara location means lower overhead and more competitive pricing than metro-city offset printers." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
      />
    </>
  );
}
