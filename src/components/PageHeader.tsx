interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

/** Reusable banner for the top of inner pages. */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-plum-800 text-cream">
      {/* Decorative glow accents */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-plum-600/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-gold-500/15 blur-3xl" />

      <div className="container-x relative py-16 sm:py-20 lg:py-24">
        {eyebrow && <span className="eyebrow text-gold-300">{eyebrow}</span>}
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
