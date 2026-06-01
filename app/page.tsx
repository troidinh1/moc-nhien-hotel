import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BookingSearch from "@/components/BookingSearch";
import Benefits from "@/components/Benefits";
import Rooms from "@/components/Rooms";
import Experience from "@/components/Experience";
import Offers from "@/components/Offers";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import { getValidDuration } from "@/data/site";

type HomeProps = {
  searchParams: Promise<{
    duration?: string;
  }>;
};

export default async function Home({ searchParams }: HomeProps) {
  const params = await searchParams;
  const duration = getValidDuration(params.duration);

  return (
    <main className="min-h-screen bg-cream pb-24 text-navy md:pb-0">
      <Header />
      <Hero />
      <BookingSearch duration={duration} />
      <Rooms duration={duration} />
      <Benefits />
      <Experience />
      <Offers />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}