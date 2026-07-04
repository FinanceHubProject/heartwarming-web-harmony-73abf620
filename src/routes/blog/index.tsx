import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { AppLink } from "@/components/AppLink";
import { blogPosts } from "@/data/blog";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/")({
  head: () =>
    seo({
      title: "Blog — Insights for Women Entrepreneurs | SAWE",
      description:
        "Articles, lessons, and stories on building, marketing, and scaling a business as a South Asian woman entrepreneur.",
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
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="flex flex-col overflow-hidden rounded-2xl bg-cream shadow-card ring-1 ring-plum-100"
              >
                <div className="flex h-40 items-center justify-center bg-linear-to-br from-plum-600 to-plum-900">
                  <span className="font-serif text-2xl font-bold text-gold-300">SAWE</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <span className="inline-flex w-fit items-center rounded-full bg-plum-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-plum-600">
                    {post.category}
                  </span>
                  <h2 className="mt-3 text-lg font-semibold leading-snug text-plum-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/70">{post.excerpt}</p>
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
        primary={{ label: "Become a Member", to: "/join" }}
        secondary={{ label: "Get in Touch", to: "/contact" }}
      />
    </>
  );
}
