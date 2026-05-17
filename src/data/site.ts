/**
 * Central site configuration and shared content.
 * Edit values here to update the navbar, footer, and contact details
 * across every page at once.
 */

export const siteConfig = {
  name: "SAWE",
  fullName: "South Asian Women Entrepreneurs",
  tagline: "South Asian Women Entrepreneurs",
  email: "southasianwomenentrepreneurs@gmail.com",
  location: "Greater Seattle Area, Washington",
  cities: ["Seattle", "Bellevue", "Redmond", "Kirkland", "Bothell"],
};

export interface NavLink {
  label: string;
  to: string;
}

/** Primary navigation shown in the navbar. */
export const navLinks: NavLink[] = [
  { label: "About", to: "/about" },
  { label: "Community", to: "/community" },
  { label: "Coffee Meets", to: "/coffee-meets" },
  { label: "Trainings", to: "/trainings" },
  { label: "Blog", to: "/blog" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

/** Secondary links grouped in the footer. */
export const footerExplore: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Community", to: "/community" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Gallery", to: "/gallery" },
];

export const footerEngage: NavLink[] = [
  { label: "Coffee Meets", to: "/coffee-meets" },
  { label: "Trainings & Academy", to: "/trainings" },
  { label: "Become a Member", to: "/join" },
  { label: "Blog", to: "/blog" },
  { label: "Contact Us", to: "/contact" },
];

export interface SocialLink {
  label: string;
  /** lucide-react icon name handled in the Footer component */
  icon: "instagram" | "facebook" | "linkedin" | "youtube" | "whatsapp";
  href: string;
}

/** TODO: replace "#" with the real SAWE social profile URLs. */
export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: "instagram", href: "#" },
  { label: "Facebook", icon: "facebook", href: "#" },
  { label: "LinkedIn", icon: "linkedin", href: "#" },
  { label: "YouTube", icon: "youtube", href: "#" },
  { label: "WhatsApp Community", icon: "whatsapp", href: "#" },
];
