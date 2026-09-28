import { createFileRoute } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import { SectionHeading } from "@/components/ui";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    seo({
      title: "About SAWE — The Team Behind the Community",
      description:
        "Meet the founder, leadership team, advisor, and volunteers building SAWE for South Asian and Southeast Asian women entrepreneurs.",
    }),
  component: AboutPage,
});

const founderBio = [
  "Lopamudra Banerjee — Lopa to most people who know her — did not set out to build a community.",
  "When she relocated to the United States in 2022, she brought more than 15 years of experience as a health coach and nutritionist, a background in enterprise sales at The Times of India, an ACE certification, a 200-hour yoga certification, and a career she had built with intention across Bangalore and beyond.",
  "What she did not have was a network, or a room full of people who understood what it meant to start over in a country that did not yet know her name.",
  "That gap — the particular loneliness of an accomplished immigrant woman rebuilding her professional world — is what SAWE was built to close.",
  `The first meeting happened in February 2025 with four women. Today, SAWE is a structured community of ${siteConfig.memberCount}+ entrepreneurs, with Coffee Meets, practical business learning, Brew Buddy connections, collaborations, referrals, and a growing national community.`,
  "Lopa is also the founder of World of WOW Fitness, her health coaching and nutrition practice focused on women over 40, perimenopause, and South Asian dietary health. She is a Startup425 accelerator graduate and a former Gladrags Mrs India finalist.",
  "Her work sits at the intersection of community, entrepreneurship, and reinvention. Her own journey — from employee to entrepreneur to ecosystem builder — is the foundation of everything SAWE stands on.",
];

interface LeadershipMember {
  name: string;
  role: string;
  bio: string[];
  image?: {
    src: string;
    alt: string;
  };
}

const leadership: LeadershipMember[] = [
  {
    name: "Aparna Prabhakar",
    role: "Chief Operating Officer (COO)",
    image: {
      src: "/images/leadership/aparna-prabhakar.jpg",
      alt: "Aparna Prabhakar, Chief Operating Officer at SAWE",
    },
    bio: [
      "Aparna brings more than 15 years of IT project and service management experience to SAWE. She oversees key operations, coordinates initiatives, and turns ideas into well-executed action with a structured, detail-oriented, and people-first approach.",
      "She is also the founder of Sai Masala, a homemade spice brand inspired by family recipes and the flavors of India. Its preservative-free blends make everyday cooking healthy, flavorful, and easy while bringing a little piece of home to kitchens in the US and India.",
    ],
  },
  {
    name: "Chetna Mahajan",
    role: "Technology & AI Advisor",
    image: {
      src: "/chetna-mahajan.jpg",
      alt: "Chetna Mahajan, Technology and AI Advisor at SAWE",
    },
    bio: [
      "Chetna is a Senior Software Engineer at Microsoft, building platform capabilities for AI agents and intelligent workplace experiences across Microsoft Teams. Her work spans agentic workflows, proactive intelligence, and scalable AI-powered solutions that strengthen productivity and collaboration.",
      "Beyond Microsoft, she advises startups and emerging founders on AI strategy, product vision, and technology roadmaps, and supports SAWE on leadership, innovation, and community impact. She is also a TEDx organizer, speaker, mentor, and AI event lead with Rooftop for AI Women.",
      "Through AI Mantra Studio, Chetna contributes to hands-on AI camps and learning programs that make artificial intelligence practical and inspiring for youth. She is passionate about responsible AI, education, and creating opportunities for people of every background to learn, innovate, and thrive.",
    ],
  },
];

