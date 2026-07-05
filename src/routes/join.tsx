import { useState } from "react";
import type { FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  AlertCircle,
  BookOpen,
  Coffee,
  GraduationCap,
  Megaphone,
  PartyPopper,
  Repeat2,
  TrendingUp,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { CheckList, SectionHeading } from "@/components/ui";
import { FormSuccess, SelectInput, TextArea, TextInput } from "@/components/FormControls";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/join")({
  head: () =>
    seo({
      title: "Join SAWE — Become a Member",
      description:
        "Apply to join SAWE and access coffee meets, trainings, collaborations, referrals, and a supportive community of South Asian women entrepreneurs.",
    }),
  component: MembershipPage,
});

const eligibility = [
  "South Asian women entrepreneurs, founders, and creators.",
  "You own a business, or are actively building one.",
  "You value collaboration, referrals, and community growth.",
  "You are rebuilding your network in the US.",
];

const access = [
  { icon: Coffee, label: "Coffee Meets & Networking Events" },
  { icon: GraduationCap, label: "Business Trainings & Workshops" },
  { icon: BookOpen, label: "SAWE Academy Learning Opportunities" },
  { icon: Repeat2, label: "Collaboration & Referral Ecosystem" },
  { icon: Megaphone, label: "Community Visibility" },
  { icon: Users, label: "Founder Support & Networking" },
  { icon: PartyPopper, label: "Social & Community Events" },
  { icon: TrendingUp, label: "Business Growth Opportunities" },
];

const values = [
  "Support fellow women entrepreneurs",
  "Maintain professional and respectful communication",
  "Value collaboration over competition",
  "Respect event and RSVP policies",
  "Contribute positively to the community culture",
];

function MembershipPage() {
  const [submitted, setSubmitted] = useState(false);

  // TODO: connect to a real backend (Formspree, Netlify Forms, or an API)
  // to actually deliver membership applications. Currently front-end only.
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Member Sign-Up"
        title="Join SAWE — South Asian Women Entrepreneurs"
        subtitle="A growth-focused community for women who want to learn, connect, collaborate, and grow together."
      />

      {/* ============================ INTRO =========================== */}
      <section className="section bg-white pb-0">
        <div className="container-x max-w-3xl text-center text-lg font-medium text-ink/75">
          <p>
            Whether you already run an established business or are just starting out, SAWE gives you
            the network, visibility, and tools to scale.
          </p>
        </div>
      </section>

      {/* ========================= ELIGIBILITY ======================== */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            eyebrow="Eligibility"
            title="Who Can Become a SAWE Member?"
            intro="You are eligible to join SAWE if any of the following describe you:"
          />
          <CheckList items={eligibility} columns={2} className="mt-10" />
        </div>
      </section>

      {/* ============================ ACCESS ========================== */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Member Benefits"
            title="What You'll Get Access To"
            align="center"
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {access.map((a) => (
              <div key={a.label} className="rounded-2xl bg-cream p-6 ring-1 ring-plum-100">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-plum-700 text-cream">
                  <a.icon className="h-5 w-5" />
                </span>
                <p className="mt-4 text-sm font-semibold text-plum-900">{a.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== VALUES + NOT FOR ======================= */}
      <section className="section">
        <div className="container-x grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-plum-50 p-8 ring-1 ring-plum-100">
            <h3 className="font-serif text-2xl font-semibold text-plum-900">Community Values</h3>
            <CheckList items={values} className="mt-5" />
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-plum-100">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-100 text-gold-600">
              <AlertCircle className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-serif text-2xl font-semibold text-plum-900">
              Not a Fit If...
            </h3>
            <p className="mt-3 leading-relaxed text-ink/70">
              You are strictly looking for casual socializing. This is a high-intent,
              business-focused ecosystem that thrives on active, respectful participation.
            </p>
          </div>
        </div>
      </section>

      {/* ====================== APPLICATION FORM ====================== */}
      <section className="section bg-white">
        <div className="container-x">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Ready to Join?"
              title="Apply for Membership"
              intro="Tell us a little about you and your business. We'll be in touch about next steps."
              align="center"
              className="mb-10"
            />
            {submitted ? (
              <FormSuccess message="Your membership application has been received. The SAWE team will reach out to you soon." />
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-cream p-6 ring-1 ring-plum-100 sm:p-8"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  <TextInput label="Full Name" name="fullName" required />
                  <TextInput label="Email Address" name="email" type="email" required />
                  <TextInput label="Phone Number" name="phone" type="tel" />
                  <TextInput label="City" name="city" required />
                  <TextInput label="Business Name" name="business" />
                  <TextInput
                    label="Website / Instagram / LinkedIn"
                    name="links"
                    placeholder="Optional"
                  />
                </div>
                <div className="mt-5">
                  <SelectInput
                    label="Where are you in your journey?"
                    name="stage"
                    required
                    options={[
                      "Exploring entrepreneurship / idea stage",
                      "Building my business",
                      "Running an established business",
                      "Restarting my business or career in the US",
                    ]}
                  />
                </div>
                <div className="mt-5">
                  <TextArea
                    label="Tell us about your business and why you'd like to join SAWE"
                    name="message"
                    rows={4}
                  />
                </div>
                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-plum-700 px-6 py-3 text-sm font-semibold text-cream transition-colors hover:bg-plum-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 focus-visible:ring-offset-2"
                >
                  Apply for Membership
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <CTASection
        title="Become Part of a Growing Ecosystem"
        text="Join South Asian women entrepreneurs building visibility, confidence, collaborations, and businesses together."
        primary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
        secondary={{ label: "Explore the Community", to: "/community" }}
      />
    </>
  );
}
