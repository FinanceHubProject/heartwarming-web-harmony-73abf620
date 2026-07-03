import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Coffee,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { Button, CheckList, FeatureCard, SectionHeading } from "@/components/ui";
import CTASection from "@/components/CTASection";
import { seo } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "SAWE — South Asian Women Entrepreneurs Community (Seattle)",
      description:
        "A community for South Asian women running businesses in the US. Coffee meets, trainings, collaborations, and referrals across Greater Seattle.",
    }),
  component: HomePage,
});

const stats = [
  { icon: Users, lead: "400+", label: "Women Entrepreneurs" },
  { icon: MapPin, lead: "5", label: "Seattle Area Chapters" },
  { icon: CalendarDays, lead: "Weekly", label: "Coffee Meets" },
  { icon: GraduationCap, lead: "Practical", label: "Business Trainings" },
  { icon: Handshake, lead: "Real", label: "Collaborations & Referrals" },
];

const pillars = [
  {
    icon: Coffee,
    title: "Connection — Coffee Meets & Events",
    text: "Friendly, structured meetups where you introduce yourself, meet other women, and find people to work with.",
  },
  {
    icon: GraduationCap,
    title: "Coaching — Trainings & Workshops",
    text: "Practical sessions on AI, marketing, personal branding, finance, social media, public speaking, lead generation, e-commerce, sales, pricing, legal basics, Instagram growth, and business growth.",
  },
  {
    icon: Handshake,
    title: "Community — Collaboration & Visibility",
    text: "Members hire each other, refer each other, and work together. Get seen through social features, events, showcases, and partnerships.",
  },
];

const audience = [
  "You are a South Asian woman running a business in the US",
  "You recently moved and are building your network from scratch",
  "You have a small business, a side hustle, or offer a service",
  "You want more visibility, referrals, and collaborations",
  "You want to keep learning and growing",
  "You are done with surface-level networking and want something real",
];

const testimonials = [
  { quote: "SAWE helped me find my first collaborations in Seattle.", name: "Community Member" },
  { quote: "I walked into one Coffee Meet alone and walked out with a community.", name: "Community Member" },
  { quote: "This is one of the few communities where networking actually turns into business.", name: "Community Member" },
];

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-plum-700 via-plum-800 to-plum-900 text-cream">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-plum-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300 ring-1 ring-cream/15">
              <Sparkles className="h-3.5 w-3.5" />
              Greater Seattle Area
            </span>
            <h1 className="mt-5 font-serif text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              A Community Built for South Asian Women Entrepreneurs in the US
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              SAWE is a community for South Asian women who are running a business in the US. Here, you meet other women like you, build real friendships, work together, and help each other grow.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.joinFormUrl} variant="secondary" withArrow>
                Join the Community
              </Button>
              <Button href={siteConfig.lumaUrl} variant="light">
                Explore Upcoming Coffee Meets
              </Button>
            </div>
          </div>

          <div className="animate-fade-up relative lg:justify-self-end w-full max-w-md">
            <div className="relative z-0 overflow-hidden rounded-3xl ring-1 ring-cream/20 shadow-2xl aspect-[4/3] bg-plum-800">
              <img src="/hero_image.png" alt="SAWE Community" className="w-full h-full object-cover opacity-90 transition duration-700 hover:opacity-100 hover:scale-105" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS SAWE */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="What is SAWE?"
            title="More Than Networking. This Is Your Business Community."
            align="center"
          />
          <div className="mx-auto mt-8 max-w-3xl space-y-5 text-center text-ink/75">
            <p className="leading-relaxed">
              Starting or rebuilding a business in a new country is hard. And it can feel very lonely, especially when you do not have the right people around you.
            </p>
            <p className="leading-relaxed font-semibold text-plum-900">
              SAWE was built to change that.
            </p>
            <p className="leading-relaxed">
              We bring together South Asian women who are running businesses across the Greater Seattle area. Whether you sell a service or product, run a small business, or are just starting out, SAWE gives you a place to meet the right people, learn useful things, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-plum-800 py-14 text-cream">
        <div className="container-x">
          <p className="text-center font-serif text-2xl font-semibold sm:text-3xl">
            Growing Together
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cream/10 text-gold-300">
                  <s.icon className="h-6 w-6" />
                </span>
                <p className="mt-3 font-serif text-3xl sm:text-4xl font-bold text-cream">
                  {s.lead}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-cream/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 C's */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our 3 C's"
            title="What You Will Find Inside SAWE"
            intro="SAWE runs on three pillars — Connection, Coaching, and Community."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <FeatureCard key={p.title} icon={p.icon} title={p.title}>
                {p.text}
              </FeatureCard>
            ))}
          </div>

          <div className="mt-10 mx-auto max-w-3xl rounded-2xl bg-coral-50 p-6 ring-1 ring-coral-100 text-center">
            <Megaphone className="mx-auto h-8 w-8 text-coral-600" />
            <h3 className="mt-3 font-serif text-xl font-semibold text-plum-900">Visibility</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/75">
              Get seen. Through social media features, events, member showcases, and partnerships, SAWE helps people notice your work.
            </p>
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Who Is This For"
            title="SAWE Is For You If…"
            intro="If any of these sound like you, you'll feel right at home."
          />
          <CheckList items={audience} columns={1} className="lg:mt-2" />
        </div>
        <div className="container-x mt-10 text-center">
          <Button href={siteConfig.lumaUrl} variant="primary" withArrow>
            View Upcoming Events
          </Button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Community Voices"
            title="Real Women. Real Businesses. Real Connections."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-plum-100 flex flex-col"
              >
                <Quote className="h-8 w-8 text-coral-500" />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-plum-900">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-plum-700">
                  — {t.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <CTASection
        title="Ready to Grow With People Who Get It?"
        text="Join a growing community of South Asian women who are building businesses, finding visibility, gaining confidence, and making real connections together."
        primary={{ label: "Become a Member", href: siteConfig.memberFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
      />

    </>
  );
}
