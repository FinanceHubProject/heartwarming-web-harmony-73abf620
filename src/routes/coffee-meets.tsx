import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, CalendarClock, Handshake, MapPin, Megaphone, Users } from "lucide-react";
import CTASection from "@/components/CTASection";
import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";
import PageHeader from "@/components/PageHeader";
import { Button, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/coffee-meets")({
  head: () =>
    seo({
      title: "Coffee Meets — Monthly Business Networking | SAWE",
      description:
        "Join SAWE Coffee Meets across Greater Seattle. Build genuine connections with South Asian and Southeast Asian women entrepreneurs through Empower, Connect, and Collaborate formats.",
    }),
  component: CoffeeMeetsPage,
});

const coffeeMeetImages: CarouselImage[] = [
  {
    src: "/images/coffee-meets/group-gathering.jpg",
    alt: "Women gathered for a SAWE Coffee Meet",
  },
  {
    src: "/images/coffee-meets/presentation-group.jpg",
    alt: "SAWE Coffee Meet attendees after a business presentation",
  },
  {
    src: "/images/coffee-meets/coffee-community.jpg",
    alt: "SAWE members at a Coffee Meet",
  },
  {
    src: "/images/coffee-meets/workshop-room.jpg",
    alt: "A busy SAWE workshop and networking room",
  },
  {
    src: "/images/coffee-meets/outdoor-group.jpg",
    alt: "SAWE members at an outdoor Coffee Meet",
  },
  {
    src: "/images/coffee-meets/member-conversation.jpg",
    alt: "SAWE members connecting over coffee",
  },
];

const formats = [
  {
    icon: Megaphone,
    title: "Empower",
    schedule: "Evening format",
    text: "Open networking followed by a one-minute business pitch from every attendee: who you are, what your business does, and your secret selling sauce.",
    benefit: "Great for visibility, confidence, public speaking, and first-time attendees.",
    href: "https://www.instagram.com/reel/DcWaWvqB9kk/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    icon: Users,
    title: "Connect",
    schedule: "Daytime format",
    text: "Smaller, guided conversations around a shared theme or business challenge, with space for every attendee to introduce herself and her work.",
    benefit: "Designed for depth over breadth so you leave knowing a few people well.",
    href: "https://www.instagram.com/reel/Ddt6HXNBpuz/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    icon: Handshake,
    title: "Collaborate",
    schedule: "Showcase format",
    text: "Open networking plus 15 to 16 curated display tables where entrepreneurs can showcase products, services, and offers.",
    benefit: "Built for discovery, visibility, partnerships, and direct business opportunities.",
    href: "https://www.instagram.com/reel/DZ-rFbnB8m6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

function CoffeeMeetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coffee Meet Calendar"
        title="Attend a Coffee Meet"
        subtitle="Build real relationships—not just a collection of business cards."
        actions={
          <>
            <Button href={siteConfig.lumaUrl} variant="secondary" withArrow>
              RSVP for the Next Meet
            </Button>
            <Button href={siteConfig.joinFormUrl} variant="light">
              Become a Member
            </Button>
          </>
        }
        media={
          <ImageCarousel
            images={coffeeMeetImages}
            label="Photos from SAWE Coffee Meets"
            priority
            className="aspect-[16/10] rounded-3xl shadow-2xl ring-1 ring-white/20"
          />
        }
      />

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
          <SectionHeading
            eyebrow="What Happens at a SAWE Coffee Meet"
            title="Familiar faces, fresh energy, and room to grow"
            intro="Coffee Meets are structured business gatherings where women connect repeatedly, build trust, and discover people they genuinely want to collaborate with."
          />
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-plum-50 p-6 ring-1 ring-plum-100">
              <Users className="h-6 w-6 text-plum-600" />
              <h3 className="mt-4 text-xl font-semibold text-plum-900">Build familiarity</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                Meet women repeatedly, build trust over time, and move beyond surface-level
                introductions.
              </p>
            </div>
            <div className="rounded-2xl bg-coral-50 p-6 ring-1 ring-coral-100">
              <Handshake className="h-6 w-6 text-coral-600" />
              <h3 className="mt-4 text-xl font-semibold text-plum-900">Discover fresh energy</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">
                New attendees bring new businesses, perspectives, referrals, and opportunities to
                every gathering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Three Formats"
            title="Each Coffee Meet Has a Purpose"
            intro="Choose the format that matches how you want to connect, practice, or showcase your business."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {formats.map((format) => (
              <article
                key={format.title}
                className="flex h-full flex-col rounded-3xl bg-white p-7 shadow-card ring-1 ring-plum-100"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                  <format.icon className="h-6 w-6" />
                </span>
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-coral-600">
                  {format.schedule}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-plum-900">{format.title}</h3>
                <p className="mt-3 leading-relaxed text-ink/70">{format.text}</p>
                <p className="mt-4 text-sm font-semibold leading-relaxed text-plum-700">
                  {format.benefit}
                </p>
                <a
                  href={format.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-plum-700 transition hover:text-coral-600"
                >
                  Watch this format
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-ink/60">
            Coffee Meets are free to attend. Collaborate display-table spots are ticketed and
            require a separate application.
          </p>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Chapters"
            title="Find a Coffee Meet Near You"
            intro="SAWE Coffee Meets currently run across five Greater Seattle locations."
            align="center"
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
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

      <section className="section">
        <div className="container-x">
          <div className="mx-auto max-w-3xl rounded-3xl bg-plum-50 p-7 text-center ring-1 ring-plum-100 sm:p-9">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-plum-600 shadow-card">
              <CalendarClock className="h-7 w-7" />
            </span>
            <h2 className="mt-5 text-3xl font-semibold text-plum-900">
              New Coffee Meets are announced every month
            </h2>
            <p className="mt-3 leading-relaxed text-ink/70">
              Check the live calendar to choose your city and reserve a spot. Event details and
              exact locations are included with each listing.
            </p>
            <Button href={siteConfig.lumaUrl} variant="primary" withArrow className="mt-7">
              Open the Coffee Meet Calendar
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Walk Into a Room of Women Building Together?"
        text="Meet South Asian and Southeast Asian women entrepreneurs, make real connections, and experience networking designed to become business."
        primary={{ label: "RSVP for the Next Meet", href: siteConfig.lumaUrl }}
        secondary={{ label: "Join the Community", href: siteConfig.joinFormUrl }}
      />
    </>
  );
}
