import { createFileRoute } from "@tanstack/react-router";
import CTASection from "@/components/CTASection";
import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () =>
    seo({
      title: "Gallery — SAWE Events & Coffee Meets",
      description:
        "Real moments from SAWE Coffee Meets, workshops, and community events across Greater Seattle.",
    }),
  component: GalleryPage,
});

const photos = [
  {
    src: "/images/home/landing-group.jpg",
    alt: "SAWE members gathered outside a Greater Seattle coffee shop",
    span: "sm:col-span-2 lg:col-span-2 lg:row-span-2",
  },
  {
    src: "/images/coffee-meets/member-conversation.jpg",
    alt: "SAWE members connecting over coffee",
    span: "",
  },
  {
    src: "/images/home/outdoor-community.jpg",
    alt: "SAWE members at an outdoor community gathering",
    span: "",
  },
  {
    src: "/images/coffee-meets/workshop-room.jpg",
    alt: "A busy SAWE workshop and networking room",
    span: "sm:col-span-2 lg:col-span-1",
  },
  {
    src: "/images/home/indoor-community.jpg",
    alt: "SAWE members smiling together at an indoor community gathering",
    span: "",
  },
  {
    src: "/images/coffee-meets/outdoor-group.jpg",
    alt: "SAWE members at an outdoor Coffee Meet",
    span: "",
  },
  {
    src: "/images/home/park-gathering.jpg",
    alt: "SAWE members gathered together in a park",
    span: "sm:col-span-2 lg:col-span-2",
  },
  {
    src: "/images/coffee-meets/presentation-group.jpg",
    alt: "SAWE Coffee Meet attendees after a business presentation",
    span: "",
  },
];

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments From the SAWE Community"
        subtitle="Real Coffee Meets, workshops, and celebrations that show what community looks like in the room."
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {photos.map((photo) => (
              <figure
                key={photo.src}
                className={`group overflow-hidden rounded-2xl shadow-card ring-1 ring-plum-100 ${photo.span}`}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Be Part of the Next SAWE Moment"
        text="Join the community and attend a Coffee Meet—the best memories and collaborations begin in the room."
        primary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
        secondary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
      />
    </>
  );
}
