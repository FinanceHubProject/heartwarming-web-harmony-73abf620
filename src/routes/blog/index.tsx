import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { AppLink } from "@/components/AppLink";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo({
      title: "Blog — Insights for Women Entrepreneurs | SAWE",
      description:
        "Articles, lessons, and stories on building, marketing, and scaling a business as a South Asian or Southeast Asian woman entrepreneur.",
    }),
  component: BlogIndexPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Stories, Insights & Ideas for Women Entrepreneurs"
        subtitle="Notes on building businesses, communities, and confidence — from the SAWE ecosystem."
      />

      <section className="section bg-white">
        <div className="container-x">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <article
                key={post.slug}
                className={`overflow-hidden rounded-2xl bg-cream shadow-card ring-1 ring-plum-100 ${
                  index === 0
                    ? "md:col-span-2 lg:col-span-3 lg:grid lg:grid-cols-[0.9fr_1.1fr]"
                    : "flex flex-col"
                }`}
              >
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "min-h-64 lg:min-h-full" : "h-40"
                  }`}
                >
                  <img
                    src="/images/home/landing-group.jpg"
                    alt="SAWE members gathered together"
                    loading={index === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-plum-900/75 via-plum-900/10 to-transparent" />
                  <span className="absolute bottom-5 left-5 font-serif text-2xl font-bold text-cream">
                    SAWE Stories
                  </span>
                </div>
                <div className={`flex flex-1 flex-col ${index === 0 ? "p-7 sm:p-9" : "p-6"}`}>
                  <span className="inline-flex w-fit items-center rounded-full bg-plum-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-plum-600">
                    {post.category}
                  </span>
                  <h2
                    className={`mt-3 font-semibold leading-snug text-plum-900 ${
                      index === 0 ? "text-2xl sm:text-3xl" : "text-lg"
                    }`}
                  >
                    {post.title}
                  </h2>
                  <p
                    className={`mt-3 flex-1 leading-relaxed text-ink/70 ${
                      index === 0 ? "text-base" : "text-sm"
                    }`}
                  >
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-4 text-xs text-ink/55">
                    <span className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readMinutes} min read
                    </span>
                  </div>
                  <AppLink
                    to={`/blog/${post.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-plum-700 transition-colors hover:text-plum-900"
                  >
                    Read article
                    <ArrowRight className="h-4 w-4" />
                  </AppLink>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Be Featured in the SAWE Story?"
        text="Join the community and get opportunities to share your journey through member spotlights, blogs, and social features."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Get in Touch", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
