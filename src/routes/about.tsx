import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { SectionHeading } from "@/components/ui";
import { seo } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import aparnaAsset from "@/assets/aparna-prabhakar.png.asset.json";
import meghanaAsset from "@/assets/meghana-rao-rapelli.jpg.asset.json";
import praveenaAsset from "@/assets/praveena-ramani.jpg.asset.json";
import agrajaAsset from "@/assets/agraja-mokashi.jpg.asset.json";
import deeptiAsset from "@/assets/deepti.png.asset.json";
import shipraAsset from "@/assets/shipra.png.asset.json";



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

const volunteers = [
  {
    name: "Meghana Rao Rapelli",
    role: "Social Media Manager — Instagram",
    image: meghanaAsset.url,
    imagePosition: "object-top",
    bio: "Meghana is SAWE's Social Media Manager for Instagram, where she creates content, develops marketing campaigns, coordinates events and workshops, and engages with members online and offline to grow a supportive, business-focused community. Outside of SAWE, she shares creative content on her Instagram page @Grande_desisoul, experimenting with formats, hooks, and storytelling styles to explore what helps content connect with audiences.",
  },
  {
    name: "Praveena Ramani",
    role: "Community Volunteer & Artist",
    image: praveenaAsset.url,
    imagePosition: "object-top",
    bio: "Praveena is a self-taught artist whose creative practice is driven by the rhythmic, meditative process of hand-drawn patterns. Working from her home studio, INKspirations By PR, she specializes in intricate mandalas and zentangle art across paper and natural wood. Her work blends structured geometry with organic movement, inspired by cultural motifs and the beauty of human interconnectedness. Follow her on Instagram @inkspirations.by.pr.",
  },
  {
    name: "Agraja Mokashi",
    role: "Community Volunteer & Founder, Warmhouse Creative",
    image: agrajaAsset.url,
    imagePosition: "object-top",
    bio: "Agraja is the founder of Warmhouse Creative, offering presentation design, virtual assistant support, content creation, and SOP/documentation writing for small businesses, nonprofits, and early-stage founders. Warmhouse Creative was born out of a SAWE coffee meetup. She stays closely involved with the SAWE community, supporting internal process work and helping fellow women entrepreneurs share their stories on LinkedIn. She is also a published children's book author (My Wonderful Words) and a certified Project Manager.",
  },
  {
    name: "Deepti (GetFitWithDeepti)",
    role: "Community Volunteer — Fitness-Based Dance, Wedding Choreography & Corporate Workshops",
    image: deeptiAsset.url,
    imagePosition: "object-top",
    bio: "Deepti is a Bollywood dancer at heart, guided by grace and deeply rooted in movement. Her sessions blend joy, rhythm, and strength — a love that evolved into fitness-based dance, where rhythm meets strength and joy meets results. Alongside fitness-based dancing, she offers personalized dance training as her side hustle for fitness, celebrations, workshops, and pure feel-good movement. Whether you want to dance for fitness, prepare for a celebration, energize your workplace, or simply move with more freedom and happiness, this space is for you. Come move, sweat, smile, and shine.",
  },
  {
    name: "Shipra Chandak",
    role: "Community Volunteer & Founder, Optimatrix Investments",
    image: shipraAsset.url,
    imagePosition: "object-center",
    bio: "Shipra Chandak is the founder of Optimatrix Investments, a practice built on the belief that sound financial knowledge shouldn't be reserved for Wall Street insiders. Working directly with individuals—from first-time investors to experienced traders—she works on demystifying equity and options markets, translating complex strategies into practical, accessible actions tailored to client's goals and experience level. Her approach spans a broad range of financial disciplines—moving fluidly from foundational financial literacy to advanced options trading strategies, blending rigorous analysis with genuine, individualized mentorship. Deeply committed to clarity over complexity, she transforms market signals and risk assessments into clear, actionable, long-term understanding grounded in her client's real financial picture. Through Optimatrix Investments, her practice serves as both an educational foundation and a launchpad for long-term financial confidence. Learn more at www.optimatrixinvestments.com.",
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
                className="mx-auto h-60 w-60 rounded-full object-cover ring-4 ring-cream/20 shadow-md transition duration-500 hover:scale-105"
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
          <div className="mt-12 grid gap-6 max-w-3xl mx-auto">
            {team.map((m) => (
              <article
                key={m.name}
                className="flex flex-col sm:flex-row items-start gap-6 rounded-2xl bg-white p-7 shadow-card ring-1 ring-plum-100"
              >
                <img
                  src={m.image}
                  alt={m.name}
                  className="h-48 w-full sm:h-52 sm:w-40 rounded-2xl object-cover object-top ring-1 ring-plum-100"
                />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-plum-900">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-plum-600">
                    {m.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{m.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOLUNTEERS */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Volunteers"
            title="The Hands That Make It Happen"
            align="center"
          />
          <p className="mt-4 text-center text-ink/70 max-w-2xl mx-auto">
            SAWE thrives because of the women who give their time, creativity, and expertise to nurture this community.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {volunteers.map((v) => (
              <article
                key={v.name}
                className="flex flex-col rounded-2xl bg-cream/40 p-6 shadow-card ring-1 ring-plum-100"
              >
                <img
                  src={v.image}
                  alt={v.name}
                  className={`mx-auto h-40 w-32 rounded-xl object-cover ring-1 ring-plum-100 ${v.imagePosition}`}
                />

                <h3 className="mt-5 font-serif text-xl font-semibold text-plum-900">
                  {v.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-plum-600">
                  {v.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.bio}</p>
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
