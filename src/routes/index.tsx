import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  CalendarDays,
  Coffee,
  GraduationCap,
  Handshake,
  MapPin,
  Quote,
  Repeat2,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";
import CTASection from "@/components/CTASection";
import ImageCarousel, { type CarouselImage } from "@/components/ImageCarousel";
import { Button, CheckList, SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "SAWE — South Asian and Southeast Asian Women Entrepreneurs Community",
      description:
        "Join 600+ South Asian and Southeast Asian women entrepreneurs across Greater Seattle and the US for Coffee Meets, business learning, collaborations, and referrals.",
    }),
  component: HomePage,
});

const heroImages: CarouselImage[] = [
  {
    src: "/images/home/landing-group.jpg",
    alt: "SAWE members gathered outside a Greater Seattle coffee shop",
  },
  {
    src: "/images/home/indoor-community.jpg",
    alt: "SAWE members smiling together at an indoor community gathering",
  },
  {
    src: "/images/home/table-connections.jpg",
    alt: "SAWE entrepreneurs connecting around a table",
  },
  {
    src: "/images/home/outdoor-community.jpg",
    alt: "SAWE members at an outdoor community gathering",
  },
  {
    src: "/images/home/park-gathering.jpg",
    alt: "SAWE members gathered together in a park",
  },
  {
    src: "/images/home/community-event.jpg",
    alt: "Women from the SAWE community at an indoor event",
  },
];

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

