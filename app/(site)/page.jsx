import Hero from "@/components/Hero";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import Methodology from "@/components/Methodology";
import Courses from "@/components/Courses";
import Differentials from "@/components/Differentials";
import Experience from "@/components/Experience";
import LocationPreview from "@/components/LocationPreview";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <GoogleReviews />
      <VideoTestimonials />
      <Methodology />
      <Courses />
      <Differentials />
      <Experience />
      <LocationPreview />
      <CTA />
      <FAQ />
    </>
  );
}
