import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Youtube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  footerEngage,
  footerExplore,
  siteConfig,
  socialLinks,
} from "@/data/site";
import { AppLink } from "./AppLink";

const socialIcons: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

export default function Footer() {
  return (
    <footer className="bg-plum-900 text-cream/80">
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-plum-500 to-plum-800 font-serif text-2xl font-bold text-gold-300">
              S
            </span>
            <span className="font-serif text-xl font-bold text-cream">
              SAWE
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            A high-intent community for South Asian women entrepreneurs in the
            Greater Seattle area — connect, collaborate, learn, and grow.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {socialLinks.map((s) => {
              const Icon = socialIcons[s.icon];
              return (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-plum-800 text-cream/80 transition-colors hover:bg-gold-400 hover:text-plum-900"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Explore
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerExplore.map((link) => (
              <li key={link.to}>
                <AppLink
                  to={link.to}
                  className="transition-colors hover:text-gold-300"
                >
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Engage */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Get Involved
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {footerEngage.map((link) => (
              <li key={link.to}>
                <AppLink
                  to={link.to}
                  className="transition-colors hover:text-gold-300"
                >
                  {link.label}
                </AppLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-cream">
            Connect With SAWE
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="break-all transition-colors hover:text-gold-300"
              >
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-300" />
              <span>{siteConfig.location}</span>
            </li>
          </ul>
          <p className="mt-4 text-xs uppercase tracking-wider text-cream/55">
            Community Presence
          </p>
          <p className="mt-1 text-sm">{siteConfig.cities.join(" • ")}</p>
        </div>
      </div>

      <div className="border-t border-plum-800">
        <div className="container-x flex flex-col gap-2 py-6 text-xs text-cream/55 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} SAWE — South Asian Women
            Entrepreneurs. All rights reserved.
          </p>
          <p>Businesses grow faster when women grow together.</p>
        </div>
      </div>
    </footer>
  );
}
