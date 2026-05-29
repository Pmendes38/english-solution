import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { communityBenefits } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function Community() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container-x flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-center">
        <Reveal className="w-full lg:w-[720px] flex-shrink-0">
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[1]}
              alt="Comunidade English Solution"
              className="w-full aspect-[4/5] object-cover block rounded-2xl border border-white/5"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[2]}
              alt="Comunidade English Solution"
              className="w-full aspect-[4/5] object-cover block rounded-2xl border border-white/5"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[0]}
              alt="Sala de aula English Solution"
              className="col-span-2 w-full aspect-[16/9] object-cover block rounded-2xl border border-white/5"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="w-full lg:max-w-[480px]">
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
