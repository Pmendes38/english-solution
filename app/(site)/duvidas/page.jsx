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
        eyebrow="Dúvidas"
        title="Perguntas frequentes."
        description="Reunimos aqui as dúvidas mais comuns. Não achou a sua? Chama no WhatsApp."
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
