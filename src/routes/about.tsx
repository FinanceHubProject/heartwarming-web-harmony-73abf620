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

interface VolunteerProfile {
  name: string;
  focus: string;
  image: string;
  alt: string;
  bio: string[];
  social?: string;
}

const leadership: LeadershipMember[] = [
  {
    name: "Aparna Prabhakar",
    role: "Operations",
    image: {
      src: "/images/leadership/aparna-prabhakar.jpg",
      alt: "Aparna Prabhakar, Operations at SAWE",
    },
    bio: [
      "As SAWE's Chief Operating Officer, Aparna brings more than 15 years of IT project and service management experience to the community.",
      "She oversees key operations, coordinates initiatives, and makes sure ideas turn into action. Structured and detail oriented, she believes in getting things done while keeping people and purpose at the center of every initiative.",
      "Outside SAWE, Aparna runs Sai Masala, her homemade masala brand inspired by age old recipes and her mother's cooking. Made without artificial ingredients, preservatives, or added colors, her spice blends make everyday Indian cooking healthy, flavorful, and easy for kitchens in the USA and India. For Aparna, every pack is a small piece of home, shared with each customer.",
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

const volunteers: VolunteerProfile[] = [
  {
    name: "Agraja Mokashi",
    focus:
      "Presentation design | Virtual assistance | Content creation | SOP and documentation writing",
    image: "/images/volunteers/agraja-mokashi.jpg",
    alt: "Agraja Mokashi",
    bio: [
      "At SAWE, Agraja leads LinkedIn marketing and storytelling. She helps fellow women entrepreneurs share their journeys on LinkedIn and also supports SAWE's internal process work behind the scenes.",
      "Outside SAWE, Agraja is the founder of Warmhouse Creative, a freelance service offering presentation design, virtual assistant support, content creation, and SOP and documentation writing for small businesses, nonprofits, and early stage founders. Warmhouse Creative began at a SAWE coffee meetup, where a casual conversation turned into her first two clients.",
      "Her path to entrepreneurship brought together a career in project management and sustainability, with experience in tech at Avalara, corporate CSR at Mercedes Benz India, and environmental NGO work. Becoming a mother opened a new chapter and pushed her to build something of her own.",
      "Agraja is also a published children's book author (My Wonderful Words) and a certified Project Manager. She believes in building businesses, stories, and communities that are grounded in purpose and made to grow.",
    ],
  },
  {
    name: "Amena Begum",
    focus: "Custom travel planning | Family and group trips | Community building",
    image: "/images/volunteers/amena-begum.jpg",
    alt: "Amena Begum",
    bio: [
      "At SAWE, Amena is the National Community Group Admin. She plays a key role in growing the SAWE National community across the United States through virtual networking events, community initiatives, and engaging content. Her work helps women entrepreneurs find a supportive space to learn from each other, connect, and grow together.",
      "Outside SAWE, Amena is a passionate traveler and the founder of Wonders Your Way Travel. She helps individuals, families, and groups turn their travel plans into experiences they remember for years. Every journey she designs is thoughtful and seamless, built to bring people closer to the world around them.",
      "For Amena, community building and meaningful travel come from the same place. She loves helping people expand their horizons, whether that's through entrepreneurship, new connections, or a destination they've always wanted to see.",
    ],
  },
  {
    name: "Deepti Munjal",
    focus: "Fitness based dancing | Wedding choreography | Corporate workshops",
    image: "/images/volunteers/deepti.jpg",
    alt: "Deepti Munjal",
    bio: [
      "At SAWE, Deepti leads our quarterly social events, from large community gatherings to picnics and high teas. She brings real warmth to every event, making sure each member feels welcomed and part of the celebration.",
      "Outside SAWE, Deepti is a Bollywood dancer at heart, and her sessions bring together joy, rhythm and strength. Over the years, her love for dance grew into fitness based dance, where every class feels like a celebration and still delivers real results. She also offers personalized dance training for fitness goals, weddings and celebrations, corporate workshops, and anyone who simply wants to move and feel good.",
      "Whether someone wants to dance for fitness, prepare for a big day, bring energy to their workplace, or just move with more freedom and happiness, Deepti creates a space that feels welcoming and fun.",
    ],
    social: "Instagram: @getfitwithdeepti",
  },
  {
    name: "Meghana Rao Rapelli",
    focus: "Instagram content | Marketing campaigns | Storytelling",
    image: "/images/volunteers/meghana-rao-rapelli.jpg",
    alt: "Meghana Rao Rapelli",
    bio: [
      "At SAWE, Meghana is the Social Media Manager for Instagram. She creates content, builds marketing campaigns, helps coordinate events and workshops, and stays connected with members both online and in person. Her work plays a big part in growing a supportive, business focused community.",
      "Outside SAWE, Meghana shares creative content on her Instagram page, @Grande_desisoul. She treats it as her own creative lab, trying out different formats, hooks, and storytelling styles, then studying what actually works. She's curious about why some content connects with people more than others, and how creative choices shape engagement and community.",
    ],
  },
  {
    name: "Nithya Ramadas",
    focus:
      "Newborn and maternity | Family and milestone portraits | Celebrations and intimate weddings",
    image: "/images/volunteers/nithya-ramadas.jpg",
    alt: "Nithya Ramadas",
    bio: [
      "At SAWE, Nithya is a Facebook Group Admin. She creates and shares content, promotes networking opportunities and SAWE events, and encourages members to get involved. Building a business on her own taught her how much the right support system matters, and she sees SAWE as a place where women can learn from each other, celebrate wins, work through challenges, and grow together.",
      "Outside SAWE, Nithya is the founder and photographer behind Nithya Ramadas Photography. She captures newborn, maternity, family and milestone portraits, along with celebrations and intimate weddings. Self taught, with nine years behind the camera, she turned her love for capturing meaningful moments into a business built on creativity, connection, and making every client feel at ease.",
      "Whether behind the lens or within the community, Nithya loves bringing people together and helping relationships grow.",
    ],
  },
  {
    name: "Praveena Ramani",
    focus: "Mandala and fine line ink artist | INKspirations by PR",
    image: "/images/volunteers/praveena-ramani.jpg",
    alt: "Praveena Ramani",
    bio: [
      "At SAWE, Praveena is the Training and Development Coordinator. She designs and runs our monthly learning sessions, making sure each one gives members something practical they can use. Her focus is on helping women build new skills, become more visible, and grow their businesses with confidence.",
      "Outside SAWE, Praveena is a self taught artist and the creator behind INKspirations by PR. Working from her home studio, she creates intricate mandalas and fine line art on paper, canvas, fabric, clay and wood, bringing together fine art and everyday functional pieces. Her work is mostly black and white, with layered touches of watercolor and acrylic that bring each design to life.",
      "She draws inspiration from cultural motifs, small everyday moments, and the ways people are connected to one another. For Praveena, drawing is a meditative process. Every line is intentional, yet it flows from intuition, and each finished piece is meant to invite people to slow down, breathe, and find a quiet moment for themselves.",
    ],
    social: "Explore her collection and process on Instagram at @inkspirations.by.pr",
  },
  {
    name: "Shilpi Jain",
    focus: "Empowerment and conscious relationship coaching | Joyful Relationship Coaching",
    image: "/images/volunteers/shilpi-jain.jpg",
    alt: "Shilpi Jain",
    bio: [
      "At SAWE, Shilpi leads promotions and marketing for our Coffee Meets across Facebook groups, helping micro entrepreneurs in Greater Seattle find their way to SAWE. She also builds bridges between women in the community through personal, meaningful conversations, and makes sure members feel supported by one another.",
      "Outside SAWE, Shilpi is the founder of Joyful Relationship Coaching, a practice that helps women build a deeper relationship with themselves and create healthier, more connected marriages. With eight years of experience across 1:1, group, and hybrid coaching, she helps women understand their emotional patterns, grow their self awareness, and find the confidence to speak their truth and share what they feel and need.",
      "Her approach is practical. She gives women tools to take charge of their relationships and build strategies that fit their own lives. Rather than simply fixing problems, she helps couples close the gaps in emotional, physical, and intellectual connection, so their marriages grow in trust, confidence, and closeness.",
    ],
  },
  {
    name: "Shipra Chandak",
    focus: "Investment education | Equity and options markets | Financial literacy",
    image: "/images/volunteers/shipra-chandak.jpg",
    alt: "Shipra Chandak",
    bio: [
      "At SAWE, Shipra is part of the Training and Development team, helping members build expertise across different areas of business through sessions with industry experts. She is also the WhatsApp community admin and coordinator, where she keeps conversations active through structured discussions and encourages members to participate and support one another.",
      "Outside SAWE, Shipra is the founder of Optimatrix Investments, a practice built on the belief that good financial knowledge should be available to everyone, not just Wall Street insiders. She works directly with individuals, from first time investors to experienced traders, breaking down equity and options markets into practical education that fits each person's goals and experience.",
      "Her work covers everything from basic financial literacy to advanced options strategies, combining careful analysis with genuine mentorship. She helps clients think through the balance between growth and protecting against losses, and understand strategies that aim to generate income over time. For Shipra, clarity always comes before complexity. Her goal is for every client to walk away feeling informed, confident, and in control of their financial future.",
    ],
    social: "Instagram: @optimatrix.investments",
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
              <p className="mt-2 text-sm font-semibold leading-relaxed text-plum-800">
                Fractional CMO | Growth execution mentor | Co-founder, Startups Club
              </p>
              <div className="mt-4 space-y-3 leading-relaxed text-ink/70">
                <p>
                  At SAWE, Salma serves on the Advisory Board, working closely with SAWE&apos;s
                  founder and community leaders to shape the direction of SAWE and help it grow. She
                  also mentors members one on one, guiding them on growth strategy and the practical
                  steps of building their businesses.
                </p>
                <p>
                  For more than three decades, Salma has helped founders turn ideas into businesses
                  that grow. In 2013 she co-founded Startups Club in Bengaluru. What started as a
                  small coffee meetup of entrepreneurs grew into one of India&apos;s largest founder
                  communities, with more than 25,000 members across 20 cities.
                </p>
                <p>
                  Today she works as a Fractional CMO and Growth Execution Mentor, supporting
                  founders and leadership teams with market positioning, revenue growth, and the
                  part most people find hardest, which is execution. She built EyeROV&apos;s
                  marketing function from scratch and has mentored thousands of entrepreneurs across
                  startups, family businesses, and tech companies. Those who work with her often
                  mention the structure, honesty, and warmth she brings.
                </p>
                <p>
                  Salma is also the author of <em>Fat2Fit</em>, a book about her own five year
                  health journey.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-white pt-4 pb-6 sm:pt-6 sm:pb-8 lg:pt-6 lg:pb-8">
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
                  <p className="mt-1 text-sm font-semibold leading-relaxed text-plum-600">
                    {volunteer.focus}
                  </p>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-ink/70">
                    {volunteer.bio.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  {volunteer.social && (
                    <p className="mt-3 text-xs font-semibold text-plum-600">{volunteer.social}</p>
                  )}
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
