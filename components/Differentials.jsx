import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { differentialsHome } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-12 lg:py-16">
      <div className="container-x">
        <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl px-8 lg:px-14 py-10 lg:py-14 grid lg:grid-cols-[1fr_auto_2fr] gap-8 lg:gap-12 items-center">
          <Reveal>
            <span className="eyebrow">POR QUE SOMOS REFERÊNCIA NA REGIÃO?</span>
            <h2 className="heading-display mt-4 text-3xl lg:text-[34px] leading-tight">
              Mais que uma escola,<br /> uma escolha inteligente
            </h2>
          </Reveal>

          <span
            aria-hidden="true"
            className="hidden lg:block w-px h-32 bg-white/15"
          />

          <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {differentialsHome.map((item) => (
              <StaggerItem key={item.label}>
                <div className="flex flex-col items-center text-center px-2">
                  <Image
                    src={ASSETS.icons[item.icon]}
                    alt=""
                    width={72}
                    height={72}
                    className="h-16 w-16 lg:h-[68px] lg:w-[68px] mb-4"
                  />
                  <div className="text-sm text-white leading-snug max-w-[180px]">
                    {item.label}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}
