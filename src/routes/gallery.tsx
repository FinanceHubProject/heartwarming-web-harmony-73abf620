import { createFileRoute } from "@tanstack/react-router";
import { Camera } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { seo } from "@/lib/seo";
import { siteConfig } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seo({
      title: "Gallery — SAWE Events & Coffee Meets",
      description:
        "Moments from SAWE coffee meets, trainings, and community events across the Greater Seattle area.",
    }),
  component: GalleryPage,
});

// Placeholder tiles until real event photography is added.
// TODO: replace with real images from SAWE coffee meets, workshops,
// and community events (drop files in /public and map them here).
const tiles = [
  { label: "Coffee Meets", tone: "from-plum-500 to-plum-800" },
  { label: "Workshops", tone: "from-gold-400 to-gold-600" },
  { label: "Founder Mixers", tone: "from-plum-600 to-plum-900" },
  { label: "Trainings", tone: "from-plum-400 to-plum-700" },
  { label: "Social Events", tone: "from-gold-300 to-gold-500" },
  { label: "Community", tone: "from-plum-700 to-plum-900" },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments From the SAWE Community"
        subtitle="A look at the coffee meets, workshops, and celebrations that bring our community together."
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tiles.map((t) => (
              <div
                key={t.label}
                className={`flex aspect-[4/3] flex-col items-center justify-center rounded-2xl bg-linear-to-br ${t.tone} text-cream`}
              >
                <Camera className="h-9 w-9 opacity-80" />
                <p className="mt-3 font-serif text-lg font-semibold">{t.label}</p>
                <p className="text-xs uppercase tracking-wider text-cream/70">Photos coming soon</p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-plum-50 p-8 text-center ring-1 ring-plum-100">
            <h3 className="font-serif text-xl font-semibold text-plum-900">
              Our gallery is growing
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Photos from our coffee meets, trainings, and community events will be added here soon.
              Come to an event and be part of the next set of memories.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of the Next SAWE Moment"
        text="Join the community and attend a coffee meet — the best memories are made in the room."
        primary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
        secondary={{ label: "Become a Member", to: "/join" }}
      />
    </>
  );
}
