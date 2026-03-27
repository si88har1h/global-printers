import Hero from '@/src/components/Hero';
import StatsBar from '@/src/components/StatsBar';
import Services from '@/src/components/Services';
import Portfolio from '@/src/components/Portfolio';
import About from '@/src/components/About';
import WhyChooseUs from '@/src/components/WhyChooseUs';
import Process from '@/src/components/Process';
import Testimonials from '@/src/components/Testimonials';
import FAQ from '@/src/components/FAQ';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "PrintingService"],
  "@id": "https://globalprinters.in",
  name: "Global Printers",
  image: "https://globalprinters.in/og-image.jpg",
  url: "https://globalprinters.in",
  telephone: "+919414259587",
  priceRange: "₹₹",
  description:
    "Global Printers is a premium offset printing press in Bhilwara, Rajasthan, established in 1996. We print brochures, catalogues, visiting cards, wedding cards, garment tags, stickers, and more for D2C brands and corporates pan-India.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Shop No. 16, Arihant Complex, Rajendra Marg, Opp. Hotel La Abode, Bhopal Ganj",
    addressLocality: "Bhilwara",
    addressRegion: "Rajasthan",
    postalCode: "311001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.342744877617605,
    longitude: 74.63089127609986,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://wa.me/+919414259587",
    "https://www.google.com/maps?cid=16124960375434698796",
  ],
  currenciesAccepted: "INR",
  paymentAccepted: "Cash, UPI, Bank Transfer",
  hasMap: "https://www.google.com/maps?cid=16124960375434698796",
  foundingDate: "1996",
  areaServed: [
    { "@type": "City", name: "Bhilwara" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
  email: "globalprinter76@gmail.com",
  logo: {
    "@type": "ImageObject",
    url: "https://globalprinters.in/logo/logo.svg",
    width: 280,
    height: 80,
  },
  knowsAbout: [
    "Offset Printing",
    "Brochure Printing",
    "Visiting Card Printing",
    "Catalogue Printing",
    "Wedding Card Printing",
    "Garment Tag Printing",
    "Clothing Tag Printing",
    "Sticker and Label Printing",
    "Book and Report Printing",
    "Food Menu Printing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Printing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brochure Printing", url: "https://globalprinters.in/brochure-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Visiting Card Printing", url: "https://globalprinters.in/visiting-card-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Catalogue Printing", url: "https://globalprinters.in/catalogue-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wedding Card Printing", url: "https://globalprinters.in/wedding-card-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sticker & Label Printing", url: "https://globalprinters.in/sticker-label-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garment Tag Printing", url: "https://globalprinters.in/garment-tags-printing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Offset Printing Services", url: "https://globalprinters.in/offset-printing-services-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Book & Report Printing", url: "https://globalprinters.in/book-report-printing-bhilwara" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Food Menu Printing", url: "https://globalprinters.in/food-menu-printing" } },
    ],
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Portfolio />
        <About />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
