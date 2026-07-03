import { createFileRoute } from "@tanstack/react-router";
import { Coffee, MapPin, Mic, Users, Store } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { Button, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";
import img1 from "@/assets/IMG_4426.jpeg.asset.json";
import img2 from "@/assets/IMG_3379.jpeg.asset.json";
import img3 from "@/assets/IMG_3600.jpeg.asset.json";
import img4 from "@/assets/IMG_3718.jpeg.asset.json";
import img5 from "@/assets/IMG_4010.jpeg.asset.json";
import img6 from "@/assets/IMG_3695.jpeg.asset.json";
import img7 from "@/assets/IMG_4413.jpeg.asset.json";

export const Route = createFileRoute("/coffee-meets")({
  head: () =>
    seo({
      title: "Coffee Meets — SAWE Weekly Networking in Greater Seattle",
      description:
        "SAWE Coffee Meets happen weekly across Kirkland, Bellevue, Redmond, Bothell, and Downtown Seattle. Three formats: EMPOWER, CONNECT, and COLLABORATE.",
    }),
  component: CoffeeMeetsPage,
});

const formats = [
  {
    icon: Mic,
    tag: "EMPOWER",
    title: "EMPOWER Coffee Meet",
    text: "Open networking combined with a structured one-minute business pitch. The pitch format: Who are you? What is your business about? And what is your secret selling sauce?",
    footer: "Great for visibility, public speaking experience, and first-time attendees.",
  },
  {
    icon: Users,
    tag: "CONNECT",
    title: "CONNECT Coffee Meet",
    text: "Smaller, guided group conversations around a shared theme or business challenge.",
    footer: "Designed for depth over breadth — you leave knowing a few people well.",
  },
  {
    icon: Store,
    tag: "COLLABORATE",
    title: "COLLABORATE Coffee Meet",
    text: "Open networking along with a curated format with 15 to 16 display table spots for women entrepreneurs to showcase their work. Applications are through an Interest Form.",
    footer: "Table spots are ticketed. All other Coffee Meets are free to attend.",
  },
];

const photos = [
  { src: img1.url, alt: "SAWE coffee meet group photo" },
  { src: img2.url, alt: "SAWE community gathering with floral centerpieces" },
  { src: img3.url, alt: "SAWE speaker session with members" },
  { src: img4.url, alt: "SAWE evening meet on a covered patio" },
  { src: img5.url, alt: "SAWE coffee meet audience listening to a talk" },
  { src: img6.url, alt: "SAWE group photo after a presentation" },
  { src: img7.url, alt: "SAWE members chatting at Top Pot coffee meet" },
];

function CoffeeMeetsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Coffee Meets"
        title="What Happens at a SAWE Coffee Meet"
        subtitle="Real connections. Familiar faces. Fresh energy every single week."
      />

      {/* INTRO */}
      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl space-y-5 text-ink/75">
          <p className="leading-relaxed">
            Coffee Meets are not just regular business networking events. They are a place where you build real connections. Not just exchange business cards, but actually connect with people you would want to collaborate with more deeply.
          </p>
          <p className="leading-relaxed">
            And that happens naturally because we show up every single week. You meet a few people repeatedly, which helps build a real bond. And in every Coffee Meet, <span className="font-semibold text-plum-900">60% of the faces are new</span>. So you get both: familiarity and fresh energy, every time.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Button href={siteConfig.lumaUrl} variant="primary" withArrow>
              Book Your Next Coffee Meet
            </Button>
          </div>
        </div>
      </section>

      {/* CHAPTERS */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Coffee Meet Chapters"
            title="Find a Coffee Meet near you"
            intro="Right now we run Coffee Meets in these cities across the Greater Seattle area."
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {siteConfig.cities.map((city) => (
              <div
                key={city}
                className="flex flex-col items-center rounded-2xl bg-cream p-6 text-center ring-1 ring-plum-100"
              >
                <MapPin className="h-6 w-6 text-coral-500" />
                <p className="mt-3 font-semibold text-plum-900">{city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THREE FORMATS */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Three Formats — Each With a Purpose"
            title="What to expect when you walk in"
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {formats.map((f) => (
              <article
                key={f.tag}
                className="flex flex-col rounded-2xl bg-white p-7 shadow-card ring-1 ring-plum-100"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-100 text-coral-600">
                  <f.icon className="h-6 w-6" />
                </div>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.2em] text-coral-600">
                  {f.tag}
                </p>
                <h3 className="mt-2 font-serif text-xl font-semibold text-plum-900">
                  {f.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/70">
                  {f.text}
                </p>
                <p className="mt-4 text-sm font-medium text-plum-700">
                  {f.footer}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-ink/60">
            All Coffee Meets are free to attend unless you are booking a COLLABORATE table spot.
          </p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Moments"
            title="Snapshots from recent Coffee Meets"
            align="center"
          />
          <div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
            {photos.map((img, i) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-2xl ring-1 ring-plum-100 ${
                  i === 0 ? "col-span-2 row-span-2" : i === 4 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDAR CTA */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl rounded-3xl border-2 border-dashed border-plum-200 bg-plum-50/60 p-10 text-center">
            <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-plum-600 shadow-card">
              <Coffee className="h-7 w-7" />
            </span>
            <h3 className="mt-5 font-serif text-2xl font-semibold text-plum-900">
              Check the Coffee Meet calendar
            </h3>
            <p className="mt-3 text-ink/70">
              Book your spot for the next Coffee Meet on Luma.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button href={siteConfig.lumaUrl} variant="primary" withArrow>
                See the Calendar
              </Button>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Come Build Alongside Women Who Get It"
        text="Join a Coffee Meet, make real connections, and see why SAWE networking turns into genuine business opportunities."
        primary={{ label: "Book a Coffee Meet", href: siteConfig.lumaUrl }}
        secondary={{ label: "Become a Member", href: siteConfig.memberFormUrl }}
      />
    </>
  );
}
