import Hero from "@/components/hero";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import FeaturedDishesh from "@/components/FeaturedDishesh";
import ReservationCta from "@/components/ReservationCta";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import LenisProvider from "@/components/lenis/LenisProvider";

export default function HomePage() {
  return (
    <>
      <LenisProvider />
      <Hero />
      <About />
      <StatsBar />
      <FeaturedDishesh />
      <ReservationCta />
      <Testimonials />
      <Gallery />
    </>
  );
}
