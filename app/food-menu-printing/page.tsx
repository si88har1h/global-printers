import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Food Menu Printing in India — Restaurant Menu Printing",
  description:
    "Restaurant and food menu printing across India by Global Printers. A4, A3, bi-fold, tri-fold, and booklet formats. Wipe-clean matte lamination. Full-colour offset printing. Pan-India delivery. 72hr turnaround.",
  alternates: {
    canonical: "/food-menu-printing",
  },
  openGraph: {
    title: "Food Menu Printing in India — Global Printers",
    description:
      "Restaurant menu printing pan-India. A4/A3/bi-fold/booklet. Wipe-clean lamination. Full-colour offset. 72hr turnaround. Est. 1996. WhatsApp for quotes.",
    url: "https://globalprinters.in/food-menu-printing",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Food Menu Printing in India — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Food Menu Printing — India",
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
    "Restaurant and food menu printing across India. A4, A3, bi-fold, tri-fold, and booklet menus with wipe-clean matte lamination. Full-colour offset printing from Bhilwara with pan-India delivery.",
  url: "https://globalprinters.in/food-menu-printing",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-menu-01", "faq-menu-02", "faq-menu-03", "faq-07"].includes(f.id)
);

const menuPortfolio = portfolioItems.filter(
  (item) => item.category === "Food Menus"
);
const otherPortfolio = portfolioItems.filter(
  (item) =>
    item.category !== "Food Menus" &&
    (item.category === "Brochures & Pamphlets" || item.category === "Books & Reports" || item.category === "Catalogues")
);
const pagePortfolio = [...menuPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  { title: "Book & Report Printing", href: "/book-report-printing-bhilwara" },
  { title: "Offset Printing Services", href: "/offset-printing-services-bhilwara" },
];

export default function FoodMenuPrintingPage() {
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
                { "@type": "ListItem", position: 2, name: "Food Menu Printing", item: "https://globalprinters.in/food-menu-printing" },
              ],
            },
          ],
        }) }}
      />
      <ServicePageLayout
        h1="Food Menu Printing in Bhilwara & Across India"
        subheadline="Restaurant and café menu printing across India — full-colour offset printing with wipe-clean lamination, in A4, A3, bi-fold, tri-fold, and booklet formats."
        intro="A menu is one of the most-handled pieces of print in any restaurant — it needs to look great and survive daily use. At Global Printers, we print food menus in Bhilwara for restaurants, cafes, hotels, and food delivery services across India. We offer wipe-clean matte lamination as standard for table-top menus, along with gloss and soft-touch finishes for display menus and premium dining establishments. Pan-India courier delivery means your new menus arrive within days, wherever you are."
        features={[
          { label: "A4, A3, DL & Custom Sizes", detail: "Standard A4 (210×297mm) for full menus. A3 for oversized display menus. DL (99×210mm) for drinks and cocktail lists. Custom sizes available — match your existing menu holder or interior design." },
          { label: "Single Sheet, Bi-fold & Tri-fold", detail: "Single-sheet menus laminated for rigidity. Bi-fold (A4 folded to A5) for compact table menus. Tri-fold for drinks and dessert menus. Booklet menus for extensive offerings with perfect or saddle-stitch binding." },
          { label: "Wipe-Clean Matte Lamination", detail: "Our most popular finish for restaurants — a wipe-clean matte surface that can be cleaned with a damp cloth between covers. Protects against spills, stains, and daily wear. Available on all single-sheet and folded menu formats." },
          { label: "Full-Colour Offset Printing", detail: "Vivid, accurate food photography reproduction on 170 GSM or 250 GSM art paper. Offset printing ensures consistent colour across your full order — from 50 menus for a new opening to 5,000 for a restaurant chain rollout." },
          { label: "Insert-Ready Formats", detail: "We print menu covers separately from inner pages for easy seasonal updates — replace just the inserts without reprinting the entire menu. Ideal for restaurants that update specials or pricing quarterly." },
          { label: "Pan-India Delivery, 72hr Turnaround", detail: "Printed menus are dispatched via courier from Bhilwara within 72 hours of artwork approval. Multi-location restaurant chains can consolidate orders into a single coordinated shipment to reduce per-unit delivery cost." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
        whyChooseUsHeading="Menus engineered to look great and survive daily restaurant use."
        ctaHeading="Need menus for your restaurant? Message us on WhatsApp."
        ctaBody="Tell us your menu format, size, lamination type, and quantity — we'll send a quote and turnaround estimate within the hour."
      />
    </>
  );
}
