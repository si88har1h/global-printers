import type { Metadata } from "next";
import ServicePageLayout from "@/src/components/ServicePageLayout";
import { portfolioItems } from "@/src/data/portfolio";
import { faqs } from "@/src/data/faqs";

export const metadata: Metadata = {
  title: "Book & Report Printing in Bhilwara — Annual Reports, Booklets",
  description:
    "Book and report printing in Bhilwara by Global Printers. Saddle-stitch & perfect binding, 130 GSM art paper interiors, 300 GSM laminated covers. Annual reports, company profiles, corporate booklets. MOQ 50 copies.",
  alternates: {
    canonical: "/book-report-printing-bhilwara",
  },
  openGraph: {
    title: "Book & Report Printing in Bhilwara — Global Printers",
    description:
      "Annual reports, booklets & corporate publications printed in Bhilwara. Saddle-stitch and perfect binding. 130 GSM art paper. MOQ 50 copies. 72hr turnaround. Est. 1996.",
    url: "https://globalprinters.in/book-report-printing-bhilwara",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Book & Report Printing in Bhilwara — Global Printers" }],
  },
};

const serviceSchema = {
  "@type": "Service",
  name: "Book & Report Printing — Bhilwara",
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
    "Book and report printing in Bhilwara — saddle-stitch and perfect binding, 130 GSM art paper interiors, 300 GSM laminated covers. Annual reports, corporate booklets, training manuals. Minimum 50 copies.",
  url: "https://globalprinters.in/book-report-printing-bhilwara",
};

const pageFaqs = faqs.filter((f) =>
  ["faq-book-01", "faq-book-02", "faq-book-03", "faq-04"].includes(f.id)
);

const bookPortfolio = portfolioItems.filter(
  (item) => item.category === "Books & Reports"
);
const otherPortfolio = portfolioItems.filter(
  (item) =>
    item.category !== "Books & Reports" &&
    (item.category === "Brochures & Pamphlets" || item.category === "Catalogues" || item.category === "Letterheads")
);
const pagePortfolio = [...bookPortfolio, ...otherPortfolio].slice(0, 4);

const relatedPages = [
  { title: "Printing Press Bhilwara", href: "/printing-press-bhilwara" },
  { title: "Brochure Printing", href: "/brochure-printing-bhilwara" },
  { title: "Catalogue Printing", href: "/catalogue-printing-bhilwara" },
  { title: "Offset Printing Services", href: "/offset-printing-services-bhilwara" },
];

export default function BookReportPrintingBhilwaraPage() {
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
        h1="Book & Report Printing in Bhilwara"
        subheadline="Corporate books, annual reports, and professional booklets printed in Bhilwara — saddle-stitch and perfect binding with consistent colour on 130 GSM art paper."
        intro="From annual reports for Bhilwara's leading businesses to training manuals for corporate teams across Rajasthan, Global Printers produces multi-page books and reports with professional binding and precise colour consistency. Our offset press ensures every copy of a 500-unit print run looks identical — from the first page to the last, from copy 1 to copy 500. We have been printing for corporate clients in Bhilwara since 1996."
        features={[
          { label: "Saddle-Stitch & Perfect Binding", detail: "Saddle-stitch (stapled spine) is ideal for 8–64 page booklets, annual reports, and event programmes. Perfect binding (glued flat spine) is standard for 48+ page corporate dossiers and manuals. Spiral binding available for notebooks and reference guides." },
          { label: "130 GSM Art Paper Interiors", detail: "Standard interior pages are printed on 130 GSM art paper for brochure-quality colour reproduction. 90 GSM is available for high-page-count manuals. 170 GSM is available for premium publications where weight and feel matter." },
          { label: "300 GSM Laminated Covers", detail: "All book and report covers are printed on 300 GSM art board with your choice of gloss lamination, matte lamination, or soft-touch matte. UV spot coating on the cover logo is available for premium publications." },
          { label: "Full-Colour & B&W Interiors", detail: "Full-colour interiors for brand-heavy publications like annual reports and company profiles. Black-and-white interiors for cost-effective training manuals and technical guides. Mixed-colour sections (colour covers + B&W interior) also available." },
          { label: "Annual Reports & Corporate Publications", detail: "We specialise in corporate annual reports, CSR documents, investor presentations, and company profile booklets. Colour accuracy across the full print run is guaranteed — critical for boardroom-quality documents." },
          { label: "MOQ 50 Copies, 72hr Turnaround", detail: "Minimum order is 50 copies for saddle-stitch booklets, 100 for perfect-bound books. Standard 72-hour turnaround from artwork approval. Bhilwara pickup or pan-India courier delivery for bulk orders." },
        ]}
        portfolioItems={pagePortfolio}
        faqs={pageFaqs}
        serviceType="PrintingService"
        relatedPages={relatedPages}
      />
    </>
  );
}
