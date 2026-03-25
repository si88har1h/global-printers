import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Garment Tags & Clothing Tags in Bhilwara — Custom Hang Tag Printing",
  description:
    "Garment tags and clothing tags printed in Bhilwara — custom sizes, 300–350 GSM art card and kraft, foil stamping, embossing, eyelet punching. MOQ 500. 72hr turnaround. Global Printers, Bhilwara's textile hub since 1996.",
  alternates: {
    canonical: "/garment-hang-tags-printing",
  },
  openGraph: {
    title: "Garment Tags & Clothing Tags in Bhilwara — Global Printers",
    description:
      "Garment tags and clothing tags for apparel brands. 300–350 GSM art card, kraft, textured stock. Foil stamping, embossing, barcode printing. MOQ 500. Bhilwara textile hub since 1996.",
    url: "https://globalprinters.in/garment-hang-tags-printing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Garment Tags & Clothing Tags in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Garment Tag & Clothing Tag Printing — Bhilwara",
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
    "Custom garment tags and clothing tags printed in Bhilwara for Indian apparel brands. 300–350 GSM art card and kraft board, eyelet punching, foil stamping, embossing, barcode printing. MOQ 500 pieces. Based in Bhilwara's textile hub.",
  url: "https://globalprinters.in/garment-hang-tags-printing",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-garment-01", "faq-garment-02", "faq-garment-05", "faq-garment-04"].includes(f.id)
);

const garmentPortfolio = portfolioItems.filter(
  (item) => item.category === "Garment Tags"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Garment Tags"
);
const pagePortfolio = [...garmentPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Sticker & Label Printing", href: "/sticker-label-printing-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
];

export default function GarmentHangTagsPrintingPage() {
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
        h1="Garment Tags & Clothing Tags — Printed in Bhilwara"
        subheadline="Custom garment tags and clothing tags for apparel brands — printed in Bhilwara from premium 300–350 GSM art card and kraft, with foil stamping, embossing, and barcode printing."
        intro="Bhilwara is one of India's largest textile manufacturing hubs, and Global Printers has been printing garment tags and clothing tags for the apparel industry here since 1996. Whether you call them hang tags, price tags, or clothing tags — we produce them on premium 300–350 GSM stock with precision die-cutting, eyelet punching, and string attachment. From emerging fashion labels to established garment exporters, we print garment tags ready to ship to your warehouse or factory floor."
        features={[
          { label: "Standard 55×90mm & Custom Sizes", detail: "The industry-standard hang tag size is 55×90mm. We also print 50×80mm, 60×100mm, and fully custom die-cut shapes to match your brand identity. Custom sizing at no extra charge for orders above 500 pieces." },
          { label: "300–350 GSM Art Card & Kraft", detail: "Premium 300 GSM art card for sharp, vibrant colour reproduction. 350 GSM textured stock for a premium hand feel. Kraft board for eco-conscious brands. All substrates are suitable for foiling and embossing." },
          { label: "Foil Stamping & Embossing", detail: "Gold and silver foil stamping for luxury brand positioning. Blind embossing for subtle tactile logos. Spot UV to highlight key design elements. Combine finishes for a premium multi-effect tag." },
          { label: "Eyelet Punching & String Attachment", detail: "Metal eyelet punching in standard 4mm or custom sizes. String attachment available in cotton, jute, or synthetic cord. Ready-to-attach tags dispatched directly to your production line." },
          { label: "Barcode & Serial Number Printing", detail: "Variable data printing for barcodes, QR codes, and serial numbers. Compatible with standard retail barcode formats (EAN-13, UPC-A). Essential for inventory management and retail compliance." },
          { label: "MOQ 500, Pan-India Delivery", detail: "Minimum order 500 garment tags or clothing tags. Bhilwara-based production gives you metro-quality output at a lower cost base — we deliver directly to your factory floor, warehouse, or fulfillment partner across India." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
        whyChooseUsHeading="Garment tags and clothing tags built for Bhilwara's textile industry."
        ctaHeading="Need garment tags or clothing tags in Bhilwara? Message us."
        ctaBody="Share your tag size, GSM, finish, and quantity — we'll confirm pricing and production lead time within the hour."
        faqHeading="Common questions about garment tags and clothing tags in Bhilwara."
      />
    </>
  );
}
