import Hero from "@/components/Hero";
import MetricsStrip from "@/components/MetricsStrip";
import CertificationsStrip from "@/components/CertificationsStrip";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import Methodology from "@/components/Methodology";
import FeaturedCourses from "@/components/FeaturedCourses";
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
      <CertificationsStrip />
      <GoogleReviews />
      <VideoTestimonials />
      <Methodology />
      <FeaturedCourses />
      <Differentials />
      <Community />
      <LocationPreview />
      <CTA />
      <FAQ />
    </>
  );
}
