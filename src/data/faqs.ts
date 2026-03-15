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
];
