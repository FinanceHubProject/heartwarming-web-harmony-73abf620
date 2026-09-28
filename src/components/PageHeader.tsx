import type { ReactNode } from "react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  media?: ReactNode;
}

/** Reusable banner for the top of inner pages. */
export default function PageHeader({ eyebrow, title, subtitle, actions, media }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-plum-800 via-plum-700 to-plum-900 text-cream">
      {/* Warm coral + plum glow accents to break up the heavy background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-coral-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-coral-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 right-1/3 h-56 w-56 rounded-full bg-plum-500/25 blur-3xl" />

      <div
        className={`container-x relative py-10 sm:py-12 lg:py-14 ${
          media ? "grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12" : ""
        }`}
      >
        <div>
          {eyebrow && <span className="eyebrow text-gold-300">{eyebrow}</span>}
          <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-cream/80">{subtitle}</p>
          )}
          {actions && <div className="mt-7 flex flex-wrap gap-4">{actions}</div>}
        </div>
        {media && <div className="min-w-0">{media}</div>}
      </div>
    </section>
  );
}
