import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Instagram, Linkedin, Menu, X } from "lucide-react";
import { navLinks, socialLinks } from "@/data/site";
import { AppLink } from "./AppLink";
import { Button } from "./ui";
import { siteConfig } from "@/data/site";

function Brand() {
  return (
    <AppLink to="/" className="flex items-center gap-3" aria-label="SAWE home">
      <img
        src="/logo.jpg"
        alt="SAWE logo"
        className="h-14 w-14 rounded-2xl object-cover shadow-sm ring-1 ring-plum-100"
      />
      <span className="leading-none">
        <span className="block font-serif text-2xl font-bold text-plum-900 sm:text-3xl">SAWE</span>
        <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-plum-500">
          {siteConfig.tagline}
        </span>
      </span>
    </AppLink>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Add a subtle shadow once the page is scrolled.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? "bg-cream/95 shadow-sm backdrop-blur-sm" : "bg-cream"
      }`}
    >
      <nav className="container-x flex h-24 items-center justify-between">
        <Brand />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <AppLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-plum-700 data-[status=active]:text-plum-700"
            >
              {link.label}
            </AppLink>
          ))}
        </div>

        <div className="hidden items-center gap-2 xl:flex">
          {socialLinks.map((link) => {
            const Icon = link.icon === "instagram" ? Instagram : Linkedin;
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow SAWE on ${link.label}`}
                className="flex h-10 w-10 items-center justify-center rounded-full text-plum-700 ring-1 ring-plum-100 transition hover:bg-plum-700 hover:text-cream"
              >
                <Icon className="h-4 w-4" />
              </a>
            );
          })}
          <Button href={siteConfig.joinFormUrl} variant="primary" className="ml-2">
            Join the Community
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-plum-800 ring-1 ring-plum-100 xl:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-plum-100 bg-cream xl:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <AppLink
                key={link.to}
                to={link.to}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 transition-colors hover:bg-plum-50 data-[status=active]:bg-plum-50 data-[status=active]:text-plum-700"
              >
                {link.label}
              </AppLink>
            ))}
            <div className="mt-3 flex gap-3 border-t border-plum-100 pt-4">
              {socialLinks.map((link) => {
                const Icon = link.icon === "instagram" ? Instagram : Linkedin;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-plum-50 px-4 py-2 text-sm font-semibold text-plum-700"
                  >
                    <Icon className="h-4 w-4" />
                    {link.label}
                  </a>
                );
              })}
            </div>
            <Button href={siteConfig.joinFormUrl} variant="primary" className="mt-3 w-full">
              Join the Community
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
