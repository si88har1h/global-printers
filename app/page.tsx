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
  "@type": "LocalBusiness",
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
  sameAs: ["https://wa.me/+919414259587"],
  hasMap: "https://www.google.com/maps?cid=16124960375434698796",
  foundingDate: "1996",
  areaServed: [
    { "@type": "City", name: "Bhilwara" },
    { "@type": "State", name: "Rajasthan" },
    { "@type": "Country", name: "India" },
  ],
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
