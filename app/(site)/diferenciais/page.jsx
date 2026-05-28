import Image from "next/image";
import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { differentials } from "@/data/site";
import { ASSETS } from "@/lib/assets";

export const metadata = {
  title: "Diferenciais",
  description:
    "O que torna a English Solution a escola de inglês mais bem avaliada da região.",
};

const photos = [
  ASSETS.photos.comunidade[0],
  ASSETS.photos.depoimentos[1],
  ASSETS.photos.comunidade[1],
  ASSETS.photos.estudante,
  ASSETS.photos.comunidade[2],
  ASSETS.photos.depoimentos[3],
];

export default function DifferentialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="DIFERENCIAIS"
        title="Não é sorte ser a mais bem avaliada."
        description="É método, gente boa e cuidado com cada aluno. Veja o que faz a English Solution ser referência em Valparaíso."
      />

      <section className="py-16 lg:py-20">
        <div className="container-x space-y-12 lg:space-y-20">
          {differentials.map((d, i) => (
            <div
              key={d.title}
              className={`grid lg:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/5 aspect-[5/4]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photos[i % photos.length]}
                  alt={d.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <div className="font-serif font-bold text-[var(--accent)] text-4xl mb-3">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h2 className="heading-display text-3xl lg:text-4xl">{d.title}</h2>
                <p className="mt-5 text-[var(--text-secondary)] leading-relaxed text-lg">
                  {d.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
