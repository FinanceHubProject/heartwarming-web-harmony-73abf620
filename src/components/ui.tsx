import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AppLink } from "./AppLink";

/* ----------------------------- Button ----------------------------- */

type ButtonVariant = "primary" | "secondary" | "outline" | "light";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  variant?: ButtonVariant;
  withArrow?: boolean;
  className?: string;
  target?: string;
  rel?: string;
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-plum-700 text-cream hover:bg-plum-800",
  secondary: "bg-gold-400 text-plum-900 hover:bg-gold-300",
  outline:
    "border-2 border-plum-600 text-plum-700 hover:bg-plum-700 hover:text-cream hover:border-plum-700",
  light: "bg-cream text-plum-800 hover:bg-white",
};

export function Button({
  children,
  to,
  href,
  variant = "primary",
  withArrow = false,
  className = "",
  target,
  rel,
}: ButtonProps) {
  const classes = `${buttonBase} ${buttonVariants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (to) {
    return (
      <AppLink to={to} className={classes}>
        {inner}
      </AppLink>
    );
  }
  const isExternal = href && /^https?:/i.test(href);
  return (
    <a
      href={href ?? "#"}
      className={classes}
      target={target ?? (isExternal ? "_blank" : undefined)}
      rel={rel ?? (isExternal ? "noopener noreferrer" : undefined)}
    >
      {inner}
    </a>
  );
}

/* ------------------------- Section heading ------------------------- */

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";
  const titleColor = tone === "light" ? "text-cream" : "text-plum-900";
  const introColor = tone === "light" ? "text-cream/80" : "text-ink/70";
  const eyebrowColor = tone === "light" ? "text-gold-300" : "text-plum-600";

  return (
    <div className={`${alignCls} max-w-2xl ${className}`}>
      {eyebrow && <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>}
      <h2 className={`mt-3 text-3xl font-semibold leading-tight sm:text-4xl ${titleColor}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}

/* -------------------------- Feature card --------------------------- */

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <div className="group rounded-2xl bg-white p-6 shadow-card ring-1 ring-plum-100 transition duration-200 hover:-translate-y-1 hover:shadow-soft">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-50 text-plum-700 transition-colors group-hover:bg-plum-700 group-hover:text-cream">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-plum-900">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink/70">{children}</p>
    </div>
  );
}

/* --------------------------- Check list ---------------------------- */

interface CheckListProps {
  items: string[];
  columns?: 1 | 2;
  className?: string;
}

export function CheckList({ items, columns = 1, className = "" }: CheckListProps) {
  return (
    <ul className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""} ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-100 text-gold-600">
            <Check className="h-3.5 w-3.5" strokeWidth={3} />
          </span>
          <span className="leading-relaxed text-ink/80">{item}</span>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ Pill ------------------------------- */

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-plum-50 px-3 py-1 text-sm font-medium text-plum-700 ring-1 ring-plum-100">
      {children}
    </span>
  );
}
