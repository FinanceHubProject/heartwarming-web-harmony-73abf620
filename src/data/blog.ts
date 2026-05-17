/**
 * Blog content. Add new posts to the `blogPosts` array — each post
 * is rendered automatically on /blog and /blog/$slug.
 */

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readMinutes: number;
  category: string;
  content: BlogBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "south-asian-women-entrepreneurs-seattle",
    title:
      "South Asian Women Entrepreneurs in Seattle: Building Businesses Through Community",
    excerpt:
      "Across Seattle, Bellevue, Redmond, Kirkland, and Bothell, more South Asian women are starting businesses — and looking for the right community to grow with.",
    date: "2026-05-17",
    readMinutes: 4,
    category: "Community",
    content: [
      {
        type: "p",
        text: "If you are searching for women entrepreneur events in Seattle, Indian business networking groups, or South Asian entrepreneur communities in Washington, you are not alone.",
      },
      {
        type: "p",
        text: "Across Seattle, Bellevue, Redmond, Kirkland, and Bothell, more South Asian women are starting businesses, building side hustles, launching consulting brands, and restarting careers after moving to the US. But finding the right business community can still feel difficult.",
      },
      {
        type: "p",
        text: "That is where SAWE — South Asian Women Entrepreneurs — comes in.",
      },
      {
        type: "p",
        text: "SAWE is a Seattle-based community created for South Asian women entrepreneurs, founders, solopreneurs, creators, coaches, and small business owners looking for networking, visibility, collaborations, and business growth opportunities.",
      },
      {
        type: "p",
        text: "Unlike traditional networking groups, SAWE focuses on meaningful business connections through structured coffee meets, entrepreneur workshops, trainings, and community-led growth.",
      },
      {
        type: "p",
        text: "Inside the SAWE community, women entrepreneurs get opportunities to:",
      },
      {
        type: "list",
        items: [
          "Attend women entrepreneur networking events in Seattle",
          "Build collaborations and referral partnerships",
          "Learn marketing, AI, branding, and business skills",
          "Promote their businesses",
          "Connect with other South Asian women founders",
          "Gain visibility and confidence as entrepreneurs",
        ],
      },
      {
        type: "p",
        text: "The community regularly hosts coffee meets and entrepreneur events across Bellevue, Redmond, Kirkland, Bothell, and Greater Seattle.",
      },
      {
        type: "p",
        text: "SAWE also conducts practical trainings and workshops on topics like social media marketing, LinkedIn growth, AI tools, sales, leadership, wellness, and entrepreneurship.",
      },
      {
        type: "p",
        text: "For many women, SAWE becomes more than just a networking group. It becomes a support system, learning ecosystem, and growth community.",
      },
      {
        type: "p",
        text: "If you are a South Asian woman entrepreneur in Seattle looking for business networking events, founder communities, entrepreneur meetups, or women-led business support groups, SAWE is building a space for exactly that.",
      },
      {
        type: "p",
        text: "Because businesses grow faster when women grow together.",
      },
    ],
  },
];
