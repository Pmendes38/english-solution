import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

const items = [
  { icon: ASSETS.icons.pessoas, label: "Professores nativos e certificados" },
  { icon: ASSETS.icons.conversas, label: "Turmas reduzidas e personalizadas" },
  { icon: ASSETS.icons.local, label: "Ambiente moderno e acolhedor" },
  { icon: ASSETS.icons.alvo, label: "Resultados rápidos e comprovados" },
  { icon: ASSETS.icons.shield, label: "Atendimento próximo e humanizado" },
];

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow mx-auto">POR QUE SOMOS REFERÊNCIA NA REGIÃO?</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Mais que uma escola, uma escolha inteligente.
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {items.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center mb-4 hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/5 transition-all">
                  <Image src={item.icon} alt="" width={40} height={40} />
                </div>
                <div className="text-sm text-white font-medium leading-tight max-w-[160px]">
                  {item.label}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
