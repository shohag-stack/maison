import Hero from "@/components/hero";
import About from "@/components/About";
import StatsBar from "@/components/StatsBar";
import FeaturedDishesh from "@/components/FeaturedDishesh";
import ReservationCta from "@/components/ReservationCta";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";

export default function HomePage() {
  return (
    <>
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
