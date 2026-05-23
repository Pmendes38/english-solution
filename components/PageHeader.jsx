export default function PageHeader({ eyebrow, title, description, children }) {
  return (
    <section className="relative bg-gradient-to-br from-brand-navy via-brand-navy to-brand-navy-light text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-red rounded-full blur-3xl opacity-30" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-brand-navy-light rounded-full blur-3xl opacity-40" />

      <div className="container-x relative z-10 max-w-4xl">
        {eyebrow && (
          <span className="inline-block uppercase tracking-[0.25em] text-xs font-semibold text-brand-red">
            {eyebrow}
          </span>
        )}
        <h1 className="font-serif font-bold text-4xl lg:text-6xl mt-4 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
