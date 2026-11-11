import { Suspense } from "react";
import { client } from "@/sanity/lib/client";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import Link from "next/link";
import { BlogSearchFilter } from "@/components/blogs/BlogSearchFilter";

async function BlogListContent() {
  const posts = await client.fetch(POSTS_QUERY, {}, { next: { revalidate: 60 } });
  return <BlogSearchFilter initialPosts={posts} />;
}

export default function BlogsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div>
            <span className="inline-block bg-[#00205B] text-[#D4AF37] text-xs font-bold px-3 py-1 rounded uppercase tracking-wider mb-2">
              Departmental Blogs & News
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-[#00205B]">
              Articles, Insights & Announcements
            </h1>
          </div>
          <Link
            href="/studio"
            className="inline-flex items-center space-x-2 bg-[#00205B] text-white hover:bg-[#D4AF37] hover:text-[#00205B] font-bold px-5 py-2.5 rounded-xl transition shadow-sm"
          >
            <span>Publish Article in Studio</span>
          </Link>
        </div>
        <p className="text-slate-600 max-w-2xl">
          Explore articles, academic research insights, and announcements from OAU Intelligent Systems.
        </p>
      </div>

      {/* Suspended Async Blog List */}
      <Suspense fallback={<div className="py-12 text-center text-slate-500">Loading articles...</div>}>
        <BlogListContent />
      </Suspense>
    </div>
  );
}