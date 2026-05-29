import PageHeader from "@/components/PageHeader";
import RafaelEvolution from "@/components/RafaelEvolution";
import GoogleReviews from "@/components/GoogleReviews";
import VideoTestimonials from "@/components/VideoTestimonials";
import SchoolGallery from "@/components/SchoolGallery";
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
        eyebrow="DEPOIMENTOS"
        title="A prova tá na boca de quem estuda aqui."
        description="5.0 no Google, mais de 200 avaliações reais e vídeos de alunos que saíram do 'eu travo' para o 'eu converso'."
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

      <RafaelEvolution />
      <VideoTestimonials />
      <SchoolGallery />
      <GoogleReviews />
      <CTA />
    </>
  );
}