const volunteers = [
  {
    name: "Agraja Mokashi",
    role: "Community Volunteer & Founder, Warmhouse Creative",
    image: "/images/volunteers/agraja-mokashi.jpg",
    alt: "Agraja Mokashi",
    bio: "Agraja founded Warmhouse Creative after a conversation at a SAWE Coffee Meet led to her first clients. She supports SAWE's internal process work and helps fellow entrepreneurs share their stories, drawing on experience across project management, sustainability, content, and documentation.",
  },
  {
    name: "Amena Begum",
    role: "SAWE National Community Group Admin",
    image: "/images/volunteers/amena-begum.jpg",
    alt: "Amena Begum",
    bio: "Amena helps build and promote SAWE National through virtual networking, community initiatives, and engaging content for women entrepreneurs across the United States. She is also the founder of Wonders Your Way Travel.",
  },
  {
    name: "Deepti",
    role: "Community Volunteer — Fitness-Based Dance & Choreography",
    image: "/images/volunteers/deepti.jpg",
    alt: "Deepti, SAWE community volunteer",
    bio: "Deepti brings joy, rhythm, and strength together through fitness-based dance, personalized choreography, celebrations, and corporate workshops. Her work creates welcoming spaces where people can move, build confidence, and feel energized.",
  },
  {
    name: "Meghana Rao Rapelli",
    role: "Social Media Manager — Instagram",
    image: "/images/volunteers/meghana-rao-rapelli.jpg",
    alt: "Meghana Rao Rapelli",
    bio: "Meghana creates Instagram content, develops marketing campaigns, coordinates events and workshops, and engages with members online and offline. She also explores storytelling formats and audience engagement through her creative page, @Grande_desisoul.",
  },
  {
    name: "Nithya Ramadas",
    role: "Facebook Group Admin & Photographer",
    image: "/images/volunteers/nithya-ramadas.jpg",
    alt: "Nithya Ramadas",
    bio: "Nithya supports community engagement by sharing content, promoting SAWE events, and encouraging member participation in the Facebook group. She is the founder and photographer behind Nithya Ramadas Photography.",
  },
  {
    name: "Praveena Ramani",
    role: "Training & Development Coordinator",
    image: "/images/volunteers/praveena-ramani.jpg",
    alt: "Praveena Ramani",
    bio: "Praveena designs and coordinates monthly learning sessions that help members sharpen their expertise, visibility, and business skills. She is also the self-taught mandala and fine-line artist behind INKspirations by PR.",
  },
  {
    name: "Shilpi Jain",
    role: "Coffee Meet Promotions & Community Outreach",
    image: "/images/volunteers/shilpi-jain.jpg",
    alt: "Shilpi Jain",
    bio: "Shilpi promotes SAWE Coffee Meets across Facebook communities and helps micro-entrepreneurs discover SAWE through meaningful one-to-one conversations. She is also the founder of Joyful Relationship Coaching.",
  },
  {
    name: "Shipra Chandak",
    role: "Training & Development & WhatsApp Community Coordinator",
    image: "/images/volunteers/shipra-chandak.jpg",
    alt: "Shipra Chandak",
    bio: "Shipra helps connect members with expert-led business learning and encourages participation through structured WhatsApp conversations. She is the founder of Optimatrix Investments, where she makes financial education and market strategy more accessible.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Meet the Team Behind SAWE"
        subtitle="The women building a trusted ecosystem where South Asian and Southeast Asian women entrepreneurs do not grow alone."
      />

      <section className="bg-white pt-12 pb-4 sm:pt-14 sm:pb-6 lg:pt-16 lg:pb-6">
        <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
          <div>
            <div className="overflow-hidden rounded-3xl bg-linear-to-br from-plum-600 to-plum-900 p-8 text-center shadow-soft">
              <img
                src="/founder_pic.jpg"
                alt="Lopamudra Banerjee, founder of SAWE"
                className="mx-auto h-60 w-60 rounded-full object-cover ring-4 ring-cream/20 shadow-md"
              />
              <p className="mt-5 font-serif text-2xl font-bold text-cream">Lopamudra Banerjee</p>
              <p className="mt-1 text-sm font-medium uppercase tracking-wider text-gold-300">
                Founder, SAWE
              </p>
              <p className="mt-3 text-sm text-cream/70">{siteConfig.tagline}</p>
            </div>
          </div>

          <div>
            <span className="eyebrow text-plum-600">The Woman Behind SAWE</span>
            <h2 className="mt-3 font-serif text-3xl font-semibold text-plum-900 sm:text-4xl">
              A community born from her own journey
            </h2>
            <div className="mt-5 space-y-4 text-ink/75">
              {founderBio.map((paragraph) => (
                <p key={paragraph} className="leading-relaxed">
                  {paragraph}
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

      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
        <div className="container-x">
          <SectionHeading title="The People Behind SAWE" align="center" />
          <div className="mx-auto mt-8 grid max-w-6xl gap-6 lg:grid-cols-2">
            {leadership.map((member) => (
              <article
                key={member.name}
                className="flex h-full flex-col gap-6 rounded-2xl bg-white p-7 shadow-card ring-1 ring-plum-100 sm:flex-row sm:items-start sm:p-8"
              >
                {member.image && (
                  <img
                    src={member.image.src}
                    alt={member.image.alt}
                    loading="lazy"
                    className="mx-auto aspect-[4/5] w-full max-w-48 rounded-2xl object-cover object-center ring-1 ring-plum-100 sm:mx-0 sm:w-36 sm:shrink-0"
                  />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-2xl font-semibold text-plum-900">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium uppercase tracking-wide text-plum-600">
                    {member.role}
                  </p>
                  <div className="mt-3 space-y-3 leading-relaxed text-ink/70">
                    {member.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
        <div className="container-x">
          <SectionHeading eyebrow="Advisory Board" title="Strategic Guidance" align="center" />
          <article className="mx-auto mt-8 flex max-w-4xl flex-col gap-7 rounded-3xl bg-plum-50 p-7 ring-1 ring-plum-100 sm:flex-row sm:items-start sm:p-9">
            <img
              src="/images/advisory/salma-moosa.jpg"
              alt="Salma Moosa, SAWE Advisory Board member"
              loading="lazy"
              className="mx-auto aspect-square w-full max-w-56 rounded-2xl object-cover shadow-card ring-1 ring-plum-100 sm:mx-0 sm:w-48 sm:shrink-0"
            />
            <div className="min-w-0 flex-1">
              <h3 className="font-serif text-3xl font-semibold text-plum-900">Salma Moosa</h3>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-plum-600">
                Advisory Board Member
              </p>
              <div className="mt-4 space-y-3 leading-relaxed text-ink/70">
                <p>
                  Salma has spent more than three decades helping founders turn ideas into
                  businesses that grow. In 2013, she co-founded Startups Club in Bengaluru, growing
                  it from a small coffee meetup into a founder community of 25,000+ members across
                  20 cities.
                </p>
                <p>
                  Today, she works as a Fractional CMO and Growth Execution Mentor, helping
                  leadership teams with market positioning, revenue growth, and execution. She built
                  EyeROV&apos;s marketing function from the ground up and has mentored thousands of
                  entrepreneurs across startups, family businesses, and technology companies.
                </p>
                <p>
                  At SAWE, Salma works closely with the founder and community leaders to shape the
                  organization&apos;s growth. She also mentors members one-to-one on growth strategy
                  and building their individual businesses.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
        <div className="container-x">
          <SectionHeading
            eyebrow="Our Volunteers"
            title="The Hands That Make It Happen"
            intro="SAWE thrives because women share their time, creativity, expertise, and care with the community."
            align="center"
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {volunteers.map((volunteer) => (
              <article
                key={volunteer.name}
                className="flex h-full flex-col gap-6 rounded-2xl bg-white p-6 shadow-card ring-1 ring-plum-100 sm:flex-row"
              >
                <img
                  src={volunteer.image}
                  alt={volunteer.alt}
                  loading="lazy"
                  className="mx-auto aspect-[4/5] w-full max-w-48 rounded-2xl object-cover ring-1 ring-plum-100 sm:mx-0 sm:w-36 sm:shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h3 className="font-serif text-xl font-semibold text-plum-900">
                    {volunteer.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase leading-relaxed tracking-wide text-plum-600">
                    {volunteer.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink/70">{volunteer.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Build This Ecosystem With Us?"
        text="Join South Asian and Southeast Asian women entrepreneurs growing through real connection, practical learning, and collaboration."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
