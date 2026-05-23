import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

const benefits = [
  {
    title: "Eventos e conversação toda semana",
    description: "Pratique, faça amigos e perca o medo.",
  },
  {
    title: "Imersão cultural",
    description: "Atividades que aproximam você do mundo real.",
  },
  {
    title: "Ambiente que motiva",
    description: "Energia positiva para você evoluir sempre.",
  },
];

export default function Community() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-14 items-center">
        <Reveal>
          <div className="grid grid-cols-2 gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[0]}
              alt="Sala de aula English Solution"
              className="col-span-2 w-full h-64 lg:h-72 object-cover rounded-2xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[1]}
              alt="Reunião de alunos"
              className="w-full h-48 object-cover rounded-2xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={ASSETS.photos.comunidade[2]}
              alt="Grupo casual de alunos"
              className="w-full h-48 object-cover rounded-2xl"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="eyebrow">MUITO ALÉM DA SALA DE AULA</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Uma comunidade que te inspira a ir mais longe.
          </h2>

          <ul className="mt-9 space-y-5">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-4">
                <span className="w-6 h-6 rounded-full bg-[var(--accent)] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
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
