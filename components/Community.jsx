import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { communityBenefits } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function Community() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            {ASSETS.photos.comunidade.slice(0, 2).map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src + i}
                src={src}
                alt={`Comunidade English Solution ${i + 1}`}
                className="w-full h-44 lg:h-52 object-cover rounded-2xl"
              />
            ))}
            {ASSETS.photos.comunidade.slice(0, 2).map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={`b-${src}-${i}`}
                src={ASSETS.photos.comunidade[(i + 2) % ASSETS.photos.comunidade.length] || src}
                alt={`Comunidade English Solution ${i + 3}`}
                className="w-full h-44 lg:h-52 object-cover rounded-2xl"
              />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">MUITO ALÉM DA SALA DE AULA</span>
          <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
            Uma comunidade que te<br /> inspira a ir mais longe
          </h2>

          <ul className="mt-8 space-y-5">
            {communityBenefits.map((b) => (
              <li key={b.title} className="flex items-start gap-3">
                <Image
                  src={ASSETS.icons.correto}
                  alt=""
                  width={28}
                  height={28}
                  className="flex-shrink-0 mt-0.5"
                />
                <div>
                  <h3 className="font-bold text-white">{b.title}</h3>
                  <p className="text-[var(--text-secondary)] text-sm mt-1 leading-relaxed">
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
