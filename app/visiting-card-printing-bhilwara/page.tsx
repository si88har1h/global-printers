import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Visiting Card Printing in Bhilwara — Premium Business Cards",
  description:
    "Get premium visiting cards printed in Bhilwara by Global Printers. 350–400 GSM stock, matte & gloss lamination, spot UV. Same-day & 72hr options. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/visiting-card-printing-bhilwara",
  },
  openGraph: {
    title: "Visiting Card Printing in Bhilwara — Global Printers",
    description:
      "Premium business card printing in Bhilwara. 350–400 GSM, matte lamination, gloss, spot UV. Startup-friendly MOQ. 72hr turnaround. Est. 1996.",
    url: "https://globalprinters.in/visiting-card-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Visiting Card Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Visiting Card Printing — Bhilwara",
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
  ],
  description:
    "Premium visiting card and business card printing in Bhilwara — 350–400 GSM, matte lamination, gloss, and spot UV finishes.",
  url: "https://globalprinters.in/visiting-card-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-03", "faq-04", "faq-06", "faq-08"].includes(f.id)
);

const cardPortfolio = portfolioItems.filter(
  (item) => item.category === "Visiting Cards" || item.category === "Letterheads"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Visiting Cards" && item.category !== "Letterheads"
);
const pagePortfolio = [...cardPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Sticker & Label Printing", href: "/sticker-label-printing-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
];

export default function VisitingCardPrintingBhilwaraPage() {
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
        h1="Visiting Card Printing in Bhilwara"
        subheadline="Premium business cards printed on 350–400 GSM stock in Bhilwara — with matte, gloss, or spot-UV finishes that leave a lasting impression."
        intro="Your visiting card is often the first physical impression of your brand. At our Bhilwara press, we print business cards on thick, high-GSM stock with flawless color and precision cutting. Whether you need 100 or 10,000, we offer startup-friendly MOQs with corporate-grade finish quality."
        features={[
          { label: "350–400 GSM Premium Stock", detail: "Thick, heavyweight card stock that feels premium in hand — the standard for serious business cards." },
          { label: "Matte & Gloss Lamination", detail: "Matte lamination gives a soft, tactile feel; gloss lamination gives a vibrant, protective shine. Both available in Bhilwara." },
          { label: "Spot UV & Embossing", detail: "Elevate your card with spot UV gloss on specific elements (logo, name) or embossed text for a luxury feel." },
          { label: "Startup-Friendly MOQ", detail: "Order as few as 100 cards or as many as 50,000. We cater to both freelancers and large sales teams." },
          { label: "Standard 90×54mm & Custom Sizes", detail: "We print standard business card sizes as well as square, rounded-corner, and custom die-cut shapes." },
          { label: "72hr Turnaround from Bhilwara", detail: "Cards are ready within 72 hours of artwork approval. Local pickup available or delivery pan-India." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
      />
    </>
  );
}
