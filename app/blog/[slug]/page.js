import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BLOGS, getBlog } from "@/data/blogs";
import { SITE, waLink } from "@/data/site";
import { ArrowIcon } from "@/components/icons";

export function generateStaticParams() {
  return BLOGS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.date,
      images: [{ url: post.image, width: 1600, height: 1000 }],
    },
  };
}

const fmt = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: post.image,
    datePublished: post.date,
    author: { "@type": "Organization", name: SITE.name },
    publisher: { "@type": "Organization", name: SITE.name, url: SITE.baseUrl },
    mainEntityOfPage: `${SITE.baseUrl}/blog/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <article className="article">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="article__hero">
        <Image src={post.image} alt={post.title} fill priority sizes="100vw" />
      </div>

      <div className="container">
        <div className="article__body">
          <Link href="/blog" className="article__back">
            <ArrowIcon width={14} height={14} style={{ transform: "rotate(180deg)" }} />
            Back to the Journal
          </Link>

          <span className="kicker">The Journal</span>
          <h1>{post.title}</h1>

          <div className="article__meta">
            <span>{fmt(post.date)}</span>
            <span>{post.readTime} min read</span>
            <span>YNAD Mount Resort</span>
          </div>

          {post.sections.map((section) => (
            <section key={section.h2}>
              <h2>{section.h2}</h2>
              {section.paras.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </section>
          ))}

          <div className="article__cta">
            <h3>Come see it for yourself</h3>
            <p>
              Vintage homes, premium mist-view rooms and junior suites at
              Valathoor, Rippon. Message us for dates and our best rates.
            </p>
            <a
              className="btn btn--dark"
              href={waLink(`Hi YNAD Mount Resort! I just read "${post.title}" and would like to check availability.`)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Availability
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
