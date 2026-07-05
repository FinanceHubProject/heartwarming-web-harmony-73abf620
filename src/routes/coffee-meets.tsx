import { createFileRoute } from "@tanstack/react-router";
import { CalendarClock, Coffee, Handshake, MapPin, Megaphone, Users } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Button, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/coffee-meets")({
  head: () =>
    seo({
      title: "Coffee Meets — Monthly Networking | SAWE",
      description:
        "Join SAWE's monthly coffee meets across Seattle, Bellevue, Redmond, Kirkland, and Bothell. Structured networking for South Asian women entrepreneurs.",
    }),
  component: CoffeeMeetsPage,
});

const expect = [
  {
    icon: Users,
    title: "Meaningful Introductions",
    text: "Structured to connect you with the right women, not just collect business cards.",
  },
  {
    icon: Handshake,
    title: "Real Collaborations",
    text: "Conversations designed to spark referrals and genuine working relationships.",
  },
  {
    icon: Megaphone,
    title: "Business Visibility",
    text: "Share what you do and grow your presence in the community.",
  },
];

function CoffeeMeetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coffee Meet Calendar"
        title="Attend a Coffee Meet"
        subtitle="Ready to experience a networking space designed differently?"
      />

      {/* ============================ INTRO =========================== */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              eyebrow="Networking, Reimagined"
              title="Come build alongside women who get it"
              intro="Meet ambitious South Asian women entrepreneurs building together."
            />
            <div className="mt-7 flex flex-wrap gap-4">
              <Button href={siteConfig.lumaUrl} variant="primary" withArrow>
                RSVP for the Next Meet
              </Button>
              <Button href={siteConfig.joinFormUrl} variant="outline">
                Become a Member
              </Button>
            </div>
          </div>
          <div className="relative">
            <img
              src="/coffee_meet_image.png"
              alt="Coffee Meet"
              className="rounded-3xl shadow-2xl ring-1 ring-plum-100 object-cover w-full aspect-[4/3] transition duration-700 hover:scale-105"
            />
            <div className="absolute -bottom-6 -left-6 rounded-3xl bg-plum-50 p-6 text-center ring-1 ring-plum-100 shadow-xl max-w-[200px]">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-plum-700 text-cream">
                <Coffee className="h-6 w-6" />
              </span>
              <p className="mt-4 font-serif text-sm font-semibold text-plum-900">Monthly Meets</p>
              <p className="mt-1 text-xs text-ink/65">Across Greater Seattle</p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================== WHAT TO EXPECT ====================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="What to Expect"
            title="More than coffee and small talk"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {expect.map((e) => (
              <div
                key={e.title}
                className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-plum-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
                  <e.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-plum-900">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================== CHAPTERS ========================== */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Chapters"
            title="Find a coffee meet near you"
            intro="SAWE coffee meets and events run across the Greater Seattle area — and we're continuously growing."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {siteConfig.cities.map((city) => (
              <div
                key={city}
                className="flex flex-col items-center rounded-2xl bg-cream p-6 text-center ring-1 ring-plum-100"
              >
                <MapPin className="h-6 w-6 text-plum-600" />
                <p className="mt-3 font-semibold text-plum-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== UPCOMING / SCHEDULE =================== */}
      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-plum-200 bg-plum-50/60 p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-plum-600 shadow-card">
              <CalendarClock className="h-7 w-7" />
            </span>
            <h3 className="mt-5 text-2xl font-semibold text-plum-900">
              New coffee meets are announced every month
            </h3>
            <p className="mt-3 text-ink/70">
              Our upcoming meet schedule is shared with members and across our social channels. RSVP
              below and we'll make sure you don't miss the next one.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-4">
              <Button href={siteConfig.lumaUrl} variant="primary" withArrow>
                RSVP for the Next Meet
              </Button>
              <Button href={siteConfig.joinFormUrl} variant="outline">
                Join to Get Updates
              </Button>
            </div>
            {/* TODO: connect a live events calendar (Luma, Eventbrite, or
                Google Calendar embed) once the meet schedule is finalized. */}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Walk Into a Room of Women Building Together?"
        text="Come to a coffee meet, make real connections, and see why SAWE networking turns into genuine business opportunities."
        primary={{ label: "RSVP for the Next Meet", to: "/contact" }}
        secondary={{ label: "Explore the Community", to: "/community" }}
      />
    </>
  );
}
