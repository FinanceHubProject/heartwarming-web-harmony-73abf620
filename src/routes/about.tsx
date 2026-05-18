import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SectionHeading } from "@/components/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About SAWE — Our Story & Founder Lopamudra Banerjee",
      description:
        "Meet the team behind SAWE and learn how we're building a business ecosystem for South Asian women entrepreneurs across the Greater Seattle area.",
    }),
  component: AboutPage,
});

const founderBio = [
  "Lopamudra Banerjee (Lopa) founded SAWE to support South Asian women entrepreneurs across Greater Seattle.",
  "After moving to the US, she experienced the challenge of rebuilding networks and visibility firsthand. SAWE was born to provide genuine connections, practical support, and growth opportunities.",
  "With her background in community building and marketing, she has grown SAWE into a thriving network of founders, creators, and consultants.",
];

const team = [
  {
    name: "Aparna Prabhakar",
    role: "Chief Operations Officer (COO)",
    initials: "AP",
    tone: "from-plum-500 to-plum-800",
    bio: "Aparna leads operations and community systems, ensuring smooth execution across events, member experience, and organizational processes.",
  },
  {
    name: "Sameera Goteti",
    role: "Chief Product Officer (CPO)",
    initials: "SG",
    tone: "from-gold-400 to-gold-600",
    bio: "Sameera oversees product thinking and member experience, building meaningful programs that support the evolving needs of women entrepreneurs.",
  },
  {
    name: "Chetna Mahajan",
    role: "Chief Technology Officer (CTO)",
    initials: "CM",
    tone: "from-plum-400 to-plum-700",
    bio: "Chetna leads the technology vision, driving innovation and AI integration to build future-ready platforms for the community.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us / Leadership Circle"
        title="Meet the Team Behind SAWE"
        subtitle="The women building a trusted ecosystem where South Asian women entrepreneurs do not grow alone."
      />

      {/* ========================== FOUNDER =========================== */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-plum-600 to-plum-900 p-8 text-center shadow-soft">
              <span className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-cream/10 font-serif text-4xl font-bold text-gold-300 ring-2 ring-cream/20">
                LB
              </span>
              <p className="mt-5 font-serif text-2xl font-bold text-cream">
                Lopamudra Banerjee
              </p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-300">
                Founder, SAWE
              </p>
              <p className="mt-3 text-sm text-cream/70">
                South Asian Women Entrepreneurs
              </p>
            </div>
          </div>

          <div>
            <span className="eyebrow text-plum-600">The Founder</span>
            <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
              A community born from her own journey
            </h2>
            <div className="mt-5 space-y-4 text-ink/75">
              {founderBio.map((para) => (
                <p key={para.slice(0, 24)} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <figure className="mt-7 rounded-2xl bg-plum-50 p-6 ring-1 ring-plum-100">
              <Quote className="h-7 w-7 text-gold-400" />
              <blockquote className="mt-3 font-serif text-xl leading-relaxed text-plum-900">
                Her vision is simple — to create a powerful ecosystem where
                South Asian women entrepreneurs do not grow alone.
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* ======================= FOUNDING TEAM ======================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Founding Team"
            title="The Leadership Circle"
            intro="A founding team bringing operations, product, and technology expertise to the community."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {team.map((m) => (
              <article
                key={m.name}
                className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-plum-100"
              >
                <span
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br ${m.tone} font-serif text-xl font-bold text-cream`}
                >
                  {m.initials}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-plum-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-plum-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">
                  {m.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Build This Ecosystem With Us?"
        text="Join a growing community of South Asian women entrepreneurs — or reach out to collaborate, speak, or partner with SAWE."
        primary={{ label: "Become a Member", to: "/join" }}
        secondary={{ label: "Get in Touch", to: "/contact" }}
      />
    </>
  );
}
