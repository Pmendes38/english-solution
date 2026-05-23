import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { differentialsHome } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Differentials() {
  return (
    <section id="diferenciais" className="py-16 lg:py-20">
      <div className="container-x grid lg:grid-cols-[1fr_1.5fr] gap-12 items-center">
        <Reveal>
          <span className="eyebrow">POR QUE SOMOS REFERÊNCIA NA REGIÃO?</span>
          <h2 className="heading-display mt-4 text-3xl lg:text-4xl">
            Mais que uma escola,<br /> uma escolha inteligente
          </h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {differentialsHome.map((item) => (
            <StaggerItem key={item.label}>
              <div className="flex flex-col items-center text-center">
                <Image
                  src={ASSETS.icons[item.icon]}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 mb-4"
                />
                <div className="text-sm text-white leading-tight max-w-[160px]">
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
