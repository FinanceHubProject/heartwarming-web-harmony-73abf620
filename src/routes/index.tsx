import { createFileRoute } from "@tanstack/react-router";
import {
  CalendarDays,
  Coffee,
  GraduationCap,
  Handshake,
  MapPin,
  Megaphone,
  Quote,
  Repeat2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import { Button, CheckList, FeatureCard, SectionHeading } from "@/components/ui";
import CountUp from "@/components/CountUp";
import aparnaAsset from "@/assets/aparna-prabhakar.png.asset.json";
import agrajaAsset from "@/assets/agraja-mokashi.jpg.asset.json";
import meghanaAsset from "@/assets/meghana-rao-rapelli.jpg.asset.json";
import praveenaAsset from "@/assets/praveena-ramani.jpg.asset.json";
import deeptiAsset from "@/assets/deepti.png.asset.json";
import shipraAsset from "@/assets/shipra.png.asset.json";
import img3600 from "@/assets/IMG_3600.jpeg.asset.json";
import img3695 from "@/assets/IMG_3695.jpeg.asset.json";
import img3718 from "@/assets/IMG_3718.jpeg.asset.json";
import img4010 from "@/assets/IMG_4010.jpeg.asset.json";
import img4413 from "@/assets/IMG_4413.jpeg.asset.json";
import img4426 from "@/assets/IMG_4426.jpeg.asset.json";
import CTASection from "@/components/CTASection";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "SAWE — South Asian Women Entrepreneurs Community (Seattle)",
      description:
        "Join 300+ South Asian women entrepreneurs across Greater Seattle. Coffee meets, trainings, collaborations, and referrals — a true business ecosystem.",
    }),
  component: HomePage,
});

const stats = [
  { icon: Users, lead: "300+", label: "Women Entrepreneurs" },
  { icon: MapPin, lead: "Multiple", label: "Seattle Area Chapters" },
  { icon: CalendarDays, lead: "Monthly", label: "Coffee Meets & Trainings" },
  {
    icon: Repeat2,
    lead: "Built-in",
    label: "Collaborations, Referrals & Earning Loops",
  },
  {
    icon: Sparkles,
    lead: "Hands-on",
    label: "Skill Building + Business Visibility",
  },
];

const offerings = [
  {
    icon: Coffee,
    title: "Coffee Meets",
    text: "Structured networking events designed for meaningful introductions, collaborations, and visibility.",
  },
  {
    icon: GraduationCap,
    title: "Trainings & Workshops",
    text: "Practical business trainings on AI, marketing, branding, finance, content creation, growth, and more.",
  },
  {
    icon: Handshake,
    title: "Collaboration & Earning Loops",
    text: "A trusted ecosystem where members support, hire, refer, and collaborate with each other.",
  },
  {
    icon: Megaphone,
    title: "Visibility & Promotion",
    text: "Get featured through social media spotlights, community events, member showcases, and partnerships.",
  },
  {
    icon: TrendingUp,
    title: "Accountability & Growth",
    text: "Build consistency, confidence, and momentum alongside women who understand your journey.",
  },
];

const audience = [
  "You are a South Asian woman entrepreneur in the US",
  "You recently moved and are rebuilding your network",
  "You run a small business, side hustle, or service-based business",
  "You are looking for visibility, referrals, and collaborations",
  "You want to learn, grow, and scale in a supportive ecosystem",
  "You are tired of superficial networking and want genuine connections",
];

const testimonials = [
  {
    quote: "SAWE helped me find my first collaborations in Seattle.",
    name: "Priya Sharma",
    role: "Marketing Consultant",
  },
  {
    quote: "I walked into one coffee meet alone and walked out with a community.",
    name: "Anjali Gupta",
    role: "Creative Director",
  },
  {
    quote: "This is one of the few communities where networking actually turns into business.",
    name: "Neha Patel",
    role: "Founder & CEO",
  },
];

const heroAvatars = [
  { initials: "AP", tone: "bg-plum-600" },
  { initials: "SG", tone: "bg-gold-500" },
  { initials: "LB", tone: "bg-plum-800" },
  { initials: "CM", tone: "bg-plum-400" },
  { initials: "RK", tone: "bg-gold-400" },
];

