import Link from "next/link";
import { contact, schedule } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function LocationPreview() {
  return (
    <section id="localizacao" className="py-24 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <span className="eyebrow">Onde estamos</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            Venha conhecer a escola.
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            Estamos em Valparaíso de Goiás, com ambiente acolhedor pensado
            para o aluno se sentir em casa desde o primeiro dia.
          </p>

          <div className="mt-8 space-y-5">
            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Endereço
              </div>
              <div className="mt-1 font-semibold text-brand-navy">
                {contact.addressLine}
              </div>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Horários
              </div>
              <ul className="mt-1 space-y-1">
                {schedule.map((s) => (
                  <li key={s.label} className="font-semibold text-brand-navy">
                    {s.label}:{" "}
                    <span className="font-normal text-slate-600">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Contato
              </div>
              <ul className="mt-1 space-y-1 text-slate-600">
                <li>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-navy hover:text-brand-red"
                  >
                    {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-navy hover:text-brand-red"
                  >
                    {contact.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a
              href={contact.mapsQuery}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Como chegar
            </a>
            <Link href="/localizacao" className="btn-secondary">
              Ver página completa
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="relative">
          <div className="absolute -top-5 -left-5 w-full h-full border-4 border-brand-navy rounded-[32px]" />
          <iframe
            src={contact.mapsEmbedSrc}
            title="Localização da English Solution"
            className="relative z-10 w-full h-[480px] rounded-[32px] shadow-2xl border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  );
}
