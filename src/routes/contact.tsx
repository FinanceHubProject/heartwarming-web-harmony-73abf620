import { useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, MessageCircle, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { CheckList, SectionHeading } from "@/components/ui";
import { FormSuccess, SelectInput, TextArea, TextInput } from "@/components/FormControls";
import { siteConfig, socialLinks } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo({
      title: "Contact SAWE — Get in Touch",
      description:
        "Questions, partnerships, or press? Reach the SAWE team — we'd love to hear from South Asian women entrepreneurs and supporters across the US.",
    }),
  component: ContactPage,
});

const socialIcons: Record<string, LucideIcon> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  youtube: Youtube,
  whatsapp: MessageCircle,
};

const reasons = [
  "Membership Inquiry",
  "Coffee Meet Information",
  "Trainings & Workshops",
  "Collaboration / Partnership",
  "Sponsorship Opportunities",
  "Volunteering",
  "Media / Press",
  "Speaking Opportunity",
  "General Inquiry",
];

const collaborators = [
  "Brands & Businesses",
  "Community Organizations",
  "Event Partners",
  "Speakers & Trainers",
  "Women-Led Businesses",
  "Sponsors & Corporate Partners",
];

const faqs = [
  {
    q: "Who can join SAWE?",
    a: "South Asian women entrepreneurs, founders, creators, consultants, and aspiring business owners.",
  },
  {
    q: "Is SAWE only for established businesses?",
    a: "No. Women who are exploring entrepreneurship or restarting their careers/businesses are also welcome.",
  },
  {
    q: "Are the events only in Seattle?",
    a: "We currently operate across multiple Greater Seattle area locations and are continuously growing.",
  },
  {
    q: "Are trainings free?",
    a: "Some short-format trainings may be free or member-exclusive, while long-format workshops may be paid depending on the topic and structure.",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: connect to a real backend (Formspree, Netlify Forms, or an API)
  // to actually deliver contact messages. Currently front-end only.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Contact SAWE"
        subtitle="Let's connect, collaborate & grow together. Reach out for memberships, partnerships, or general inquiries."
      />

      {/* ===================== FORM + DETAILS ========================= */}
      <section className="section bg-white" id="contact-form">
        <div className="container-x grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
          {/* Form */}
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Send us a message" className="mb-8" />
            {submitted ? (
              <FormSuccess message="Your message has been received. The SAWE team will get back to you soon." />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-cream p-6 ring-1 ring-plum-100 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput label="Full Name" name="fullName" required />
                  <TextInput label="Email Address" name="email" type="email" required />
                  <TextInput label="Phone Number" name="phone" type="tel" />
                  <TextInput label="City" name="city" />
                  <TextInput label="Business Name" name="business" />
                  <TextInput
                    label="Website / Instagram / LinkedIn"
                    name="links"
                    placeholder="Optional"
                  />
                </div>
                <div className="mt-5">
                  <SelectInput
                    label="What are you reaching out for?"
                    name="reason"
                    required
                    options={reasons}
                  />
                </div>
                <div className="mt-5">
                  <TextArea label="How can we help you?" name="message" required rows={5} />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-plum-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2 sm:w-auto"
                >
                  Submit
                </button>
              </form>
            )}
          </div>

          {/* Quick contact + social */}
          <aside className="space-y-6">
            <div className="rounded-3xl bg-plum-800 p-7 text-cream">
              <h3 className="font-serif text-xl font-semibold">Connect With SAWE</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                  <div>
                    <p className="font-semibold text-cream">Email</p>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="break-all text-cream/75 transition-colors hover:text-gold-300"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-gold-300" />
                  <div>
                    <p className="font-semibold text-cream">Location</p>
                    <p className="text-cream/75">{siteConfig.location}</p>
                  </div>
                </li>
              </ul>
              <div className="mt-5 border-t border-plum-700 pt-5">
                <p className="text-xs uppercase tracking-wider text-cream/55">Community Presence</p>
                <p className="mt-1 text-sm text-cream/85">{siteConfig.cities.join(" • ")}</p>
              </div>
            </div>

            <div className="rounded-3xl bg-cream p-7 ring-1 ring-plum-100">
              <h3 className="font-serif text-xl font-semibold text-plum-900">Stay Connected</h3>
              <p className="mt-2 text-sm text-ink/65">
                Follow SAWE for entrepreneur events, trainings, networking opportunities, member
                spotlights, and community updates.
              </p>
              <div className="mt-4 space-y-2">
                {socialLinks.map((s) => {
                  const Icon = socialIcons[s.icon];
                  return (
                    <a
                      key={s.label}
                      href={s.href}
                      className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm font-medium text-plum-900 ring-1 ring-plum-100 transition hover:ring-plum-300"
                    >
                      <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-plum-50 text-plum-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      {s.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ========================= COLLABORATION ====================== */}
      <section className="section">
        <div className="container-x">
          <div className="rounded-3xl bg-plum-50 p-8 ring-1 ring-plum-100 sm:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <span className="eyebrow text-plum-600">Collaboration</span>
                <h2 className="mt-3 text-3xl font-semibold text-plum-900">
                  Want to Collaborate With SAWE?
                </h2>
                <p className="mt-3 text-ink/70">
                  We welcome collaborations with partners who share our mission of helping South
                  Asian women entrepreneurs grow.
                </p>
                <a
                  href="#contact-form"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-plum-800"
                >
                  Partner With Us
                </a>
              </div>
              <CheckList items={collaborators} columns={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ============================= FAQ ============================ */}
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Frequently Asked Questions"
            align="center"
            className="mb-10"
          />
          <div className="space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-cream p-5 ring-1 ring-plum-100 [&_summary]:list-none"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-plum-900">
                  {f.q}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-plum-700 text-cream transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Join a Growing Community of South Asian Women Entrepreneurs?"
        text="Build meaningful connections, learn practical business skills, and grow alongside ambitious women entrepreneurs in the Greater Seattle area."
        primary={{ label: "Become a Member", to: "/join" }}
        secondary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
      />
    </>
  );
}
