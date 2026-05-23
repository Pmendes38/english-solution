import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { heroStats } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function MetricsStrip() {
  return (
    <section className="container-x pb-12 lg:pb-16">
      <Reveal>
        <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl px-6 lg:px-8 py-6 lg:py-7 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x lg:divide-white/5">
          {heroStats.map((stat, idx) => (
            <div
              key={stat.label}
              className={`flex items-center gap-4 ${idx === 0 ? "" : "lg:pl-6"}`}
            >
              <Image
                src={ASSETS.icons[stat.iconKey]}
                alt=""
                width={48}
                height={48}
                className="h-12 w-12 flex-shrink-0"
              />
              <div className="leading-tight">
                <div className="text-white font-serif font-bold text-xl lg:text-2xl">
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
