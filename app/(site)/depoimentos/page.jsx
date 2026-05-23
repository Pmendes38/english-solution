import PageHeader from "@/components/PageHeader";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import CTA from "@/components/CTA";
import { contact } from "@/data/site";

export const metadata = {
  title: "Depoimentos",
  description:
    "Veja avaliações reais do Google e depoimentos em vídeo de alunos da English Solution.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Depoimentos"
        title="Quem viveu a English Solution conta."
        description="5.0 no Google com mais de 190 avaliações reais e depoimentos em vídeo de alunos que destravaram a fala."
      >
        <a
          href={contact.googleReviewsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Ver no Google
        </a>
      </PageHeader>

      <VideoTestimonials />
      <GoogleReviews />
      <CTA />
    </>
  );
}
