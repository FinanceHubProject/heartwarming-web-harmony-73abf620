export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  tone: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "first-collaboration",
    quote: "SAWE helped me find my first collaborations in Seattle.",
    name: "SAWE member",
    role: "Service-based founder",
    tone: "from-plum-500 to-plum-800",
  },
  {
    id: "walked-in-alone",
    quote: "I walked into one Coffee Meet alone and walked out with a community.",
    name: "SAWE member",
    role: "Creative entrepreneur",
    tone: "from-gold-400 to-gold-600",
  },
  {
    id: "networking-to-business",
    quote: "This is one of the few communities where networking actually turns into business.",
    name: "SAWE member",
    role: "Small business owner",
    tone: "from-plum-600 to-plum-900",
  },
  {
    id: "starting-over",
    quote:
      "I found women who understood both my business questions and what it feels like to rebuild a network in a new country.",
    name: "SAWE member",
    role: "Consultant",
    tone: "from-blue-deep to-plum-700",
  },
  {
    id: "referral-to-client",
    quote: "One Coffee Meet conversation became a referral, and that referral became a client.",
    name: "SAWE member",
    role: "Professional services founder",
    tone: "from-coral-400 to-plum-700",
  },
  {
    id: "brew-buddy",
    quote:
      "Brew Buddy helped me build one strong relationship instead of collecting another stack of contacts.",
    name: "SAWE member",
    role: "Product entrepreneur",
    tone: "from-plum-400 to-blue-deep",
  },
  {
    id: "business-clinic",
    quote:
      "The Business Clinic helped me turn an overwhelming question into a clear next step I could act on immediately.",
    name: "SAWE member",
    role: "Early-stage founder",
    tone: "from-gold-400 to-coral-600",
  },
  {
    id: "visibility",
    quote:
      "SAWE made it easier to talk about my business with confidence and show up consistently.",
    name: "SAWE member",
    role: "Coach and creator",
    tone: "from-blue-deep-700 to-plum-600",
  },
  {
    id: "hire-refer-collaborate",
    quote: "I have hired, referred, and collaborated with women I met through this community.",
    name: "SAWE member",
    role: "Community entrepreneur",
    tone: "from-plum-600 to-coral-500",
  },
  {
    id: "daily-support",
    quote:
      "The WhatsApp community feels like a daily business support room—active, generous, and practical.",
    name: "SAWE member",
    role: "Independent business owner",
    tone: "from-coral-500 to-blue-deep",
  },
];
