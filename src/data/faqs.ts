export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "faq-01",
    question: "What file formats do you accept?",
    answer:
      "We accept high-resolution PDF, PNG, and JPG files. PDF is preferred for print-ready artwork to ensure accurate color and trim marks.",
  },
  {
    id: "faq-02",
    question: "Do you offer design services?",
    answer:
      "Yes. We provide professional design support to ensure your artwork is print-ready. Share your brand guidelines and brief and we'll handle the rest.",
  },
  {
    id: "faq-03",
    question: "What are your minimum order quantities?",
    answer:
      "MOQs vary by product, but we are startup-friendly. We cater to both small-scale entities and high-volume corporate orders — just ask us for a quote.",
  },
  {
    id: "faq-04",
    question: "How long does printing take?",
    answer:
      "Standard turnaround is 72 hours to 1 week, depending on the order complexity and volume. Rush jobs can be discussed on a case-by-case basis.",
  },
  {
    id: "faq-05",
    question: "Do you offer proofs before printing?",
    answer:
      "Yes. We provide a final digital or physical proof for your approval before starting the full print run, ensuring you're completely satisfied with the output.",
  },
  {
    id: "faq-06",
    question: "What finishing options are available?",
    answer:
      "We offer all popular finishes, including Matte Lamination, Gloss Lamination, Spot UV, and Embossing. These can be combined for premium effects.",
  },
  {
    id: "faq-07",
    question: "Do you deliver, or is it pickup only?",
    answer:
      "We offer doorstep delivery for bulk orders pan-India. Small-scale orders are currently available for pickup from our Bhilwara location.",
  },
  {
    id: "faq-08",
    question: "How do I get a quote?",
    answer:
      "Simply message us on WhatsApp with your requirements — product type, quantity, size, and any finish preferences — and we'll send you a quick estimate.",
  },

  // ── Sticker & Label FAQs ──
  {
    id: "faq-sticker-01",
    question: "What is the minimum order quantity for sticker printing in Bhilwara?",
    answer:
      "Minimum order is 100 stickers or labels. We accept orders from small D2C brands needing 100 pieces to large manufacturers requiring 50,000+. All quantities are printed on the same premium substrates.",
  },
  {
    id: "faq-sticker-02",
    question: "What materials are available for sticker and label printing?",
    answer:
      "We print on BOPP (bi-axially oriented polypropylene), white paper, and transparent/clear film. BOPP labels are water-resistant and ideal for product bottles, food packaging, and outdoor use. Paper labels work well for dry-storage products and unboxing inserts. Transparent labels give a no-label look for premium products.",
  },
  {
    id: "faq-sticker-03",
    question: "Can you print die-cut stickers in custom shapes?",
    answer:
      "Yes. We offer die-cut stickers in any custom shape — round, square, rectangular, oval, or a shape that matches your logo or product outline. Standard shapes have no additional tooling charge for orders above 500 pieces.",
  },
  {
    id: "faq-sticker-04",
    question: "Do you print product labels for D2C and e-commerce brands?",
    answer:
      "Yes. We specialise in product labels for D2C brands — including ingredient labels, barcode labels, address labels, and branding stickers for packaging. We offer matte, gloss, and chrome finishes. Minimum 100 pieces with 72-hour turnaround from Bhilwara, with pan-India delivery for bulk orders.",
  },

  // ── Garment Hang Tag FAQs ──
  {
    id: "faq-garment-01",
    question: "What is the standard size for garment hang tags?",
    answer:
      "The most common garment hang tag size is 55×90mm, but we print in any custom size. Popular alternatives include 50×80mm, 60×100mm, and die-cut shapes for premium brands. Custom sizing is available at no extra cost for orders above 500 pieces.",
  },
  {
    id: "faq-garment-02",
    question: "What materials are available for hang tags?",
    answer:
      "We print hang tags on 300 GSM art card, 350 GSM textured card, and kraft board. Finishes include gloss lamination, matte lamination, soft-touch matte, foil stamping (gold/silver), embossing, and spot UV. Eyelet punching and string attachment are available as add-ons.",
  },
  {
    id: "faq-garment-03",
    question: "What is the minimum order quantity for hang tags?",
    answer:
      "Minimum order is 500 hang tags. We serve both emerging apparel labels and established garment manufacturers in Bhilwara's textile cluster. Barcode printing and serial numbering are available for inventory-managed operations.",
  },
  {
    id: "faq-garment-04",
    question: "Do you serve garment manufacturers in Bhilwara's textile industry?",
    answer:
      "Yes. Bhilwara is one of India's largest textile hubs, and we have been serving local garment and fabric manufacturers since 1996. We understand the production timelines and bulk requirements of the textile industry. Pan-India delivery is available for brands outside Bhilwara.",
  },

  // ── Offset Printing Services FAQs ──
  {
    id: "faq-offset-01",
    question: "What is offset printing and when should I use it?",
    answer:
      "Offset printing transfers ink from a metal plate to a rubber blanket and then onto paper, producing sharp, consistent colour across large print runs. It is the most cost-effective method for quantities above 500 units and offers superior colour accuracy compared to digital printing. Ideal for brochures, catalogues, visiting cards, and packaging.",
  },
  {
    id: "faq-offset-02",
    question: "What paper sizes and weights do you support for offset printing in Bhilwara?",
    answer:
      "We print on paper weights from 70 GSM (standard leaflets) to 400 GSM (visiting cards and packaging board). Standard sizes include A4, A5, A3, DL, and custom dimensions. Art paper, matte paper, kraft, and textured stock are all available.",
  },
  {
    id: "faq-offset-03",
    question: "What is the minimum print run for offset printing?",
    answer:
      "Offset printing is most economical at quantities of 500 and above. For smaller quantities, digital printing may be more cost-effective. We advise on the best method based on your quantity, deadline, and budget — just share your requirements on WhatsApp.",
  },

  // ── Book & Report Printing FAQs ──
  {
    id: "faq-book-01",
    question: "What binding options are available for books and reports in Bhilwara?",
    answer:
      "We offer saddle-stitch binding (stapled spine, ideal for 8–64 pages), perfect binding (glued flat spine, ideal for 48+ pages), and spiral/wire-o binding for notebooks and manuals. Saddle-stitch is standard for annual reports and booklets; perfect binding is used for corporate dossiers and catalogues.",
  },
  {
    id: "faq-book-02",
    question: "What is the minimum order quantity for book printing?",
    answer:
      "Minimum order is 50 copies for saddle-stitch booklets and 100 copies for perfect-bound books. We cater to companies needing small runs of annual reports, training manuals, and event programmes as well as large-volume educational publishers.",
  },
  {
    id: "faq-book-03",
    question: "Can you print annual reports and corporate publications?",
    answer:
      "Yes. We print annual reports, company profiles, investor decks, and CSR documents on premium 130 GSM art paper (inner pages) with a 300 GSM laminated cover. Colour accuracy across long print runs is our speciality — consistent cover-to-cover, copy-to-copy.",
  },

  // ── Food Menu Printing FAQs ──
  {
    id: "faq-menu-01",
    question: "What sizes are available for restaurant menu printing?",
    answer:
      "Standard menu sizes include A4 (210×297mm), A3 (297×420mm), and DL (99×210mm) for drinks menus. We also print bi-fold (A4 folded to A5), tri-fold, and custom booklet menus. Lamination options include gloss, matte, and wipe-clean matte for busy restaurant environments.",
  },
  {
    id: "faq-menu-02",
    question: "Do you offer wipe-clean lamination for food menus?",
    answer:
      "Yes. We offer a wipe-clean matte lamination that allows menus to be wiped down with a damp cloth between uses. This is our most popular finish for restaurants, cafes, and hotels. Available on single-sheet menus, bi-fold, and tri-fold formats.",
  },
  {
    id: "faq-menu-03",
    question: "Do you deliver food menus outside Bhilwara?",
    answer:
      "Yes. We deliver printed menus pan-India via courier for bulk orders. Typical delivery time is 2–4 days after printing is complete. Standard turnaround is 72 hours from artwork approval. For restaurant chains requiring large quantities across multiple locations, we can coordinate consolidated shipments.",
  },
];
