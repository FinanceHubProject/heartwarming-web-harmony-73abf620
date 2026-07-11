import { Button } from "./ui";

interface CTAAction {
  label: string;
  to?: string;
  href?: string;
}

interface CTASectionProps {
  title: string;
  text: string;
  primary: CTAAction;
  secondary?: CTAAction;
}

/** Final call-to-action band used at the bottom of most pages. */
export default function CTASection({ title, text, primary, secondary }: CTASectionProps) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-plum-800 via-plum-700 to-plum-900 px-6 py-14 text-center text-cream sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-coral-400/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-coral-500/25 blur-3xl" />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-4 leading-relaxed text-cream/80">{text}</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to={primary.to} href={primary.href} variant="secondary" withArrow>
                {primary.label}
              </Button>
              {secondary && (
                <Button to={secondary.to} href={secondary.href} variant="light">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
