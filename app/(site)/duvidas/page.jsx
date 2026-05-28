import PageHeader from "@/components/PageHeader";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import { contact } from "@/data/site";

export const metadata = {
  title: "Dúvidas",
  description:
    "Perguntas frequentes sobre cursos, metodologia, valores e estrutura da English Solution.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Tira sua dúvida antes da primeira aula."
        description="Juntamos aqui o que mais perguntam pra gente. Não achou a sua? Chama no WhatsApp que a gente responde rapidinho."
      >
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
        >
          Falar no WhatsApp
        </a>
      </PageHeader>

      <FAQ showAllLink={false} />
      <CTA />
    </>
  );
}
