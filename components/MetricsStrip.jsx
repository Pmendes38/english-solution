import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { heroStats } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function MetricsStrip() {
  return (
    <section className="container-x -mt-[160px] lg:-mt-[200px] relative z-20 pb-14 lg:pb-20">
      <Reveal>
        <div className="bg-[rgba(1,11,28,0.80)] backdrop-blur-md border border-white/15 rounded-2xl py-7 lg:py-9 grid grid-cols-2 lg:flex lg:items-center lg:divide-x lg:divide-white/15 gap-y-6 gap-x-0 lg:gap-0">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-4 px-6 lg:flex-1 lg:justify-center lg:px-8"
            >
              <Image
                src={ASSETS.iconsWhite[stat.iconKey] || ASSETS.icons[stat.iconKey]}
                alt=""
                width={56}
                height={56}
                className="h-12 w-auto flex-shrink-0"
              />
              <div className="leading-tight">
                <div className="text-white font-serif font-bold text-2xl lg:text-[26px]">
                  {stat.value}
                </div>
                <div className="text-[var(--text-secondary)] text-sm">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
