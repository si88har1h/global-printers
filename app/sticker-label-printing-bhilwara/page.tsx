import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Sticker & Label Printing in Bhilwara — Custom Die-Cut Stickers",
  description:
    "Custom sticker and label printing in Bhilwara by Global Printers. BOPP, paper & transparent film. Die-cut shapes, gloss & matte finishes. Product labels for D2C brands. Starting from 100 pieces. 72hr turnaround.",
  alternates: {
    canonical: "/sticker-label-printing-bhilwara",
  },
  openGraph: {
    title: "Sticker & Label Printing in Bhilwara — Global Printers",
    description:
      "Custom sticker and product label printing in Bhilwara. BOPP, paper, transparent film. Die-cut shapes. MOQ 100 pieces. 72hr turnaround. Est. 1996.",
    url: "https://globalprinters.in/sticker-label-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Sticker & Label Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Sticker & Label Printing — Bhilwara",
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
    "Custom sticker and label printing in Bhilwara — BOPP, paper, and transparent film substrates, die-cut shapes, and product labels for D2C brands. Minimum 100 pieces. 72-hour turnaround.",
  url: "https://globalprinters.in/sticker-label-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-sticker-01", "faq-sticker-02", "faq-sticker-03", "faq-sticker-04"].includes(f.id)
);

const stickerPortfolio = portfolioItems.filter(
  (item) => item.category === "Stickers & Labels" || item.category === "Sticker Bands"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Stickers & Labels" && item.category !== "Sticker Bands"
);
const pagePortfolio = [...stickerPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Garment Hang Tags", href: "/garment-hang-tags-printing" },
];

export default function StickerLabelPrintingBhilwaraPage() {
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
        h1="Sticker & Label Printing in Bhilwara"
        subheadline="Custom die-cut stickers and product labels printed in Bhilwara — BOPP, paper, and transparent film with gloss, matte, or chrome finishes for D2C brands and local businesses."
        intro="From product labels for skincare bottles to branded stickers for packaging, we print high-quality stickers and labels in Bhilwara with precision die-cutting and water-resistant substrates. Whether you need 100 pieces for a product launch or 50,000 for a full production run, our Bhilwara press delivers consistent quality with a 72-hour turnaround. We are the only independent printing press in Bhilwara with a dedicated sticker and label service."
        features={[
          { label: "BOPP, Paper & Transparent Film", detail: "Water-resistant BOPP labels for product bottles and outdoor use. Paper labels for dry goods and packaging inserts. Clear transparent labels for a premium no-label look." },
          { label: "Die-Cut in Any Shape", detail: "Round, square, rectangular, oval, or custom shapes matching your logo or product outline. No tooling charge for standard shapes on orders above 500 pieces." },
          { label: "Gloss, Matte & Chrome Finishes", detail: "High-gloss lamination for vibrant product labels. Soft-touch matte for premium packaging. Chrome/metallic film for cosmetics and luxury goods." },
          { label: "Product Labels for D2C Brands", detail: "Ingredient labels, barcode labels, branding stickers, and address labels — everything a D2C brand needs for packaging. Pan-India delivery for bulk orders from Bhilwara." },
          { label: "Garment Sticker Bands", detail: "Branded paper bands and belly bands for clothing, gift boxes, and retail bundles. Custom sizes and full-colour printing with tight tolerances." },
          { label: "MOQ 100 Pieces, 72hr Turnaround", detail: "Order as few as 100 stickers or labels. Standard turnaround is 72 hours from artwork approval. Pickup from our Bhilwara shop or pan-India courier delivery." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
      />
    </>
  );
}
