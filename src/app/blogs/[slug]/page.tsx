import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { POST_BY_SLUG_QUERY, POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { RichTextComponents } from "@/components/sanity/RichText";
import { ArrowLeft, Calendar, User } from "lucide-react";

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

// Generate static parameters for existing slugs during build
export async function generateStaticParams() {
  try {
    const posts = await client.fetch(POSTS_QUERY);
    if (posts && posts.length > 0) {
      return posts.map((post: { slug: { current: string } }) => ({
        slug: post.slug.current,
      }));
    }
  } catch (error) {
    console.error("Error fetching posts for generateStaticParams:", error);
  }

  // Fallback to satisfy Cache Components build-time validation
  return [{ slug: "welcome" }];
}

export default async function SinglePostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  // Handle placeholder gracefully if rendered
  if (slug === "welcome") {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold text-[#00205B]">Welcome to our Blog</h1>
        <p className="text-slate-600 mt-4">No posts published yet. Check back soon!</p>
        <Link href="/blogs" className="inline-block mt-6 text-[#D4AF37] font-semibold">
          Back to all blogs
        </Link>
      </div>
    );
  }

  const post = await client.fetch(POST_BY_SLUG_QUERY, { slug });

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      
      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center space-x-2 text-sm font-semibold text-[#00205B] hover:text-[#D4AF37] transition"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to all blogs</span>
      </Link>

      {/* Post Meta Header */}
      <div className="space-y-4">
        <span className="inline-block bg-[#D4AF37] text-[#00205B] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider">
          {post.category || "General"}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-[#00205B] leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center space-x-6 text-sm text-slate-600 border-y border-slate-200 py-3">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-[#D4AF37]" />
            <span className="font-semibold text-slate-900">{post.author?.name || "OAU Intelligent Systems"}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4" />
            <span>
              {post.publishedAt
                ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })
                : "Recent"}
            </span>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      {post.mainImage && (
        <div className="relative h-96 w-full rounded-2xl overflow-hidden shadow-md">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Body Content */}
      <div className="prose prose-slate lg:prose-lg max-w-none">
        {post.body && <PortableText value={post.body} components={RichTextComponents} />}
      </div>

    </article>
  );
}