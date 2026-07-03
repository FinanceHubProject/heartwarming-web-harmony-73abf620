import { createFileRoute } from "@tanstack/react-router";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { seo } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () =>
    seo({
      title: "FAQ — SAWE Community Questions",
      description:
        "Answers to common questions about joining SAWE, Coffee Meets, trainings, WhatsApp group, and community membership.",
    }),
  component: FaqPage,
});

const faqs = [
  {
    q: "Is SAWE free to join?",
    a: "Yes. Joining SAWE is completely free. Attend a Coffee Meet and you will be welcomed into the community. The only paid options are table spots at COLLABORATE format Coffee Meets and enrollments in SAWE Academy trainings.",
  },
  {
    q: "Do I need to have an established business to join?",
    a: "No. Women at all stages are welcome — whether you are still exploring, just starting out, in the middle of a pivot, or actively scaling.",
  },
  {
    q: "Where do Coffee Meets happen?",
    a: "We meet at various locations across the Greater Seattle area — Bothell, Bellevue, Kirkland, Redmond, downtown Seattle, and nearby neighborhoods. Exact locations are shared in the event announcements.",
  },
  {
    q: "How do I stay updated on events and announcements?",
    a: "Once you join, you will be added to the SAWE WhatsApp community group. You can also follow us on Instagram and check this website for upcoming events.",
  },
  {
    q: "What is the WhatsApp group for?",
    a: "The WhatsApp group is where the community lives day to day — event announcements, introductions, collaboration requests, shameless marketing, and general conversation. It is a very active, high-value space.",
  },
  {
    q: "Are trainings included if I become part of the community?",
    a: "No. SAWE Academy trainings are paid separately and are priced per session or cohort. You get free access to the community, free Coffee Meets, and collaboration opportunities.",
  },
  {
    q: "Can I bring a friend who is not South Asian?",
    a: "SAWE is specifically built for South Asian and immigrant women entrepreneurs. If you have a friend who fits that description, absolutely bring her along.",
  },
  {
    q: "What if I am not in Seattle?",
    a: "For now, our in-person events are Seattle-area only. Online programming is in the works. Drop us a note and we will keep you posted.",
  },
];

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions People Usually Ask Before Joining"
        subtitle="Everything you might want to know about SAWE, Coffee Meets, and community life."
      />

      <section className="section bg-white">
        <div className="container-x mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-plum-100">
                <AccordionTrigger className="text-left font-serif text-lg font-semibold text-plum-900 hover:no-underline hover:text-coral-600">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-ink/75">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CTASection
        title="Still have a question?"
        text="Come meet us in person at a Coffee Meet — the best way to get a feel for the community."
        primary={{ label: "Join the Community", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", to: "/coffee-meets" }}
      />
    </>
  );
}
