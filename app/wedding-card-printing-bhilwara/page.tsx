import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Wedding Card Printing in Bhilwara — Luxury Invitations",
  description:
    "Beautiful wedding card printing in Bhilwara by Global Printers. Embossing, foil stamping, premium card stock. Custom designs for Rajasthani & modern weddings. Get a quote on WhatsApp.",
  alternates: {
    canonical: "/wedding-card-printing-bhilwara",
  },
  openGraph: {
    title: "Wedding Card Printing in Bhilwara — Global Printers",
    description:
      "Luxury wedding invitations in Bhilwara. Embossing, gold foil, premium card stock. Custom design support. Delivered across Rajasthan & pan-India.",
    url: "https://globalprinters.in/wedding-card-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Wedding Card Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Wedding Card Printing — Bhilwara",
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
    "Luxury wedding invitation card printing in Bhilwara — embossing, gold foil stamping, premium card stock, and custom design support for weddings across Rajasthan and India.",
  url: "https://globalprinters.in/wedding-card-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-01", "faq-02", "faq-04", "faq-08"].includes(f.id)
);

const weddingPortfolio = portfolioItems.filter(
  (item) => item.category === "Wedding Cards"
);
const otherPortfolio = portfolioItems.filter(
  (item) => item.category !== "Wedding Cards"
);
const pagePortfolio = [...weddingPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Visiting Card Printing", href: "/visiting-card-printing-bhilwara" },
  { title: "Sticker & Label Printing", href: "/sticker-label-printing-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
];

export default function WeddingCardPrintingBhilwaraPage() {
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
        h1="Wedding Card Printing in Bhilwara"
        subheadline="Luxurious wedding invitations crafted at our Bhilwara press — embossing, gold foil stamping, and premium card stock to set the perfect tone for your celebration."
        intro="Your wedding invitation is the first thing guests receive — it sets the expectation for everything that follows. At our Bhilwara press, we print wedding cards with the craft and attention to detail that this occasion deserves. From traditional Rajasthani designs to modern minimalist styles, we can print it beautifully."
        features={[
          { label: "Embossing & Foil Stamping", detail: "Raised embossing for a tactile luxury feel; gold, silver, or rose gold foil stamping for elegance that catches the light." },
          { label: "Premium Card Stock", detail: "300–600 GSM premium ivory, white, or textured card stock — heavy enough to feel substantial, beautiful enough to keep." },
          { label: "Custom Design Support", detail: "Bring your own design or let our team create one. We ensure your artwork is print-ready before we run the press." },
          { label: "All Formats Available", detail: "Single-fold, gate-fold, box cards, scroll invitations, and more. Traditional Rajasthani styles and modern designs both available." },
          { label: "Matte & Gloss Lamination", detail: "Protective lamination options to preserve the card's look and feel from print to delivery." },
          { label: "Delivered Across Rajasthan & India", detail: "We deliver wedding card orders across Bhilwara, Rajasthan, and pan-India for outstation weddings." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
        whyChooseUsHeading="Wedding invitations crafted to set the tone before guests arrive."
        ctaHeading="Planning a wedding? Send us your card requirements."
        ctaBody="Share your wedding date, design preferences, quantity, and finish — we'll send samples and a quote within the hour."
      />
    </>
  );
}
