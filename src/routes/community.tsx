import { createFileRoute } from "@tanstack/react-router";
import {
  Briefcase,
  Coffee,
  GraduationCap,
  Handshake,
  Home,
  HeartPulse,
  Landmark,
  Laptop,
  Megaphone,
  MessageSquare,
  Network,
  Package,
  Palette,
  PartyPopper,
  RefreshCw,
  Repeat2,
  ShieldCheck,
  TrendingUp,
  Wrench,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { FeatureCard, SectionHeading } from "@/components/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/community")({
  head: () =>
    seo({
      title: "Our Community — Who Belongs at SAWE",
      description:
        "Discover the industries, founders, creators, and consultants inside SAWE — a trusted ecosystem of South Asian women entrepreneurs growing together.",
    }),
  component: CommunityPage,
});

const different = [
  {
    icon: Network,
    title: "Structured Networking",
    text: "Events designed for real conversations, collaborations, and referrals — not just casual introductions.",
  },
  {
    icon: Handshake,
    title: "Collaboration Over Competition",
    text: "Members actively support each other through our “Earning Loop” culture.",
  },
  {
    icon: GraduationCap,
    title: "Skill Building",
    text: "Workshops on AI, marketing, branding, and finance to help you continuously evolve.",
  },
  {
    icon: Megaphone,
    title: "Business Visibility",
    text: "Showcase your business through social spotlights and community promotions.",
  },
  {
    icon: ShieldCheck,
    title: "A Safe Ecosystem",
    text: "A space where you are understood, encouraged, and supported by women walking similar journeys.",
  },
];

const inside = [
  {
    icon: Coffee,
    title: "Coffee Meets",
    text: "Monthly structured networking meets across multiple Seattle-area chapters.",
  },
  {
    icon: GraduationCap,
    title: "Trainings & Workshops",
    text: "Practical learning sessions designed specifically for entrepreneurs and small business owners.",
  },
  {
    icon: TrendingUp,
    title: "Accountability & Growth",
    text: "A community that helps you stay consistent, visible, and connected.",
  },
  {
    icon: MessageSquare,
    title: "Founder Conversations",
    text: "Honest discussions around entrepreneurship, challenges, growth, mindset, and business building.",
  },
  {
    icon: Repeat2,
    title: "Collaborations & Referrals",
    text: "Members frequently collaborate, hire, refer, and support each other's businesses.",
  },
  {
    icon: PartyPopper,
    title: "Social & Lifestyle Events",
    text: "Beyond business, we also create spaces for friendships, bonding, celebrations, and shared experiences.",
  },
];

const whoYoullMeet = [
  { icon: Briefcase, label: "Coaches & Consultants" },
  { icon: Palette, label: "Artists & Creators" },
  { icon: HeartPulse, label: "Wellness Professionals" },
  { icon: Landmark, label: "Realtors & Financial Experts" },
  { icon: Laptop, label: "Tech Professionals & Founders" },
  { icon: Package, label: "Product-Based Businesses" },
  { icon: Home, label: "Home-Based Entrepreneurs" },
  { icon: Wrench, label: "Service Providers" },
  { icon: RefreshCw, label: "Women Restarting Their Careers or Businesses" },
];

function CommunityPage() {
  return (
    <>
      <PageHeader
        eyebrow="Community"
        title="A Community Built for Real Connections, Real Growth, and Real Business Support"
      />

      {/* =========================== INTRO ============================ */}
      <section className="section bg-white pb-0">
        <div className="container-x max-w-3xl text-lg text-ink/75">
          <p className="text-xl leading-relaxed text-center">
            <span className="font-semibold text-plum-700">Not just another networking group.</span>{" "}
            SAWE is a high-intent ecosystem for South Asian women founders building real
            connections, collaborations, and visibility. We understand the unique journey of
            immigrant entrepreneurs rebuilding their networks from scratch.
          </p>
        </div>
      </section>

      {/* ==================== WHAT MAKES US DIFFERENT ================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="The SAWE Difference"
            title="What Makes Our Community Different"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {different.map((d) => (
              <FeatureCard key={d.title} icon={d.icon} title={d.title}>
                {d.text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== INSIDE THE COMMUNITY ===================== */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Membership Experience"
            title="Inside the SAWE Community"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {inside.map((i) => (
              <div key={i.title} className="rounded-2xl bg-cream p-6 ring-1 ring-plum-100">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-700 text-cream">
                  <i.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-plum-900">{i.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{i.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHO YOU'LL MEET ========================= */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Who You'll Meet Here"
            title="A room full of women building real businesses"
            intro="Inside SAWE, you will meet entrepreneurs from a wide range of industries and stages."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoYoullMeet.map((w) => (
              <div
                key={w.label}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card ring-1 ring-plum-100"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-100 text-gold-600">
                  <w.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-plum-900">{w.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== VISION ============================ */}
      <section className="pb-4">
        <div className="container-x">
          <div className="rounded-3xl bg-linear-to-br from-plum-700 to-plum-900 px-6 py-14 text-center text-cream sm:px-12">
            <span className="eyebrow text-gold-300">Our Vision</span>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-2xl font-semibold leading-snug sm:text-3xl">
              To build one of the most trusted ecosystems for South Asian women entrepreneurs where
              women can grow their businesses, confidence, visibility, and support systems together
              — without feeling alone in the journey.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Join the Community"
        text="Whether you are in your idea stage or already running an established business, SAWE welcomes women who believe in growth, collaboration, and community."
        primary={{ label: "Join SAWE", to: "/join" }}
        secondary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
      />
    </>
  );
}
