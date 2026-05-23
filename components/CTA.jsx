import { contact } from "@/data/site";

export default function CTA() {
  return (
    <section
      id="agendar"
      className="relative py-24 bg-gradient-to-r from-brand-navy-dark via-brand-navy to-brand-navy-light text-white text-center overflow-hidden"
    >
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-red rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-brand-navy-light rounded-full blur-3xl opacity-30" />

      <div className="container-x relative z-10 max-w-4xl">
        <span className="eyebrow text-brand-red">Aula experimental gratuita</span>
        <h2 className="font-serif font-bold text-4xl lg:text-6xl leading-tight mt-4">
          Seu inglês começa agora.
        </h2>

        <p className="mt-6 text-lg text-white/80 leading-relaxed">
          Agende sua aula experimental e descubra como aprender inglês falando
          de verdade.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-5"
          >
            Agendar Aula Experimental
          </a>
          <a
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light text-lg px-8 py-5"
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
