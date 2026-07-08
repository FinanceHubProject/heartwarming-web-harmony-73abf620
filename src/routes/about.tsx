import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SectionHeading } from "@/components/ui";
import { seo } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import aparnaAsset from "@/assets/aparna-prabhakar.png.asset.json";


export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About SAWE — The Team Behind the Community",
      description:
        "Meet Lopamudra Banerjee (Lopa), founder of SAWE, and the founding team building a business ecosystem for South Asian women entrepreneurs in Greater Seattle.",
    }),
  component: AboutPage,
});

const founderBio = [
  "Lopamudra Banerjee — Lopa to most people who know her — did not set out to build a community.",
  "When she relocated to the United States in 2022, she brought with her over 15 years of experience as a health coach and nutritionist, a background in enterprise sales at one of India's leading publications (The Times of India), an ACE certification, a 200-hour yoga certification, and a career she had built with intention across Bangalore and beyond.",
  "What she did not have was a network. Or a room full of people who understood what it meant to start over, from scratch, in a country that did not yet know your name.",
  "That gap — that particular loneliness of the accomplished immigrant woman — is what SAWE was built to close.",
  "Lopa founded SAWE (South Asian Women Entrepreneurs) as a high-intent business ecosystem for South Asian and immigrant women entrepreneurs in the Greater Seattle area. The first meeting happened in February 2025 with just four women. What began as a small gathering of women who wanted more than surface-level networking has since grown into a structured community of 400+ entrepreneurs, with Coffee Meets, business trainings, collaboration circles, and a paid Academy on the way.",
  "She is also the founder of World of WOW Fitness, her health coaching and nutrition practice focused on women over 40, perimenopause, and South Asian dietary health. She is a graduate of the Startup425 accelerator (Founder Institute, Cohort 4, 2026) and a former Gladrags Mrs India 2009 finalist.",
  "Lopa's work sits at the intersection of community, entrepreneurship, and reinvention. Her own story — from Ranchi to Kolkata to Bangalore to Singapore to Seattle, from employee to entrepreneur to ecosystem builder — is the foundation everything at SAWE stands on.",
];

const team = [
  {
    name: "Aparna Prabhakar",
    role: "Chief Operations Officer (COO)",
    image: aparnaAsset.url,
    bio: "Aparna leads operations and community systems at SAWE, ensuring smooth execution across events, member experience, backend coordination, and organizational processes. She plays a key role in helping the community scale with structure, consistency, and operational excellence.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Meet the Team Behind SAWE"
        subtitle="The women building a trusted ecosystem where South Asian women entrepreneurs do not grow alone."
      />

      {/* FOUNDER */}
      <section className="section bg-white">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-plum-600 to-plum-900 p-8 text-center shadow-soft">
              <img
                src="/founder_pic.jpg"
                alt="Lopamudra Banerjee"
                className="mx-auto h-36 w-36 rounded-full object-cover ring-4 ring-cream/20 shadow-md transition duration-500 hover:scale-105"
              />
              <p className="mt-5 font-serif text-2xl font-bold text-cream">Lopamudra Banerjee</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-300">
                Founder, SAWE
              </p>
              <p className="mt-3 text-sm text-cream/70">South Asian Women Entrepreneurs</p>
            </div>
          </div>

          <div>
            <span className="eyebrow text-plum-600">The Woman Behind SAWE</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-plum-900 sm:text-4xl">
              A community born from her own journey
            </h2>
            <div className="mt-5 space-y-4 text-ink/75">
              {founderBio.map((para, i) => (
                <p key={i} className="leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            <figure className="mt-7 rounded-2xl bg-plum-50 p-6 ring-1 ring-plum-100">
              <Quote className="h-7 w-7 text-coral-500" />
              <blockquote className="mt-3 font-serif text-xl leading-relaxed text-plum-900">
                She believes that belonging is not a soft outcome. It is a business advantage.
              </blockquote>
            </figure>
          </div>
        </div>
      </section>

      {/* FOUNDING TEAM */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Founding Team"
            title="The Leadership Circle"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-1 max-w-2xl mx-auto">
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
                <h3 className="mt-5 font-serif text-xl font-semibold text-plum-900">
                  {m.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-plum-600">
                  {m.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{m.bio}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Build This Ecosystem With Us?"
        text="Join a growing community of South Asian women entrepreneurs — or come to a Coffee Meet to see the community in action."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
