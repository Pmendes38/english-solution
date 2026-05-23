import PageHeader from "@/components/PageHeader";
import CTA from "@/components/CTA";
import { contact, schedule } from "@/data/site";

export const metadata = {
  title: "Localização",
  description:
    "Onde fica a English Solution em Valparaíso de Goiás. Endereço, horários e contato.",
};

export default function LocationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Localização"
        title="Venha nos visitar."
        description="Estamos em Valparaíso de Goiás. Ambiente acolhedor pensado para o aluno se sentir em casa."
      />

      <section className="py-20 bg-white">
        <div className="container-x grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Endereço
              </div>
              <div className="mt-2 font-serif font-bold text-2xl text-brand-navy">
                {contact.addressLine}
              </div>
              <a
                href={contact.mapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary mt-5"
              >
                Como chegar
              </a>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Horários de atendimento
              </div>
              <ul className="mt-3 space-y-2">
                {schedule.map((s) => (
                  <li
                    key={s.label}
                    className="flex justify-between border-b border-slate-100 pb-2"
                  >
                    <span className="font-semibold text-brand-navy">
                      {s.label}
                    </span>
                    <span className="text-slate-600">{s.value}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-xs uppercase tracking-widest text-brand-red font-bold">
                Contato direto
              </div>
              <ul className="mt-3 space-y-2">
                <li>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-navy hover:text-brand-red"
                  >
                    WhatsApp: {contact.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a
                    href={contact.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand-navy hover:text-brand-red"
                  >
                    Instagram: {contact.instagramHandle}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div className="absolute -top-5 -left-5 w-full h-full border-4 border-brand-navy rounded-[32px]" />
            <iframe
              src={contact.mapsEmbedSrc}
              title="Localização da English Solution"
              className="relative z-10 w-full h-[560px] rounded-[32px] shadow-2xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