function HomePage() {
  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden bg-linear-to-br from-plum-700 via-plum-800 to-plum-900 text-cream">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-plum-500/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-gold-500/15 blur-3xl" />

        <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300 ring-1 ring-cream/15">
              <Sparkles className="h-3.5 w-3.5" />
              Greater Seattle Area
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] sm:text-5xl lg:text-6xl">
              Build Your Business with Seattle's Premier South Asian Sisterhood
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/80">
              Join a high-intent community of founders and creators building genuine connections,
              generating referrals, and accelerating growth together.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.joinFormUrl} variant="secondary" withArrow>
                Join the Community
              </Button>
              <Button href={siteConfig.lumaUrl} variant="light">
                Explore Upcoming Events
              </Button>
            </div>
          </div>

          {/* Decorative community panel */}
          <div className="animate-fade-up relative lg:justify-self-end w-full max-w-md">
            <div className="relative z-0 overflow-hidden rounded-3xl ring-1 ring-cream/20 shadow-2xl aspect-[4/3] bg-plum-800">
              <img
                src="/hero_image_new.jpg"
                alt="SAWE Community"
                className="w-full h-full object-cover opacity-90 transition duration-700 hover:opacity-100 hover:scale-105"
              />
            </div>
            <div className="relative z-10 -mt-16 sm:-mt-24 sm:-ml-12 rounded-3xl bg-linear-to-br from-plum-600/95 to-plum-900/95 p-5 ring-1 ring-cream/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <div className="rounded-2xl bg-white p-5 text-ink shadow-soft">
                <div className="flex items-center -space-x-3">
                  {heroAvatars.map((a) => (
                    <span
                      key={a.initials}
                      className={`flex h-11 w-11 items-center justify-center rounded-full ${a.tone} text-sm font-semibold text-cream ring-2 ring-white`}
                    >
                      {a.initials}
                    </span>
                  ))}
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-plum-50 text-xs font-bold text-plum-700 ring-2 ring-white">
                    300+
                  </span>
                </div>
                <p className="mt-4 font-serif text-lg font-semibold text-plum-900">
                  You are in good company
                </p>
                <p className="mt-1 text-sm text-ink/60">
                  South Asian women founders, creators, consultants, and small business owners —
                  growing together.
                </p>
              </div>

              <div className="mt-4 grid gap-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-ink shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                    <Coffee className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-plum-900">Monthly Coffee Meets</p>
                    <p className="text-xs text-ink/60">
                      Seattle · Bellevue · Redmond · Kirkland · Bothell
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/95 p-4 text-ink shadow-card">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                    <Handshake className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-plum-900">Earning Loops</p>
                    <p className="text-xs text-ink/60">
                      Members refer, hire & collaborate with each other.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================== ABOUT ============================ */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <SectionHeading
            eyebrow="About SAWE"
            title="More Than Networking. This Is Your Business Ecosystem."
          />
          <div className="space-y-5 text-ink/75 lg:hidden">
            <p className="leading-relaxed">
              Starting or rebuilding a business in a new country can feel lonely. SAWE gives you a
              space where business conversations turn into real opportunities.
            </p>
            <Button to="/about" variant="outline" withArrow className="mt-2">
              Meet the Team
            </Button>
          </div>
          <div className="hidden lg:grid gap-8 sm:grid-cols-3 text-ink/75">
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                <Users className="h-6 w-6" />
              </div>
              <p className="font-semibold text-plum-900">Immigrant Support</p>
              <p className="text-sm leading-relaxed">
                Starting a business in a new country is tough. Find women who understand your exact
                journey.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                <Handshake className="h-6 w-6" />
              </div>
              <p className="font-semibold text-plum-900">Real Collaboration</p>
              <p className="text-sm leading-relaxed">
                Move past superficial networking. Our members actively refer, hire, and collaborate.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                <TrendingUp className="h-6 w-6" />
              </div>
              <p className="font-semibold text-plum-900">Skill Building</p>
              <p className="text-sm leading-relaxed">
                Practical workshops on marketing, finance, and growth to help you scale confidently.
              </p>
            </div>
            <div className="col-span-3 mt-4">
              <Button to="/about" variant="outline" withArrow>
                Meet the Team
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= COMMUNITY STATS ====================== */}
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
                <p className="mt-3 font-serif text-4xl sm:text-5xl font-bold text-cream">
                  {s.lead}
                </p>
                <p className="mt-2 text-sm font-medium uppercase tracking-wider text-cream/70">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= WHAT WE DO ========================= */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What We Do"
            title="What You'll Find Inside SAWE"
            intro="Five pillars that turn a network into a true business ecosystem."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {offerings.map((o) => (
              <FeatureCard key={o.title} icon={o.icon} title={o.title}>
                {o.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= WHO IS THIS FOR ====================== */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Who Is This For"
            title="SAWE Is For You If…"
            intro="If any of these sound like you, you'll feel right at home."
          />
          <CheckList items={audience} columns={1} className="lg:mt-2" />
        </div>
      </section>

      {/* ======================= UPCOMING EVENTS ====================== */}
      <section className="section">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl bg-plum-50 px-6 py-12 ring-1 ring-plum-100 sm:px-12">
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div>
                <span className="eyebrow text-plum-600">Upcoming Events</span>
                <h2 className="mt-3 text-3xl font-semibold text-plum-900 sm:text-4xl">
                  Learn. Network. Grow.
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-ink/70">
                  From coffee meets and founder mixers to business workshops and social events, SAWE
                  creates consistent opportunities for women entrepreneurs to connect and grow
                  together.
                </p>
                <Button href={siteConfig.lumaUrl} variant="primary" withArrow className="mt-6">
                  View Upcoming Events
                </Button>
              </div>
              <div className="flex justify-center">
                <div className="flex h-40 w-40 flex-col items-center justify-center rounded-3xl bg-white shadow-soft ring-1 ring-plum-100">
                  <CalendarDays className="h-12 w-12 text-plum-600" />
                  <p className="mt-2 text-sm font-semibold text-plum-900">Every Month</p>
                  <p className="text-xs text-ink/60">Across 5 cities</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================= TESTIMONIALS ======================= */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Social Proof"
            title="Real Women. Real Businesses. Real Connections."
            align="center"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl bg-cream p-6 shadow-card ring-1 ring-plum-100 flex flex-col"
              >
                <Quote className="h-8 w-8 text-gold-400" />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-plum-900">
                  “{t.quote}”
                </blockquote>
                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-plum-100 font-bold text-plum-700">
                    {t.name.charAt(0)}
                  </div>
                  <figcaption className="flex flex-col">
                    <span className="text-sm font-bold text-plum-900">{t.name}</span>
                    <span className="text-xs font-medium text-ink/55">{t.role}</span>
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/testimonials" variant="outline" withArrow>
              Read More Stories
            </Button>
          </div>
        </div>
      </section>

      {/* ========================= FINAL CTA ========================== */}
      <CTASection
        title="Ready to Grow With a Community That Truly Understands Your Journey?"
        text="Join a growing ecosystem of South Asian women entrepreneurs building businesses, visibility, confidence, and meaningful collaborations together."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
