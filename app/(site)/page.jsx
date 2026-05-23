import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedTestimonial from "@/components/FeaturedTestimonial";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import Methodology from "@/components/Methodology";
import Differentials from "@/components/Differentials";
import Community from "@/components/Community";
import LocationPreview from "@/components/LocationPreview";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MetricsStrip />
      <FeaturedCourses />
      <FeaturedTestimonial />
      <GoogleReviews />
      <VideoTestimonials />
      <Methodology />
      <Differentials />
      <Community />
      <LocationPreview />
      <CTA />
      <FAQ />
    </>
  );
}
