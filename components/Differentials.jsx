import { differentials } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-white">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <Reveal className="relative">
          <div className="absolute -top-6 -right-6 w-full h-full border-4 border-brand-red rounded-[40px]" />
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
            alt="Professor e alunos em aula da English Solution"
            className="rounded-[40px] shadow-2xl w-full h-[560px] object-cover relative z-10"
          />
        </Reveal>

        <div>
          <Reveal>
            <span className="eyebrow">Diferenciais</span>
            <h2 className="heading-display text-4xl lg:text-5xl mt-4 leading-tight">
              Por que somos referência na região?
            </h2>
          </Reveal>

          <StaggerGroup className="mt-10 grid gap-4" as="ul">
            {differentials.map((item) => (
              <StaggerItem
                key={item.title}
                as="li"
                className="flex items-start gap-4 bg-brand-cream/60 rounded-2xl p-5 border border-slate-200"
              >
                <span
                  aria-hidden="true"
                  className="w-10 h-10 rounded-full bg-brand-red flex items-center justify-center text-white font-bold flex-shrink-0"
                >
                  ✓
                </span>
                <div>
                  <h3 className="font-bold text-brand-navy">{item.title}</h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
