import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { seo } from "@/lib/seo";
import img1 from "@/assets/IMG_4426.jpeg.asset.json";
import img2 from "@/assets/IMG_3379.jpeg.asset.json";
import img3 from "@/assets/IMG_3600.jpeg.asset.json";
import img4 from "@/assets/IMG_3718.jpeg.asset.json";
import img5 from "@/assets/IMG_4010.jpeg.asset.json";
import img6 from "@/assets/IMG_3695.jpeg.asset.json";
import img7 from "@/assets/IMG_4413.jpeg.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seo({
      title: "Gallery — SAWE Events & Coffee Meets",
      description:
        "Moments from SAWE coffee meets, trainings, and community events across the Greater Seattle area.",
    }),
  component: GalleryPage,
});

const coffeeMeets = [
  { src: img1.url, alt: "SAWE coffee meet group photo at a local cafe" },
  { src: img2.url, alt: "SAWE community gathering with floral centerpieces" },
  { src: img3.url, alt: "SAWE speaker session with members" },
  { src: img4.url, alt: "SAWE evening meet on a covered patio" },
  { src: img5.url, alt: "SAWE coffee meet audience listening to a talk" },
  { src: img6.url, alt: "SAWE group photo after a presentation" },
  { src: img7.url, alt: "SAWE members chatting at Top Pot coffee meet" },
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
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coral-600">
                Coffee Meets
              </p>
              <h2 className="mt-2 font-serif text-3xl font-semibold text-plum-900 sm:text-4xl">
                Where conversations begin
              </h2>
            </div>
            <p className="hidden max-w-sm text-sm text-ink/70 sm:block">
              Snapshots from recent SAWE coffee meets across the Greater Seattle area.
            </p>
          </div>

          <div className="grid auto-rows-[220px] grid-cols-2 gap-4 md:grid-cols-4">
            {coffeeMeets.map((img, i) => (
              <div
                key={img.src}
                className={`group overflow-hidden rounded-2xl ring-1 ring-plum-100 ${
                  i === 0 ? "col-span-2 row-span-2" : i === 4 ? "md:col-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          <div className="mx-auto mt-12 max-w-xl rounded-2xl bg-plum-50 p-8 text-center ring-1 ring-plum-100">
            <h3 className="font-serif text-xl font-semibold text-plum-900">
              More moments coming soon
            </h3>
            <p className="mt-2 text-sm text-ink/70">
              Photos from upcoming trainings, founder mixers, and community
              celebrations will be added here. Come to an event and be part of
              the next set of memories.
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
