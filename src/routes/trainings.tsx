import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  Calculator,
  Clock,
  Cpu,
  GraduationCap,
  Handshake,
  HeartPulse,
  Layers,
  ListChecks,
  Megaphone,
  Palette,
  PenTool,
  Rocket,
  TrendingUp,
  User,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Button, SectionHeading } from "@/components/ui";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/trainings")({
  head: () =>
    seo({
      title: "Trainings & Workshops — Build Skills With SAWE",
      description:
        "Practical business workshops on AI, marketing, branding, finance, content, and growth — designed for South Asian women entrepreneurs.",
    }),
  component: TrainingsPage,
});

const formats = [
  {
    icon: Clock,
    title: "60-Minute Trainings",
    text: "Short, focused sessions designed to introduce practical concepts, tools, and strategies that entrepreneurs can immediately apply to their businesses.",
    tag: "Quick & practical",
  },
  {
    icon: Layers,
    title: "Long-Format Trainings",
    text: "Deep-dive workshops and implementation-based programs designed for serious learning, execution, and business growth.",
    tag: "May be paid",
  },
];

const topics = [
  { icon: Megaphone, label: "Marketing & Social Media" },
  { icon: Cpu, label: "AI & Technology" },
  { icon: TrendingUp, label: "Business Growth" },
  { icon: Handshake, label: "Sales & Networking" },
  { icon: Users, label: "Leadership & Communication" },
  { icon: User, label: "Personal Branding" },
  { icon: Calculator, label: "Finance & Taxes" },
  { icon: PenTool, label: "Content Creation" },
  { icon: ListChecks, label: "Productivity & Systems" },
  { icon: HeartPulse, label: "Health & Wellness" },
  { icon: Brain, label: "Mindset & Confidence" },
  { icon: Rocket, label: "Entrepreneurship & Startup Growth" },
  { icon: Palette, label: "Creative & Skill-Based Workshops" },
];

function TrainingsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Trainings / SAWE Academy"
        title="Learning, Growth & Skill Building for Women Entrepreneurs"
        subtitle="Trainings designed to help South Asian women entrepreneurs become more confident, visible, skilled, and business-ready."
      />

      {/* ============================ INTRO =========================== */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl space-y-5 text-lg text-ink/75">
          <p className="leading-relaxed">
            At SAWE, we believe women entrepreneurs grow faster when they have
            access to the right knowledge, guidance, community, and practical
            business skills.
          </p>
          <p className="leading-relaxed">
            Our trainings are designed to help South Asian women entrepreneurs
            become more confident, visible, skilled, and business-ready in
            today's fast-changing world.
          </p>
          <p className="leading-relaxed">
            We conduct both short-format and long-format trainings across
            multiple business and personal growth topics.
          </p>
        </div>
      </section>

      {/* ======================= TRAINING FORMATS ===================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Training Formats"
            title="Two ways to learn and grow"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {formats.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl bg-white p-8 shadow-card ring-1 ring-plum-100"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-700 text-cream">
                    <f.icon className="h-6 w-6" />
                  </div>
                  <span className="rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gold-600">
                    {f.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-plum-900">
                  {f.title}
                </h3>
                <p className="mt-2 leading-relaxed text-ink/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== TRAINERS ========================= */}
      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="Trainers"
            title="Learn from a diverse range of experts"
            intro="Our trainings are led by a mix of voices — so members learn from diverse experiences, industries, and expertise."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl bg-cream p-6 ring-1 ring-plum-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum-900">
                Internal Community Experts
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Experienced members who share practical, lived knowledge from
                their own entrepreneurial journeys.
              </p>
            </div>
            <div className="rounded-2xl bg-cream p-6 ring-1 ring-plum-100">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-plum-900">
                External Professionals
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Industry professionals, founders, mentors, and specialists
                invited to share deep, current expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= TRAINING TOPICS ====================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Training Topics"
            title="What you can learn at SAWE"
            intro="SAWE trainings span business and personal growth — topics may include:"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((t) => (
              <div
                key={t.label}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-card ring-1 ring-plum-100"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-plum-50 text-plum-700">
                  <t.icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-medium text-plum-900">
                  {t.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================ GOAL ============================ */}
      <section className="pb-4">
        <div className="container-x">
          <div className="rounded-3xl bg-linear-to-br from-plum-700 to-plum-900 px-6 py-14 text-center text-cream sm:px-12">
            <span className="eyebrow text-gold-300">Our Goal</span>
            <p className="mx-auto mt-4 max-w-3xl font-serif text-2xl font-semibold leading-snug sm:text-3xl">
              To create a learning ecosystem where South Asian women
              entrepreneurs can continuously upskill, adapt, collaborate, and
              grow together — both personally and professionally.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button to="/contact" variant="secondary" withArrow>
                View Upcoming Trainings
              </Button>
              <Button to="/contact" variant="light">
                Register for a Workshop
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Grow Your Skills With the SAWE Academy"
        text="Become a member to access trainings, workshops, and a learning ecosystem built for South Asian women entrepreneurs."
        primary={{ label: "Become a Member", to: "/join" }}
        secondary={{ label: "Talk to Us", to: "/contact" }}
      />
    </>
  );
}
