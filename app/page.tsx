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

export default function Home() {
  return (
    <>
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
