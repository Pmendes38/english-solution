import Image from "next/image";
import { ASSETS } from "@/lib/assets";
import { heroStats } from "@/data/site";
import Reveal from "@/components/motion/Reveal";

export default function MetricsStrip() {
  return (
    <section className="container-x pb-14 lg:pb-20">
      <Reveal>
        <div className="bg-[var(--bg-elevated)] border border-white/5 rounded-2xl px-8 lg:px-14 py-7 lg:py-9 grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] gap-y-6 gap-x-0 items-center">
          {heroStats.map((stat, idx) => (
            <div key={stat.label} className="contents">
              <div className="flex items-center gap-5 lg:px-6 first:lg:pl-0 last:lg:pr-0">
                <Image
                  src={ASSETS.iconsWhite[stat.iconKey] || ASSETS.icons[stat.iconKey]}
                  alt=""
                  width={56}
                  height={56}
                  className="h-14 w-14 flex-shrink-0"
                />
                <div className="leading-tight">
                  <div className="text-white font-serif font-bold text-2xl lg:text-[28px]">
                    {stat.value}
                  </div>
                  <div className="text-[var(--text-secondary)] text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
              {idx < heroStats.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden lg:block w-px h-14 bg-white/15"
                />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
