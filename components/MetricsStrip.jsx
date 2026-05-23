import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import Reveal from "@/components/motion/Reveal";

const metrics = [
  {
    icon: ASSETS.icons.pessoas,
    value: "+190",
    label: "alunos transformados",
  },
  {
    icon: ASSETS.icons.estrela,
    value: "5.0",
    label: "no Google",
  },
  {
    icon: ASSETS.icons.conversas,
    value: "100%",
    label: "foco em conversação",
  },
  {
    icon: ASSETS.icons.shield,
    value: "Método",
    label: "exclusivo e comprovado",
  },
];

export default function MetricsStrip() {
  return (
    <section className="container-x -mt-6 lg:-mt-8 relative z-20 pb-12 lg:pb-16">
      <Reveal>
        <div className="bg-white rounded-2xl shadow-2xl p-6 lg:p-8 grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--brand-gray-light)]">
          {metrics.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center text-center px-4 py-4 lg:py-0"
            >
              <div className="w-14 h-14 rounded-2xl bg-[var(--brand-blue)] flex items-center justify-center mb-4 shadow-sm">
                <Image
                  src={m.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="h-9 w-9"
                />
              </div>
              <div className="text-[var(--brand-gray-dark)] font-serif font-bold text-2xl lg:text-3xl leading-tight">
                {m.value}
              </div>
              <div className="text-[var(--brand-gray-dark)]/60 text-sm mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
