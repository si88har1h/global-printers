import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Printing Press in Bhilwara, Rajasthan — Global Printers",
  description:
    "Looking for a reliable printing press in Bhilwara? Global Printers offers offset printing for brochures, catalogues, visiting cards, wedding cards & more. Est. 1996. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/printing-press-bhilwara",
  },
  openGraph: {
    title: "Printing Press in Bhilwara, Rajasthan — Global Printers",
    description:
      "Offset printing press in Bhilwara with 30+ years of experience. Brochures, catalogues, visiting cards, wedding cards, garment tags & more. 72hr turnaround.",
    url: "https://globalprinters.in/printing-press-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Global Printers — Printing Press in Bhilwara" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Offset Printing Press — Bhilwara",
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
    "Full-service offset printing press in Bhilwara, Rajasthan. We print brochures, catalogues, visiting cards, wedding cards, garment tags, stickers, and more for businesses across India.",
  url: "https://globalprinters.in/printing-press-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-03", "faq-04", "faq-05", "faq-08"].includes(f.id)
);

const relatedPages = [
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
  { title: "Wedding Card Printing", href: "/wedding-card-printing-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  { title: "Sticker & Label Printing", href: "/sticker-label-printing-bhilwara" },
  { title: "Garment Tags", href: "/garment-tags-printing" },
  { title: "Offset Printing Services", href: "/offset-printing-services-bhilwara" },
  { title: "Book & Report Printing", href: "/book-report-printing-bhilwara" },
  { title: "Food Menu Printing", href: "/food-menu-printing" },
];

export default function PrintingPressBhilwaraPage() {
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
                { "@type": "ListItem", position: 2, name: "Printing Press Bhilwara", item: "https://globalprinters.in/printing-press-bhilwara" },
              ],
            },
          ],
        }) }}
      />
      <ServicePageLayout
        h1="Printing Press in Bhilwara, Rajasthan"
        subheadline="Global Printers has been Bhilwara's trusted offset printing press since 1996 — serving local businesses, D2C brands, and corporates across India."
        intro="From the heart of Bhilwara's industrial district, we operate a full-service offset printing press with the capacity and consistency that growing businesses demand. Whether you need 500 visiting cards or 50,000 catalogues, we deliver premium print quality with a standard 72-hour turnaround."
        features={[
          { label: "30+ Years of Offset Printing", detail: "Established in 1996 in Bhilwara, Rajasthan — with the experience to handle complex, high-volume print runs reliably." },
          { label: "Full-Service Press", detail: "Brochures, catalogues, visiting cards, wedding cards, garment tags, stickers, labels, posters, and more — all under one roof in Bhilwara." },
          { label: "72-Hour Standard Turnaround", detail: "Most print orders are ready within 72 hours. Rush jobs can be accommodated on a case-by-case basis." },
          { label: "High-GSM Premium Stocks", detail: "We use 130–400 GSM art papers, board, and specialty stocks for results that look and feel premium." },
          { label: "All Finishes Available", detail: "Matte lamination, gloss lamination, spot UV, embossing, and foil stamping — all available from our Bhilwara press." },
          { label: "Pan-India Delivery", detail: "We dispatch bulk print orders directly from our Bhilwara press to warehouse and fulfillment centres across India — Delhi NCR, Mumbai, Bengaluru, and beyond. No middlemen, no markup on freight." },
        ]}
        portfolioItems={portfolioItems}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
        whyChooseUsHeading="Bhilwara's full-service offset press since 1996."
        ctaHeading="Need a printing press in Bhilwara? Message us."
        ctaBody="Tell us what you need — visiting cards, brochures, catalogues, or any print job — and we'll send a quote within the hour from our Bhilwara press."
      />
    </>
  );
}
