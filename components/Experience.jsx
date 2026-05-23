import { experienceImages } from "@/data/site";

export default function Experience() {
  return (
    <section id="experiencia" className="py-24 bg-brand-cream">
      <div className="container-x">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="eyebrow">Experiência</span>
          <h2 className="heading-display text-4xl lg:text-5xl mt-4">
            Muito além da sala de aula.
          </h2>
          <p className="mt-5 text-slate-600 text-lg">
            Eventos, conversation clubs e imersões para você vivenciar o
            idioma — não só estudar.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {experienceImages.map((img, index) => (
            <img
              key={img}
              src={img}
              alt={`Momento da experiência English Solution ${index + 1}`}
              className="rounded-[30px] h-[420px] w-full object-cover shadow-xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
