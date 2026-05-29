import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { communityBenefits } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function Community() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x grid lg:grid-cols-[869fr_839fr] gap-10 lg:gap-16 items-start">
        <Reveal>
          <div className="columns-2 gap-3 [column-fill:_balance]">
            {ASSETS.photos.comunidade.map((src) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt="Comunidade English Solution"
                className="mb-3 w-full h-auto block rounded-2xl border border-white/5 break-inside-avoid"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">MUITO ALÉM DA SALA DE AULA</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Uma comunidade que te<br /> inspira a ir mais longe
          </h2>

          <ul className="mt-10 space-y-6">
            {communityBenefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <Image
                  src={ASSETS.icons.correto}
                  alt=""
                  width={48}
                  height={48}
                  className="flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-bold text-white text-lg">{b.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1.5 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
