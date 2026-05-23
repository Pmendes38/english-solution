import { experienceImages } from "@/data/site";
import Reveal from "@/components/motion/Reveal";
import { StaggerGroup, StaggerItem } from "@/components/motion/Stagger";

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 lg:py-28">
      <div className="container-x">
        <Reveal className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow mx-auto">EXPERIÊNCIA</span>
          <h2 className="heading-display mt-5 text-4xl lg:text-5xl">
            Muito além da sala de aula.
          </h2>
          <p className="mt-6 text-[var(--text-secondary)] text-lg">
            Eventos, conversation clubs e imersões para você vivenciar o
            idioma, não só estudar.
          </p>
        </Reveal>

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {experienceImages.map((img, index) => (
            <StaggerItem key={img}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img}
                alt={`Momento English Solution ${index + 1}`}
                className="rounded-2xl h-[420px] w-full object-cover hover:scale-[1.02] transition-transform duration-500"
              />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
