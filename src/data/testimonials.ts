export interface Testimonial {
  id: string;
  quote: string;
  initials: string;
  role: string;
  industry: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "testimonial-01",
    quote:
      "Switching to Global Printers saved us nearly 30% in annual procurement costs. The 350 GSM stock is heavy, premium, and consistently better than what we were getting from local distributors.",
    initials: "A.S.",
    role: "Head of Procurement",
    industry: "D2C Fashion",
  },
  {
    id: "testimonial-02",
    quote:
      "Handling our peak sale volumes — over 1,500+ orders daily — requires a partner who doesn't miss a deadline. The inventory management is seamless, and we haven't faced a stock-out since the transition.",
    initials: "V.B.",
    role: "Operations Manager",
    industry: "E-commerce Logistics",
  },
  {
    id: "testimonial-03",
    quote:
      "The matte finish is industrial grade. Even with complex, high-volume runs, the color consistency and edge-cutting are perfect. It's rare to find this level of quality at this price point.",
    initials: "S.M.",
    role: "Creative Lead",
    industry: "Apparel Brand",
  },
  {
    id: "testimonial-04",
    quote:
      "We started with a small trial run for our accessories line and quickly moved our entire footwear catalog over. They are startup-friendly but have the capacity to scale with us as our numbers grow.",
    initials: "R.K.",
    role: "Founder",
    industry: "Footwear Startup",
  },
  {
    id: "testimonial-05",
    quote:
      "Reliability is the biggest factor for us. The digital proofing process is quick, and the delivery timeline for bulk orders is fixed and dependable. It has simplified our entire supply chain.",
    initials: "N.J.",
    role: "Director",
    industry: "Textile House",
  },
];
