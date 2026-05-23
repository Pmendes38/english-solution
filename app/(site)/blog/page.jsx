import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";

export const metadata = {
  title: "Blog",
  description:
    "Conteúdo da English Solution sobre aprendizado de inglês, dicas de conversação e novidades da escola.",
};

export default function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="BLOG"
        title="Conteúdo que acelera seu inglês."
        description="Dicas, histórias e novidades para quem quer destravar a fala e evoluir com consistência."
      />

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-3xl p-12 lg:p-20 text-center max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-6">
              Em breve
            </div>
            <h2 className="heading-display text-3xl lg:text-4xl">
              Estamos preparando conteúdo bom pra você.
            </h2>
            <p className="mt-5 text-[var(--text-secondary)] leading-relaxed">
              Em breve você vai encontrar aqui artigos, dicas e histórias reais
              de alunos. Enquanto isso, siga a gente no Instagram e fique por
              dentro.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
              <a
                href="https://instagram.com/englishsolutionschool"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Seguir no Instagram
              </a>
              <Link href="/cursos" className="btn-secondary">
                Ver cursos
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