const coffeeFormats = [
  {
    label: "Empower",
    href: "https://www.instagram.com/reel/DcWaWvqB9kk/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    label: "Connect",
    href: "https://www.instagram.com/reel/Ddt6HXNBpuz/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
  {
    label: "Collaborate",
    href: "https://www.instagram.com/reel/DZ-rFbnB8m6/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  },
];

const stats = [
  {
    icon: Users,
    lead: siteConfig.memberCount,
    suffix: "+",
    label: "Women entrepreneurs",
  },
  {
    icon: MapPin,
    lead: "5",
    label: "Greater Seattle chapters",
  },
  {
    icon: Sparkles,
    lead: "National",
    label: "Community growing across the US",
  },
  {
    icon: CalendarDays,
    lead: "Monthly",
    label: "Coffee Meets and Business Clinic",
  },
  {
    icon: Repeat2,
    lead: "1:1",
    label: "Brew Buddy peer connections",
  },
  {
    icon: Handshake,
    lead: "Built-in",
    label: "Collaborations, referrals, and visibility",
  },
];

const pillars = [
  {
    icon: Users,
    title: "CONNECTION",
    intro: "Meet consistently, build trust, and turn introductions into real relationships.",
    items: [
      {
        title: "Coffee Meets",
        text: "Friendly, structured networking through Empower, Connect, and Collaborate formats.",
        links: coffeeFormats,
      },
      {
        title: "Brew Buddy",
        text: "A four-week one-to-one peer connection that helps every member build one relationship deeply.",
      },
    ],
  },
  {
    icon: GraduationCap,
    title: "COACHING",
    intro: "Learn practical skills and get unstuck with focused support you can use immediately.",
    items: [
      {
        title: "Trainings and Workshops",
        text: "Hands-on sessions covering AI, SEO, marketing, finance, social media, sales, pricing, and growth.",
      },
      {
        title: "Business Clinic",
        text: "Bring your biggest business question to a focused monthly session and continue the support afterward.",
      },
    ],
  },
  {
    icon: Handshake,
    title: "COMMUNITY",
    intro: "Grow inside an ecosystem where members actively back one another.",
    items: [
      {
        title: "Collaboration and Earning",
        text: "Members hire, refer, recommend, and build opportunities with one another.",
      },
      {
        title: "Visibility",
        text: "Member spotlights, showcases, events, and partnerships help more people discover your work.",
      },
    ],
  },
];

const audience = [
  "You are a woman of South Asian or Southeast Asian heritage running a business in the US",
  "You recently moved and are building your network from scratch",
  "You have a small business, a side hustle, or offer a service",
  "You want more visibility, referrals, and collaborations",
  "You want to keep learning and growing",
  "You are done with surface-level networking and want something real",
];

function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-plum-700 via-plum-800 to-plum-900 text-cream">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-coral-400/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-coral-500/25 blur-3xl" />
        <div className="container-x relative grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-20">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-cream/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-gold-300 ring-1 ring-cream/15">
              <Sparkles className="h-3.5 w-3.5" />
              Greater Seattle + SAWE National
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
              A Community Built for South Asian and Southeast Asian Women Entrepreneurs in the US
            </h1>
            <p className="mt-5 font-serif text-2xl font-semibold text-gold-300 sm:text-3xl">
              {siteConfig.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-cream/82">
              SAWE is for women running businesses in the US who want genuine friendships, practical
              support, meaningful collaborations, and a community that understands the journey.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={siteConfig.joinFormUrl} variant="secondary" withArrow>
                Join the Community
              </Button>
              <Button href={siteConfig.lumaUrl} variant="light">
                See Upcoming Coffee Meets
              </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:justify-self-end">
            <ImageCarousel
              images={heroImages}
              label="SAWE community highlights"
              priority
              className="aspect-[4/3] rounded-3xl shadow-2xl ring-1 ring-cream/20"
            />
            <div className="relative z-10 mx-4 -mt-10 rounded-2xl bg-white p-5 text-ink shadow-soft sm:mx-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-3xl font-bold text-plum-900">
                    {siteConfig.memberCount}+
                  </p>
                  <p className="text-sm font-semibold text-plum-700">Women entrepreneurs</p>
                </div>
                <p className="max-w-52 text-center text-sm leading-relaxed text-ink/65">
                  A strong Seattle chapter and a growing national community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <SectionHeading
            eyebrow="What Is SAWE?"
            title="More Than Networking. This Is Your Business Community."
            intro="Starting or rebuilding a business in a new country is hard. It can also feel lonely when you do not yet have the right people around you."
          />
          <div className="space-y-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            <p>
              SAWE was built to change that. Women from India, Pakistan, Bangladesh, Sri Lanka,
              Nepal, the Philippines, Vietnam, Malaysia, Singapore, and across Asia are building
              alongside one another here.
            </p>
            <p>
              Some members sell products, some offer services, some have side hustles, and some are
              just getting started. What everyone shares is the wish to grow with people who get it.
            </p>
            <p>
              What began in Greater Seattle is now expanding through SAWE National, bringing women
              entrepreneurs together across US cities.
            </p>
            <Button to="/about" variant="outline" withArrow>
              Meet the Team
            </Button>
          </div>
        </div>
      </section>

      <section className="section relative overflow-hidden bg-linear-to-br from-cream via-coral-50 to-plum-50">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-coral-200/50 blur-3xl" />
        <div className="container-x relative">
          <SectionHeading
            eyebrow="Growing Together"
            title="A community designed to keep business moving"
            intro="Connection, practical learning, and daily support—working together."
            align="center"
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white/85 p-6 text-center shadow-card ring-1 ring-plum-100 backdrop-blur-sm"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-plum-50 text-plum-700">
                  <stat.icon className="h-6 w-6" />
                </span>
                <p className="mt-4 font-serif text-3xl font-bold text-plum-900 sm:text-4xl">
                  {typeof stat.lead === "number" ? `${stat.lead}${stat.suffix ?? ""}` : stat.lead}
                </p>
                <p className="mt-2 text-sm font-semibold text-ink/65">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="The 3 C's"
            title="What You Will Find Inside SAWE"
            intro="SAWE runs on three connected pillars: CONNECTION, COACHING, and COMMUNITY."
            align="center"
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar) => (
              <article
                key={pillar.title}
                className="flex h-full flex-col rounded-3xl bg-cream/70 p-7 shadow-card ring-1 ring-plum-100"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-plum-700 text-cream">
                  <pillar.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-2xl font-semibold text-plum-900">{pillar.title}</h3>
                <p className="mt-2 leading-relaxed text-ink/65">{pillar.intro}</p>
                <div className="mt-6 space-y-5">
                  {pillar.items.map((item) => (
                    <div key={item.title} className="border-t border-plum-100 pt-5">
                      <h4 className="text-lg font-semibold text-plum-900">{item.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                      {item.links && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.links.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-semibold text-plum-700 ring-1 ring-plum-100 transition hover:bg-plum-700 hover:text-cream"
                            >
                              {link.label}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <SectionHeading
            eyebrow="Who Is This For?"
            title="SAWE Is for You If…"
            intro="If these sound like you, you will feel right at home."
          />
          <CheckList items={audience} columns={1} className="lg:mt-2" />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl bg-blue-deep text-cream shadow-soft">
            <div className="grid items-center gap-8 p-6 sm:p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
              <div className="min-w-0">
                <span className="eyebrow text-coral-200">Attend a Coffee Meet</span>
                <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl">
                  Walk into a room built for real connection
                </h2>
                <p className="mt-4 max-w-xl leading-relaxed text-cream/80">
                  Meet women repeatedly, build familiarity, and still discover new businesses and
                  ideas every time. Each Coffee Meet format has a different purpose.
                </p>
                <div className="mt-6 flex flex-nowrap gap-2 overflow-x-auto pb-1">
                  {coffeeFormats.map((format) => (
                    <a
                      key={format.label}
                      href={format.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-cream ring-1 ring-white/20 transition hover:bg-white hover:text-blue-deep"
                    >
                      Watch {format.label}
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  ))}
                </div>
                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap sm:gap-4">
                  <Button
                    href={siteConfig.lumaUrl}
                    variant="secondary"
                    withArrow
                    className="w-full sm:w-auto"
                  >
                    View Upcoming Coffee Meets
                  </Button>
                  <Button to="/coffee-meets" variant="light" className="w-full sm:w-auto">
                    Explore the Formats
                  </Button>
                </div>
              </div>
              <ImageCarousel
                images={coffeeMeetImages}
                label="SAWE Coffee Meet photos"
                className="min-w-0 aspect-[4/3] w-full rounded-2xl bg-plum-900/25 ring-1 ring-white/20 md:aspect-[16/10]"
                imageClassName="object-contain md:object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Community Voices"
            title="Real Businesses. Real Connections."
            intro="Representative member perspectives on what it feels like to grow inside SAWE."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 6).map((testimonial) => (
              <figure
                key={testimonial.id}
                className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-card ring-1 ring-plum-100"
              >
                <Quote className="h-8 w-8 text-coral-500" />
                <blockquote className="mt-4 flex-1 font-serif text-lg leading-relaxed text-plum-900">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block text-sm font-bold text-plum-900">{testimonial.name}</span>
                  <span className="text-xs font-medium text-ink/55">{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button to="/testimonials" variant="outline" withArrow>
              Read All Member Perspectives
            </Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Grow With People Who Get It?"
        text="Join South Asian and Southeast Asian women entrepreneurs building businesses, visibility, confidence, and meaningful collaborations together."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
