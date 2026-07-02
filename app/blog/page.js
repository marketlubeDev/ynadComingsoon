import { BLOGS } from "@/data/blogs";
import { BlogCard } from "@/components/BlogTeaser";

export const metadata = {
  title: "The Journal: Wayanad Travel Guides & Resort Stories",
  description:
    "Travel guides from YNAD Mount Resort: the best resorts in Wayanad, infinity pool stays, romantic hideaways for couples, family holidays and Wayanad's moody monsoon climate.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "The Journal | YNAD Mount Resort, Wayanad",
    description:
      "Guides, seasons and slow travel wisdom from the tea country of Meppadi, Wayanad.",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="kicker">The Journal</span>
          <h1>
            Stories from <em>the misty side</em> of Wayanad
          </h1>
          <p>
            Honest guides to the hills we call home: where to stay, when to
            come, and what to do when the clouds roll in.
          </p>
        </div>
      </section>

      <section className="section blog-teaser">
        <div className="container">
          <div className="blog-grid">
            {BLOGS.map((post, i) => (
              <BlogCard key={post.slug} post={post} index={i % 3} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
