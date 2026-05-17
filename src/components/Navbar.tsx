import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { AppLink } from "./AppLink";
import { Button } from "./ui";

function Brand() {
  return (
    <AppLink to="/" className="flex items-center gap-3" aria-label="SAWE home">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-plum-600 to-plum-900 font-serif text-2xl font-bold text-gold-300 shadow-sm">
        S
      </span>
      <span className="leading-none">
        <span className="block font-serif text-xl font-bold text-plum-900">
          SAWE
        </span>
        <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.13em] text-plum-500">
          South Asian Women Entrepreneurs
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
      <nav className="container-x flex h-20 items-center justify-between">
        <Brand />

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 lg:flex">
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

        <div className="hidden lg:block">
          <Button to="/join" variant="primary">
            Become a Member
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg text-plum-800 ring-1 ring-plum-100 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-plum-100 bg-cream lg:hidden">
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
            <Button to="/join" variant="primary" className="mt-3 w-full">
              Become a Member
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
