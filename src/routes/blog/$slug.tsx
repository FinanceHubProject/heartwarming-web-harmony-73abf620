import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import CTASection from "@/components/CTASection";
import { AppLink } from "@/components/AppLink";
import { CheckList } from "@/components/ui";
import { blogPosts } from "@/data/blog";
import { siteConfig } from "@/data/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  head: ({ params }) => {
    const post = blogPosts.find((p) => p.slug === params.slug);
    return seo({
      title: post ? `${post.title} | SAWE Blog` : "Article not found | SAWE Blog",
      description:
        post?.excerpt ??
        "Read insights and stories from SAWE — the community for South Asian women entrepreneurs.",
    });
  },
  component: BlogPostPage,
});

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function BlogPostPage() {
  const { slug } = Route.useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="section">
        <div className="container-x text-center">
          <h1 className="text-3xl font-semibold text-plum-900">Article not found</h1>
          <p className="mt-3 text-ink/70">
            The article you're looking for doesn't exist or has moved.
          </p>
          <AppLink
            to="/blog"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-plum-700 hover:text-plum-900"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all articles
          </AppLink>
        </div>
      </section>
    );
  }

  return (
    <>
      <PageHeader eyebrow={post.category} title={post.title} />

      <article className="section bg-white">
        <div className="container-x max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-ink/55">
            <span className="flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readMinutes} min read
            </span>
          </div>

          <div className="prose-sawe mt-8">
            {post.content.map((block, i) => {
              if (block.type === "h2") {
                return <h2 key={i}>{block.text}</h2>;
              }
              if (block.type === "list") {
                return <CheckList key={i} items={block.items} />;
              }
              return <p key={i}>{block.text}</p>;
            })}
          </div>

          <div className="mt-12 border-t border-plum-100 pt-6">
            <AppLink
              to="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-plum-700 transition-colors hover:text-plum-900"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to all articles
            </AppLink>
          </div>
        </div>
      </article>

      <CTASection
        title="Building a Business in Seattle? You Don't Have to Do It Alone."
        text="Join SAWE and grow alongside South Asian women entrepreneurs through networking, trainings, and real collaborations."
        primary={{ label: "Become a Member", href: siteConfig.joinFormUrl }}
        secondary={{ label: "Attend a Coffee Meet", href: siteConfig.lumaUrl }}
      />
    </>
  );
}
