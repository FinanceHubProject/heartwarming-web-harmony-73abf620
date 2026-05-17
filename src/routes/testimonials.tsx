import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SectionHeading } from "@/components/ui";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
});

// Testimonials sourced from the SAWE website content.
// TODO: add member names, businesses, and photos as permissions allow.
const testimonials = [
  {
    quote: "SAWE helped me find my first collaborations in Seattle.",
    tone: "from-plum-500 to-plum-800",
  },
  {
    quote:
      "I walked into one coffee meet alone and walked out with a community.",
    tone: "from-gold-400 to-gold-600",
  },
  {
    quote:
      "This is one of the few communities where networking actually turns into business.",
    tone: "from-plum-600 to-plum-900",
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="Real Women. Real Businesses. Real Connections."
        subtitle="What members say about growing their businesses inside the SAWE community."
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.quote}
                className="flex flex-col rounded-2xl bg-cream p-7 shadow-card ring-1 ring-plum-100"
              >
                <Quote className="h-9 w-9 text-gold-400" />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-plum-900">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span
                    className={`h-11 w-11 rounded-full bg-linear-to-br ${t.tone}`}
                  />
                  <span className="text-sm font-semibold text-ink/60">
                    SAWE Member
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Share your story */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-3xl bg-plum-50 p-10 text-center ring-1 ring-plum-100">
            <SectionHeading
              eyebrow="Your Story Matters"
              title="Grew with SAWE? We'd love to hear it."
              intro="Member stories help other South Asian women entrepreneurs see what's possible. Share yours and you may be featured here."
              align="center"
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      <CTASection
        title="Write Your Own SAWE Story"
        text="Join a community where networking turns into real businesses, collaborations, and lifelong connections."
        primary={{ label: "Become a Member", to: "/join" }}
        secondary={{ label: "Share Your Story", to: "/contact" }}
      />
    </>
  );
}
