/**
 * Central site configuration and shared content.
 */

export const siteConfig = {
  name: "SAWE",
  fullName: "South Asian Women Entrepreneurs",
  tagline: "South Asian Women Entrepreneurs",
  email: "southasianwomenentrepreneurs@gmail.com",
  location: "Greater Seattle Area, Washington",
  cities: ["Kirkland", "Bellevue", "Redmond", "Bothell", "Downtown Seattle"],
  joinFormUrl: "https://forms.gle/4EEGGKCftFKA5np78",
  memberFormUrl: "https://forms.gle/4EEGGKCftFKA5np78",
  lumaUrl: "https://luma.com/saweglobal",
};

export interface NavLink {
  label: string;
  to: string;
}

/** Primary navigation — only the pages we're launching with. */
export const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Coffee Meets", to: "/coffee-meets" },
  { label: "FAQ", to: "/faq" },
];

export const footerExplore: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
];

export const footerEngage: NavLink[] = [
  { label: "Coffee Meets", to: "/coffee-meets" },
  { label: "FAQ", to: "/faq" },
];

export interface SocialLink {
  label: string;
  icon: "instagram" | "facebook" | "linkedin" | "youtube" | "whatsapp";
  href: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/sawe_womenentrepreneurs/" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/company/sawe-south-asian-women-entrepreneurs/" },
];
